function xmlDataLoader (xmlParser) {

  'use strict';
  
  var cache = {
    parsedXML: null,
    filePath: null
  };
  
  var parser = {
    parseData: function () {
      throw Error ('no parser installed!');
    }
  };
  
  /**
   * 
   * @param {xmlParser} p
   * @returns {undefined}
   */
  function setParser (p) {
    parser = p;
    return this;
  }
  
  /**
   * 
   * @returns {cache.parsedXML|xmlData_L1.cache.parsedXML}
   */
  function getXML () {
    if (cache.parsedXML !== null) {
      return cache.parsedXML;
    } else {
      throw Error('no XML in chache!');
    }
  }
  
  /**
   * Layzy loading for the XML file
   * @param {string} file
   * @param {function} cb
   * @returns {void} executes the given cb
   */
  function loadXML(file, cb) {

    if (typeof file === 'function') {
      cb = file;
      file = cache.filePath;
    } else {
      cache.filePath = file; 
    }

    if (file === null) {
      throw Error('no file found!');
    }
        
    if (cache.filePath === file && cache.parsedXML !== null) {
      cb(getXML());
    } else {
      $.get(file + '?v=' + Math.random(), function (data) {
        cache.parsedXML = parser.parseData(data);       
        cb(cache.parsedXML); 
      }); 
    }
  }
  
  function reloadXML (cb) {
    cache.parsedXML = null;
    loadXML(cb);
  }
  
  function init (xmlParser) {
    parser = xmlParser;
  } init(xmlParser);
  
  this.setParser = setParser;
  this.getData = getXML;
  this.loadData = loadXML;
  this.reloadData = reloadXML;
  
}