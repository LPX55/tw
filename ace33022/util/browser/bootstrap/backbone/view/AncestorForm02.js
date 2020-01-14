/**
 *
 * @description AncestorForm02
 *
 * @author ace
 *
 * @version 2018/06/30 初始版本。
 *
 */

(function(root) {

	var result = {};
	
  if (typeof define === 'function') {

    define(["tw.ace33022.backbone.view.AncestorForm01"], function(AncestorFormView) {

			result = {
			
				"initialize": function(options) {
				
					AncestorFormView.prototype.initialize.apply(this, arguments);
					
					if (typeof this["onExitButtonClick"] === 'undefined') this["onExitButtonClick"] = function() {window.location.href = window.location.origin + '/' + 'WorkPanel';};
					
					if (typeof this["updateMethod"] === 'undefined') this["updateMethod"] = function(model, callback) {
					
						model.save({}, {

							"success": function(model, response, options) {

								if (response["error_code"] === 0) {

									if (typeof callback === 'function') callback('browse', model);
								}
								else {

									// showErrorMessage()
									if (typeof callback === 'function') callback('update', model);
								}
							},
							"error": function(model, response, options) {

								// showErrorMessage()
								if (typeof callback === 'function') callback('update', model);
							}
						});
					}
				}
			};
			
			return AncestorFormView.extend(result);
    });
  }
})(this);