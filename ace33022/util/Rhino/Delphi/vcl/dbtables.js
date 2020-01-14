/**
 *
 * Delphi DBTables Unit
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
  function TDatabase() {};
	TDatabase.inherits(TCustomConnection);

  function TBDEDataSet() {};
  TBDEDataSet.inherits(TDataSet);
	
  function TDBDataSet() {};
  TDBDataSet.inherits(TBDEDataSet);
	
  function TQuery() {};
  TQuery.inherits(TDBDataSet);
}
catch (e) {
	throw e.message;
}
finally {
}	