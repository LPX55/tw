/**
 *
 * @description AncestorForm01
 *
 * @author ace
 *
 * @version 2016/12/05 初始版本。
 *
 */

(function(root) {

	var result = {};

  if (typeof define === 'function') {

    define(["tw.ace33022.backbone.view.ButtonsNavigatorMethod01", "tw.ace33022.backbone.view.AncestorFormMethod01", "backbone", "underscore"], function(ButtonsNavigatorMethod, AncestorFormMethod) {

			_.extend(result, ButtonsNavigatorMethod);
			_.extend(result, AncestorFormMethod);
			
			result["initialize"] = function(options) {
			
				ButtonsNavigatorMethod.initialize.apply(this, arguments);
				AncestorFormMethod.initialize.apply(this, arguments);
			
				if (typeof options["originalModel"] !== 'undefined') this["originalModel"] = options["originalModel"];

				if (typeof options["onSelectButtonClick"] !== 'undefined') this["onSelectButtonClick"] = options["onSelectButtonClick"];
				if (typeof options["onInsertButtonClick"] !== 'undefined') this["onInsertButtonClick"] = options["onInsertButtonClick"];
				if (typeof options["onDeleteButtonClick"] !== 'undefined') this["onDeleteButtonClick"] = options["onDeleteButtonClick"];
				if ((typeof options["onExitButtonClick"] !== 'undefined') && (typeof options["onExitButtonClick"] === 'function')) this["onExitButtonClick"] = options["onExitButtonClick"];

				if (typeof options["insertMethod"] !== 'undefined') this["insertMethod"] = options["insertMethod"];
				if (typeof options["updateMethod"] !== 'undefined') this["updateMethod"] = options["updateMethod"];
				if (typeof options["deleteMethod"] !== 'undefined') this["deleteMethod"] = options["deleteMethod"];
			};
			
			result["render"] = function(options) {
			
				ButtonsNavigatorMethod.render.apply(this, arguments);
				AncestorFormMethod.render.apply(this, arguments);
			};
			
			return Backbone.View.extend(result);
    });
  }
})(this);