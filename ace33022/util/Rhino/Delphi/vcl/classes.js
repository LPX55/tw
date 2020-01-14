/**
 *
 * Delphi Classes Unit
 *
 * @author ace
 *
 * @version 2012/01/06 v0.1 初始版本。
 *
 * @see 
 *
 * @description
 * 
 */

try { 
  function TPersistent() {};
  TPersistent.inherits(TObject);

  function TComponent() {};
  TComponent.inherits(TPersistent);
	
  function TCollection() {};
  TCollection.inherits(TPersistent);
	
  function TStrings() {};
  TStrings.inherits(TPersistent);

  function TStringList() {};
  TStringList.inherits(TStrings);
	
	TStringList.method('toString', function () {
		return 'TStringList';
	});
}
catch (e) {
	throw e.message;
}
finally {
}	