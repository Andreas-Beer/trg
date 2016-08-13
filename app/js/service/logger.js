/*exported logger*/

var logger = (function (out) {
  
  /*jshint validthis:true */
  
  'use strict';
  
  var mute = false;
  
  function setOutput (newOut) {
    out = newOut;
  }
  
  function clear () {
    bypass('clear', arguments);
  }
  
  function log () {  
    mutableBypass('log', arguments);
  }
  
  function info () {
    mutableBypass('info', arguments);
  }
  
  function debug () {
    mutableBypass('debug', arguments);
  }
  
  function warn () {
    mutableBypass('warn', arguments);
  }
  
  function error () {
    mutableBypass('error', arguments);
  }
  
  function group () {
    mutableBypass('group', arguments);
  }
  
  function groupEnd () {
    mutableBypass('groupEnd', arguments);
  }
  
  // -- helpers --
  function mutableBypass (fnName, args) {
    if (mute !== true) {
      bypass(fnName, args);
    }
  }
  
  function bypass (fnName, args) {
    out[fnName].apply(this, sliceArgs(args));
  }
  
  function sliceArgs (args) {
    return Array.prototype.slice.call(args);
  }
  
  return {
    mute: mute,
    setOutput: setOutput,
    
    clear: clear,
    log: log,
    info: info,
    debug: debug,
    warn: warn,
    error: error,
    group: group,
    groupEnd: groupEnd
  };
  
})(console);