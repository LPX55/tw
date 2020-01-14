/**
 *
 * @description SYS00030
 *
 * @author ace
 *
 * @version 2016/12/05 初始版本。
 *
 */

(function(root) {

	var inpUserAccount = 'inpUserAccount' + Math.random().toString(36).substr(2, 6);
	var inpUserName = 'inpUserName' + Math.random().toString(36).substr(2, 6);
	var inpUserPasswordId = 'inpUserPassword' + Math.random().toString(36).substr(2, 6);

	var dtpUserBirthday = 'dtpUserBirthday' + Math.random().toString(36).substr(2, 6);
	var inpUserBirthdayId = 'inpUserBirthday' + Math.random().toString(36).substr(2, 6);
	var dtpStopUsingDate = 'dtpStopUsingDate' + Math.random().toString(36).substr(2, 6);
	var inpStopUsingDateId = 'inpStopUsingDate' + Math.random().toString(36).substr(2, 6);

	var inpIdNum = 'inpIdNum' + Math.random().toString(36).substr(2, 6);
	var inpRoleCode = 'inpRoleCode' + Math.random().toString(36).substr(2, 6);
	var inpRoleName = 'inpRoleName' + Math.random().toString(36).substr(2, 6);

	var btnSelectRoleId = 'btnSelectRole' + Math.random().toString(36).substr(2, 6);
	
	var result;
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.util.browser.FormUtils", "tw.ace33022.backbone.view.AncestorForm02", "moment", "md5", "bootstrap-datetimepicker"], function(FormUtils, AncestorFormView, moment, md5) {
		
			result = {

				"initialize": function(options) {
				
					var self = this;
					
					var originalMethod;

					var tag = '<div class="row" style="margin-top: 5px;">'
									// + '  <form class="form-horizontal" style="padding-top: 10px;">'
									+ '  <form style="padding-top: 10px;">'
									+ '    <div class="form-group">'
									+ '      <div>'
									+ '        <label class="control-label" for="' + inpUserAccount + '">使用者帳號：</label>'
									+ '        <input type="text" class="form-control" id="' + inpUserAccount + '" data-field-name="user_account" disabled="true">'
									+ '      </div>'
									+ '      <div>'
									+ '        <label class="control-label" for="' + inpUserName + '">使用者名稱：</label>'
									+ '        <input type="text" class="form-control" id="' + inpUserName + '" data-field-name="user_name" disabled="true">'
									+ '      </div>'
									+ '      <div>'
									+ '        <label class="control-label" for="' + inpUserPasswordId + '">密碼：</label>'
									+ '        <input type="password" class="form-control" id="' + inpUserPasswordId + '" data-field-name="user_password" disabled="true">'
									+ '      </div>'
									+ '      <div>'
									+ '        <label class="control-label" for="' + inpUserBirthdayId + '">出生日期：</label>'
									+ '        <div class="input-group date" id="' + dtpUserBirthday + '">'
									+ '          <input type="text" class="form-control" id="' + inpUserBirthdayId + '" data-field-name="user_birthday" readonly>'
									+ '          <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>'
									+ '        </div>'
									+ '      </div>'
									+ '      <div>'
									+ '        <label class="control-label" for="' + inpStopUsingDateId + '">停用日期：</label>'
									+ '        <div class="input-group date" id="' + dtpStopUsingDate + '">'
									+ '          <input type="text" class="form-control" id="' + inpStopUsingDateId + '" data-field-name="stop_using_date" readonly>'
									+ '          <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>'
									+ '        </div>'
									+ '      </div>'
									+ '      <div>'
									+ '        <label class="control-label" for="' + inpIdNum + '">身份證字號：</label>'
									+ '        <input type="text" class="form-control" id="' + inpIdNum + '" data-field-name="id_num" disabled="true">'
									+ '      </div>'
									+ '      <div>'
									+ '        <label class="control-label" for="' + inpRoleCode + '">角色：</label>'
									+ '        <div class="input-group">'
									+ '          <input type="text" class="form-control" id="' + inpRoleCode + '" data-field-name="role_code" placeholder="" disabled="true">'
									+ '          <span class="input-group-addon" id="' + inpRoleName + '"></span>'
									+ '          <span class="input-group-btn"><button class="btn btn-default" type="button" id="' + btnSelectRoleId + '" disabled="true">Choice</button></span>'
									+ '        </div> <!-- /input-group -->'
									+ '      </div>'
									+ '    </div>'
									+ '  </form>'
									+ '</div>';
									
					if (typeof options["insertMethod"] !== 'undefined') {
					
						originalMethod = options["insertMethod"];
						
						options["insertMethod"] = function(model, callback) {
						
							model.set('user_password', md5(jQuery('#' + inpUserPasswordId).val()));

							model.set('user_birthday', '');
							if (jQuery('#' + inpUserBirthdayId).val() !== '') model.set('user_birthday', moment(jQuery('#' + inpUserBirthdayId).val(), Configurations["ShowDateFormatString"], true).format(Configurations["SaveDateFormatString"]));
							
							originalMethod(model, callback);
						};
					}

					if (typeof options["updateMethod"] !== 'undefined') {
					
						originalMethod = options["updateMethod"];
						
						options["updateMethod"] = function(model, callback) {
						
							model.set('user_birthday', '');
							if (jQuery('#' + inpUserBirthdayId).val() !== '') model.set('user_birthday', moment(jQuery('#' + inpUserBirthdayId).val(), Configurations["ShowDateFormatString"], true).format(Configurations["SaveDateFormatString"]));
							
							originalMethod(model, callback);
						};
					}
					
					if (typeof options["deleteMethod"] !== 'undefined') {
					
						originalMethod = options["deleteMethod"];
						
						options["deleteMethod"] = function(model, callback) {
						
							model.set('user_birthday', '');
							if (jQuery('#' + inpUserBirthdayId).val() !== '') model.set('user_birthday', moment(jQuery('#' + inpUserBirthdayId).val(), Configurations["ShowDateFormatString"], true).format(Configurations["SaveDateFormatString"]));
							
							model.set('stop_using_date', '');
							if (jQuery('#' + inpStopUsingDateId).val() !== '') model.set('stop_using_date', moment(jQuery('#' + inpStopUsingDateId).val(), Configurations["ShowDateFormatString"], true).format(Configurations["SaveDateFormatString"]));

							originalMethod(model, callback);
						};
					}
					
					if (typeof options["onSelectRoleButtonClick"] !== 'undefined') this["onSelectRoleButtonClick"] = options["onSelectRoleButtonClick"];
					if (typeof options["setRoleName"] !== 'undefined') this["setRoleName"] = options["setRoleName"];
					
					options["onDeleteButtonClick"] = function() {
					
						jQuery('#' + inpStopUsingDateId).val(moment().format(Configurations["ShowDateFormatString"]));
					};

					// AncestorForm會觸發formStateChange，在呼叫父類別的initialize函數前，應先將標籤元件都先設定好，避免render時找不到元件的狀況。
					AncestorFormView.prototype.initialize.apply(this, arguments);
					
					this.appendRow(tag);
					
					jQuery('#' + dtpUserBirthday).datetimepicker({

						"format": Configurations["ShowDateFormatString"],
						"showClose": true,
						"showClear": true,
						"ignoreReadonly": true
					});

					jQuery('#' + dtpStopUsingDate).datetimepicker({

						"format": Configurations["ShowDateFormatString"],
						"showClose": true,
						"showClear": true,
						"ignoreReadonly": true
					});

					this.getContainer().on('click', function(event) {
						
						// event.preventDefault();

						var element = self.$el.find(event.target);

						if ((element.attr('id') === btnSelectRoleId) && (typeof element.attr('disabled') === 'undefined')) {

							if (typeof self["onSelectRoleButtonClick"] !== 'undefined') {

								self["onSelectRoleButtonClick"](function(vo) {

									self.$el.find('#' + inpRoleCode).val(vo.getRoleCode());
									self.$el.find('#' + inpRoleName).text(vo.getRoleName());
								});
							}
						}
					});
					
					this.setDeleteButtonCaption('停用');
					
					this.trigger('formStateChange');
				},
				"render": function() {

					AncestorFormView.prototype.render.apply(this, arguments);

					jQuery('#' + dtpUserBirthday).data("DateTimePicker").disable();
					jQuery('#' + dtpStopUsingDate).data("DateTimePicker").disable();

					jQuery('#' + inpRoleCode).attr('disabled', true);
					jQuery('#' + btnSelectRoleId).attr('disabled', true);

					if (this.getFormState() === 'init') {

						jQuery('#' + inpRoleName).text('');
					}
					else if (this.getFormState() === 'browse') {

						jQuery('#' + inpRoleName).text('');

						if (jQuery('#' + inpUserBirthdayId).val() !== '') {

							jQuery('#' + inpUserBirthdayId).val(moment(this.model.get('user_birthday'), Configurations["SaveDateFormatString"], true).format(Configurations["ShowDateFormatString"]));
						}

						if (jQuery('#' + inpStopUsingDateId).val() !== '') {

							jQuery('#' + inpStopUsingDateId).val(moment(this.model.get('stop_using_date'), Configurations["SaveDateFormatString"], true).format(Configurations["ShowDateFormatString"]));

							this.disableUpdateButton();
							this.disableDeleteButton();
						}

						if (typeof this.setRoleName === 'function') this.setRoleName(jQuery('#' + inpRoleCode).val(), jQuery('#' + inpRoleName));
					}
					else if (this.getFormState() === 'insert') {

						jQuery('#' + dtpUserBirthday).data("DateTimePicker").enable();

						jQuery('#' + btnSelectRoleId).attr('disabled', false);

						jQuery('#' + inpRoleName).text('');

						// default RoleCode

						jQuery('#' + inpUserAccount).focus().select();
					}
					else if (this.getFormState() === 'update') {

						jQuery('#' + inpUserAccount).attr('disabled', true);
						jQuery('#' + inpUserPasswordId).attr('disabled', true);

						jQuery('#' + dtpUserBirthday).data("DateTimePicker").enable();

						jQuery('#' + btnSelectRoleId).attr('disabled', false);

						jQuery('#' + inpUserName).focus().select();
					}
					else if (this.getFormState() === 'delete') {

						jQuery('#' + dtpStopUsingDate).data("DateTimePicker").enable();
					}
					
					if ((this.getFormState() === 'insert') || (this.getFormState() === 'update')) this.focusFirstInput();
				},
			};
			
			return AncestorFormView.extend(result);
		});
	}
})(this);