var hbsTemplates = (function () {
  
  'use strict';
  
  var _scope = {};
  var namepace = 'JST';
  var dataAttr = 'temp';
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
    if (window[ns]) {
     namepace = ns;
      init();
    }
    return this;
  }
  
  function setDataAttr (da) {
    dataAttr = da;
    init();
    return this;
  }
  
  
  function init () {
    templates = window[namepace];
  };
  
  function initTemplates() {  
    for (var name in templates) {  
      if(!_scope[name]) {
        console.warn('! objcet objects.' + name, 'not found');
      }
      renderTemplate (name);
    }
  }
  
  function renderTemplate (tempName) {    
    $('[data-' + dataAttr + '=' + tempName + ']').html(templates[tempName](_scope[tempName]));
  }

  return {
    scope: scope,
    
    setNamespace: setNamespace,
    setDataAttr: setDataAttr,
    
    initTemplates: initTemplates,
    renderTemplate: renderTemplate
  };
  
})();