/**
 *
 * Delphi Db Unit
 *
 * @author ace
 *
 * @version 2012/01/09 v0.1 初始版本。
 *
 * @see 
 *
 * @description
 * 
 */

try {
  function TCustomConnection() {};
	TCustomConnection.inherits(TComponent);

  function TField() {};
	TField.inherits(TComponent);
	
  function TParams() {};
	TParams.inherits(TCollection);
	
  function TDataSet() {};
  TDataSet.inherits(TComponent);
}
catch (e) {
	throw e.message;
}
finally {
}	