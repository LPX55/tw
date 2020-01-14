/**
 *
 * @description SYS00010DAO
 *
 * @version 2014/07/09 初始版本。
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
 * @see {@link https://xhr.spec.whatwg.org/|XMLHttpRequest Standard}
 *
 * @see {@link http://api.jquery.com/category/ajax/|Ajax | jQuery API Documentation}
 * @see {@link http://api.jquery.com/jquery.ajax/|jQuery.ajax() | jQuery API Documentation}
 *
 * @see {@link http://function1122.blogspot.com/2008/04/javascript.html|FUNcLogs: JavaScript 取得目前網址 (以及其他資訊)}
 * @see {@link https://dotblogs.com.tw/jasonyah/archive/2013/06/02/use-ajax-you-need-to-be-care.aspx|[jQuery][筆記] 小心使用 Ajax 防止 Bug 產生 | 分享你的 Coding 新鮮事 - 點部落}
 *
 */

(function(root) {

	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		root._.extend(this, new ancestor());
		
		this.setProgramCode('SYS00010');
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;

			return result;
		});
	}
	else {

		ancestor = root.tw.ace33022.dao.ws.program.Ancestor;

		root.tw.ace33022.dao.ws.program.SYS00010 = result;
	}
})(this);