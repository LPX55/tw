/**
 *
 * @description BAS00010
 *
 * @version 2016/12/05 ace 初始版本。
 *
 * @author ace
 *
 * @see <a href="http://requirejs.org/">RequireJS</a>
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 *
 * @see <a href="http://underscorejs.org/">Underscore.js</a>
 * @see <a href="https://github.com/jashkenas/underscore">jashkenas/underscore: JavaScript's utility _ belt</a>
 * @see <a href="http://backbonejs.org/">Backbone.js</a>
 * @see <a href="https://github.com/jashkenas/backbone">jashkenas/backbone: Give your JS App some Backbone with Models, Views, Collections, and Events</a>
 * @see <a href="https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites">Tutorials, blog posts and example sites · jashkenas/backbone Wiki</a>
 *
 * @see <a href="https://getbootstrap.com/">Bootstrap · The most popular HTML, CSS, and JS library in the world.</a>
 *
 * @see <a href="http://www.tutorialspoint.com/backbonejs/">BackboneJS Tutorial</a>
 * @see <a href="https://addyosmani.com/backbone-fundamentals/">Developing Backbone.js Applications -</a>
 *
 * @see <a href="http://dreamerslab.com/blog/tw/javascript-call-and-apply/">Javascript call 以及 apply | DreamersLab</a>
 * @see <a href="https://stackoverflow.com/questions/10093245/extending-custom-backbone-view">javascript - Extending Custom Backbone View - Stack Overflow</a>
 * @see <a href="https://stackoverflow.com/questions/9403675/backbone-view-inherit-and-extend-events-from-parent">javascript - Backbone View: Inherit and extend events from parent - Stack Overflow</a>
 *
 * @comment
 *
 * @todo
 *
 */

(function(root) {

	var tag = '<form class="form-horizontal" style="padding-top: 10px;">'
					+ '  <div class="form-group">'
					+ '    <div>'
					+ '      <label class="control-label" for="inpUserAccount">使用者帳號：</label>'
					+ '      <input type="text" class="form-control" id="inpUserAccount" data-field-name="user_account" disabled="true">'
					+ '    </div>'
					+ '    <div>'
					+ '      <label class="control-label" for="inpUserName">使用者名稱：</label>'
					+ '      <input type="text" class="form-control" id="inpUserName" data-field-name="user_name" disabled="true">'
					+ '    </div>'
					+ '    <div>'
					+ '      <label class="control-label" for="inpUserPassword">密碼：</label>'
					+ '      <input type="password" class="form-control" id="inpUserPassword" data-field-name="user_password" disabled="true">'
					+ '    </div>'
					+ '    <div>'
					+ '      <label class="control-label" for="inpUserBirthday">出生日期：</label>'
					+ '      <div class="input-group date" id="dtpUserBirthday">'
					+ '        <input type="text" class="form-control" id="inpUserBirthday" data-field-name="user_birthday" readonly>'
					+ '        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>'
					+ '      </div>'
					+ '    </div>'
					+ '    <div>'
					+ '      <label class="control-label" for="inpIdNum">身份證字號：</label>'
					+ '      <input type="text" class="form-control" id="inpIdNum" data-field-name="id_num" disabled="true">'
					+ '    </div>'
					+ '  </div>'
				  + '</form>';

  if (typeof define === 'function') {

    define(["tw.ace33022.backbone.view.AncestorForm01", "moment", "jquery", "bootstrap", "bootstrap-datetimepicker"], function(AncestorFormView, moment) {

			var result = AncestorFormView.extend({
			
				"initialize": function(options) {
				
					var self = this;
					
					jQuery(this.el).append(tag);
					
					if (typeof options["onSelectRoleButtonClick"] !== 'undefined') this["onSelectRoleButtonClick"] = options["onSelectRoleButtonClick"];
					
					jQuery(this.el).find('#dtpUserBirthday').datetimepicker({
						
						"format": "YYYY/MM/DD",
						"showClose": true,
						"showClear": true,
						"ignoreReadonly": true
					});
					
					this.constructor.__super__.initialize.call(this, options);
				
					this.setDeleteButtonCaption('停用');
					
					return this;
				},
				"render": function() {
				
					var self = this;
					
					this.constructor.__super__.render.call(this);
					
					this.disableDeleteButton();	// 不提供刪除功能！
					
					jQuery(this.el).find('#dtpUserBirthday').data("DateTimePicker").disable();
					
					jQuery(this.el).find('#inpRoleCode').attr('disabled', true);
					
					if (this.getFormState() === 'init') {
					
						jQuery(this.el).find('#inpRoleName').text('');
					}
					else if (this.getFormState() === 'browse') {
					
						jQuery(this.el).find('#inpRoleName').text('');
						
						if (jQuery(this.el).find('#inpUserBirthday').val() !== '') {
						
							jQuery(this.el).find('#inpUserBirthday').val(moment(self.model.get('user_birthday'), 'YYYYMMDD', true).format('YYYY/MM/DD'));
						}
						
						this.setRoleName(jQuery(self.el).find('#inpRoleCode').val());
					}
					else if (this.getFormState() === 'insert') {
					
						jQuery(this.el).find('#dtpUserBirthday').data("DateTimePicker").enable();
							
						jQuery(this.el).find('#inpRoleName').text('');
						
						// default RoleCode
						
						jQuery(this.el).find('#inpUserAccount').focus().select();
					}
					else if (this.getFormState() === 'update') {

						jQuery(this.el).find('#inpUserAccount').attr('disabled', true);
						jQuery(this.el).find('#inpUserPassword').attr('disabled', true);
						
						jQuery(this.el).find('#dtpUserBirthday').data("DateTimePicker").enable();
							
						jQuery(this.el).find('#inpUserName').focus().select();
					}
				},
				"events": {
				
					"click": function(e) {
					
						var self = this;
						
						var element = jQuery(this.el).find(e.target);
						
						this.constructor.__super__.events.click.call(this, e);
					},
					"change": function(e) {
					
						var element = jQuery(this.el).find(e.target);
					}
				}
			});
			
			return result;
    });
  }
})(this);