/**
 *
 * SYS00220DAO
 *
 * @description
 *
 * @version 2018/07/02 初始版本。
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
		
		self.setProgramCode('SYS00220');
		
    self.doGetSizeGroupsDetailBySizeGroupCode = function(sizeGroupCode, successCallback, errorCallback, completeCallback) {

			uber.doGet(self.getURLPath() + '/size_groups_detail' + '/' + sizeGroupCode, successCallback, errorCallback, completeCallback);
    }
		
		self.doPostSizeGroupsDetail = function(data, successCallback, errorCallback, completeCallback) {

			uber.doPost(self.getURLPath() + '/size_groups_detail', data, successCallback, errorCallback, completeCallback);
    }
		
		self.doDeleteSizeGroupsDetail = function(sizeGroupCode, sizeCode, successCallback, errorCallback, completeCallback) {

			self.doDelete(self.getURLPath() + '/size_groups_detail' + '/' + sizeGroupCode + '/' + sizeCode, successCallback, errorCallback, completeCallback);
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

		root.tw.ace33022.dao.ws.program.SYS00220 = result;
	}
})(this);