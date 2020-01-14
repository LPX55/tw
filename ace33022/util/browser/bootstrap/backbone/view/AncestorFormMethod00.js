/**
 *
 * @description AncestorFormMethod
 *
 * @author ace
 *
 * @version 2018/09/09 初始版本。
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
 * @see {@link https://stackoverflow.com/questions/16646526/what-is-the-difference-between-el-and-el-in-backbone-js-views|javascript - What is the difference between $el and el in Backbone.js views? - Stack Overflow}
 *
 * @see {@link http://kimix.name/bootstrap-rwd-%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95%E5%8F%8A%E5%8E%9F%E7%90%86/|Bootstrap RWD 使用方法及原理 — Kimix 金觀點}
 * @see {@link http://cythilya.blogspot.com/2015/04/bootstrap-grid-system.html|利用Bootstrap Grid System排版的學習筆記}
 * @see {@link https://bootstrap.hexschool.com/docs/4.0/content/images/|圖片 (Images) · Bootstrap 4 繁體中文手冊 [六角學院譯]}
 * @see {@link https://blog.csdn.net/sinat_27088253/article/details/50985432|bootstrap中container类和container-fluid类的区别 - Hey firefly - CSDN博客}
 * @see {@link https://codepen.io/yipingliao/pen/zvZzgY|Bootstrap container vs. container-fluid}
 *
 */

(function(root) {

	var result = {
	
		"initialize": function(options) {
		
			// this.$el = jQuery('<div class="container-fluid" style="margin-top: 50px;"></div>');
			// this.$el = jQuery('<div class="container-fluid" style="padding-top: 50px;"></div>');
			
			this.clearContainer();
		},
		"clearContainer": function() {
		
			// if (this.$el.hasClass('container')) this.$el.remove();
			// this.$el = jQuery('<div class="container" style="padding-top: 50px;"></div>');
			
			if (this.$el.hasClass('container-fluid')) this.$el.remove();
			this.$el = jQuery('<div class="container-fluid" style="padding-top: 50px;"></div>');
			
			jQuery('body').append(this.$el);
		},
		"getContainer": function() {
		
			return this.$el;
		},
		"appendRow": function(row) {
		
			this.getContainer().append(row);
		}
	};

  if (typeof define === 'function') {

    define(["bootstrap"], function() {

			return result;
    });
  }
})(this);