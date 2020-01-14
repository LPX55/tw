/**
 *
 * @description AncestorFormMethod01
 *
 * @author ace
 *
 * @version 2018/09/09 初始版本。
 *
 * @see {@link https://stackoverflow.com/questions/34868251/why-does-backbone-use-the-extend-method-throughout|javascript - Why does backbone use the _.extend() method throughout? - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/10093245/extending-custom-backbone-view|javascript - Extending Custom Backbone View - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/9403675/backbone-view-inherit-and-extend-events-from-parent|javascript - Backbone View: Inherit and extend events from parent - Stack Overflow}
 *
 */

(function(root) {

	var result = {

		"focusFirstInput": function() {

			var index;

			var inputs = this.getContainer().find('input');

			for (index = 0; index < inputs.size(); index++) {

				if (jQuery(inputs[index]).prop('disabled') == false) {

					jQuery(inputs[index]).focus().select();

					break;
				}
			}
		},
		"navButtonClickTrigger": function(btnName) {
		
			var self = this;

			var inputs = self.$el.find('input');

			var fieldName;

			var index;
			var tmpModel;
			
			if ((btnName === 'btnSelect')) {

				if ((self.getFormState() === 'init') || (self.getFormState() === 'browse')) {

					if (typeof self["onSelectButtonClick"] !== 'undefined') {

						self["onSelectButtonClick"](event, function(formState, model) {
						
							if (typeof model !== 'undefined') self.model = model;

							self.setFormState(formState);
						});
					}
				}
			}
			else if ((btnName === 'btnInsert') && (self.getFormState() === 'insert')) {

				if (typeof self.model !== 'undefined') delete self.model;

				if (typeof self["onInsertButtonClick"] !== 'undefined') self["onInsertButtonClick"]();
			}
			else if ((btnName === 'btnDelete') && (self.getFormState() === 'delete')) {

				if (typeof self["onDeleteButtonClick"] !== 'undefined') self["onDeleteButtonClick"]();
			}
			else if (btnName === 'btnConfirm') {

				if ((self.getFormState() === 'insert') && (typeof self["insertMethod"] !== 'undefined')) {

					tmpModel = new self.originalModel({});

					for (index = 0; index < inputs.size(); index++) {

						fieldName = jQuery(inputs[index]).attr('data-field-name');
						if (typeof fieldName !== 'undefined') tmpModel.set(fieldName, jQuery(inputs[index]).val());
					}

					self["insertMethod"](tmpModel, function(formState, model) {

						if (formState == 'browse') {

							self.model = model;

							self.setFormState(formState);
						}
						else if (formState == 'insert') {

							self.focusFirstInput();
						}
					});
				}
				else if ((self.getFormState() === 'update') && (typeof self["updateMethod"] !== 'undefined')) {

					for (index = 0; index < inputs.size(); index++) {

						fieldName = jQuery(inputs[index]).attr('data-field-name');
						if (typeof fieldName !== 'undefined') self.model.set(fieldName, jQuery(inputs[index]).val());
					}
					
					self["updateMethod"](self.model, function(formState, model) {

						self.setFormState(formState);
					});
				}
				else if ((self.getFormState() === 'delete') && (typeof self["deleteMethod"] !== 'undefined')) {

					self["deleteMethod"](self.model, function(formState, model) {

						self.setFormState(formState);
					});
				}
				else {

					self.setFormState('init');
				}
			}
			else if (btnName === 'btnCancel') {

				if ((self.getFormState() === 'init') && (typeof self.model !== 'undefined')) delete self.model;
			}
			else if (btnName === 'btnExit') {

				if ((self.getFormState() === 'init') || (self.getFormState() === 'browse')) {

					if (typeof self["onExitButtonClick"] !== 'undefined') self["onExitButtonClick"](event);
				}
			}
		},
		"render": function() {

			var inputs = this.$el.find('input');

			var index;
			var fieldName;
			
			inputs.prop('disabled', true);

			if (this.getFormState() === 'init') {

				for (index = 0; index < inputs.size(); index++) {

					fieldName = jQuery(inputs[index]).attr('data-field-name');
					if (typeof fieldName !== 'undefined') jQuery(inputs[index]).val('');
				}
			}
			else if (this.getFormState() === 'browse') {

				if (typeof this.model !== 'undefined') {

					for (index = 0; index < inputs.size(); index++) {

						fieldName = jQuery(inputs[index]).attr('data-field-name');
						if (typeof fieldName !== 'undefined') jQuery(inputs[index]).val(this.model.get(fieldName));
					}
				}
			}
			else if (this.getFormState() === 'insert') {

				inputs.prop('disabled', false);

				for (index = 0; index < inputs.size(); index++) {

					fieldName = jQuery(inputs[index]).attr('data-field-name');
					if (typeof fieldName !== 'undefined') jQuery(inputs[index]).val('');
				}
			}
			else if (this.getFormState() === 'update') {

				inputs.prop('disabled', false);
			}
		}
	};

  if (typeof define === 'function') {

    define(["tw.ace33022.backbone.view.AncestorFormMethod00", "underscore"], function(AncestorFormMethod00) {
			
			_.extend(result, AncestorFormMethod00);
			
			return result;
    });
  }
	else {
	
		tw.ace33022.backbone.view.AncestorFormMethod01 = result;
	}
})(this);