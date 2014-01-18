define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["commentCollectionView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Comments</h2>\n<div class=\"comments\"></div>";
  });

this["JST"]["commentItemView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <img class=\"comment-avatar img-circle\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n        <strong class='comment'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>\n        <small class='comment'> @ ";
  if (stack2 = helpers.createdDate) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.createdDate; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</small>\n    </div>\n    <div class=\"panel-body\">\n        ";
  if (stack2 = helpers.highlightedBody) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.highlightedBody; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["issueCollectionView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h3 class=\"page-header pull-left\" style=\"margin-top: 15px;margin-bottom: 0px;\">Issues</h3>\n                <ul class=\"pager pull-right\" style=\"margin-top:10px\">\n                    <li class=\"issues-previous\"><a href=\"javascript:void(0);\">Previous</a></li>\n                    <li class=\"issues-next\"><a href=\"javascript:void(0);\">Next</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"issue-collection-container list-group\">\n        </div>\n    </div>\n    <div class=\"panel-footer clearfix\">\n        <ul class=\"pager pull-right\" style=\"margin-top:10px\">\n            <li class=\"issues-previous\"><a href=\"javascript:void(0);\">Previous</a></li>\n            <li class=\"issues-next\"><a href=\"javascript:void(0);\">Next</a></li>\n        </ul>\n    </div>\n</div>";
  });

this["JST"]["issueDetailView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <!-- inline css is kinda gross; just a quick hack -->\n        <span class=\"label pull-left\" style=\"background-color:#"
    + escapeExpression(((stack1 = depth0.color),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " !important; color:#"
    + escapeExpression(((stack1 = depth0.contrastColor),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " !important;\">\n            "
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </span>\n    ";
  return buffer;
  }

  buffer += "<h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n<div class=\"issue-submitted clearfix\">\n    <img align=\"left\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class='gravatar-image img-rounded pull-left'/>\n    <span class=\"issue-submitted pull-left\">User: <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\n    ";
  stack2 = helpers.each.call(depth0, depth0.labels, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <strong>Issue ";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.number; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " - ";
  if (stack2 = helpers.state) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.state; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</strong>\n        <small>created: ";
  if (stack2 = helpers.createdDate) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.createdDate; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</small>\n    </div>\n    <div class=\"panel-body\">\n        ";
  if (stack2 = helpers.bodyHighlighted) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.bodyHighlighted; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["issueItemView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <!-- inline css is kinda gross; just a quick hack -->\n            <span class=\"label\" style=\"background-color:#"
    + escapeExpression(((stack1 = depth0.color),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " !important; color:#"
    + escapeExpression(((stack1 = depth0.contrastColor),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " !important;\">\n                "
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </span>\n        ";
  return buffer;
  }

  buffer += "<h4 class=\"list-group-item-heading\">Issue # ";
  if (stack1 = helpers.number) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.number; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n<p class=\"issues list-group-item-text row\">\n    <img align=\"left\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class='gravatar-image img-rounded'/>\n    <i class=\"fa fa-quote-left fa-lg\"></i>";
  if (stack2 = helpers.bodySummary) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.bodySummary; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<i class=\"fa fa-quote-right fa-lg\"></i><br/>\n    <div class=\"issue-submitted\">\n        <span class=\"issue-submitted pull-left\">User: <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\n        ";
  stack2 = helpers.each.call(depth0, depth0.labels, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n</p>";
  return buffer;
  });

this["JST"]["something"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n    <nav class=\"navbar navbar-default\" role=\"navigation\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">GitHubby</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"#\">Link</a></li>\n                <li><a href=\"#\">Link</a></li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Action</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something else here</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\">Separated link</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\">One more separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n            <form class=\"navbar-form navbar-left\" role=\"search\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n            </form>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a href=\"#\">Link</a></li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Action</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something else here</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\">Separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div><!-- /.navbar-collapse -->\n    </nav>\n</div>\n<div class=\"center-block\">\n    <div class=\"page-header\">\n        <h1>Github Issues Browser for Rails<small> check out those labels</small></h1>\n    </div>\n    <div class=\"container app-container\"></div>\n</div>";
  });

return this["JST"];

});