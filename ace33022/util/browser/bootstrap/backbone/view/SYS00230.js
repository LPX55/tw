/**
 *
 * SYS00230
 *
 * @description
 *
 * @author ace
 *
 * @version 2018/07/03 初始版本。
 *
 * @see <a href="http://requirejs.org/">RequireJS</a>
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 *
 * @comment
 *
 * @todo
 *
 */

(function(root) {

	var inpSugarCodeId = 'inpSugarCode' + Math.random().toString(36).substr(2, 6);
	var inpSugarNameId = 'inpSugarName' + Math.random().toString(36).substr(2, 6);

	var result;

	if (typeof define === 'function') {

		define(["tw.ace33022.util.browser.FormUtils", "tw.ace33022.backbone.view.AncestorForm02"], function(FormUtils, AncestorFormView) {

			result = {

				"initialize": function(options) {

					var tag = '<div class="row" style="margin-top: 5px;">'
									+ '  <form class="form-horizontal" style="padding-top: 10px;">'
									+ '    <div class="form-group">'
									+ '      <label class="control-label col-sm-2" for="' + inpSugarCodeId + '">代碼：</label>'
									+ '	     <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpSugarCodeId + '" data-field-name="sugar_code" disabled>'
									+ '      </div>'
									+ '      <label class="control-label col-sm-2" for="' + inpSugarNameId + '">名稱：</label>'
									+ '      <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpSugarNameId + '" data-field-name="sugar_name" disabled>'
									+ '      </div>'
									+ '    </div>'
									+ '  </form>'
									+ '</div>';
									
					// AncestorForm會觸發formStateChange，在呼叫父類別的initialize函數前，應先將標籤元件都先設定好，避免render時找不到元件的狀況。
					AncestorFormView.prototype.initialize.apply(this, arguments);
					
					this.appendRow(tag);
					
					this.trigger('formStateChange');

					return this;
				},
				"navButtonClickTrigger": function(btnName) {
				
					var booCheckFieldResult = true;

					function checkFieldValue() {

						if ((booCheckFieldResult == true) && (jQuery('#' + inpSugarCodeId).val() == '')) {

							booCheckFieldResult = false;

							FormUtils.showMessage('代碼不可空白！', function() { jQuery('#' + inpSugarCodeId).focus(); });
						}

						if ((booCheckFieldResult == true) && (jQuery('#' + inpSugarNameId).val() == '')) {

							booCheckFieldResult = false;

							FormUtils.showMessage('名稱不可空白！', function() { jQuery('#' + inpSugarNameId).focus(); });
						}
					}

					if (btnName === 'btnConfirm') {

						if ((this.getFormState() === 'insert') || (this.getFormState() === 'update')) checkFieldValue();

						if (booCheckFieldResult == true) AncestorFormView.prototype.navButtonClickTrigger.apply(this, arguments);
					}
					else {

						AncestorFormView.prototype.navButtonClickTrigger.apply(this, arguments);
					}
				},
				"render": function() {

					AncestorFormView.prototype.render.apply(this, arguments);

					this.disableDeleteButton();

					if (this.getFormState() === 'update') {

						jQuery('#' + inpSugarCodeId).prop('disabled', true);
					}

					if ((this.getFormState() === 'insert') || (this.getFormState() === 'update')) this.focusFirstInput();
				}
			};
			
			return AncestorFormView.extend(result);
		});
	}
})(this);