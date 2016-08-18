this["JST"] = this["JST"] || {};Handlebars.registerPartial("button_burger", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n  <span class=\"sr-only\">Toggle navigation</span>\n  <span class=\"icon-bar\"></span>\n  <span class=\"icon-bar\"></span>\n  <span class=\"icon-bar\"></span>\n</button>\n";
},"useData":true}));Handlebars.registerPartial("button_cat", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"hauptkat"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"box hauptkat\">\n  <a href=\"#/quiz/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n  </a>\n</div>\n";
},"useData":true}));this["JST"]["main"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.button_cat,depth0,{"name":"button_cat","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"mainBox\" class=\"mainBox\"> \n  <div id=\"containerBox\" class=\"containerBox\">\n    \n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cats : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    \n  </div>\n  <div id=\"popupBox1\" class=\"popupBox1\">\n    <div id=\"popupBox\" class=\"popupBox\"></div>\n  </div>\n  <div id=\"weiterBox\" class=\"weiterBox\"></div>\n</div> ";
},"usePartial":true,"useData":true});this["JST"]["nav"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<nav id=\"myNavbar\" class=\"navbar navbar-default navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\" id=\"navbar-header\">\n"
    + ((stack1 = container.invokePartial(partials.button_burger,depth0,{"name":"button_burger","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <a id=\"headline\" class=\"navbar-brand\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + alias2(((helper = (helper = helpers.point1 || (depth0 != null ? depth0.point1 : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"point1","hash":{},"data":data}) : helper)))
    + "</a>\n    </div>\n    \n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      \n      <ul class=\"nav navbar-nav\">\n        <li><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" id=\"menuTeil1\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a></li>\n        <li><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.login : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" id=\"menuTeil2\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.login : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a></li>\n        <li><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.admin : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" id=\"menuTeil3\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.admin : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a></li>\n        <li><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" id=\"menuTeil4\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a></li>\n      </ul>\n      \n    </div>\n  </div>\n</nav>";
},"usePartial":true,"useData":true});