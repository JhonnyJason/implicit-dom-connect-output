// Generated by CoffeeScript 2.5.1
(function() {
  var configmodule, log;

  configmodule = {
    name: "configmodule"
  };

  //###########################################################
  log = function(arg) {
    if (allModules.debugmodule.modulesToDebug["configmodule"] != null) {
      console.log("[configmodule]: " + arg);
    }
  };

  //###########################################################
  //region exposedProperties
  configmodule.cli = {
    name: "implicit-dom-connect"
  };

  configmodule.outputTemplatePath = "output-template.coffee";

  //endregion

  //###########################################################
  configmodule.initialize = function() {
    log("configmodule.initialize");
  };

  module.exports = configmodule;

}).call(this);
