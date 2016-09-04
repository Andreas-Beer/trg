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
    bypass.call(this, 'clear', arguments);
    return this;
  }

  /**
   * 
   * @returns {logger_L6}
   */
  function log () {  
    mutableBypass.call(this, 'log', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function info () {
    mutableBypass.call(this, 'info', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function debug () {
    mutableBypass.call(this, 'debug', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function warn () {
    mutableBypass.call(this, 'warn', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function error () {
    mutableBypass.call(this, 'error', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function group () {
    mutableBypass.call(this, 'group', arguments);
    return this;
  }
  
  /**
   * 
   * @returns {logger_L6}
   */
  function groupEnd () {
    mutableBypass.call(this, 'groupEnd', arguments);
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
      bypass.call(this, fnName, args);
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
      var logger = outs[i];
      if(logger[fnName]) {       
        
        // for IE8 problems with the console.
        try{
          logger[fnName].apply(logger, sliceArgs(args));
        }catch(err){
          logger['log'](err);
        }
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
    
    clear   : clear    , c: clear , cls: clear,
    log     : log      , l: log   ,
    info    : info     , i: info  ,
    debug   : debug    , d: debug ,
    warn    : warn     , w: warn  ,
    error   : error    , e: error , err: error,
    group   : group    ,
    groupEnd: groupEnd
  };
  
})(console);