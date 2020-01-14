/**
 *
 * SYS09020
 *
 * @author ace
 *
 * @version 2016/11/30 初始版本。
 *
 * @description
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 *
 */

(function(root) {

	var ancestor;

	var result = function(location, users) {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();
		
		root._.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		this.setDAO(new Packages.tw.ace33022.dao.ws.program.BAS09030(location, users));

		this.doGet = function(path) {
		
			var javaPath;
			
			if (typeof path == 'string') {
				
				javaPath = new Packages.java.lang.String(path);
			}
			else {
			
				javaPath = new Packages.java.lang.String('');
			}
			
			return this.getDAO().doGet(javaPath);
		}
		
		this.doUploadFile = function(file, path) {
		
			var javaFile = new Packages.java.io.File(file);
			var javaPath;

			if (typeof path == 'string') {
				
				javaPath = new Packages.java.lang.String(path);
			}
			else {
			
				javaPath = new Packages.java.lang.String('');
			}
			
			return this.getDAO().doUploadFile(javaFile, javaPath);
		}
  }

	if (typeof define == 'function') {

		// 使用requirejs的環境設定。
		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(Ancestor) {

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load != 'undefined') {

			if (typeof root._ == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.dao.ws.program.Ancestor == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.ws.program.Ancestor"] + '.js');
		}	
		
		ancestor = root.tw.ace33022.dao.ws.program.Ancestor;

		root.tw.ace33022.dao.ws.program.BAS09030 = result;
	}
})(this);