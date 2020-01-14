/**
 *
 * Web Service Model
 *
 * @version 2016/12/04 初始版本。
 *
 * @author ace
 *
 * @see <a href="http://underscorejs.org/">Underscore.js</a>
 * @see <a href="http://backbonejs.org/">Backbone.js</a>
 *
 */

(function(root) {

  if (typeof define === 'function') {

    define(["tw.ace33022.backbone.model.Ancestor", "backbone"], function(Model) {
		
			return Model.extend({
			
				"constructor": function(attributes, options) {Backbone.Model.apply(this, arguments);},
				"initialize": function() {},
				"sync": function(method, model, options) {
				
					options || (options = {});
					
					options.url = this.getRESTUrl(method.toLowerCase());

					// Lets notify backbone to use our URLs and do follow default course
					return Backbone.sync.apply(this, arguments);
				},
				"parse": function(response, options) {

					// console.log(response);

					// return response["return_result"][0];

					if (response["error_code"] !== 0) {

						this.trigger('error', response);
					}
					else {

						return response["result"][0];
					}
				}
			});
		});
	}
})(this);