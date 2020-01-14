/**
 *
 * POS00020
 *
 * @description
 *
 * @author ace
 *
 * @version 2018/06/16 初始版本。
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

	var orderedMessageId = 'orderedMessage' + Math.random().toString(36).substr(2, 6);
	var rowTranId = 'rowTran' + Math.random().toString(36).substr(2, 6);

	var arrPOSTrnLogsDetailVO = new Array();
	
	var result;

	function appendTranDetail(modalBody, trnTotalEditable) {

		var tag;
		var vo;
		var index;
		var qty = 0, total = 0;

		modalBody.find('tbody').empty();

		for (index = 0; index < arrPOSTrnLogsDetailVO.length; index++) {

			vo = arrPOSTrnLogsDetailVO[index];

			tag = '<tr>'
					+ '  <td style="text-align: center; vertical-align: middle;">' + vo.getSerNo() + '</td>'
					+ '  <td style="vertical-align: middle;">' + vo.getProductName() + '</td>'
					+ '  <td style="text-align: right; vertical-align: middle;">' + vo.getProductPrice() + '</td>'
					+ '  <td style="text-align: right; vertical-align: middle;">' + vo.getTrnQty() + '</td>'
					+ '  <td style="text-align: right; vertical-align: middle;">' + vo.getTrnTotal() + '</td>'
					+ '</tr>';
			modalBody.find('tbody').append(tag);

			qty += vo.getTrnQty();
			total += vo.getTrnTotal();
		}

		tag = '<tr>'
				+ '  <td></td>'
				+ '  <td></td>'
				+ '  <td></td>'
				+ '  <td style="text-align: right; vertical-align: middle;">' + (new String(qty)) + '</td>'
				+ '  <td style="text-align: right; vertical-align: middle;">' + (new String(total)) + '</td>'
				+ '</tr>';
		modalBody.find('tbody').append(tag);

		if ((typeof trnTotalEditable !== 'undefined') && (trnTotalEditable == '1')) {

			modalBody.find('td').filter(function(index, element){return (index + 1) % 5 == 0;}).editable({

				"type": "text",
				"title": "小計金額",
				"validate": function(value) {

					var result = '';

					if (!jQuery.isNumeric(value)) result = '輸入資料有誤！';

					return result;
				},
				"success": function(response, newValue) {

					var serNo = jQuery(this).parent().find('td:eq(0)').text();

					arrPOSTrnLogsDetailVO.forEach(function(currentValue, index, array) {

						if (currentValue.getSerNo() == serNo) currentValue.setTrnTotal(new Number(newValue));
					});

					appendTranDetail(modalBody, trnTotalEditable);
				}
			});

			modalBody.find('td').filter(function(index, element){return (index + 1) % 5 == 0;}).on('shown', function(e, editable) {

				/**
				 *
				 * Popup select all
				 *
				 * @see <a href="https://github.com/vitalets/x-editable/issues/330">On input focus, Select all text · Issue #330 · vitalets/x-editable</a>
				 *
				 * @description
				 *
				 * @comment
				 *
				 */
				editable.input.postrender = function() {editable.input.$input.select();};

				// 限定輸入數值(keypress)？
			});
		}
	}

  if (typeof define === 'function') {

		define(["tw.ace33022.util.browser.FormUtils", "tw.ace33022.backbone.view.AncestorForm00", "underscore"], function(FormUtils, AncestorFormView) {

			result = {

				"initialize": function(options) {

					if (typeof options["getUsersVO"] !== 'undefined') this["getUsersVO"] = options["getUsersVO"];
					if (typeof options["getPOSTrnLogsVO"] !== 'undefined') this["getPOSTrnLogsVO"] = options["getPOSTrnLogsVO"];

					if (typeof options["getArrProductsVO"] !== 'undefined') this["getArrProductsVO"] = options["getArrProductsVO"];
					if (typeof options["getArrDrinksVO"] !== 'undefined') this["getArrDrinksVO"] = options["getArrDrinksVO"];
					if (typeof options["getArrSizesVO"] !== 'undefined') this["getArrSizesVO"] = options["getArrSizesVO"];
					if (typeof options["getArrSizeGroupsDetailVO"] !== 'undefined') this["getArrSizeGroupsDetailVO"] = options["getArrSizeGroupsDetailVO"];
					if (typeof options["getArrSugarsVO"] !== 'undefined') this["getArrSugarsVO"] = options["getArrSugarsVO"];
					if (typeof options["getArrSugarGroupsDetailVO"] !== 'undefined') this["getArrSugarGroupsDetailVO"] = options["getArrSugarGroupsDetailVO"];
					if (typeof options["getArrIceDosagesVO"] !== 'undefined') this["getArrIceDosagesVO"] = options["getArrIceDosagesVO"];
					if (typeof options["getArrIceDosageGroupsDetailVO"] !== 'undefined') this["getArrIceDosageGroupsDetailVO"] = options["getArrIceDosageGroupsDetailVO"];

					if (typeof options["saveTran"] !== 'undefined') this["saveTran"] = options["saveTran"];

					AncestorFormView.prototype.initialize.apply(this, arguments);

					this.newTran();

					return this;
				},
				"getArrPOSTrnLogsDetailVO": function() {

					return arrPOSTrnLogsDetailVO;
				},
				"setOrderedMessage": function(message) {

					jQuery('#' + orderedMessageId).text(message);

					return jQuery('#' + orderedMessageId);
				},
				"appendOrderedMessage": function(message) {

					jQuery('#' + orderedMessageId).text(jQuery('#' + orderedMessageId).text() + message);

					return jQuery('#' + orderedMessageId);
				},
				"showTranModal": function(trnTotalEditable) {
				
					var self = this;

					var result;
					
					var tag;
					var modalHeader, modalBody, modalFooter;
			
					tag = '<div class="modal-header">'
							+ '  <h4 class="modal-title">交易明細</h4>'
							+ '</div>';
					modalHeader = jQuery(tag);
					
					tag = '<div class="modal-body">'
							+ '  <table class="table table-bordered table-condensed table-hover">'
							+ '    <thead>'
							+ '      <tr>'
							+ '        <th style="text-align: center;">序號</th>'
							+ '        <th style="text-align: center;">名稱</th>'
							+ '        <th style="text-align: center;">價格</th>'
							+ '        <th style="text-align: center;">數量</th>'
							+ '        <th style="text-align: center;">小計</th>'
							+ '      </tr>'
							+ '    </thead>'
							+ '    <tbody class="rowlink"></tbody>'
							+ '  </table>'
							+ '</div>';
					modalBody = jQuery(tag);
					
					tag = '<div class="modal-footer"></div>';
					modalFooter = jQuery(tag);
					
					appendTranDetail(modalBody, trnTotalEditable);
					
					result = FormUtils.addBaseModal(modalHeader, modalBody, modalFooter);
					
					result.on('hidden.bs.modal', function() {jQuery(this).remove();});
					
					result.modal('show');
					
					return result;
				},
				"newTran": function() {

					var tag;
					
					this.clearContainer();
					
					tag = '<div class="row" style="position: fixed; width: 100%;">'
							+ '  <div class="panel panel-default">'
							+ '    <div id="' + orderedMessageId + '" class="panel-body"></div>'
							+ '  </div>'
							+ '</div>';
					this.appendRow(tag);
					
					this.appendRow('<div id="' + rowTranId + '" class="row"></div>');
					
					jQuery('#' + rowTranId).css('padding-top', jQuery('#' + orderedMessageId).parent().parent().height() + 20 + 'px');

					arrPOSTrnLogsDetailVO.length = 0;

					this.newRecord();

					return this;
				},
				"newRecord": function() {

					var self = this;

					requirejs(["tw.ace33022.vo.POSTrnLogsDetail", "tw.ace33022.vo.Drinks", "tw.ace33022.vo.Sizes", "tw.ace33022.vo.SizeGroupsDetail", "sprintfjs"], function(POSTrnLogsDetail, Drinks, Sizes, SizeGroupsDetail) {

						var drink = null;
						var sizeCode;
						var sugarCode;
						var iceDosageCode;

						function showIceDosages() {

							var index;
							var tag;

							var iceDosageName;

							var arrIceDosageGroupsDetailVO = _.sortBy(_.filter(self.getArrIceDosageGroupsDetailVO(), function(vo) {return vo.getIceDosageGroupCode() == drink.getIceDosageGroupCode();}), function(vo) {return vo.getIceDosageCode();});

							jQuery('#' + rowTranId).empty();

							for (index = 0; index < arrIceDosageGroupsDetailVO.length; index++) {

								iceDosageName = (_.find(self.getArrIceDosagesVO(), function(vo) {return vo.getIceDosageCode() == arrIceDosageGroupsDetailVO[index].getIceDosageCode();})).getIceDosageName();

								tag = '<div class="btn btn-primary btn-block btn-lg" style="margin-top: 0px;">'
										+ '  <div style="display: none;">' + arrIceDosageGroupsDetailVO[index].getIceDosageCode() + '</div> '
										+ '  <div style="text-align: center;">' + iceDosageName + '</div> '
										+ '</div>';
								jQuery(tag).appendTo('#' + rowTranId);
							}

							jQuery('#' + rowTranId + ' > div').on('click', function(event) {

								event.preventDefault();

								jQuery('.collapse').collapse('hide');

								iceDosageCode = jQuery(this).find('div').eq(0).text();
								
								FormUtils.showInputNumberModal({
								
									"title": "數量",
									"value": 1,
									"callback": function(value) {
									
										var productCode = '01' + iceDosageCode + sugarCode + sizeCode + drink.getDrinkCode();
										var productsVO = _.find(self.getArrProductsVO(), function(vo) {return vo.getProductCode() == productCode;});

										var posTrnLogsDetailVO = new POSTrnLogsDetail();

										if (value === 0) {

											// 取消的處理方式?
										}
										else {

											// self.appendOrderedMessage('/' + jQuery(this).find('div').eq(1).text());
											
											posTrnLogsDetailVO.setSerNo(sprintf('%05d', arrPOSTrnLogsDetailVO.length + 1));

											posTrnLogsDetailVO.setTrnDate(self.getPOSTrnLogsVO().getTrnDate());
											posTrnLogsDetailVO.setStoreCode(self.getPOSTrnLogsVO().getStoreCode());
											posTrnLogsDetailVO.setPOSNo(self.getPOSTrnLogsVO().getPOSNo());
											posTrnLogsDetailVO.setProductCode(productsVO.getProductCode());
											posTrnLogsDetailVO.setBarcode(productsVO.getBarcode());
											posTrnLogsDetailVO.setSdCode(productsVO.getSdCode());
											posTrnLogsDetailVO.setProductName(productsVO.getProductName());
											posTrnLogsDetailVO.setProductPname(productsVO.getProductPname());
											posTrnLogsDetailVO.setTaxRate(productsVO.getTaxRate());
											posTrnLogsDetailVO.setTaxType('0001');
											posTrnLogsDetailVO.setTaxDesc('稅內含');
											posTrnLogsDetailVO.setProductPrice(productsVO.getProductPrice());
											posTrnLogsDetailVO.setTrnQty(value);
											posTrnLogsDetailVO.setTrnPrice(productsVO.getProductPrice());
											posTrnLogsDetailVO.setTrnAmt01(productsVO.getProductPrice());
											posTrnLogsDetailVO.setTrnAmt02(productsVO.getProductPrice());
											posTrnLogsDetailVO.setTrnAmt03(productsVO.getProductPrice());
											posTrnLogsDetailVO.setTrnTotal(posTrnLogsDetailVO.getTrnPrice() * posTrnLogsDetailVO.getTrnQty());
											posTrnLogsDetailVO.setInsertUserAccount(self.getPOSTrnLogsVO().getInsertUserAccount());
											posTrnLogsDetailVO.setUpdateUserAccount(self.getPOSTrnLogsVO().getInsertUserAccount());

											arrPOSTrnLogsDetailVO.push(posTrnLogsDetailVO);

											self.newRecord();
										}
									}
								});
							});
						}

						function showSugars() {

							var index;
							var tag;

							var sugarName;

							var arrSugarGroupsDetailVO = _.sortBy(_.filter(self.getArrSugarGroupsDetailVO(), function(vo) {return vo.getSugarGroupCode() == drink.getSugarGroupCode();}), function(vo) {return vo.getSugarCode();});

							jQuery('#' + rowTranId).empty();

							for (index = 0; index < arrSugarGroupsDetailVO.length; index++) {

								sugarName = (_.find(self.getArrSugarsVO(), function(vo) {return vo.getSugarCode() == arrSugarGroupsDetailVO[index].getSugarCode();})).getSugarName();

								// tag = '<div class="btn btn-primary btn-block btn-lg col-xs-6 col-sm-3 col-md-2" style="margin-top: 0px;">'
								tag = '<div class="btn btn-primary btn-block btn-lg" style="margin-top: 0px;">'
										+ '  <div style="display: none;">' + arrSugarGroupsDetailVO[index].getSugarCode() + '</div> '
										+ '  <div style="text-align: center;">' + sugarName + '</div> '
										+ '</div>';
								jQuery(tag).appendTo('#' + rowTranId);
							}

							jQuery('#' + rowTranId + ' > div').on('click', function(event) {

								event.preventDefault();

								jQuery('.collapse').collapse('hide');

								sugarCode = jQuery(this).find('div').eq(0).text();

								self.appendOrderedMessage('/' + jQuery(this).find('div').eq(1).text());

								showIceDosages();
							});
						}

						function showSizes() {

							var index;
							var tag;

							var sizeName;

							var arrSizeGroupsDetailVO = _.sortBy(_.filter(self.getArrSizeGroupsDetailVO(), function(vo) {return vo.getSizeGroupCode() == drink.getSizeGroupCode();}), function(vo) {return vo.getSizeCode();});

							jQuery('#' + rowTranId).empty();

							for (index = 0; index < arrSizeGroupsDetailVO.length; index++) {

								sizeName = (_.find(self.getArrSizesVO(), function(vo) {return vo.getSizeCode() == arrSizeGroupsDetailVO[index].getSizeCode();})).getSizeName();

								tag = '<div class="btn btn-primary btn-block btn-lg" style="margin-top: 0px;">'
										+ '  <div style="display: none;">' + arrSizeGroupsDetailVO[index].getSizeCode() + '</div> '
										+ '  <div style="text-align: center;">' + sizeName + '</div> '
										+ '</div>';
								jQuery(tag).appendTo('#' + rowTranId);
							}

							jQuery('#' + rowTranId + ' > div').on('click', function(event) {

								event.preventDefault();

								jQuery('.collapse').collapse('hide');

								sizeCode = jQuery(this).find('div').eq(0).text();

								self.appendOrderedMessage('/' + jQuery(this).find('div').eq(1).text());

								showSugars();
							});
						}

						function showDrinks() {

							var index;
							var tag;

							jQuery('#' + rowTranId).empty();

							for (index = 0; index < self.getArrDrinksVO().length; index++) {

								if ((self.getArrDrinksVO()[index].getInvalidFlag() == '0') && (self.getArrDrinksVO()[index].getExpandProductFlag() == '1')) {

									tag = '<div>'
											+ '  <a href="#" class="thumbnail">'
											+ '    <div style="display: none;">' + self.getArrDrinksVO()[index].getDrinkCode() + '</div> '
											+ '    <div style="text-align: center;"><h1>' + self.getArrDrinksVO()[index].getDrinkName() + '</h1></div> '
											+ '    <img src="' + self.getArrDrinksVO()[index].getDrinkImgBase64() + '" />'
											+ '  </a>'
											+ '</div>';
									jQuery(tag).appendTo('#' + rowTranId);
								}
							}

							jQuery('#' + rowTranId + ' > div > a').on('click', function(event) {

								var drinkCode;

								event.preventDefault();

								jQuery('.collapse').collapse('hide');

								drinkCode = jQuery(this).find('div').eq(0).text();

								drink = _.find(self.getArrDrinksVO(), function(vo) {return vo.getDrinkCode() == drinkCode;});

								self.setOrderedMessage(drink.getDrinkName());

								showSizes();
							});
						}

						self.setOrderedMessage('~ Waiting ~');

						showDrinks();
					});
				}
			};

			return AncestorFormView.extend(result);
    });
  }
})(this);