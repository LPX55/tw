/**
 *
 * @description SYS00020
 *
 * @version 2016/12/04 初始版本。
 *
 * @author ace
 *
 */

(function(root) {

  if (typeof define === 'function') {

    define(["tw.ace33022.backbone.model.ws.program.Ancestor", "tw.ace33022.vo.Roles"], function(Model, Roles) {
		
			return Model.extend({
			
				"urlRoot": root.Configurations.webServiceProgramPath + 'SYS00020',
				
				"defaults": (new Roles()).toJSONObject(),
				"getRESTUrl": function(method) {

					var result = this.urlRoot;

					if (method !== 'create') result +=  '/' + this.get('role_code');

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