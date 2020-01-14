/**
 *
 * @description SYS00010
 *
 * @version 2016/12/04 初始版本。
 *
 * @author ace
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link https://jquery.com/|jQuery}
 *
 * @see {@link https://getbootstrap.com/|Bootstrap · The most popular HTML, CSS, and JS library in the world.}
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 * @see {@link http://backbonejs.org/|Backbone.js}
 * @see {@link https://github.com/jashkenas/backbone|jashkenas/backbone: Give your JS App some Backbone with Models, Views, Collections, and Events}
 * @see {@link https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites|Tutorials, blog posts and example sites · jashkenas/backbone Wiki}
 *
 */

(function(root) {

  if (typeof define === 'function') {

    define(["tw.ace33022.backbone.model.ws.program.Ancestor", "tw.ace33022.vo.Programs"], function(Model, Programs) {
		
			return Model.extend({
			
				"urlRoot": root.Configurations.webServiceProgramPath + 'SYS00010',
				
				"defaults": (new Programs()).toJSONObject(),
				"getRESTUrl": function(method) {

					var result = this.urlRoot;

					if (method !== 'create') result +=  '/' + this.get('program_code');

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