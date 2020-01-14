/**
 *
 * @description MSC00010
 *
 * @version 2018/07/14 ace 初始版本。
 *
 * @author ace
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 * @see {@link http://backbonejs.org/|Backbone.js}
 * @see {@link https://github.com/jashkenas/backbone|jashkenas/backbone: Give your JS App some Backbone with Models, Views, Collections, and Events}
 * @see {@link https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites|Tutorials, blog posts and example sites · jashkenas/backbone Wiki}
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link https://jquery.com/|jQuery}
 *
 * @see {@link https://getbootstrap.com/|Bootstrap · The most popular HTML, CSS, and JS library in the world.}
 *
 */

(function(root) {

	var arrLottery649LogsVO = new Array();
	var arrCheckedNum = new Array();
	var filterCondition = {

		"prize": "all",
		"sortType": "prizeSort"
	};
	
	var tableId = 'table' + Math.random().toString(36).substr(2, 6);
	
	var result;
	
	function attachTDsClickEvent(tr, self) {

		jQuery(tr).each(function(index, element) {

			jQuery(element).find('td').each(function(index, element) {

				if ((index >= 2) && (index <= 8)) {

					jQuery(element).on('click', function(event) {

						var arrCheckedNum = self.getArrCheckedNum();

						if (jQuery(event.target).hasClass('bg-primary') == true) {

							arrCheckedNum = _.without(arrCheckedNum, jQuery(event.target).text());
						}
						else {

							arrCheckedNum.push(jQuery(event.target).text());
						}

						self.setArrCheckedNum(arrCheckedNum);
					});
				}
			});
		});
	}

  if (typeof define === 'function') {

		define(["tw.ace33022.util.browser.FormUtil", "tw.ace33022.backbone.view.AncestorForm00", "moment", "underscore"], function(FormUtil, AncestorFormView, moment) {

			result = {

				"initialize": function(options) {
				
					var self = this;

					var btnLottery649NumPadId = 'btnLottery649NumPad' + Math.random().toString(36).substr(2, 6);
					var chart01Id = 'chart01' + Math.random().toString(36).substr(2, 6);
					var chart02Id = 'chart02' + Math.random().toString(36).substr(2, 6);
					var report01Id = 'report01' + Math.random().toString(36).substr(2, 6);
					var dataFilterId = 'dataFilter01' + Math.random().toString(36).substr(2, 6);
				
					var tag = '<div class="panel panel-default" style="width: 100%;">'
									+ '  <table class="table table-striped table-bordered" style="table-layout: fixed;">'
									+ '    <thead>'
									+ '      <tr>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">期別</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">開獎日</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">獎號</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">特別號</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">獎號總合</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">頭獎</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">貳獎</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">參獎</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">肆獎</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">伍獎</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">陸獎</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">柒獎</th>'
									+ '        <th style="text-align: center; vertical-align: middle; cursor: default;">普獎</th>'
									+ '      </tr>'
									+ '    </thead>'
									+ '  </table>'
									+ '  <div style="overflow-y: auto; overflow-x: hidden;">'
									+ '    <table id="' + tableId + '" class="table table-striped table-bordered">'
									+ '      <tbody></tbody>'
									+ '    </table>'
									+ '  </div>'
									+ '</div>';
									
					if ((arguments.length !== 0) && (typeof arguments[0] === 'object')) {
					
						arguments[0]["buttonAddedTrigger"] = function() {
						
							if (this.getArrLottery649LogsVO().length == 0) {

								jQuery('#' + btnLottery649NumPadId).parent().addClass('disabled');
								jQuery('#' + chart01Id).parent().addClass('disabled');
								jQuery('#' + chart02Id).parent().addClass('disabled');
								jQuery('#' + report01Id).parent().addClass('disabled');
								jQuery('#' + dataFilterId).parent().addClass('disabled');
							}
							else {

								jQuery('#' + btnLottery649NumPadId).parent().removeClass('disabled');
								jQuery('#' + chart01Id).parent().removeClass('disabled');
								jQuery('#' + chart02Id).parent().removeClass('disabled');
								jQuery('#' + report01Id).parent().removeClass('disabled');
								jQuery('#' + dataFilterId).parent().removeClass('disabled');
							}
						};
					}

					AncestorFormView.prototype.initialize.apply(self, arguments);
					
					self.addDropdownMenu({

						"menuCaption": "資料篩選",
						"items": [
							{
								"caption": "選取號碼",
								"id": btnLottery649NumPadId,
								"click": function(event) {

									self.showLottery649NumberPad();
								}
							},
							{
								"caption": "排序/篩選",
								"id": dataFilterId,
								"click": function(event) {

									var tag;
								
									var modalHeader, modalBody, modalFooter;
									var baseModal;
									
									tag = '<div class="modal-header">'
											+ '  <h4 style="text-align: center;">排序/篩選</h4>'
											+ '</div>';
									modalHeader = jQuery(tag);

									tag = '<div class="modal-footer">'
											+ '  <input type="button" class="btn btn-primary" data-dismiss="modal" value="關閉" />'
											+ '</div>';
									modalFooter = jQuery(tag);

									tag = '<div style="margin-top: 2px; margin-bottom: 2px;">'
											+ '  <span>獎號順序：</span>'
											+ '  <div class="btn-group">'
											+ '    <label class="btn" style="overflow: hidden; vertical-align: middle;"><input type="radio" style="position: absolute; vertical-align: middle; height: 1px; width: 1px; top: -20px;" name="sortType" value="prizeSort">獎號開出順序</label>'
											+ '    <label class="btn" style="overflow: hidden; vertical-align: middle;"><input type="radio" style="position: absolute; vertical-align: middle; height: 1px; width: 1px; top: -20px;" name="sortType" value="numberSort">獎號大小順序</label>'
											+ '  </div>'
											+ '</div>'
											+ '<div style="margin-top: 2px; margin-bottom: 2px;">'
											+ '  <span>獎號篩選：</span>'
											+ '  <div class="btn-group">'
											+ '    <label class="btn" style="overflow: hidden; vertical-align: middle;"><input type="radio" style="position: absolute; vertical-align: middle; height: 1px; width: 1px; top: -20px;" name="prize" value="all">ALL</label>'
											+ '    <label class="btn" style="overflow: hidden; vertical-align: middle;"><input type="radio" style="position: absolute; vertical-align: middle; height: 1px; width: 1px; top: -20px;" name="prize" value="prize01">只顯示頭獎開出資料</label>';
											+ '  </div>'
											+ '</div>';
									modalBody = jQuery(tag);
								
									modalBody.find('input').on('click', function(event) {
								
										jQuery(this).parent().siblings().removeClass('btn-primary');
										jQuery(this).parent().siblings().removeClass('btn-default');
									
										modalBody.find('input[name="' + jQuery(this).prop('name') + '"]').each(function(index, element) {
								
											if (jQuery(element).prop('checked') == true) {
									
												jQuery(element).parent().addClass('btn-primary');
											}
											else {
									
												jQuery(element).parent().addClass('btn-default');
											}
										});
									});
								
									baseModal = FormUtil.addBaseModal(modalHeader, modalBody, modalFooter);
								
									baseModal.on('shown.bs.modal', function(event) {
								
										var filterCondition = self.getFilterCondition();
								
										modalBody.find('input[name="prize"][value="' + filterCondition["prize"] + '"]').prop('checked', true);
										modalBody.find('input[name="sortType"][value="' + filterCondition["sortType"] + '"]').prop('checked', true);

										modalBody.find('input[name="prize"][value="' + filterCondition["prize"] + '"]').trigger('click');
										modalBody.find('input[name="sortType"][value="' + filterCondition["sortType"] + '"]').trigger('click');
									});
								
									baseModal.on('hidden.bs.modal', function(event) {
								
										var filterCondition = {
									
											"prize": baseModal.find('input[name="prize"]:checked').val(),
											"sortType": baseModal.find('input[name="sortType"]:checked').val()
										};
									
										jQuery(this).remove();
									
										self.setFilterCondition(filterCondition);
									});

									baseModal.modal('show');
								}
							}
						]
					});
					
					self.addDropdownMenu({

						"menuCaption": "Chart",
						"items": [
							{
								"caption": "獎號統計圖",
								"id": chart01Id,
								"click": function(event) {
							
									// Display Chart Column

									self.showChart01();
								}
							},
							{
								"caption": "獎號總和線形圖",
								"id": chart02Id,
								"click": function(event) {
							
									// Display Chart Column
								
									self.showChart02();
								}	
							}
						]
					});

					self.addDropdownMenu({

						"menuCaption": "Report",
						"items": [
							{
								"caption": "獎號近期資訊",
								"id": report01Id,
								"click": function(event) {

									requirejs(["tw.ace33022.util.StringUtil", "moment", "sprintfjs"], function(StringUtil, moment) {

										function findLastAppeared(num) {

											var result = null;

											var index = self.getArrLottery649LogsVO().length - 1;
											var vo;

											for (; index >= 0; index--) {

												vo = self.getArrLottery649LogsVO()[index];

												if (((vo.getNum01() === num) || (vo.getNum02() === num) || (vo.getNum03() === num) || (vo.getNum04() === num) || (vo.getNum05() === num) || (vo.getNum06() === num)) === true) {

													result = vo;
													break;
												}
											}

											return result;
										}

										var index;
										var vo;

										var tag;
										var trElement;

										var modalHeader, modalBody, modalFooter;
										var baseModal;

										tag = '<div class="modal-header">'
												+ '  <h4 style="text-align: center;">獎號近期資訊</h4>'
												+ '</div>';
										modalHeader = jQuery(tag);

										tag = '<div class="modal-footer">'
												+ '  <input type="button" class="btn btn-primary" data-dismiss="modal" value="關閉" />'
												+ '</div>';
										modalFooter = jQuery(tag);

										tag = '<table class="table table-hover table-bordered">'
												+ '  <thead>'
												+ '    <tr>'
												+ '      <th style="text-align: center; background-color: #A9A9A9; cursor: default;">獎號</th>'
												+ '      <th style="text-align: center; background-color: #A9A9A9; cursor: default;">開獎日</th>'
												+ '    </tr>'
												+ '  </thead>'
												+ '  <tbody class="rowlink"></tbody>'
												+ '</table>';
										modalBody = jQuery(tag);

										for (index = 1; index <= 49; index++) {

											vo = findLastAppeared(sprintf('%02d', index));

											if (vo !== null) {

												tag = '<tr>'
														+ '  <td style="text-align: center;">' + sprintf('%02d', index) + '</td>'
														+ '  <td style="text-align: center;">' + moment(vo.getDrawDate(), 'YYYYMMDD', true).format('YYYY/MM/DD') + '</td>'
														+ '</tr>';
												trElement = jQuery(tag);

												// if (_.indexOf(self.getArrCheckedNum(), sprintf('%02d', index)) != -1) trElement.find('td').addClass('bg-primary');
												if (_.indexOf(self.getArrCheckedNum(), sprintf('%02d', index)) != -1) trElement.find('td').css({"background-color": "#337AB7"});

												modalBody.find('tbody').append(trElement);
											}
										}

										baseModal = FormUtil.addBaseModal(modalHeader, modalBody, modalFooter);

										baseModal.find('tbody td').on('click', function(event) {
									
											if (StringUtil.rgb2hex(jQuery(event.target).css('background-color')) == '337AB7') {
										
												jQuery(event.target).parent().find('td').css({"background-color": "#FFFFFF"});
											}
											else {
										
												jQuery(event.target).parent().find('td').css({"background-color": "#337AB7"});
											}
										});
									
										baseModal.on('shown.bs.modal', function(event) {
									
											requirejs(["tablesort"], function() {
										
												new Tablesort(baseModal.find('table')[0]);
											});
										});

										baseModal.on('hidden.bs.modal', function(event) {
									
											var arrCheckedNum = new Array();
										
											baseModal.find('tbody tr').each(function(index, element) {
										
												if (StringUtil.rgb2hex(jQuery(element).find('td').first().css('background-color')) == '337AB7') arrCheckedNum.push(jQuery(element).find('td').first().text());
											});

											jQuery(this).remove();
										
											self.setArrCheckedNum(arrCheckedNum);
										});

										baseModal.modal('show');
									});
								}
							}
						]
					});
					
					self.on('dataChangeTrigger', function() {
					
						if (self.getArrLottery649LogsVO().length == 0) {

							jQuery('#' + btnLottery649NumPadId).parent().addClass('disabled');
							jQuery('#' + chart01Id).parent().addClass('disabled');
							jQuery('#' + chart02Id).parent().addClass('disabled');
							jQuery('#' + report01Id).parent().addClass('disabled');
							jQuery('#' + dataFilterId).parent().addClass('disabled');
						}
						else {

							jQuery('#' + btnLottery649NumPadId).parent().removeClass('disabled');
							jQuery('#' + chart01Id).parent().removeClass('disabled');
							jQuery('#' + chart02Id).parent().removeClass('disabled');
							jQuery('#' + report01Id).parent().removeClass('disabled');
							jQuery('#' + dataFilterId).parent().removeClass('disabled');
						}
					});

					self.getContainer().append(tag);

					self.getContainer().css({
					
						"padding-right": "0px",
						"padding-left": "0px",
						"overflow": "hidden"
					});
					
					/**
					 *
					 * Window on resize
					 *
					 * @description
					 *
					 * @version 2018/09/14 初始版本。
					 *
					 * @author ace
					 *
					 * @see <a href="http://api.jquery.com/outerwidth/">.outerWidth() | jQuery API Documentation</a>
					 * @see <a href="https://github.com/jquery/jquery/issues/2951">width() outerWidth() innerWidth() sets incorrect value under certain conditions on webkit browsers · Issue #2951 · jquery/jquery</a>
					 *
					 * @comment
					 *
					 * @todo
					 *
					 */
					jQuery(window).on('resize', function(event) {
					
						// jQuery('#' + tableId).parent().css('height', window.innerHeight - jQuery('.navbar').height() - jQuery(jQuery('.panel').find('table')[0]).height() - 25);
						// jQuery('#' + tableId).parent().css('height', window.innerHeight - jQuery('.navbar').height() - jQuery(jQuery('.panel').find('table')[0]).height() - jQuery('.adsbygoogle').height() - 25);
						// jQuery('#' + tableId).parent().css('height', window.innerHeight - jQuery('.navbar').height() - jQuery(jQuery('.panel').find('table')[0]).height() - 115 - 25);
						jQuery('#' + tableId).parent().css('height', window.innerHeight - jQuery('.navbar').height() - jQuery(jQuery('.panel').find('table')[0]).height() - 90 - 30);
						
						self.getContainer().find('thead > tr:eq(0) > th:eq(0)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(0)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(1)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(1)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(2)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(2)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(3)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(4)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(5)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(6)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(7)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(3)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(8)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(4)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(9)').outerWidth());
						
						self.getContainer().find('thead > tr:eq(0) > th:eq(5)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(10)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(6)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(11)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(7)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(12)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(8)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(13)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(9)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(14)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(10)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(15)').outerWidth());
						self.getContainer().find('thead > tr:eq(0) > th:eq(11)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(16)').outerWidth());
						// self.getContainer().find('thead > tr:eq(0) > th:eq(12)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(17)').outerWidth());
					});
					
					return self;
				},
				"showLottery649NumberPad": function() {

					var self = this;

					requirejs(["sprintfjs"], function() {

						var modalHeader, modalBody, modalFooter;
						var baseModal;

						var index;

						var divNumPad = jQuery('<div style="margin: auto; width: 75%;"></div>');
						var group, button;

						for (index = 1; index <= 49; index++) {

							button = jQuery('<input type="button" class="btn" />');

							button.prop('value', sprintf('%02d', index));

							self.getArrCheckedNum().forEach(function(element, index) {

								if (button.prop('value') == element) button.addClass('btn-primary');
							});

							if ((index % 10) == 1) group = jQuery('<div class="btn-group" role="group"></div>');

							group.append(button);

							if (((index % 10) == 0) || (index == 49)) divNumPad.append(jQuery('<div class="btn-toolbar" role="toolbar"></div>').append(group));
						}

						tag = '<div class="modal-header">'
								+ '  <h4 class="modal-title">選取號碼</h4>'
								+ '</div>';
						modalHeader = jQuery(tag);

						tag = '<div class="modal-body"></div>';
						modalBody = jQuery(tag);
						modalBody.append(divNumPad);

						tag = '<div class="modal-footer">'
								+ '  <input type="button" class="btn btn-primary" data-dismiss="modal" value="關閉" />'
								+ '</div>';
						modalFooter = jQuery(tag);

						baseModal = FormUtil.addBaseModal(modalHeader, modalBody, modalFooter);

						divNumPad.find('input[type="button"]').on('click', function(event) {

							if (jQuery(this).hasClass('btn-primary') == true) {

								jQuery(this).removeClass('btn-primary');
							}
							else {

								jQuery(this).addClass('btn-primary');
							}
						});

						baseModal.on('hidden.bs.modal', function() {

							var arrCheckedNum = new Array();

							divNumPad.find('input[type="button"]').each(function(index, element) {

								if (jQuery(element).hasClass('btn-primary') == true) arrCheckedNum.push(jQuery(element).prop('value'));
							});

							jQuery(this).remove();

							self.setArrCheckedNum(arrCheckedNum);
						});

						baseModal.modal('show');
					});
				},
				"showChart01": function() {

					// Display Chart Column

					var self = this;

					requirejs(["sprintfjs"], function() {

						function countNum() {

							var result = new Array();
							var numCount = {};

							var index;
							var vo;
							var countFlag;
							var color;

							for (index = 1; index <= 49; index++) numCount[sprintf("%02d", index)] = 0;

							for (index = 0; index < self.getArrLottery649LogsVO().length; index++) {

								countFlag = true;

								vo = self.getArrLottery649LogsVO()[index];

								if ((self.getFilterCondition()["prize01"] == 'prize01') && (vo.getPrize01() == 0)) countFlag = false;

								if (countFlag) {

									numCount[vo.getNum01()]++;
									numCount[vo.getNum02()]++;
									numCount[vo.getNum03()]++;
									numCount[vo.getNum04()]++;
									numCount[vo.getNum05()]++;
									numCount[vo.getNum06()]++;
									numCount[vo.getNumSpecial()]++;
								}
							}

							for (index = 1; index <= 49; index++) {

								color = '#4FC0FF';

								if (_.indexOf(self.getArrCheckedNum(), sprintf('%02d', index)) != -1) color = '#337AB7';

								result.push({

									"y": numCount[sprintf("%02d", index)],
									"color": color
								});
							}

							return result;
						}

						var modalId = 'modal' + Math.random().toString(36).substr(2, 6);
						var hcLotteryId = 'hcLottery' + Math.random().toString(36).substr(2, 6);

						var hcOptions = {};

						var tag = '<div class="modal fade" id="' + modalId + '" tabindex="-1" role="dialog">'
										+ '  <div class="modal-dialog" style="width: 100%; height: 100%;" role="document">'
										+ '    <div class="container">'
										+ '      <div class="modal-content">'
										+ '        <div class="modal-body" style="margin: 0px auto;">'
										+ '          <div id="' + hcLotteryId + '"></div>'
										+ '        </div>'
										+ '        <div class="modal-footer">'
										+ '          <button type="button" class="btn btn-primary" data-dismiss="modal">關閉</button>'
										+ '        </div>'
										+ '      </div>'
										+ '    </div>'
										+ '  </div>'
										+ '</div>';
						jQuery(tag).appendTo('body');

						jQuery('#' + modalId).on('hidden.bs.modal', function(event) {

							var arrCheckedNum = new Array();

							hcOptions["series"][0]["data"].forEach(function(element, index) {

								if (element["color"] == '#337AB7') arrCheckedNum.push(sprintf("%02d", index + 1));
							});

							jQuery(this).remove();

							self.setArrCheckedNum(arrCheckedNum);
						});

						jQuery('#' + modalId).on('shown.bs.modal', function() {

							requirejs(["highcharts"], function() {

								var index;

								hcOptions["chart"] = {"type": "column"};
								hcOptions["title"] = {"text": "獎號統計資料"};

								if (self.getFilterCondition()["prize"] == 'prize01') hcOptions["title"]["text"] = '獎號統計資料(只統計頭獎開出資料)';

								hcOptions.xAxis = {};

								hcOptions.xAxis.categories = new Array();
								for (index = 1; index <= 49; index++) hcOptions.xAxis.categories.push(sprintf("%02d", index));

								hcOptions.yAxis = {};
								hcOptions.yAxis["min"] = 0;
								hcOptions.yAxis["title"] = {"text": "開出次數"};

								hcOptions.series = new Array();

								hcOptions.series.push({

									"name": "獎號",
									"data": countNum()
								});

								hcOptions.plotOptions = {

									"series": {

										"events": {

											"click": function(event) {

												if (event.point.options["color"] == '#337AB7') {

													event.point.options["color"] = '#4FC0FF';
												}
												else {

													event.point.options["color"] = '#337AB7';
												}

												event.point.color = event.point.options["color"];
												event.point.update();
											}
										}
									}
								};

								hcOptions["tooltip"] = {

									"shared": true,
									"useHTML": true
								};

								hcOptions["tooltip"]["headerFormat"] = '<div style="font-size:10px">{series.name}:{point.key}</div>';
								hcOptions["tooltip"]["pointFormat"] = '<div style="font-size:10px">開出次數:{point.y}</div>';

								jQuery('#' + hcLotteryId).highcharts(hcOptions);
							});
						});

						jQuery('#' + modalId).modal('show');
					});
				},
				"showChart02": function() {

					// Display Chart Column

					var self = this;

					requirejs(["sprintfjs"], function() {

						var modalId = 'modal' + Math.random().toString(36).substr(2, 6);
						var hcLotteryId = 'hcLottery' + Math.random().toString(36).substr(2, 6);

						var hcOptions = {};

						var tag = '<div class="modal fade" id="' + modalId + '" tabindex="-1" role="dialog">'
										+ '  <div class="modal-dialog" style="width: 100%; height: 100%;" role="document">'
										+ '    <div class="container">'
										+ '      <div class="modal-content">'
										+ '        <div class="modal-body" style="margin: 0px auto;">'
										+ '          <div id="' + hcLotteryId + '"></div>'
										+ '        </div>'
										+ '        <div class="modal-footer">'
										+ '          <button type="button" class="btn btn-primary" data-dismiss="modal">關閉</button>'
										+ '        </div>'
										+ '      </div>'
										+ '    </div>'
										+ '  </div>'
										+ '</div>';
						jQuery(tag).appendTo('body');

						jQuery('#' + modalId).on('hidden.bs.modal', function() {

							jQuery(this).remove();
						});

						jQuery('#' + modalId).on('shown.bs.modal', function() {

							requirejs(["moment", "highcharts"], function(moment) {

								function getTotalNumArray() {

									var result = new Array();

									arrLottery649LogsVO.forEach(function(element, index) { result.push(element.getNumTotal()); });

									return result;
								}

								var index;
								var arrLottery649LogsVO = self.getArrLottery649LogsVO();

								if (self.getFilterCondition()["prize"] == 'prize01') arrLottery649LogsVO = _.filter(arrLottery649LogsVO, function(vo) { return vo.getPrize01() != 0; });

								hcOptions["chart"] = {"type": "line"};
								hcOptions["title"] = {"text": "獎號和計線圖"};

								hcOptions.xAxis = {};
								hcOptions.xAxis.categories = new Array();
								arrLottery649LogsVO.forEach(function(element, index) { hcOptions.xAxis.categories.push(moment(element.getDrawDate(), 'YYYYMMDD', true).format('YYYY/MM/DD')); });

								hcOptions.yAxis = {};
								hcOptions.yAxis["min"] = 0;
								hcOptions.yAxis["title"] = {"text": "獎號和計"};
								hcOptions.yAxis["tickInterval"] = 25;

								hcOptions["series"] = new Array();

								hcOptions.series.push({

									"name": "和計",
									"data": getTotalNumArray()
								});

								hcOptions.plotOptions = {

									"series": {

										"allowPointSelect": true,
										"events": {

											"click": function(event) {

												// console.log(event.point.category);
											}
										}
									}
								};

								hcOptions["tooltip"] = {

									"shared": true,
									"useHTML": true,
									"formatter": function() {

										var result;

										var drawDate = this.x;
										var vo = _.find(arrLottery649LogsVO, function(vo) { return moment(vo.getDrawDate(), 'YYYYMMDD', true).format('YYYY/MM/DD') === drawDate; });

										if (typeof vo !== 'undefined') {

											result = '<div style="font-size:10px">'
														 + '和計：' + this.y  + '<br />'
														 + '日期：' + drawDate  + '<br />'
														 + '期別：' + vo.getPeriod()  + '<br />'
														 + '獎號：' + vo.getNum01() + '/' + vo.getNum02() + '/' + vo.getNum03() + '/' + vo.getNum04() + '/' + vo.getNum05() + '/' + vo.getNum06() + '<br />'
														 + '</div>'
											}

										return result;
									}
								};

								jQuery('#' + hcLotteryId).highcharts(hcOptions);
							});
						});

						jQuery('#' + modalId).modal('show');
					});
				},
				"getArrLottery649LogsVO": function() {

					return arrLottery649LogsVO;
				},
				"setArrCheckedNum": function(arrValue) {

					var self = this;

					arrCheckedNum.length = 0;

					arrCheckedNum = arrValue.slice(0);
					
					self.refreshTbody();
				},
				"getArrCheckedNum": function() {

					return arrCheckedNum.slice(0);
				},
				"setFilterCondition": function(jsonObj) {

					var self = this;
					var booChanged = false;

					if (filterCondition["prize"] !== jsonObj["prize"]) {

						booChanged = true;

						filterCondition["prize"] = jsonObj["prize"];
					}

					if (filterCondition["sortType"] !== jsonObj["sortType"]) {

						booChanged = true;

						filterCondition["sortType"] = jsonObj["sortType"];
					}
					
					// self.getContainer().find('thead > tr:eq(0) > th:eq(2)').html(filterCondition["sortType"]);

					if (booChanged) {

						FormUtil.showProgressbar(

							'資料處理中‧‧‧',
							function(closeProgressbar) {

								self.getContainer().find('tbody').empty();

								self.getArrLottery649LogsVO().forEach(function(currentValue, index) { self.appendTD(currentValue); });

								self.refreshTbody();
								
								attachTDsClickEvent(jQuery('#' + tableId + ' ' + 'tbody > tr'), self);

								jQuery(window).trigger('resize');
								
								closeProgressbar();
							}
						);
					}
				},
				"getFilterCondition": function() {

					return JSON.parse(JSON.stringify(filterCondition));
				},
				"pushVO": function(vo) {

					this.getArrLottery649LogsVO().push(vo);

					this.trigger('dataChangeTrigger');

					return vo;
				},
				"refreshTbody": function() {

					var self = this;
					
					self.getContainer().find('tbody > tr').each(function(index, element) {

						jQuery(element).find('td').each(function(index, element) {

							var tdElement, num;

							if ((index >= 2) && (index <= 8)) {

								tdElement = jQuery(element);

								tdElement.removeClass('bg-primary');
								self.getArrCheckedNum().forEach(function(element, index) { if (tdElement.text() == element) tdElement.addClass('bg-primary'); });
							}
						});
					});
				},
				"appendTD": function(vo) {

					var booCheckAdd = false;

					var tag;

					if (this.getFilterCondition()["prize"] == 'all') {

						booCheckAdd = true;
					}
					else if (this.getFilterCondition()["prize"] == 'prize01') {

						if (vo.getPrize01() != 0) booCheckAdd = true;
					}

					if (booCheckAdd) {

						tag = '<tr>'
								+ '  <td style="text-align: center; vertical-align: middle; cursor: default; width: 8%;">' + vo.getPeriod() + '</td>'
								+ '  <td style="text-align: center; vertical-align: middle; cursor: default; width: 9%;">' + moment(vo.getDrawDate(), 'YYYYMMDD', true).format('YYYY/MM/DD') + '</td>';

						if (this.getFilterCondition()["sortType"] == 'prizeSort') {

							tag += '  <td style="text-align: center; vertical-align: middle; cursor: pointer; width: 3%;">' + vo.getNum01() + '</td>'
									 + '  <td style="text-align: center; vertical-align: middle; cursor: pointer; width: 3%;">' + vo.getNum02() + '</td>'
									 + '  <td style="text-align: center; vertical-align: middle; cursor: pointer; width: 3%;">' + vo.getNum03() + '</td>'
									 + '  <td style="text-align: center; vertical-align: middle; cursor: pointer; width: 3%;">' + vo.getNum04() + '</td>'
									 + '  <td style="text-align: center; vertical-align: middle; cursor: pointer; width: 3%;">' + vo.getNum05() + '</td>'
									 + '  <td style="text-align: center; vertical-align: middle; cursor: pointer; width: 3%;">' + vo.getNum06() + '</td>';
						}
						else {

							_.sortBy([vo.getNum01(), vo.getNum02(), vo.getNum03(), vo.getNum04(), vo.getNum05(), vo.getNum06()]).forEach(function(element, index, array) {

								tag += '  <td style="text-align: center; vertical-align: middle; cursor: pointer; width: 3%;">' + element + '</td>';
							});
						}

						tag += '  <td style="text-align: center; vertical-align: middle; cursor: pointer; width: 8%;">' + vo.getNumSpecial() + '</td>'
								 + '  <td style="text-align: center; vertical-align: middle; cursor: default; width: 9%;">' + vo.getNumTotal() + '</td>'
								 + '  <td style="text-align: center; vertical-align: middle; cursor: default; width: 6%;">' + vo.getPrize01() + '</td>'
								 + '  <td style="text-align: center; vertical-align: middle; cursor: default; width: 6%;">' + vo.getPrize02() + '</td>'
								 + '  <td style="text-align: right; vertical-align: middle; cursor: default; width: 6%;">' + vo.getPrize03() + '</td>'
								 + '  <td style="text-align: right; vertical-align: middle; cursor: default; width: 6%;">' + vo.getPrize04() + '</td>'
								 + '  <td style="text-align: right; vertical-align: middle; cursor: default; width: 6%;">' + vo.getPrize05() + '</td>'
								 + '  <td style="text-align: right; vertical-align: middle; cursor: default; width: 6%;">' + vo.getPrize06() + '</td>'
								 + '  <td style="text-align: right; vertical-align: middle; cursor: default; width: 6%;">' + vo.getPrize07() + '</td>'
								 + '  <td style="text-align: right; vertical-align: middle; cursor: default; width: 6%;">' + vo.getPrizeNormal() + '</td>'
								 + '</tr>';

						jQuery('#' + tableId + ' tbody').append(tag);
					}
					
					return this;
				},
				"loadDataFromJSONArray": function(arrJSON, callback) {
				
					var self = this;
					
					requirejs(["tw.ace33022.vo.Lottery649Logs"], function(Lottery649Logs) {
					
						self.getContainer().find('tbody').empty();
					
						self.getArrLottery649LogsVO().length = 0;
					
						self.trigger('dataChangeTrigger');

						arrJSON.forEach(function(currentValue, index) {

							var vo = new Lottery649Logs();
							vo.setValueFromJSONObject(currentValue);

							self.pushVO(vo);
							self.appendTD(vo);
						});
						
						self.refreshTbody();
						
						attachTDsClickEvent(jQuery('#' + tableId + ' ' + 'tbody > tr'), self);
						
						jQuery(window).trigger('resize');
						
						jQuery(window).trigger('resize');	// bug? 只有一次的trigger會無法正確設定thead的outerWidth？
						
						// jQuery('#' + tableId).parent().scrollTop(jQuery('#' + tableId).parent()[0].scrollHeight);
						
						if (typeof callback === 'function') callback();
					});
				},
				"loadDataFromCSVFile": function(file) {

					var self = this;

					if (file != null) {

						self.setArrCheckedNum([]);

						FormUtil.showProgressbar(

							'資料載入中',
							function(closeProgressbar) {

								var worker;
								var workerPath;
								var javaScriptsPath;
								var configPapa = {

									header: false,
									dynamicTyping: true,
									skipEmptyLines: true,
									worker: false
								};
								
								workerPath = root.tw.ace33022.RequireJSConfig.baseUrl + 'tw/ace33022/util/browser/worker/LoadLottery649.js';
								
								if ((typeof jQuery('base').attr('href') !== 'undefined') && (jQuery('base').attr('href') != '/')) workerPath = jQuery('base').attr('href') + root.tw.ace33022.RequireJSConfig.baseUrl + 'tw/ace33022/util/browser/worker/LoadLottery649.js';

								try {

									worker = new Worker(workerPath);
								}
								catch(event) {

									// console.log(e.message);
								}

								if (typeof worker !== 'undefined') {
								
									javaScriptsPath = root.tw.ace33022.RequireJSConfig.baseUrl;
								
									if (typeof jQuery('base').attr('href') !== 'undefined') {
									
										javaScriptsPath = jQuery('base').attr('href') + root.tw.ace33022.RequireJSConfig.baseUrl;
										
										if (jQuery('base').attr('href') == '/') javaScriptsPath = location.origin + '/' + root.tw.ace33022.RequireJSConfig.baseUrl;
									}
									
									worker.postMessage([javaScriptsPath, file]);

									worker.onmessage = function(e) {

										self.loadDataFromJSONArray(JSON.parse(e.data), function() {
										
											closeProgressbar();
										});
									};
								}
								else {
									
									requirejs([workerPath], function(LoadLottery649) {

										LoadLottery649.loadFromCSV(file, configPapa, function(arrJSON) { 
										
											self.loadDataFromJSONArray(arrJSON, function() {
											
												closeProgressbar();
											}); 
										});
									});
								}
							},
							function() {

								if (typeof worker !== 'undefined') worker.terminate();
									
								attachTDsClickEvent(jQuery('#' + tableId + ' ' + 'tbody > tr'), self);
									
								window.scrollTo(0, document.body.scrollHeight);
							}
						);
					}
				}
			};

			return AncestorFormView.extend(result);
    });
  }
})(this);