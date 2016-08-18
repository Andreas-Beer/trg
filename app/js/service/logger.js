/*exported logger*/

/**
 * A Logger with floating interface
 * 
 * @param {object} out
 * @type Function
 */
var logger = (function (out) {
  
  /*jshint validthis:true */
  
  'use strict';
  /**
   * 
   * @type Array
   */
  var outs = [out];
  
  /**
   * 
   * @type Boolean
   */
  var mute = false;
  
  /**
   *  
   * @param {type} newOut
   * @returns {logger_L6}
   */
  function setOutput (newOut) {
    outs = [newOut];
    return this;
  }
  /**
   * 
   * @param {type} newOut
   * @returns {logger_L6}
   */
  function addOutput (newOut) {
    outs.push(newOut);
    return this;
  }
  /**
   * 
   * @param {type} oldOutput
   * @returns {logger_L6}
   */
  function removeOutput (oldOutput) {
    outs.splice(outs.indexOf(oldOutput), 1);
    return this;
  }
  /**
   * 
   * @returns {logger_L6}
   */
  function clearOutputs () {
    outs = [];
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function clear () {
    bypass('clear', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function log () {  
    mutableBypass('log', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function info () {
    mutableBypass('info', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function debug () {
    mutableBypass('debug', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function warn () {
    mutableBypass('warn', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function error () {
    mutableBypass('error', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function group () {
    mutableBypass('group', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function groupEnd () {
    mutableBypass('groupEnd', arguments);
    return this;
  }
  
  // -- helpers --
  
  /**
   * 
   * @param {string} fnName
   * @param {array} args
   * @returns {undefined}
   */
  function mutableBypass (fnName, args) {
    if (mute !== true) {
      bypass(fnName, args);
    }
  }
  
  /**
   * 
   * @param {string} fnName
   * @param {array} args
   * @returns {undefined}
   */
  function bypass (fnName, args) {
    for (var i = 0; i < outs.length; i++) {
      if(outs[i][fnName]) {
        outs[i][fnName].apply(this, sliceArgs(args));
      }
    }
  }
  
  /**
   * 
   * @param {array} args
   * @returns {array}
   */
  function sliceArgs (args) {
    return Array.prototype.slice.call(args);
  }
  
  return {
    mute: function () { mute = !mute; return this; },
    setOutput: setOutput,
    addOuptput: addOutput,
    removOutput: removeOutput,
    clearOutput: clearOutputs,
    
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