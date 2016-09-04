
var hbsTemplates = (function (global) {
  
  'use strict';
  
  var _scope = {};
  var namepace = 'JST';
  var dataAttrIdentifire = 'temp';
  var templates;
  
  function scope (value) {
     
    if (value === undefined ) {
      return _scope;
    } else {
      _scope = value;
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
  
  function initTemplates() {  
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
      elems[i].innerHTML = templates[tempName](scope);
    }
    
  }

  return {
    scope: scope,
    
    setNamespace: setNamespace,
    setDataAttrIdentifire: setDataAttrIdentifire,
    
    initTemplates: initTemplates,
    renderTemplate: renderTemplate
  };
  
})(window || this);
