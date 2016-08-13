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
      url: parseURL(url),
      fn: fn
    });
    return this;
  }

  /**
   * Parses the url to an object
   * splits the url into its parts, couts the parts
   *
   * @author Andreas Beer
   * @param   {string}   url [[Description]]
   * @returns {[[Type]]} [[Description]]
   */
  function parseURL (url) {

    var parsedUrl = {}; 
    parsedUrl.parts       = url.split('/');
    parsedUrl.length      = parsedUrl.parts.length;
    parsedUrl.params      = {};
    parsedUrl.paramsCount = 0;

    if(parsedUrl.parts[0] === '' || parsedUrl.parts[0] === '#') {
      parsedUrl.parts.shift();
      parsedUrl.length -= 1;
    }

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

    if (parsedUrl.length !== cache.currUrl.length) {
      return false;
    }

    for (var i = 0; i < parsedUrl.length; i++) {

      var part1 = parsedUrl.parts[i];
      var part2 = cache.currUrl.parts[i];

      if(part1 !== part2 && part1[0] !== ':') {
        return false;
      }

      else if (part1[0] === ':') {
        parsedUrl.params[part1.replace(':', '')] = part2;
        parsedUrl.paramsCount += 1;
      }
    }  

    return parsedUrl;
  }

  function checkRoute () {

    var match = false;
    var parsedURLs = [];

    for (var i = 0; i < mappedRoutes.length; i++) {

      var mappedRoute = mappedRoutes[i];
      var parsedURL = checkParsedUrl(mappedRoute.url);

      if(parsedURL !== false) {
        match = true;

        parsedURLs.push({
          fn:  mappedRoute.fn,
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
    console.clear();
    return this;
  }

  function exeDefaultRoute () {
    defaultRoute();
  }

  function exeFoundedRoutes (parsedURLs) {

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
      item.fn(item.params);
    }

  }

  // Add the listener to register the change
  // for ie8 and all other browsers
  (function IIFE_listen () {
    if (window.addEventListener) {
      window.addEventListener("hashchange", checkRoute, false);
      window.addEventListener("load", checkRoute, false);
    } else {
      window.attachEvent("onhashchange", checkRoute);
      window.attachEvent("onload", checkRoute);
    }

  })();

  // the router object
  return {
    settings: settings,
    checkRoute: checkRoute,
    when: addRoute,
    otherwise: setDefaultRoute
  };

}();
