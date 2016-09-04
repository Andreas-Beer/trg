/*global window*/
/*exported router */

var router = function () {

  /*jshint validthis:true */
  'use strict';

  /**
   *
   * @type object
   */
  var settings = {
    strict: false
  };

  /**
   *
   * @type object
   */
  var cache = {
    currUrl: null
  };

  var mappedRoutes = [];

  /**
   * The Default Route
   *
   * The function to call in the default case.
   * If it is not set from the outside,
   * it will print a warning to the console.
   *
   * @author Andreas Beer
   */
  var defaultRoute = function () {
    console.warn('WARNING: No deafult route defined!');
  };

  /**
   * Setter for the member defaultRoute
   *
   * @author Andreas Beer
   * @param {function} fn the function to call in the default case
   */
  function setDefaultRoute (fn) {
    defaultRoute = fn;
    return this;
  }

  /**
   * add a route to the mappedRoutes list
   *
   * @author Andreas Beer
   * @param   {string}   url the route to match for executing the given function
   *                         if a url part starts with a colon (:) this is a variable.
   * @param   {function} fn  the functin to call if the route matches
   * @returns {object}   the routes object for floating iterface purpose
   */
  function addRoute (url, fn) {
    mappedRoutes.push({
      parsedUrl: parseURL(url),
      action: fn
    });
    return this;
  }

  /**
   * Parses the url to an object
   * splits the url into its parts, couts the parts
   * creates the regexp for the route
   *
   * @author Andreas Beer
   * @param   {string}   url [[Description]]
   * @returns {object} [[Description]]
   */
  function parseURL (url) {
    
    function createRegExp (parts) {

      var regExpString = '^/#/';

      for (var i = 0; i < parts.length; i++) {

        var item = parts[i];

        if (item.charAt(0) === ':') {
          regExpString += '(?:([^\/]*)\/)';
        } else
        if ( i < parts.length - 1 ) {
          regExpString += item + '/';
        } else {
          regExpString += item;
        }

        if (item.charAt(item.length - 1) === '?') {
          regExpString += '?';
        }

        if ( i === parts.length - 1 ) {
          regExpString += '/?$';
        }
      }      
      return new RegExp(regExpString);
    }

    var parsedUrl = {}; 
    parsedUrl.url          = url;
    parsedUrl.parts        = url.split('/');
    parsedUrl.length       = parsedUrl.parts.length;
    parsedUrl.params       = {};
    parsedUrl.variables    = [];
    parsedUrl.paramsCount  = 0;
    parsedUrl.hasOptionals = url.match(/:[^?]+\?/) !== null;

    if(parsedUrl.parts[0] === '' || parsedUrl.parts[0] === '#') {
      parsedUrl.parts.shift();
      parsedUrl.length -= 1;
    }
    if(parsedUrl.url.charAt(parsedUrl.url.length - 1) !== '/') {
      parsedUrl.url += '/';
    }
    if(parsedUrl.url.charAt(0) !== '/') {
      parsedUrl.url = '/' + parsedUrl.url;
    }

    for (var i = 0; i < parsedUrl.parts.length; i++) {
      var item = parsedUrl.parts[i];
      if (item.charAt(0) === ':') {
        var variable = item.replace(':', '').replace('?', '');
        parsedUrl.variables.push(variable);
      }
    }    
    parsedUrl.matchString  = createRegExp(parsedUrl.parts);
    
    return parsedUrl;
  }

  /**
   * Compares the given url with the url of the current site
   *
   * @author Andreas Beer
   * @param   {object}  parsedUrl the url to check against teh current site
   * @returns {boolean / object} [[Description]]
   */
  function checkParsedUrl (parsedUrl) {
    
    if (cache.currUrl === null) {
      cache.currUrl = parseURL(window.location.hash);
    }
       
    var match = parsedUrl.matchString.exec(cache.currUrl.url);
    
    if (match === null) {
      return false;
    }
    
    match.splice(0,1);
    
    for (var i = 0; i < match.length; i++) {
      if(match[i] !== undefined) {
        parsedUrl.params[parsedUrl.variables[i]] = match[i];
      }
    }   
        
    return parsedUrl;
  }

  function checkRoute () {

    var match = false;
    var parsedURLs = [];

    for (var i = 0; i < mappedRoutes.length; i++) {
      
      var mappedRoute = mappedRoutes[i];
      var parsedURL = checkParsedUrl(mappedRoute.parsedUrl);

      if(parsedURL !== false) {
        match = true;

        parsedURLs.push({
          action:  mappedRoute.action,
          params: parsedURL.params,
          paramsCount: parsedURL.paramsCount
        });
      }
    }

    if(!match) {
      exeDefaultRoute();
    } else {
      exeFoundedRoutes(parsedURLs);
    }

    cache.currUrl = null;
    return this;
  }

  function exeDefaultRoute () {
    defaultRoute();
  }

  function exeFoundedRoutes (parsedURLs) {

//    console.clear();
    
    if (settings.strict !== false) {

      if(parsedURLs.length > 1) {

        var minCount = 0;
        var hits = parsedURLs
        .sort(function (a, b) {
          var aSmaller = a.paramsCount < b.paramsCount;
          minCount = aSmaller ? a.paramsCount : b.paramsCount;
          return aSmaller;
        })
        .filter(function (a) {

          return a.paramsCount <= minCount;
        });

        parsedURLs = hits;
      }
    }

    for (var j = 0; j < parsedURLs.length; j++) {
      var item = parsedURLs[j];
      item.action(item.params);
    }

  }

  // Add the listener to register the change
  // for ie8 and all other browsers
  function listen () {
    if (window.addEventListener) {
      window.addEventListener("hashchange", checkRoute, false);
      window.addEventListener("load", checkRoute, false);
    } else {
      window.attachEvent("onhashchange", checkRoute);
      window.attachEvent("onload", checkRoute);
    }
    checkRoute();
    return this;
  };

  // the router object
  return {
    settings: settings,
    checkRoute: checkRoute,
    when: addRoute,
    otherwise: setDefaultRoute,
    listen: listen
  };

}();