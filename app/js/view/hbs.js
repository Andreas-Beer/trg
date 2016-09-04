this["JST"] = this["JST"] || {};Handlebars.registerPartial("button_answer", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"answer\">\r\n  <p class=\"text\"><span class=\"id\">"
    + alias3((helpers.offset || (depth0 && depth0.offset) || alias2).call(alias1,(data && data.index),1,{"name":"offset","hash":{},"data":data}))
    + ".</span> "
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>";
},"useData":true}));Handlebars.registerPartial("button_category", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"hauptkat"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"box hauptkat\">\r\n  <a href=\"#/quiz/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "/1\">\r\n    <p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\r\n  </a>\r\n</div>\r\n";
},"useData":true}));Handlebars.registerPartial("button_navBottom", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.button : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">\n  <p class=\"clickBox "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.button : depth0)) != null ? stack1["class"] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.button : depth0)) != null ? stack1.text : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.button : depth0)) != null ? stack1.nr : stack1), depth0))
    + "</p>\n</a>";
},"useData":true}));Handlebars.registerPartial("button_navCollapsed", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\r\n  <span class=\"sr-only\">Toggle navigation</span>\r\n  <span class=\"icon-bar\"></span>\r\n  <span class=\"icon-bar\"></span>\r\n  <span class=\"icon-bar\"></span>\r\n</button>\r\n";
},"useData":true}));this["JST"]["main"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.button_category,depth0,{"name":"button_category","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"containerBox\" class=\"containerBox\">\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cats : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</div>";
},"usePartial":true,"useData":true});this["JST"]["quiz"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.button_answer,depth0,{"name":"button_answer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div id=\"containerBox\" class=\"containerBox\">\r\n\r\n  <div class=\"question\">\r\n    <p>Frage "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.curr : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.length : stack1), depth0))
    + "</p>\r\n    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.text : stack1), depth0))
    + "</p>\r\n  </div>\r\n  \r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.answers : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  \r\n</div>\r\n";
},"usePartial":true,"useData":true});this["JST"]["score"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n  \n  <h1>Auswertung</h1>\n  <h2>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  \n  \n</div>\n";
},"useData":true});this["JST"]["nav_bottom"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.button_navBottom,depth0,{"name":"button_navBottom","hash":{"button":((stack1 = (depth0 != null ? depth0.buttons : depth0)) != null ? stack1.cancel : stack1)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.button_navBottom,depth0,{"name":"button_navBottom","hash":{"button":((stack1 = (depth0 != null ? depth0.buttons : depth0)) != null ? stack1.next : stack1)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"weiterBox\" class=\"weiterBox\" role=\"navigation\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.visible : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});this["JST"]["nav"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<nav id=\"myNavbar\" class=\"navbar navbar-default navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\" id=\"navbar-header\">\r\n"
    + ((stack1 = container.invokePartial(partials.button_navCollapsed,depth0,{"name":"button_navCollapsed","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <a id=\"headline\" class=\"navbar-brand\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + alias2(((helper = (helper = helpers.point1 || (depth0 != null ? depth0.point1 : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"point1","hash":{},"data":data}) : helper)))
    + "</a>\r\n    </div>\r\n    \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      \r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" id=\"menuTeil1\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a></li>\r\n        <li><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.login : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" id=\"menuTeil2\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.login : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a></li>\r\n        <li><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.admin : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" id=\"menuTeil3\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.admin : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a></li>\r\n        <li><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" id=\"menuTeil4\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a></li>\r\n      </ul>\r\n      \r\n    </div>\r\n  </div>\r\n</nav>";
},"usePartial":true,"useData":true});this["JST"]["popup_container"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "  <div id=\"popupBox1\" class=\"popupBox1\">\r\n    <div id=\"popupBox\" class=\"popupBox\"></div>\r\n  </div>";
},"useData":true});