/**
 *
 * Programs Model
 *
 * @author ace
 *
 * @version 2016/12/04 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @see <a href="http://underscorejs.org/">Underscore.js</a>
 * @see <a href="http://backbonejs.org/">Backbone.js</a>
 *
 * @see <a href="http://stackoverflow.com/questions/12917849/uncaught-error-a-url-property-or-function-must-be-specified-for-a-collectionv">backbone.js - Uncaught Error: A "url" property or function must be specified for a CollectionView - Stack Overflow</a>
 *
 */

(function(root) {

  var result = {

    initialize: function() {
					
			this.on('error', this.errorHandler);
    },
		errorHandler: function(errorValue) {
		
			if (typeof errorValue["return_value"] !== 'undefined') {
						
				if (typeof errorValue["error_message"] !== 'undefined') console.log(errorValue["error_message"]);
			}
			else {
						
				console.log(errorValue);
			}
		}
  };
	
	if (typeof define === 'function') {

		define(["backbone"], function() {

			result = root.Backbone.Model.extend(result);
			
			return result;
		});
	}
	else {
	
		root.tw.ace33022.backbone.model.vo.Ancestor = root.Backbone.Model.extend(result);
	}
})(this);