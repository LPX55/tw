/**
 *
 * SYS00240DAO
 *
 * @description
 *
 * @version 2018/07/03 初始版本。
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
		
		self.setProgramCode('SYS00240');
		
    self.doGetSugarGroupsDetailBySugarGroupCode = function(sugarGroupCode, successCallback, errorCallback, completeCallback) {

			uber.doGet(self.getURLPath() + '/sugar_groups_detail' + '/' + sugarGroupCode, successCallback, errorCallback, completeCallback);
    }
		
		self.doPostSugarGroupsDetail = function(data, successCallback, errorCallback, completeCallback) {

			uber.doPost(self.getURLPath() + '/sugar_groups_detail', data, successCallback, errorCallback, completeCallback);
    }
		
		self.doDeleteSugarGroupsDetail = function(sugarGroupCode, sugarCode, successCallback, errorCallback, completeCallback) {

			self.doDelete(self.getURLPath() + '/sugar_groups_detail' + '/' + sugarGroupCode + '/' + sugarCode, successCallback, errorCallback, completeCallback);
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

		root.tw.ace33022.dao.ws.program.SYS00240 = result;
	}
})(this);