/**
 *
 * SYS00020DAO
 *
 * @author ace
 *
 * @version 2017/03/22 初始版本。
 *
 * @description
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 *
 */

(function(root) {

	var Ancestor;

	var result = function() {

		var serialVersionUID = new Number(1);	// 保留

		root._.extend(this, new Ancestor());
		
		this.setProgramCode('SYS00020');
		
    this.doGetByRoleCode = function(roleCode, successCallback, errorCallback, completeCallback) {

			this.doGet(this.getURLPath() + '/' + roleCode, successCallback, errorCallback, completeCallback);
    }
		
    this.doGetRolesProgramsByRoleCode = function(roleCode, successCallback, errorCallback, completeCallback) {

			this.doGet(this.getURLPath() + '/roles_programs' + '/' + roleCode, successCallback, errorCallback, completeCallback);
    }
		
		this.doPostRolesPrograms = function(data, successCallback, errorCallback, completeCallback) {

			this.doPost(this.getURLPath() + '/roles_programs', data, successCallback, errorCallback, completeCallback);
    }
		
		this.doDeleteRolesPrograms = function(roleCode, programCode, successCallback, errorCallback, completeCallback) {

			this.doDelete(this.getURLPath() + '/roles_programs' + '/' + roleCode + '/' + programCode, successCallback, errorCallback, completeCallback);
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

		root.tw.ace33022.dao.ws.program.SYS00020 = result;
	}
})(this);