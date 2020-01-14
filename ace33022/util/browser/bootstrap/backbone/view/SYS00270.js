/**
 *
 * SYS00040
 *
 * @description
 *
 * @author ace
 *
 * @version 2016/12/05 初始版本。
 *
 * @see <a href="http://underscorejs.org/">Underscore.js</a>
 * @see <a href="https://github.com/jashkenas/underscore">jashkenas/underscore: JavaScript's utility _ belt</a>
 *
 * @comment
 *
 * @todo
 *
 */

(function(root) {

	var inpDrinkCodeId = 'inpDrinkCode' + Math.random().toString(36).substr(2, 6);
	var inpDrinkNameId = 'inpDrinkName' + Math.random().toString(36).substr(2, 6);
	var inpSizeGroupCodeId = 'inpSizeGroupCode' + Math.random().toString(36).substr(2, 6);
	var inpSugarGroupCodeId = 'inpSugarGroupCode' + Math.random().toString(36).substr(2, 6);
	var inpIceDosageGroupCodeId = 'inpIceDosageGroupCode' + Math.random().toString(36).substr(2, 6);
	
	var	result;
	
  if (typeof define === 'function') {

		define(["tw.ace33022.util.browser.FormUtils", "tw.ace33022.backbone.view.AncestorForm02", "underscore"], function(FormUtils, AncestorFormView) {

			result = {

				"initialize": function(options) {
				
					var self = this;
					
					var tag = '<div class="row" style="margin-top: 10px;">'
									+	'  <div class="form-group">'
									+ '    <div>'
									+ '      <input type="button" class="btn btn-primary btn-lg" data-btn-name="btnExpandToProducts" value="展開商品" disabled />'
									+ '    </div>'
									+ '    <div>'
									+ '      <label class="control-label" for="' + inpDrinkCodeId + '">飲料代碼：</label>'
									+ '      <input type="text" class="form-control" id="' + inpDrinkCodeId + '" data-field-name="drink_code" disabled />'
									+ '    </div>'
									+ '    <div>'
									+ '      <label class="control-label" for="' + inpDrinkNameId + '">飲料名稱：</label>'
									+ '      <input type="text" class="form-control" id="' + inpDrinkNameId + '" data-field-name="drink_name" disabled />'
									+ '    </div>'
									+ '    <div>'
									+ '      <label class="control-label" for="' + inpSizeGroupCodeId + '">尺寸群組：</label>'
									+ '      <div class="input-group">'
									+ '        <input type="text" class="form-control" id="' + inpSizeGroupCodeId + '" data-field-name="size_group_code" disabled />'
									+ '        <span class="input-group-addon" data-show="size_group_name"></span>'
									+ '        <span class="input-group-btn"><input type="button" class="btn btn-primary" data-btn-name="btnSizeGroupSelect" value="Choice" disabled /></span>'
									+ '      </div>'
									+ '    </div>'
									+	'    <div>'
									+ '      <label class="control-label" for="' + inpSugarGroupCodeId + '">甜度群組：</label>'
									+ '      <div class="input-group">'
									+ '        <input type="text" class="form-control" id="' + inpSugarGroupCodeId + '" data-field-name="sugar_group_code" disabled />'
									+ '        <span class="input-group-addon" data-show="sugar_group_name"></span>'
									+ '        <span class="input-group-btn"><input type="button" class="btn btn-primary" data-btn-name="btnSugarGroupSelect" value="Choice" disabled /></span>'
									+ '      </div>'
									+ '    </div>'
									+ '    <div>'
									+ '      <label class="control-label" for="' + inpIceDosageGroupCodeId + '">冰塊用量群組：</label>'
									+ '      <div class="input-group">'
									+ '        <input type="text" class="form-control" id="' + inpIceDosageGroupCodeId + '" data-field-name="ice_dosage_group_code" disabled />'
									+ '        <span class="input-group-addon" data-show="ice_dosage_group_name"></span>'
									+ '        <span class="input-group-btn"><input type="button" class="btn btn-primary" data-btn-name="btnIceDosageGroupSelect" value="Choice" disabled /></span>'
									+ '      </div>'
									+ '    </div>'
									+ '    <div class="thumbnail">'
									+ '      <input type="button" class="btn btn-primary" data-btn-name="btnDrinkImgBase64" value="ChoiceImgFile" disabled />'
									+ '      <input type="button" class="btn btn-primary" data-btn-name="btnClearDrinkImgBase64" value="ClearImg" disabled />'
									+ '      <img data-field-name="drink_img_base64" />'
									+ '    </div>'
									+ '  </div>'
									+ '</div>';
									
					// AncestorForm會觸發formStateChange，在呼叫父類別的initialize函數前，應先將標籤元件都先設定好，避免render時找不到元件的狀況。
					AncestorFormView.prototype.initialize.apply(self, arguments);
					
					self.appendRow(tag);
					
					if (typeof options["getArrSizeGroupsVO"] !== 'undefined') self["getArrSizeGroupsVO"] = options["getArrSizeGroupsVO"];
					if (typeof options["getArrSugarGroupsVO"] !== 'undefined') self["getArrSugarGroupsVO"] = options["getArrSugarGroupsVO"];
					if (typeof options["getArrIceDosageGroupsVO"] !== 'undefined') self["getArrIceDosageGroupsVO"] = options["getArrIceDosageGroupsVO"];
					if (typeof options["getArrDrinksVO"] !== 'undefined') self["getArrDrinksVO"] = options["getArrDrinksVO"];
					
					if (typeof options["expandToProducts"] !== 'undefined') self["expandToProducts"] = options["expandToProducts"];
					
					self.getContainer().on('click', function(event) {
			
						var element = jQuery(event.target);
						
						if (typeof element.attr('disabled') === 'undefined') {
						
							if (element.attr('data-btn-name') === 'btnSizeGroupSelect') {

								FormUtils.selectSizeGroupsModal(self.getArrSizeGroupsVO(), function(sizeGroupCode) {
					
									var vo;
					
									if (sizeGroupCode != null) {
					
										self.$el.find('[data-field-name="size_group_code"]').val(sizeGroupCode);
										vo = _.find(self.getArrSizeGroupsVO(), function(vo) {return vo.getSizeGroupCode() == sizeGroupCode;});
							
										if (typeof vo !== 'undefined') self.$el.find('[data-show="size_group_name"]').text(vo.getSizeGroupName());
									}
								});
							}
							else if (element.attr('data-btn-name') === 'btnSugarGroupSelect') {
							
								FormUtils.selectSugarGroupsModal(self.getArrSugarGroupsVO(), function(sugarGroupCode) {
								
									var vo;
									
									if (sugarGroupCode != null) {
								
										self.$el.find('[data-field-name="sugar_group_code"]').val(sugarGroupCode);
										vo = root._.find(self.getArrSugarGroupsVO(), function(vo) {return vo.getSugarGroupCode() == sugarGroupCode;});
										
										if (typeof vo !== 'undefined') self.$el.find('[data-show="sugar_group_name"]').text(vo.getSugarGroupName());
									}
								});
							}
							else if (element.attr('data-btn-name') === 'btnIceDosageGroupSelect') {
							
								FormUtils.selectIceDosageGroupsModal(self.getArrIceDosageGroupsVO(), function(iceDosageGroupCode) {
								
									var vo;
									
									if (iceDosageGroupCode != null) {
								
										self.$el.find('[data-field-name="ice_dosage_group_code"]').val(iceDosageGroupCode);
										vo = root._.find(self.getArrIceDosageGroupsVO(), function(vo) {return vo.getIceDosageGroupCode() == iceDosageGroupCode;});
										
										if (typeof vo !== 'undefined') self.$el.find('[data-show="ice_dosage_group_name"]').text(vo.getIceDosageGroupName());
									}
								});
							}
							else if (element.attr('data-btn-name') === 'btnDrinkImgBase64') {
							
								FormUtils.selectFileModal('選取飲料圖檔', 'image/*', function(file) {
							
									var reader = new FileReader();
								
									reader.onload = function(event) { 

										self.$el.find('[data-field-name="drink_img_base64"]').attr('src', event.target.result);
									};
								
									if (file != null) reader.readAsDataURL(file);
								});
							}
							else if (element.attr('data-btn-name') === 'btnClearDrinkImgBase64') {
							
								self.$el.find('[data-field-name="drink_img_base64"]').attr('src', '');
							}
							else if (element.attr('data-btn-name') === 'btnExpandToProducts') {
							
								if (typeof self["expandToProducts"] !== 'undefined') {
							
									self["expandToProducts"](event, self.model, function(callback, model) {
								
										self.render();
									});
								}
							}
						}
					});
					
					self.trigger('formStateChange');
					
					return self;
				},
				"navButtonClickTrigger": function(btnName) {
				
					var self = this;

					var booCheckFieldResult = true;

					function checkFieldValue() {

						if ((booCheckFieldResult == true) && (jQuery('#' + inpDrinkCodeId).val() == '')) {

							booCheckFieldResult = false;

							FormUtils.showMessage('代碼不可空白！', function() { jQuery('#' + inpDrinkCodeId).focus(); });
						}
						
						if ((booCheckFieldResult == true) && (jQuery('#' + inpDrinkNameId).val() == '')) {

							booCheckFieldResult = false;

							FormUtils.showMessage('名稱不可空白！', function() { jQuery('#' + inpDrinkNameId).focus(); });
						}
						
						if ((booCheckFieldResult == true) && (jQuery('#' + inpSizeGroupCodeId).val() == '')) {

							booCheckFieldResult = false;

							FormUtils.showMessage('尺寸不可空白！', function() { self.$el.find('[data-btn-name="btnSizeGroupSelect"]').focus(); });
						}
						
						if ((booCheckFieldResult == true) && (jQuery('#' + inpSugarGroupCodeId).val() == '')) {

							booCheckFieldResult = false;

							FormUtils.showMessage('甜度不可空白！', function() { self.$el.find('[data-btn-name="btnSugarGroupSelect"]').focus(); });
						}
						
						if ((booCheckFieldResult == true) && (jQuery('#' + inpIceDosageGroupCodeId).val() == '')) {

							booCheckFieldResult = false;

							FormUtils.showMessage('冰塊用量不可空白！', function() { self.$el.find('[data-btn-name="btnIceDosageGroupSelect"]').focus(); });
						}
					}
					
					if (btnName === 'btnConfirm') {

						if ((self.getFormState() === 'insert') || (self.getFormState() === 'update')) checkFieldValue();

						if (booCheckFieldResult == true) AncestorFormView.prototype.navButtonClickTrigger.apply(this, arguments);
					}
					else {

						AncestorFormView.prototype.navButtonClickTrigger.apply(this, arguments);
					}
				},
				"render": function() {
				
					var self = this;
				
					var sizeGroups, sugarGroups, iceDosageGroups;
					
					var btnSizeGroupSelect = self.getContainer().find('[data-btn-name="btnSizeGroupSelect"]');
					var btnSugarGroupSelect = self.getContainer().find('[data-btn-name="btnSugarGroupSelect"]');
					var btnIceDosageGroupSelect = self.getContainer().find('[data-btn-name="btnIceDosageGroupSelect"]');
					var btnExpandToProducts = self.getContainer().find('[data-btn-name="btnExpandToProducts"]');
					var btnDrinkImgBase64 = self.getContainer().find('[data-btn-name="btnDrinkImgBase64"]');
					var btnClearDrinkImgBase64 = self.getContainer().find('[data-btn-name="btnClearDrinkImgBase64"]');
				
					var sizeGroupName = self.getContainer().find('[data-show="size_group_name"]');
					var sugarGroupName = self.getContainer().find('[data-show="sugar_group_name"]');
					var iceDosageGroupName = self.getContainer().find('[data-show="ice_dosage_group_name"]');
					
					AncestorFormView.prototype.render.apply(self, arguments);
				
					btnSizeGroupSelect.attr('disabled', true);
					btnSugarGroupSelect.attr('disabled', true);
					btnIceDosageGroupSelect.attr('disabled', true);
					btnExpandToProducts.attr('disabled', true);
					btnDrinkImgBase64.attr('disabled', true);
					btnClearDrinkImgBase64.attr('disabled', true);
					
					self.getContainer().find('[data-field-name="size_group_code"]').prop('disabled', true);
					self.getContainer().find('[data-field-name="sugar_group_code"]').prop('disabled', true);
					self.getContainer().find('[data-field-name="ice_dosage_group_code"]').prop('disabled', true);
					
					if (self.getFormState() === 'init') {
					
						sizeGroupName.text('');
						sugarGroupName.text('');
						iceDosageGroupName.text('');
			
						self.getContainer().find('[data-field-name="drink_img_base64"]').attr('src', '');
					}
					else if (self.getFormState() === 'browse') {
					
						if (typeof self.model !== 'undefined') {
						
							if (self.model.get('expand_product_flag') === '0') {
							
								btnExpandToProducts.attr('disabled', false);
							}
							else if (self.model.get('expand_product_flag') === '1') {
							
								self.disableUpdateButton();
								self.disableDeleteButton();
							}
							
							sizeGroups = root._.find(self.getArrSizeGroupsVO(), function(vo) {return vo.getSizeGroupCode() == self.model.get('size_group_code');});
							if (sizeGroups) sizeGroupName.text(sizeGroups.getSizeGroupName());
					
							sugarGroups = root._.find(self.getArrSugarGroupsVO(), function(vo) {return vo.getSugarGroupCode() == self.model.get('sugar_group_code');});
							if (sugarGroups) sugarGroupName.text(sugarGroups.getSugarGroupName());
							
							iceDosageGroups = root._.find(self.getArrIceDosageGroupsVO(), function(vo) {return vo.getIceDosageGroupCode() == self.model.get('ice_dosage_group_code');});
							if (iceDosageGroups) iceDosageGroupName.text(iceDosageGroups.getIceDosageGroupName());
							
							self.getContainer().find('[data-field-name="drink_img_base64"]').attr('src', self.model.get('drink_img_base64'));
						}
					}
					else if (self.getFormState() === 'insert') {

						self.getContainer().find('[data-field-name="drink_code"]').prop('disabled', false);
						
						btnSizeGroupSelect.attr('disabled', false);
						btnSugarGroupSelect.attr('disabled', false);
						btnIceDosageGroupSelect.attr('disabled', false);
						btnDrinkImgBase64.attr('disabled', false);
						btnClearDrinkImgBase64.attr('disabled', false);
						
						sizeGroupName.text('');
						sugarGroupName.text('');
						iceDosageGroupName.text('');
						
						self.getContainer().find('[data-field-name="drink_img_base64"]').attr('src', '');
					}
					else if (self.getFormState() === 'update') {

						self.getContainer().find('[data-field-name="drink_code"]').prop('disabled', true);
						
						btnSizeGroupSelect.attr('disabled', false);
						btnSugarGroupSelect.attr('disabled', false);
						btnIceDosageGroupSelect.attr('disabled', false);
						btnDrinkImgBase64.attr('disabled', false);
						btnClearDrinkImgBase64.attr('disabled', false);
					}
					else if (self.getFormState() === 'delete') {
					
						self.clickNavigatorButton('btnConfirm');
					}
					
					if ((self.getFormState() === 'insert') || (self.getFormState() === 'update')) self.focusFirstInput();
				}
			};
			
			return AncestorFormView.extend(result);
    });
  }
})(this);