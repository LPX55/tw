/**
 *
 * SYS00240
 *
 * @description
 *
 * @version 2018/07/03 初始版本。
 *
 * @author ace
 *
 * @see
 *
 * @comment
 *
 */

(function(root) {

  if (typeof define === 'function') {

    define(["tw.ace33022.backbone.model.ws.program.Ancestor", "tw.ace33022.vo.SugarGroups"], function(Model, SugarGroups) {
		
			return Model.extend({
			
				"urlRoot": root.Configurations.webServiceProgramPath + 'SYS00240',
				
				"defaults": (new SugarGroups()).toJSONObject(),
				"getRESTUrl": function(method) {

					var result = this.urlRoot;

					if (method !== 'create') result +=  '/' + this.get('sugar_group_code');

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