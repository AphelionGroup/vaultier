Ember.TEMPLATES["Settings/SettingsKeys"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"vlt-dialog-body\">\n                        <div class=\"text-center\">\n                            If you want to generate new private key.\n                            Click the generate button and\n                            you will go throught generate process\n                            <br/>\n                            <br/>\n                            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "generate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Generate new private key</a>\n                        </div>\n                    </div>\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['change-key'] || (depth0 && depth0['change-key']),options={hash:{
    'action': ("save")
  },hashTypes:{'action': "STRING"},hashContexts:{'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "change-key", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"top-30 bottom-30\">\n\n                        <div class=\" alert alert-success\">\n                            <b>\n                                Your private key has been successfully changed.\n                            </b>\n                        </div>\n\n                        <div class=\" bottom-30 text-center top-30\">\n                            <span class=\"help-block\">\n                                From now use new private key generated. Please be sure you have saved your private key.\n                            </span>\n\n                            <a class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "savePrivateKey", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Save your new private key</a>\n                        </div>\n\n                        <div class=\"clearfix\"></div>\n                    </div>\n\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"vlt-dialog\">\n    <div class=\"vlt-dialog-content\">\n        <div class=\"vlt-dialog-header\">\n            <h2>Private key</h2>\n        </div>\n        <div class=\"vlt-dialog-body\">\n\n            <div class=\"col-md-8 col-md-offset-2\">\n                ");
  stack1 = helpers['if'].call(depth0, "stepInfo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "stepKeys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "stepSuccess", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});