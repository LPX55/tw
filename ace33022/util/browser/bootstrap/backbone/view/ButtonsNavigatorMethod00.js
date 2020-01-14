/**
 *
 * @description ButtonsNavigatorMethod00
 *
 * @author ace
 *
 * @version 2016/12/05 初始版本。
 *
 * @see {@link http://requirejs.org/|RequireJS}
 * @see {@link https://www.openfoundry.org/tw/tech-column/8678-beginning-requirejs|初探 RequireJS - OpenFoundry}
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
 * @see {@link http://www.tutorialspoint.com/backbonejs/|BackboneJS Tutorial}
 * @see {@link https://addyosmani.com/backbone-fundamentals/|Developing Backbone.js Applications -}
 *
 */

(function(root) {

	function appendButton(container, obj) {

		var tag = '<li><a href="#">' + obj["caption"] + '</a></li>';
		var eleButton;
		
		if (typeof obj["btnName"] !== 'undefined') tag = '<li><a href="#" data-btn-name="' + obj["btnName"] + '">' + obj["caption"] + '</a></li>';

		eleButton = jQuery(tag);
		
		if (typeof obj["id"] !== 'undefined') eleButton.find('a').prop('id', obj["id"]);

		eleButton.on('click', function(event) {
		
			event.preventDefault();
			
			jQuery('.collapse').collapse('hide');
			
			if (eleButton.hasClass('disabled') === true) event.stopPropagation();
			
			if (typeof obj["click"] === 'function') obj["click"](event);
		});

		jQuery(container).append(eleButton);
	}

	var collapseId = 'collapse' + Math.random().toString(36).substr(2, 6);

  var result = {

		"initialize": function(options) {

			var tag = '<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">'
							+ '  <div class="container-fluid">'
							+ '    <div class="navbar-header">'
							+ '      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#' + collapseId + '">'
							+ '        <span class="sr-only">Toggle navigation</span>'
							+ '        <span class="icon-bar"></span>'
							+ '        <span class="icon-bar"></span>'
							+ '        <span class="icon-bar"></span>'
							+ '      </button>'
							+ '    </div>'
							+ '    <div class="collapse navbar-collapse" id="' + collapseId + '">'
							+ '      <ul class="nav navbar-nav"></ul>'
							+ '    </div>'
							+ '  </div>'
							+ '</nav>';
			this.$el = jQuery(tag);
			
			jQuery('body').append(this.$el);
			
			if (typeof options["brandName"] !== 'undefined') jQuery(this.$el).find('.navbar-header').append('<a class="navbar-brand" href="#">' + options["brandName"] + '</a>');
			
			// 由於改成自行產生元件附加的模式，Backbone的Bind Event模式無法運作，要自行處理。
			// this.$el.on('click', function(event) {});
			
			jQuery(this.$el).find('.navbar-brand').on('click', function(event) { event.preventDefault(); });
			
			if ((typeof options["buttonAddedTrigger"] !== 'undefined') && (typeof options["buttonAddedTrigger"] === 'function')) this.on('buttonAddedTrigger', options["buttonAddedTrigger"]);

			return this;
		},
		"getButtonArea": function() {

			return jQuery('#' + collapseId).find('ul')[0];
		},
		"getButton": function(btnName) {

			return jQuery(this.getButtonArea()).find('[data-btn-name="' + btnName + '"]');
		},
		"addButton": function(obj) {

			appendButton(this.getButtonArea(), obj);

			this.trigger('buttonAddedTrigger');

			return this;
		},
		"addDropdownMenu": function(obj) {

			var self = this;

			var tag = '<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + obj["menuCaption"] + '<span class="caret"></span></a>'
							+ '  <ul class="dropdown-menu"></ul>'
							+ '</li>';
			var eleMenu = jQuery(tag);

			jQuery(self.getButtonArea()).append(eleMenu);

			obj["items"].forEach(function(element, index) {

				appendButton(eleMenu.find('ul'), element);

				self.trigger('buttonAddedTrigger');
			});

			return self;
		},
		"setButtonCaption": function(btnName, caption) {

			var button = this.getButton(btnName);

			button.text(caption);

			return button;
		},
		"enableButton": function(btnName) {

			var button = this.getButton(btnName);

			button.parent().removeClass('disabled');

			return button;
		},
		"disableButton": function(btnName) {

			var button = this.getButton(btnName);

			button.parent().addClass('disabled');

			return button;
		}
	};

  if (typeof define === 'function') {

		define(["bootstrap"], function() {

      return result;
    });
  }
})(this);