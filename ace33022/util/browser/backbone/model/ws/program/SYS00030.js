/**
 *
 * SYS00020
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

    define(["tw.ace33022.backbone.model.ws.program.Ancestor", "tw.ace33022.vo.Users"], function(Model, Users) {
		
			return Model.extend({
			
				"urlRoot": root.Configurations.webServiceProgramPath + 'SYS00030',
				
				"defaults": (new Users()).toJSONObject(),
				"getRESTUrl": function(method) {

					var result = this.urlRoot;

					if (method !== 'create') result +=  '/' + this.get('user_account');

					if (method === 'read') {

						// result += '/' + this.get(this.idAttribute);
					}
					else if (method === 'update') {

						// result += '/' + this.get(this.idAttribute);
					}
					else if (method === 'delete') {

						// result += '/' + this.get(this.idAttribute);
					}

					return result;
				}
			});
		});
	}
})(this);