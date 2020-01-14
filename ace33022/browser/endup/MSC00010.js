/**
 *
 * @description MSC00010
 *
 * @version 2019/02/20 初始版本。
 *
 * @author ace
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
 * @see {@link https://api.jquery.com/attribute-equals-selector/|Attribute Equals Selector [name=”value”] | jQuery API Documentation}
 * @see {@link https://api.jquery.com/multiple-attribute-selector/|Multiple Attribute Selector [name=”value”][name2=”value2″] | jQuery API Documentation}
 *
 * @see {@link https://github.com/tristen/tablesort|tristen/tablesort: A small tablesorter in plain JavaScript}
 *
 * @see {@link https://www.highcharts.com/|Interactive JavaScript charts for your webpage | Highcharts}
 *
 * @see {@link https://learn.jquery.com/using-jquery-core/faq/how-do-i-disable-enable-a-form-element/|How do I disable/enable a form element? | jQuery Learning Center}
 * @see {@link http://zh-tw.learnlayout.com/display.html|CSS - 關於 "display" 屬性}
 * @see {@link https://stackoverflow.com/questions/4942070/differences-between-detach-hide-and-remove-jquery|javascript - Differences between detach(), hide() and remove() - jQuery - Stack Overflow}
 *
 * @see {@link https://stackoverflow.com/questions/18432394/how-to-make-twitter-bootstrap-modal-full-screen|css - How to make Twitter bootstrap modal full screen - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/35177128/radio-buttons-in-bootstrap-navigation-bar|css - Radio buttons in bootstrap navigation bar - Stack Overflow}
 *
 */

requirejs(["tw.ace33022.util.browser.ReUtil"], function(ReUtil) {

	ReUtil.beforeInitEnv(function() {

		requirejs(["tw.ace33022.backbone.view.MSC00010", "tw.ace33022.util.browser.FormUtil"], function(View, FormUtil) {
		
			var view = new View({});

			view.addButton({
			
				"caption": "離開",
				"click": function(event) {
				
					window.location.href = window.location.origin + '/' + 'WorkPanel';
				}
			});
			
			FormUtil.showLoadingEffect(
			
				function(closeLoadingEffect) {
				
					requirejs(["tw.ace33022.dao.ws.program.MSC00010"], function(DAO) {
					
						(new DAO()).doGet(

							function(data, textStatus, jqXHR) {

								if (data["error_code"] === 0) {
									
									view.loadDataFromJSONArray(data["result"], function() {
									
										view.getContainer().find('tbody').parent().parent().scrollTop(view.getContainer().find('tbody').parent().parent()[0].scrollHeight);
										
										closeLoadingEffect();
										
										jQuery(window).trigger('resize');
									});
								}
								else {

									closeLoadingEffect();
						
									FormUtil.showMessage('資料處理過程有誤，錯誤訊息：' + data['error_message']);
								}
							},
							function(jqXHR, textStatus, errorThrown) {},
							function(jqXHR, textStatus) {}
						);
					});
				}
			);
		});
	});
});