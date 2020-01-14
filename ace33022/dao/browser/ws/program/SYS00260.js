/**
 *
 * SYS00260DAO
 *
 * @description
 *
 * @version 2018/07/04 初始版本。
 *
 * @author ace
 *
 * @see
 *
 * @comment
 *
 */

(function(root) {

	var Ancestor;

	var result = function() {

		var self = this;
		
		var serialVersionUID = new Number(1);	// 保留
		
		var uber = new Ancestor();
		
		root._.extend(self, uber);
		
		self.setProgramCode('SYS00260');
		
    self.doGetIceDosageGroupsDetailByIceDosageGroupCode = function(iceDosageGroupCode, successCallback, errorCallback, completeCallback) {

			uber.doGet(self.getURLPath() + '/ice_dosage_groups_detail' + '/' + iceDosageGroupCode, successCallback, errorCallback, completeCallback);
    }
		
		self.doPostIceDosageGroupsDetail = function(data, successCallback, errorCallback, completeCallback) {

			uber.doPost(self.getURLPath() + '/ice_dosage_groups_detail', data, successCallback, errorCallback, completeCallback);
    }
		
		self.doDeleteIceDosageGroupsDetail = function(iceDosageGroupCode, iceDosageCode, successCallback, errorCallback, completeCallback) {

			self.doDelete(self.getURLPath() + '/ice_dosage_groups_detail' + '/' + iceDosageGroupCode + '/' + iceDosageCode, successCallback, errorCallback, completeCallback);
    }
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(AAncestor) {
		
			Ancestor = AAncestor;

			return result;
		});
	}
	else {

		Ancestor = root.tw.ace33022.dao.ws.program.Ancestor;

		root.tw.ace33022.dao.ws.program.SYS00260 = result;
	}
})(this);