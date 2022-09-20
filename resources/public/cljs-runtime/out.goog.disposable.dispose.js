goog.loadModule(function(exports) {
  goog.module("goog.dispose");
  goog.module.declareLegacyNamespace();
  function dispose(obj) {
    if (obj && typeof obj.dispose == "function") {
      obj.dispose();
    }
  }
  exports = dispose;
  return exports;
});

//# sourceMappingURL=out.goog.disposable.dispose.js.map
