/**
 *
 * crockford提供之JavaScript實作繼承方法
 *
 * @author ace
 *
 * @version 2012/01/05 v0.1
 *
 * @see <a href="http://fillano.blog.ithome.com.tw/post/257/17355">物件導向Javascript - 實作繼承的效果</a>
 * @see <a href="http://www.crockford.com/javascript/inheritance.html">Classical Inheritance in JavaScript</a>
 * @see <a href="http://blog.sebarmeli.com/2010/11/12/understanding-array-prototype-slice-applyarguments/">Understanding Array.prototype.slice.apply(arguments) in JavaScript</a>
 * @see <a href="http://devlicious.com/blogs/sergio_pereira/archive/2009/02/09/javascript-5-ways-to-call-a-function.aspx">JavaScript, 5 ways to call a function</a>
 * 
 * @description
 *
 */

Function.prototype.method = function (name, func) {

	this.prototype[name] = func;
	
  return this;
};

Function.method('inherits', function (parent) {

	var objParent = this.prototype = new parent();
															
  var objFuncCount = {};
		
	this.method('uber', function (name) {
	
			// 應用閉包(Closure)方式保留物件objFuncCount記錄之函數計數器。
			if (!(name in objFuncCount)) objFuncCount[name] = 0;
																									
			var objPrototype = parent.prototype;
																										
			var objFunction;
			var objResult;
			var numTemp = objFuncCount[name];
																										
			if (numTemp) {
				while (numTemp) {
					objPrototype = objPrototype.constructor.prototype;
					numTemp -= 1;
				}
																											
				objFunction = objPrototype[name];
			} 
			else {
				// 應用閉包(Closure)技巧，記錄inherits函數執行時之parent物件。
				objFunction = objParent[name];
				if (objFunction == this[name]) objFunction = objPrototype[name];
			}
				
			objFuncCount[name] += 1;
			objResult = objFunction.apply(this, Array.prototype.slice.apply(arguments, [1]));
			objFuncCount[name] -= 1;
					
			return objResult;
		}
	);
		
	return this;
	}
);

Function.method('swiss',  function (parent) {

		var numIndex = new Number();
		for (numIndex = 1; numIndex < arguments.length; numIndex += 1) {
														
			var strName = arguments[numIndex];
			this.prototype[strName] = parent.prototype[strName];
		}
													
		return this;
	}
);