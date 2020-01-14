/**
 *
 * Ancestor
 *
 * @author ace
 *
 * @version 2013/09/29 初始版本。
 * @version 2014/11/26 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web">Web technology For developers | MDN</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript | MDN</a>
 *
 * @description
 *
 * @todo 
 *
 * @require
 *
 */

(function(root) {

	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		var programCode;
		
		var uber = new ancestor();
		
		root._.extend(this, uber);
		
		this.setProgramCode = function(value) {programCode = value; return value;};
		this.getURLPath = function() {return new String(root.Configurations.location.origin) + '/' + root.Configurations.webServiceProgramPath + programCode;};
		
		this.doGet = function() {
		
			if (arguments.length === 3) {
			
				uber.doGet(this.getURLPath(), arguments[0], arguments[1], arguments[2]);
			}
			else {
			
				uber.doGet.apply(this, Array.prototype.slice.call(arguments));
			}
		};
		
		this.doPost = function() {
		
			if (arguments.length === 4) {
			
				uber.doPost(this.getURLPath(), arguments[0], arguments[1], arguments[2], arguments[3]);
			}
			else {
				
				uber.doPost.apply(this, Array.prototype.slice.call(arguments));
			}
    }
	}
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.ws.Ancestor", "underscore", "jquery"], function(Ancestor) {
		
			ancestor = Ancestor;
			
			return result;
		});
	}
	else {
	
		ancestor = root.tw.ace33022.dao.ws.Ancestor;
		
		root.tw.ace33022.dao.ws.program.Ancestor = result;
	}
})(this);