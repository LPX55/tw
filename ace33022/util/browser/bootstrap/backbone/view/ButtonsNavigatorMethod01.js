/**
 *
 * @description ButtonsNavigatorMethod01
 *
 * @author ace
 *
 * @version 2016/12/05 初始版本。
 *
 */

(function(root) {

	var	result = {
			
		"render": function() {
		
			if (this.getFormState() === 'init') {

				this.enableInsertButton();
				this.enableSelectButton();
				this.disableUpdateButton();
				this.disableDeleteButton();
				this.disableConfirmButton();
				this.disableCancelButton();
				this.enableExitButton();
			}
			else if (this.getFormState() === 'browse') {

				this.enableInsertButton();
				this.enableSelectButton();
				this.enableUpdateButton();
				this.enableDeleteButton();
				this.disableConfirmButton();
				this.disableCancelButton();
				this.enableExitButton();
			}
			else if (this.getFormState() === 'insert') {

				this.disableInsertButton();
				this.disableSelectButton();
				this.disableUpdateButton();
				this.disableDeleteButton();
				this.enableConfirmButton();
				this.enableCancelButton();
				this.disableExitButton();
			}
			else if (this.getFormState() === 'update') {

				this.disableInsertButton();
				this.disableSelectButton();
				this.disableUpdateButton();
				this.disableDeleteButton();
				this.enableConfirmButton();
				this.enableCancelButton();
				this.disableExitButton();
			}
			else if (this.getFormState() === 'delete') {

				this.disableInsertButton();
				this.disableSelectButton();
				this.disableUpdateButton();
				this.disableDeleteButton();
				this.enableConfirmButton();
				this.enableCancelButton();
				this.disableExitButton();
			}
		},
		"setFormState": function(value) {

			formState = value;
			
			this.trigger('formStateChange');
			
			return this;
		},
		"getFormState": function() {

			return formState;
		},
		"setInsertButtonCaption": function(caption) {

			return this.setButtonCaption('btnInsert', caption);
		},
		"enableInsertButton": function() {

			return this.enableButton('btnInsert');
		},
		"disableInsertButton": function() {

			return this.disableButton('btnInsert');
		},
		"setSelectButtonCaption": function(caption) {

			return this.setButtonCaption('btnSelect', caption);
		},
		"enableSelectButton": function() {

			return this.enableButton('btnSelect');
		},
		"disableSelectButton": function() {

			return this.disableButton('btnSelect');
		},
		"setUpdateButtonCaption": function(caption) {

			return this.setButtonCaption('btnUpdate', caption);
		},
		"enableUpdateButton": function() {

			return this.enableButton('btnUpdate');
		},
		"disableUpdateButton": function() {

			return this.disableButton('btnUpdate');
		},
		"setDeleteButtonCaption": function(caption) {

			return this.setButtonCaption('btnDelete', caption);
		},
		"enableDeleteButton": function() {

			return this.enableButton('btnDelete');
		},
		"disableDeleteButton": function() {

			return this.disableButton('btnDelete');
		},
		"setConfirmButtonCaption": function(caption) {

			return this.setButtonCaption('btnConfirm', caption);
		},
		"enableConfirmButton": function() {

			return this.enableButton('btnConfirm');
		},
		"disableConfirmButton": function() {

			return this.disableButton('btnConfirm');
		},
		"setCancelButtonCaption": function(caption) {

			return this.setButtonCaption('btnCancel', caption);
		},
		"enableCancelButton": function() {

			return this.enableButton('btnCancel');
		},
		"disableCancelButton": function() {

			return this.disableButton('btnCancel');
		},
		"setExitButtonCaption": function(caption) {

			return this.setButtonCaption('btnExit', caption);
		},
		"enableExitButton": function() {

			return this.enableButton('btnExit');
		},
		"disableExitButton": function() {

			return this.disableButton('btnExit');
		}
	};

	var formState;
	
  if (typeof define === 'function') {

		define(["tw.ace33022.backbone.view.ButtonsNavigatorMethod00", "underscore"], function(ButtonsNavigatorMethod00) {
			
			_.extend(result, ButtonsNavigatorMethod00);
			
			result["initialize"] = function(options) {
			
				var self = this;
				
				ButtonsNavigatorMethod00.initialize.apply(this, arguments);
				
				this.addButton({
				
					"btnName": "btnInsert", 
					"caption": "新增"
				});
				
				this.addButton({
				
					"btnName": "btnSelect", 
					"caption": "查詢"
				});
				
				this.addButton({
				
					"btnName": "btnUpdate", 
					"caption": "修改"
				});
				
				this.addButton({
				
					"btnName": "btnDelete", 
					"caption": "刪除"
				});
				
				this.addButton({
				
					"btnName": "btnConfirm", 
					"caption": "確認"
				});
				
				this.addButton({
				
					"btnName": "btnCancel", 
					"caption": "取消"
				});
				
				this.addButton({
				
					"btnName": "btnExit",
					"caption": "離開"
				});
				
				formState = 'init';
				
				this.$el.on('click', function(event) {
				
					var formNowState = formState;
					
					var btnName = jQuery(self.getButtonArea()).find(event.target).attr('data-btn-name');
					
					if (typeof btnName !== 'undefined') {
					
						if (btnName === 'btnInsert') {

							formState = 'insert';
						}
						else if (btnName === 'btnUpdate') {
				
							formState = 'update';
						}
						else if (btnName === 'btnDelete') {

							formState = 'delete';
						}
						else if (btnName === 'btnCancel') {
					
							if (self.getFormState() === 'insert') {
					
								formState = 'init';
							}
							else if (self.getFormState() === 'update') {

								formState = 'browse';
							}
							else if (self.getFormState() === 'delete') {

								formState = 'browse';
							}
						}
						
						self.trigger('navButtonClickTrigger', btnName);
						
						if (formNowState !== formState) self.setFormState(formState);	// formState改變時才再觸發！
					}
				});
				
				this.on('navButtonClickTrigger', this.navButtonClickTrigger);
				this.on('formStateChange', this.render);
				
				return this;
			};

      return result;
    });
  }
})(this);