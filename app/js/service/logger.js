/*exported logger*/

/**
 * A Logger with floating interface
 */
var logger = (function (out) {
  
  /*jshint validthis:true */
  
  'use strict';
  
  var mute = false;
  
  function setOutput (newOut) {
    out = newOut;
    return this;
  }
  
  function clear () {
    bypass('clear', arguments);
    return this;
  }
  
  /**
   * Same as console.log
   * @returns {logger_L6}
   */
  function log () {  
    mutableBypass('log', arguments);
    return this;
  }
  
  function info () {
    mutableBypass('info', arguments);
    return this;
  }
  
  function debug () {
    mutableBypass('debug', arguments);
    return this;
  }
  
  function warn () {
    mutableBypass('warn', arguments);
    return this;
  }
  
  function error () {
    mutableBypass('error', arguments);
    return this;
  }
  
  function group () {
    mutableBypass('group', arguments);
    return this;
  }
  
  function groupEnd () {
    mutableBypass('groupEnd', arguments);
    return this;
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
    mute: function () { mute = !mute; return this; },
    setOutput: setOutput,
    
    clear: clear, cls: clear, c: clear,
    log: log, l: log,
    info: info, i: info,
    debug: debug, d: debug,
    warn: warn, w: warn,
    error: error, e: error, err: error,
    group: group,
    groupEnd: groupEnd
  };
  
})(console);