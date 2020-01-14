/**
 *
 * @description AncestorForm00
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
 * @see {@link https://addyosmani.com/backbone-fundamentals/|Developing Backbone.js Applications -}
 * @see {@link https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites|Tutorials, blog posts and example sites · jashkenas/backbone Wiki}
 *
 * @see {@link http://rahulrajatsingh.com/2014/07/backbone-tutorial-part-1-introduction-to-backbone-js/|BackBone Tutorial – Part 1: Introduction to Backbone.Js – Rahul Rajat Singh's blog}
 * @see {@link http://rahulrajatsingh.com/2014/07/backbone-tutorial-part-2-understanding-the-basics-of-backbone-models/|BackBone Tutorial – Part 2: Understanding the basics of Backbone Models – Rahul Rajat Singh's blog}
 * @see {@link http://rahulrajatsingh.com/2014/07/backbone-tutorial-part-3-more-about-backbone-models/|BackBone Tutorial – Part 3: More about Backbone Models – Rahul Rajat Singh's blog}
 * @see {@link http://rahulrajatsingh.com/2014/07/backbone-tutorial-part-4-crud-operations-on-backbonejs-models-using-http-rest-service/|BackBone Tutorial – Part 4: CRUD Operations on BackboneJs Models using HTTP REST Service – Rahul Rajat Singh's blog}
 * @see {@link http://rahulrajatsingh.com/2014/07/backbone-tutorial-part-5-understanding-backbone-js-collections/|BackBone Tutorial – Part 5: Understanding Backbone.js Collections – Rahul Rajat Singh's blog}
 * @see {@link http://rahulrajatsingh.com/2014/07/backbone-tutorial-part-6-understanding-backbone-js-views/|BackBone Tutorial – Part 6: Understanding Backbone.js Views – Rahul Rajat Singh's blog}
 * @see {@link http://rahulrajatsingh.com/2014/08/backbone-tutorial-part-7-understanding-backbone-js-routes-and-history/|BackBone Tutorial – Part 7: Understanding Backbone.js Routes and History – Rahul Rajat Singh's blog}
 * @see {@link http://rahulrajatsingh.com/2015/02/backbone-tutorial-part-8-understanding-backbone-js-events/|BackBone Tutorial – Part 8: Understanding Backbone.js Events – Rahul Rajat Singh's blog}
 *
 * @see {@link https://www.codeproject.com/Articles/795965/BackBone-Tutorial-Part-Introduction-to-Backbone-Js|BackBone Tutorial – Part 1: Introduction to Backbone.Js - CodeProject}
 * @see {@link https://www.codeproject.com/Articles/795964/BackBone-Tutorial-Part-Understanding-the-basics-of|BackBone Tutorial – Part 2: Understanding the Basics of Backbone Models - CodeProject}
 * @see {@link https://www.codeproject.com/Articles/797433/BackBone-Tutorial-Part-More-about-Backbone-Models|BackBone Tutorial – Part 3: More about Backbone Models - CodeProject}
 * @see {@link https://www.codeproject.com/Articles/797899/BackBone-Tutorial-Part-CRUD-Operations-on-Backbone|BackBone Tutorial – Part 4: CRUD Operations on BackboneJs Models using HTTP REST Service - CodeProject}
 * @see {@link https://www.codeproject.com/Articles/799153/BackBone-Tutorial-Part-Understanding-Backbone-js|BackBone Tutorial – Part 5: Understanding Backbone.js Collections - CodeProject}
 * @see {@link https://www.codeproject.com/Articles/801863/BackBone-Tutorial-Part-Understanding-Backbone-js-V|BackBone Tutorial – Part 6: Understanding Backbone.js Views - CodeProject}
 * @see {@link https://www.codeproject.com/Articles/803073/BackBone-Tutorial-Part-Understanding-Backbone-js-R|BackBone Tutorial – Part 7: Understanding Backbone.js Routes and History - CodeProject}
 * @see {@link https://www.codeproject.com/Articles/879626/BackBone-Tutorial-Part-Understanding-Backbone-js-E|BackBone Tutorial – Part 8: Understanding Backbone.js Events - CodeProject}
 *
 * @see {@link http://blog.joelberghoff.com/2012/07/22/backbone-js-tutorial-part-1/|A Simple Example - Backbone.js Tutorial Part 1 - Creating a CollectionBlog de Code}
 * @see {@link http://blog.joelberghoff.com/2012/07/23/backbone-js-tutorial-part-2/|A Simple Example - Backbone.js Tutorial Part 2 - Creating an App ViewBlog de Code}
 * @see {@link http://blog.joelberghoff.com/2012/07/24/backbone-js-tutorial-part-3/|A Simple Example - Backbone.js Tutorial Part 3 - Creating PaginationBlog de Code}
 *
 * @see {@link http://dreamerslab.com/blog/tw/javascript-call-and-apply/|Javascript call 以及 apply | DreamersLab}
 *
 * @see {@link https://stackoverflow.com/questions/42563441/possible-to-extend-multiple-views-in-backbone|javascript - Possible to extend multiple views in Backbone? - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/2189452/when-to-use-margin-vs-padding-in-css|When to use margin vs padding in CSS - Stack Overflow}
 *
 */

(function(root) {

	var result = {};
	
  if (typeof define === 'function') {

    define(["tw.ace33022.backbone.view.ButtonsNavigatorMethod00", "tw.ace33022.backbone.view.AncestorFormMethod00", "backbone", "underscore"], function(ButtonsNavigatorMethod, AncestorFormMethod) {

			_.extend(result, ButtonsNavigatorMethod);
			_.extend(result, AncestorFormMethod);
			
			result["initialize"] = function(options) {
			
				ButtonsNavigatorMethod.initialize.apply(this, arguments);
				AncestorFormMethod.initialize.apply(this, arguments);
			};
			
			return Backbone.View.extend(result);
    });
  }
})(this);