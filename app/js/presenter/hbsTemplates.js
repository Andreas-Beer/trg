var hbsTamplates = (function () {
  
  var namepace = 'JST';
  var templates;
  var objects  = {};
  
  function setNamespace (ns) { 
    if (window[ns]) {
     namepace = ns;
      init();
    }
    return this;
  }
  
  function setObjects (obj) {   
    objects = obj;
    return this;
  }
  
  function init () {
    templates = window[namepace];
  };init();
  
  function initTemplates() {  
    for (var name in templates) {  
      if(!objects[name]) {
        console.warn('! objet objects.' + name, 'not found');
      }
      $('[data-temp=' + name + ']').html(templates[name](objects[name])); 
    }
  }

  
  return {
    setNamespace: setNamespace,
    setObjects: setObjects,
    
    initTemplates: initTemplates
  };
  
})();