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
 * @see <a href="https://addyosmani.com/writing-modular-js/">Writing Modular JavaScript With AMD, CommonJS & ES Harmony</a>
 * @see <a href="http://stackoverflow.com/questions/9507606/when-should-i-use-require-and-when-to-use-define">requirejs - When should I use require() and when to use define()? - Stack Overflow</a>
 *
 */

(function(root) {

  var result = {

		// defaults: vo.toJSONObject(),
    urlRoot: root.Configurations.webServiceVOPath + 'programs',
    // idAttribute: "program_code",
    initialize: function() {
					
			// console.log('Model Initialize');
    },
		constructor: function(attributes, options) {
					
			// console.log('Model Constructor');
			
			root.Backbone.Model.apply(this, arguments);
		},
		sync: function(method, model, options) {
					
			options || (options = {});
						
			options.url = this.getRESTUrl(method.toLowerCase());
						
			// Lets notify backbone to use our URLs and do follow default course
			return root.Backbone.sync.apply(this, arguments);
		},
		parse: function(response, options) {
            
			// console.log(response);
						
			// return response;
      // return response["return_result"][0];
					
			if (response["return_value"] != 0) {
						
				this.trigger('error', response);
			}
			else {
						
				return response["return_result"][0];
			}
    },
		getRESTUrl: function(method) {
					
			var result = this.urlRoot;
						
			if (method != 'create') result +=  '/' + this.get('program_code');
						
			if (method == 'read') {
						
				// result += '/' + this.get(this.idAttribute);
			}
			else if (method == 'update') {
						
				// result += '/' + this.get(this.idAttribute);
			}
			else if (method == 'delete') {
						
				// result += '/' + this.get(this.idAttribute);
			}
						
			return result;
		}
  };
	
	if (typeof define === 'function') {

		define(["tw.ace33022.backbone.model.Ancestor", "tw.ace33022.vo.Programs"], function(Ancestor, Programs) {
		
			result = Ancestor.extend(result);
			
			result["defaults"] = (new Programs()).toJSONObject();
			
			return result;
		});
	}
	else {
	
		result = root.tw.ace33022.backbone.model.vo.Ancestor.extend(result);
		
		result["defaults"] = (new root.tw.ace33022.vo.Programs()).toJSONObject();

		root.tw.ace33022.backbone.model.vo.Programs = result;
	}
})(this);