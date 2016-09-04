
var hbsTemplates = (function (global) {
  
  'use strict';
  
  var _scope = {};
  var namepace = 'JST';
  var dataAttrIdentifire = 'temp';
  var templates;
  
  /**
   * Getter and Setter for _scope
   * 
   * if there is a parameter, it will be set as scope,
   * if there is NO parameter, the current scope will be returned.
   * 
   * @param {object} value 
   * @returns {object|hbsTemplates_L2}
   */
  function scope (value) {
    
    /**
     * init the scope with a empty object fol all templates
     * if there is no objet for this template.
     * 
     * @param {object} scopeObj
     * @returns {unresolved}
     */
    function intScope (scopeObj) {
      for (var key in global[namepace]) {
        if (scopeObj[key] === undefined) {        
          scopeObj[key] = {};
        }      
      }
      return scopeObj;
    }
    
    if (value === undefined ) {
      return _scope;
    } else {
      _scope = intScope(value);
      return this;
    }
  }
      
  function setNamespace (ns) { 
    if (global[ns]) {
     namepace = ns;
      init();
    }
    return this;
  }
  
  function setDataAttrIdentifire (da) {
    dataAttrIdentifire = da;
    init();
    return this;
  }
  
  function init () {
    templates = global[namepace];
  };
  
  /**
   * render 
   * 
   * @returns {undefined}
   */
  function renderAllTemplates() {  
    for (var name in templates) {  
      if(!_scope[name]) {
        console.warn('! HBS: objcet objects.' + name, 'not found !');
      }
      renderTemplate (name);
    }
  }
  
  function renderTemplate (tempName, scope) {   
    scope = scope || _scope[tempName];
    var elems = document.querySelectorAll('[data-' + dataAttrIdentifire + '=' + tempName + ']');
    for ( var i = 0; i < elems.length; i++ ) {
      if (!templates[tempName]) {
        console.warn('! HBS: the template for [data-temp="' + tempName + '"] was not found !');
        continue;
      }
      elems[i].innerHTML = templates[tempName](scope);
    }
    
  }

  return {
    
    // value
    scope: scope,
    
    // initialisation
    setNamespace: setNamespace,
    setDataAttrIdentifire: setDataAttrIdentifire,
    
    // render
    renderAllTemplates: renderAllTemplates,
    renderTemplate: renderTemplate
  };
  
})(window || this);
