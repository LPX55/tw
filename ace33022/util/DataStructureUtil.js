/**
 *
 * @module DataStructureUtils
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 */

(function(root) {

	/**
	 *
	 * @description 佇列（Queue）
	 *
	 * @param
	 *
	 * @memberof module:DataStructureUtils
	 *
	 * @version 2019/11/23 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://blog.techbridge.cc/2016/12/10/javascript-data-structure-algorithm-queue/|用 JavaScript 學習資料結構和演算法：佇列（Queue）篇 | TechBridge 技術共筆部落格}
	 *
	 */
	function Queue() {

		var items = [];
		
		this.clear = function() { items = []; };
		
		this.size = function() { return items.length; };
		
		// this.isEmpty = function() { return items.length === 0; };
		this.isEmpty = function() { return this.size() === 0; };
		
		// this.isFull = function() { return false; };
		
		this.add = function(element) { items.push(element); };
		
		this.delete = function() { return items.shift(); };
		
		// this.getRear = function() { return items[items.length - 1]; };
		
		this.toString = function() { return items.toString(); };
	};
	
	if (typeof define === 'function') {
	
		define([], function() { 
		
			return {
  
				"Queue": Queue
			}
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports.Queue = Queue;
	}
	else {
	
		if (typeof root.tw.ace33022.RequireJSConfig === 'undefined') throw new Error('tw.ace33022.RequireJSConfig is undefined.');
		
		root.tw.ace33022.util.DataStructureUtils.Queue = Queue;
	}
})(this);