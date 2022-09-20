goog.loadModule(function(exports) {
  goog.module("goog.async.throwException");
  goog.module.declareLegacyNamespace();
  function throwException(exception) {
    goog.global.setTimeout(() => {
      throw exception;
    }, 0);
  }
  exports = throwException;
  return exports;
});

//# sourceMappingURL=out.goog.async.throwexception.js.map
