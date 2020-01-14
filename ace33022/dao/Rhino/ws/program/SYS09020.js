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

		root._.extend(this, new ancestor());
		
		this.setDAO(new Packages.tw.ace33022.dao.ws.program.SYS09020(location, users));

		this.doGet = function() {return this.getDAO().doGet();}
		
		this.doPost = function(arrLottery649Logs) {

			var data = {};
			
			data["lottery649_logs"] = new Array();

			arrLottery649Logs.forEach(function(element, index, array) {data["lottery649_logs"].push(element.toJSONObject());});
			
			return this.getDAO().doPost(new Packages.java.lang.String(JSON.stringify(data)));
    }
  }

	if (typeof define === 'function') {

		// 使用requirejs的環境設定。
		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(Ancestor) {

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {

			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.dao.ws.program.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.ws.program.Ancestor"] + '.js');
		}	
		
		ancestor = root.tw.ace33022.dao.ws.program.Ancestor;

		root.tw.ace33022.dao.ws.program.SYS09020 = result;
	}
})(this);