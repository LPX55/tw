/**
 *
 * Delphi System Unit
 *
 * @author ace
 *
 * @version 2011/11/30 v0.1 初始版本。
 *
 * @see <a href="http://www.crockford.com/javascript/inheritance.html">Classical Inheritance in JavaScript</a>
 *
 * @description 運用Crockford提供之物件導向設計方式，需載入crockford.js檔案。
 * 
 */

try { 
	function TObject() {};
  TObject.inherits(Object);

  TObject.method('Create', function (value) {
  
    this.value = value;
		
    return this;
  });

  TObject.method('Destroy', function () {
  
    return this;
  });
}
catch (e) {
	throw e.message;
}
finally {
}	