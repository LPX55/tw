/**
 *
 * OperatePanelsDetail(控制面版明細資料)
 *
 * @author ace
 *
 * @version 2016/02/17 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */

(function(root) {

	var ancestor;

  var result = function() {

		var serialVersionUID = new Number(1);     // 保留

		var uber = new ancestor();
		
		var urlPath = new String(root.Configurations.location.origin) + '/' + root.Configurations.webServiceVOPath + 'operate_panels_detail';

		root._.extend(this, uber);
		
		this.setTableName('operate_panels_detail');
		
		this.doPut = function(vo, successCallback, errorCallback, completeCallback) {
		
			uber.doPut(this.getURLPath() + '/' + vo.getOperatePanelCode() + '/' + vo.getSerNo(), vo.toJSONString(), successCallback, errorCallback, completeCallback);
		};
		
    this.doDelete = function(operatePanelCode, serNo, successCallback, errorCallback, completeCallback) {

			uber.doDelete(urlPath + '/' + operatePanelCode + '/' + serNo, successCallback, errorCallback, completeCallback);
    }
		
		/*
    this.doGetByOperatePanelCode = function(operatePanelCode, successCallback, errorCallback, completeCallback) {

			this.doAncestorGet(urlPath + '/' + operatePanelCode, successCallback, errorCallback, completeCallback);
    }

		*/
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.vo.Ancestor", "underscore"], function(Ancestor) {

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		ancestor = root.tw.ace33022.dao.ws.vo.Ancestor;

		root.tw.ace33022.dao.ws.vo.OperatePanels = result;
	}
})(this);