/**
 *
 * @description SYS00010
 *
 * @author ace
 *
 * @version 2016/12/05 初始版本。
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link https://jquery.com/|jQuery}
 *
 * @see {@link https://getbootstrap.com/|Bootstrap · The most popular HTML, CSS, and JS library in the world.}
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 * @see {@link http://backbonejs.org/|Backbone.js}
 * @see {@link https://github.com/jashkenas/backbone|jashkenas/backbone: Give your JS App some Backbone with Models, Views, Collections, and Events}
 * @see {@link https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites|Tutorials, blog posts and example sites · jashkenas/backbone Wiki}
 *
 */

(function(root) {

	var inpProgramCodeId = 'inpProgramCode' + Math.random().toString(36).substr(2, 6);
	var inpProgramNameId = 'inpProgramName' + Math.random().toString(36).substr(2, 6);
	var inpForceLoginId = 'inpForceLogin' + Math.random().toString(36).substr(2, 6);
	
	var result;
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.util.browser.FormUtils", "tw.ace33022.backbone.view.AncestorForm02"], function(FormUtils, AncestorFormView) {
		
			result = {

				"initialize": function(options) {

					var tag = '<div class="row" style="margin-top: 5px;">'
									+ '  <form class="form-horizontal" style="padding-top: 10px;">'
									+ '    <div class="form-group">'
									+ '      <label class="control-label col-sm-2" for="' + inpProgramCodeId + '">程式代碼：</label>'
									+ '	     <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpProgramCodeId + '" data-field-name="program_code" disabled>'
									+ '      </div>'
									+ '      <label class="control-label col-sm-2" for="' + inpProgramNameId + '">程式名稱：</label>'
									+ '      <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpProgramNameId + '" data-field-name="program_name" disabled>'
									+ '      </div>'
									+ '    </div>'
									+ '    <div class="form-check">'
									+ '      <div class="col-sm-offset-2 col-sm-10">'
									+ '        <input type="checkbox" id="' + inpForceLoginId + '" class="form-check-input" value="" data-field-name="force_login" disabled>'
									+ '        <label class="checkbox-label" for="' + inpForceLoginId + '">登入才可執行程式</label>'
									+ '      </div>'
									+ '    </div>'
									+ '  </form>'
									+ '</div>';
									
					// AncestorForm會觸發formStateChange，在呼叫父類別的initialize函數前，應先將標籤元件都先設定好，避免render時找不到元件的狀況。
					AncestorFormView.prototype.initialize.apply(this, arguments);
					
					this.appendRow(tag);
					
					this.getContainer().on('click', function(event) {
			
						if (jQuery(event.target).prop('id') == inpForceLoginId) {
						
							jQuery('#' + inpForceLoginId).prop('value', 'N');
							if (jQuery('#' + inpForceLoginId).prop('checked') == true) jQuery('#' + inpForceLoginId).prop('value', 'Y');
						}
					});
					
					this.trigger('formStateChange');
					
					return this;
				},
				"render": function() {
				
					AncestorFormView.prototype.render.apply(this, arguments);
					
					jQuery('#' + inpForceLoginId).prop('disabled', true);
					
					if (this.getFormState() === 'init') {
					
						jQuery('#' + inpForceLoginId).prop('value', 'N');
						jQuery('#' + inpForceLoginId).prop('checked', false);
					}
					else if (this.getFormState() === 'browse') {
					
						jQuery('#' + inpForceLoginId).prop('value', 'N');
						jQuery('#' + inpForceLoginId).prop('checked', false);
						
						if ((typeof this.model !== 'undefined') && (this.model.get('force_login') === 'Y')) {
						
							jQuery('#' + inpForceLoginId).prop('value', 'Y');
							jQuery('#' + inpForceLoginId).prop('checked', true);
						}
					}
					else if (this.getFormState() === 'insert') {
					
						jQuery('#' + inpForceLoginId).prop('value', 'N');
						jQuery('#' + inpForceLoginId).prop('checked', false);

						jQuery('#' + inpForceLoginId).prop('disabled', false);
					}
					else if (this.getFormState() === 'update') {
					
						jQuery('#' + inpForceLoginId).prop('disabled', false);
						
						jQuery('#' + inpProgramCodeId).prop('disabled', true);
					}
					
					if ((this.getFormState() === 'insert') || (this.getFormState() === 'update')) this.focusFirstInput();
				}
			};
			
			return AncestorFormView.extend(result);
		});
	}
})(this);