/**
 *
 * @description MSC00020
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
 * @see {@link https://leafletjs.com/|Leaflet - a JavaScript library for interactive maps}
 * @see {@link https://leafletjs.com/reference-1.4.0.html|Documentation - Leaflet - a JavaScript library for interactive maps}
 * @see {@link https://github.com/Leaflet/Leaflet|Leaflet/Leaflet: JavaScript library for mobile-friendly interactive maps}
 *
 * @see {@link https://api.jquery.com/attribute-equals-selector/|Attribute Equals Selector [name=”value”] | jQuery API Documentation}
 * @see {@link https://api.jquery.com/multiple-attribute-selector/|Multiple Attribute Selector [name=”value”][name2=”value2″] | jQuery API Documentation}
 *
 * @see {@link https://github.com/Leaflet/Leaflet/issues/3238|To remove or clear all active layers without passing specific layer. · Issue #3238 · Leaflet/Leaflet}
 *
 */

requirejs(["tw.ace33022.util.browser.FormUtils"], function(FormUtils) {

	function showSelectRoleModal() {
	
		var tag, baseModal;
		var playRole;
		
		baseModal = FormUtils.addBaseModal();
		
		tag = '<div class="modal-body">'
				+ '  <div class="btn-group">'
				+ '    <div><label class="btn btn-primary" style="overflow: hidden; vertical-align: middle;"><input type="radio" style="position: absolute; vertical-align: middle; height: 1px; width: 1px; top: -20px;" name="playRole" value="0">乘客</label></div>'
				+ '    <div><label class="btn btn-primary" style="overflow: hidden; vertical-align: middle;"><input type="radio" style="position: absolute; vertical-align: middle; height: 1px; width: 1px; top: -20px;" name="playRole" value="1">司機</label></div>'
				+ '  </div>'
				+	'</div>';
		baseModal.find('.modal-content').append(tag);
		
		baseModal.find('input').on('click', function(event) {
		
			playRole = jQuery(event.target).val();
			
			baseModal.modal('hide');
		});
		
		baseModal.on('hidden.bs.modal', function() {
		
			jQuery(this).remove();
			
			window.navigator.geolocation.getCurrentPosition(

				function(position) {
				
					requirejs(["moment", "firebase", "leaflet.EasyButton"], function(moment, firebase) {
					
						function refreshAreaCustomMarker() {
						
							// 
						}

						/**
						 *
						 * @description showChatModal
						 *
						 * @version 2019/03/01 初始版本。
						 *
						 * @author ace
						 *
						 * @see {@link https://codepen.io/artzeeone/pen/yJVJBr|Custom Bootstrap modal backdrops}
						 * @see {@link https://www.jquery-az.com/minimize-maximize-modal-of-bootstrap-by-using-jquery-3-demos/|Minimize / Maximize modal of Bootstrap by using jQuery: 3 demos}
						 * @see {@link https://www.jquery-az.com/jquery/demo.php?ex=58.0_1|A demo of modal with minimize and maximize options}
						 *
						 * @see {@link https://eonasdan.github.io/bootstrap-datetimepicker/|https://eonasdan.github.io/bootstrap-datetimepicker/}
						 * @see {@link https://stackoverflow.com/questions/31858920/jquery-bootstrap-datetimepicker-change-event|onchange - jQuery bootstrap-datetimepicker change event - Stack Overflow}
						 *
						 */			
						function showChatModal() {
						
							var inpMessageId = 'inpMessage' + Math.random().toString(36).substr(2, 6);
							var btnSendMessageId = 'btnSendMessage' + Math.random().toString(36).substr(2, 6);

							var tag;

							var marker;
							
							var map = null;
							var conn = null;
							var position = null;
							var title = '交談窗';
							
							if (arguments.length !== 0) {
							
								if (typeof arguments[0]["map"] !== 'undefined') map = arguments[0]["map"];
								if (typeof arguments[0]["conn"] !== 'undefined') conn = arguments[0]["conn"];
								if (typeof arguments[0]["position"] !== 'undefined') position = arguments[0]["position"];
								if (typeof arguments[0]["title"] !== 'undefined') title = arguments[0]["title"];
								
								tag = '<div id="' + chatModalId + '" class="row">'
										+ '  <div class="chatbox chatbox22">'
										
										+ '    <div class="chatbox__title">'
										+ '      <h5>交談</h5>'
										+ '      <button class="chatbox__title__close">'
										+ '        <span>'
										+ '          <svg viewBox="0 0 12 12" width="12px" height="12px">'
										+ '            <line stroke="#FFFFFF" x1="11.75" y1="0.25" x2="0.25" y2="11.75"></line>'
										+ '            <line stroke="#FFFFFF" x1="11.75" y1="11.75" x2="0.25" y2="0.25"></line>'
										+ '          </svg>'
										+ '        </span>'
										+ '      </button>'
										+ '    </div>'
										
										+ '    <div class="chatbox__body">'
										+ '    </div>'
										
										+ '    <div style="position: absolute; height: 40px; bottom: 0px;">'
										+ '      <div class="input-group">'
										+ '        <input type="text" id="' + inpMessageId + '" class="form-control" placeholder="Type message here..." tabindex="0" dir="ltr" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" contenteditable="true" />'
										+ '        <span class="input-group-btn">'
										+ '          <button id="' + btnSendMessageId + '" class="btn btn-primary">送出</button>'
										+ '        </span>'
										+ '      </div>'
										+ '    </div>'
										+ '  </div>'
										+ '</div>';
								jQuery(jQuery('.container-fluid')[0]).append(tag);
								
								jQuery('.chatbox__title').on('click', function(event) {
								
									jQuery('.chatbox').toggleClass('chatbox--tray');
								});
								
								jQuery('.chatbox__title__close').on('click', function(event) {
								
									event.stopPropagation();
									
									jQuery('#' + chatModalId).remove();
									
									// $chatbox.addClass('chatbox--closed');
								});
								
								jQuery('#' + btnSendMessageId).on('click', function(event) {
								
									var now = new Date();
									
									var tag;
								
									if (jQuery('#' + inpMessageId).val() !== '') {
									
										conn.send(JSON.stringify({"message": jQuery('#' + inpMessageId).val()}));
										
										tag = '      <div class="chatbox__body__message chatbox__body__message--right">'
												+ '        <div class="chatbox_timing">'
												+ '          <ul>'
												+ '            <li><i class="fa fa-calendar"></i>' + moment(now).format(Configurations["ShowDateFormatString"]) + '</li>'
												+ '            <li><i class="fa fa-clock-o"></i>' + moment(now).format(Configurations["ShowTimeFormatString"]) + '</li>'
												+ '          </ul>'
												+ '        </div>'
												+ '        <img src="https://www.gstatic.com/webp/gallery/2.jpg" alt="Picture">'
												+ '        <div class="ul_section_full">'
												+ '          <ul class="ul_msg">'
												+ '            <li>' + jQuery('#' + inpMessageId).val() + '</li>'
												+ '          </ul>'
												+ '        </div>'
												+ '      </div>';
										jQuery('.chatbox__body').append(tag);
									}
									
									jQuery('#' + inpMessageId).val('');
									jQuery('#' + inpMessageId).focus();
								});
								
								jQuery('#' + inpMessageId).focus();
							}
						}
						
						function appendOppositeMessage(message) {
						
							var now = new Date();
							
							var tag;
							
							if (message !== '') {
							
								tag = '      <div class="chatbox__body__message chatbox__body__message--left">'
										+ '        <div class="chatbox_timing">'
										+ '          <ul>'
										+ '            <li><i class="fa fa-calendar"></i>' + moment(now).format(Configurations["ShowDateFormatString"]) + '</li>'
										+ '            <li><i class="fa fa-clock-o"></i>' + moment(now).format(Configurations["ShowTimeFormatString"]) + '</li>'
										+ '          </ul>'
										+ '        </div>'
										+ '        <img src="https://www.gstatic.com/webp/gallery/2.jpg" alt="Picture">'
										+ '        <div class="ul_section_full">'
										+ '          <ul class="ul_msg">'
										+ '            <li>' + message + '</li>'
										+ '          </ul>'
										+ '        </div>'
										+ '      </div>';
								jQuery('.chatbox__body').append(tag);
								
								(new Audio('sounds/unsure.mp3')).play();
							}
						}
						
						var selfDebug = 1;
						
						var chatModalId = 'chatModal' + Math.random().toString(36).substr(2, 6);
						
						var baseLayerGroup = new L.layerGroup();
						var rtcLayerGroup = new L.layerGroup();
						
						var peer;
						
						map.eachLayer(function(layer) { 
						
							// console.log(layer);
							// map.removeLayer(layer);
						});
						
						firebase.initializeApp({

							"apiKey": "AIzaSyBg5LJIDwF99Pg3JcwSvXKZT72XeW868N8",
							"authDomain": "activitymap.firebaseapp.com",
							"databaseURL": "https://activitymap.firebaseio.com",
							"projectId": "firebase-activitymap",
							"storageBucket": "firebase-activitymap.appspot.com",
							"messagingSenderId": "749991636936"
						});
						
						if (playRole == 0) {
						
							peer = new Peer(null, {
							
								debug: 2
							});
							
							peer.on('open', function(id) {
							
								if (peer.id !== null) {
								
									firebase.database().ref('fvs/finders/' + peer.id).set({"latitude": position.coords.latitude, "longitude": position.coords.longitude}, function(error) {
									
										var marker = null, markerOptions;
										
										var conn = null;
										
										if (error != null) {
										
											FormUtils.showMessage(
											
												'取得資料過程有誤，請重新登入！',
												showSelectRoleModal
											);
										}
										else {

											map.addLayer(rtcLayerGroup);
											
											markerOptions = {
										
												"icon": L.divIcon({"iconSize": L.point(25, 25), "className": "leaflet-div-icon-finder"})
											};
										
											if (selfDebug === 1) markerOptions["draggable"] = true;
											
											marker = new L.marker([position.coords.latitude, position.coords.longitude], markerOptions);
											
											marker.on('dragend', function(event) {
											
												firebase.database().ref('fvs/finders/' + peer.id).set({"latitude": marker.getLatLng()["lat"], "longitude": marker.getLatLng()["lng"]}, function(error) {});
											});
												
											if (selfDebug === 0) {
													
												window.navigator.geolocation.watchPosition(
													
													function(position) {
													
														marker.setLatLng(L.latLng(position.coords.latitude, position.coords.longitude));
														
														firebase.database().ref('fvs/finders/' + peer.id).set({ "latitude": position.coords.latitude, "longitude": position.coords.longitude }, function(error) { console.log(error); });
													},
													function(error) {
													
														console.log(error);
													}
												);
											}
										
											window.addEventListener('beforeunload', function(event) {
											
												firebase.database().ref('fvs/finders/' + peer.id).remove();
											});
											
											peer.on('connection', function(c) {
											
												var peerMarkerOptions = {
											
													"icon": L.divIcon({"iconSize": [28, 28], "html": '<i class="fa fa-taxi fa-2x"></i>'})
												};
												
												var peerMarker = null;
											
												firebase.database().ref('fvs/finders/' + peer.id).remove();
											
												// Allow only a single connection
												if (conn) {
												
													c.on('open', function() {
													
														// c.send("Already connected to another client");
														setTimeout(function() { c.close(); }, 500);
													});
												}
												else {
												
													conn = c;
													// console.log("Connected to: " + conn.peer);
													
													conn.on('data', function(data) {
													
														var sendData = {};
														
														if (jQuery('#' + chatModalId).length === 0) {
														
															showChatModal({
															
																"map": map,
																"conn": conn,
																"position": position,
																"title": "XV-456"
															});
															
															if (typeof (JSON.parse(data))["peerLatLng"] !== 'undefined') {
															
																peerMarker = new L.marker([(JSON.parse(data))["peerLatLng"]["latitude"], (JSON.parse(data))["peerLatLng"]["longitude"]], peerMarkerOptions);
																
																peerMarker.addTo(rtcLayerGroup);
															}
															
															sendData["peerLatLng"] = {
															
																"latitude": marker.getLatLng()["lat"],
																"longitude": marker.getLatLng()["lng"]
															};
															
															conn.send(JSON.stringify(sendData));
														}
														
														marker.on('dragend', function(event) {
												
															var sendData = {
															
																"peerLatLng": {
																
																	"latitude": marker.getLatLng()["lat"],
																	"longitude": marker.getLatLng()["lng"]
																}
															};
															
															conn.send(JSON.stringify(sendData));
														});
														
														if (typeof (JSON.parse(data))["message"] !== 'undefined') appendOppositeMessage((JSON.parse(data))["message"]);
														
														if ((typeof (JSON.parse(data))["peerLatLng"] !== 'undefined') && (peerMarker !== null)) peerMarker.setLatLng(L.latLng((JSON.parse(data))["peerLatLng"]["latitude"], (JSON.parse(data))["peerLatLng"]["longitude"]));
													});
													
													conn.on('close', function() { 
													
														conn = null;
													});
												}
											});
											
											peer.on('disconnected', function() {
											
												peer.reconnect();
												
												alert('Connection lost. Please reconnect');
											});
											
											peer.on('close', function() {
											
												conn = null;
												
												alert('Peer destroyed');
											});
											
											peer.on('error', function(error) { 
											
												console.log(error); 
											});
											
											marker.addTo(rtcLayerGroup);
										}
									});
								} 
								else {
								
									FormUtils.showMessage(
									
										'取得資料過程有誤，請重新登入！',
										showSelectRoleModal
									);
								}
							});
						}
						else if (playRole == 1) {
						
							peer = new Peer(null, {
							
								debug: 2
							});

							peer.on('open', function(id) {
							
								var marker = null, markerOptions;
							
								if (peer.id !== null) {
								
									map.addLayer(baseLayerGroup);
								
									markerOptions = {
								
										"icon": L.divIcon({"iconSize": [28, 28], "html": '<i class="fa fa-taxi fa-2x"></i>'})
									};
									
									if (selfDebug === 1) markerOptions["draggable"] = true;
									
									marker = new L.marker([position.coords.latitude, position.coords.longitude], markerOptions);
									
									marker.addTo(baseLayerGroup);
									marker.addTo(rtcLayerGroup);
									
									if (selfDebug === 0) {
											
										window.navigator.geolocation.watchPosition(
											
											function(position) {
											
												marker.setLatLng(L.latLng(position.coords.latitude, position.coords.longitude));
											},
											function(error) {
											
												// console.log(error);
											}
										);
									}
									
									firebase.database().ref('fvs/finders').on('child_added', function(snapshot, prevChildKey) {
									
										var customMarkerOptions = {
										
											"icon": L.divIcon({"iconSize": L.point(25, 25), "className": "leaflet-div-icon-finder"})
										};
									
										var customMarker = L.marker([snapshot.val()["latitude"], snapshot.val()["longitude"]], customMarkerOptions);
										
										customMarker["id"] = snapshot.key;
										
										customMarker.on('click', function(event) {
										
											var peerMarkerOptions = {
											
												"icon": L.divIcon({"iconSize": L.point(25, 25), "className": "leaflet-div-icon-finder"})
											};
										
											var peerMarker = L.marker(customMarker.getLatLng(), peerMarkerOptions);
										
											var conn = peer.connect(snapshot.key, {
											
												"reliable": true
											});
											
											peerMarker.addTo(rtcLayerGroup);
											
											conn.on('open', function() {
											
												// console.log("Connected to: " + conn.peer);
												
												var sendData = {};
												
												map.removeLayer(baseLayerGroup);
												map.addLayer(rtcLayerGroup);
												
												if (jQuery('#' + chatModalId).length === 0) {
												
													showChatModal({
													
														"map": map,
														"conn": conn,
														"position": position,
														"title": "XV-456"
													});
												}
												
												sendData["message"] = '您好，要搭計程車嗎？';
												
												sendData["peerLatLng"] = {
												
													"latitude": marker.getLatLng()["lat"],
													"longitude": marker.getLatLng()["lng"]
												};
												
												conn.send(JSON.stringify(sendData));
												
												marker.on('dragend', function(event) {
										
													var sendData = {
													
														"peerLatLng": {
														
															"latitude": marker.getLatLng()["lat"],
															"longitude": marker.getLatLng()["lng"]
														}
													};
													
													conn.send(JSON.stringify(sendData));
												});
												
												if (selfDebug === 0) {
												
													window.navigator.geolocation.watchPosition(
														
														function(position) {
														
															var sendData = {
															
																"peerLatLng": {
																
																	"latitude": marker.getLatLng()["lat"],
																	"longitude": marker.getLatLng()["lng"]
																}
															};
															
															conn.send(JSON.stringify(sendData));
														},
														function(error) {
														
															// console.log(error);
														}
													)
												}
											});
											
											// Handle incoming data (messages only since this is the signal sender)
											conn.on('data', function(data) {
												
												if (typeof (JSON.parse(data))["message"] !== 'undefined') appendOppositeMessage((JSON.parse(data))["message"]);
												
												if ((typeof (JSON.parse(data))["peerLatLng"] !== 'undefined')) peerMarker.setLatLng(L.latLng((JSON.parse(data))["peerLatLng"]["latitude"], (JSON.parse(data))["peerLatLng"]["longitude"]));
											});
											
											conn.on('close', function() {
											
												FormUtils.showMessage(
												
													'連線已中斷！',
													function() {
													
														map.removeLayer(rtcLayerGroup);
														map.addLayer(baseLayerGroup);
													}
												);
											});
										});
										
										customMarker.addTo(baseLayerGroup);
									});
									
									firebase.database().ref('fvs/finders').on('child_changed', function(snapshot) {

										baseLayerGroup.eachLayer(function(layer) {
										
											if (snapshot.key == layer["id"]) layer.setLatLng(L.latLng(snapshot.val()["latitude"], snapshot.val()["longitude"]));
										});
									});
							
									firebase.database().ref('fvs/finders').on('child_removed', function(snapshot) {

										baseLayerGroup.eachLayer(function(layer) {
										
											if (snapshot.key == layer["id"]) baseLayerGroup.removeLayer(layer);
										});
									});
								}
								else {
								
									// 沒有取得WebRTC ID，顯示登入失敗！
								}
							});
						}
					});
				},
				function(error) {
				
					console.log(error.code);
					console.log(error.message);
				}
			);
		});
		
		baseModal.modal({
		
			"keyboard": false
		});
	}
	
	var map = null;
	
	if (typeof window.navigator.geolocation === 'undefined') {
	
		// @todo 2019/03/13 ace 改成顯示無法關閉的視窗。
		FormUtils.showMessage(
		
			'瀏覽器不支援地理定位功能，服務無法順利進行！',
			function() {
			}
		);
	}
	else {
	
		window.navigator.geolocation.getCurrentPosition(
		
			function(position) {
		
				requirejs(["leaflet.EasyButton"], function() {
				
					var easySuggestionButton = L.easyButton({

						states: [
							{
								"stateName": "suggestion",
								"title": "give me suggestion",
								"icon": "fa-comments",
								"onClick": function(btn, map) {
							
									var modalId = 'modal' + Math.random().toString(36).substr(2, 6);
									var textCommentId = 'textComment' + Math.random().toString(36).substr(2, 6);
									var btnConfirmId = 'btnConfirm' + Math.random().toString(36).substr(2, 6);
										
									var tag;
									var baseModal, modalHeader, modalBody, modalFooter;
									
									var showRegardMessage = false;
									
									tag = '<div id="' + modalId + '" class="modal fade" tabindex="-1" role="dialog">'
											+ '  <div class="modal-dialog">'
											+ '    <div class="modal-content">'
											+ '    </div>'
											+ '  </div>'
											+ '</div>';
									baseModal = jQuery(tag);

									tag = '<div class="modal-header">'
											+ '  <h4 class="modal-title">問題回報／建議事項</h4>'
											+ '</div>';
									modalHeader = jQuery(tag);
									baseModal.find('.modal-content').append(modalHeader);

									tag = '<div class="modal-body">'
											+ '  <form class="form-horizontal" role="form">'
											+ '    <div class="form-group">'
											+ '      <div class="col-sm-12">'
											+ '        <textarea id="' + textCommentId + '" rows="5" class="form-control" style="resize: none;"></textarea>'
											+ '      </div>'
											+ '    </div>'
											+ '  </form>'
											+ '</div>';
									modalBody = jQuery(tag);
									baseModal.find('.modal-content').append(modalBody);

									tag = '<div class="modal-footer">'
											+ '  <input type="button" id="' + btnConfirmId + '" class="btn btn-primary" value="確定">'
											+ '  <input type="button" class="btn" data-dismiss="modal" value="取消">'
											+ '</div>';
									modalFooter = jQuery(tag);
									baseModal.find('.modal-content').append(modalFooter);

									baseModal.appendTo('body');
									
									jQuery('#' + btnConfirmId).on('click', function(event) {
									
										var ajaxSettings = {
										
											// "contentType": "application/json; charset=utf-8",
											"dataType": "json",
											"url": "https://script.google.com/macros/s/AKfycbx-VcoJNkmNvNdpUmUEPv8Yc9054NfyWOFd3qZCrqyqZ_hjDbc/exec",
											"data": jQuery('#' + textCommentId).val(),
											"type": "POST",
											"success": function(data, textStatus, jqXHR) {
											
												if (data["error_code"] == 0) {
												
													showRegardMessage = true;
													
													jQuery('#' + modalId).modal('hide');
												}
												else {
												
													// show error message
												}
											},
											"error": function(jqXHR, textStatus, errorThrown) {
											
												// show error message
											}
										};
										
										jQuery.ajax(ajaxSettings);
									});
									
									jQuery('#' + modalId).on('shown.bs.modal', function() { 
									
										jQuery('#' + textCommentId).focus();
									});
									
									jQuery('#' + modalId).on('hidden.bs.modal', function() { 
									
										jQuery(this).remove();
										
										if (showRegardMessage == true) {
										
											FormUtils.showMessage('感謝提供建議或問題反應！！');
										}
									});
									
									jQuery('#' + modalId).modal({keyboard: false});

									jQuery('#' + modalId).modal('show');
								}
							} 
						]
					});

					/**
					 *
					 * @description easyShowAreaMarkerButton
					 *
					 * @version 2018/08/05 初始版本。
					 *
					 * @author ace
					 *
					 * @see {@link https://stackoverflow.com/questions/35772717/searching-markers-with-leaflet-control-search-from-drop-down-list|javascript - Searching markers with Leaflet.Control.Search from drop down list - Stack Overflow}
					 * @see {@link https://stackoverflow.com/questions/34322864/finding-a-specific-layer-in-a-leaflet-layergroup-where-layers-are-polygons|javascript - Finding a specific layer in a Leaflet LayerGroup where layers are polygons - Stack Overflow}
					 * @see {@link https://stackoverflow.com/questions/15755219/find-layers-in-current-map-view-with-leafletjs|gis - Find layers in current map view with Leafletjs - Stack Overflow}
					 * @see {@link https://stackoverflow.com/questions/22081680/get-a-list-of-markers-layers-within-current-map-bounds-in-leaflet/37665972|javascript - Get a list of markers/layers within current map bounds in Leaflet - Stack Overflow}
					 * @see {@link https://stackoverflow.com/questions/25372033/adding-layers-in-layer-group-dynamically-to-layer-control-in-leaflet|adding layers in layer group dynamically to layer control in leaflet - Stack Overflow}
					 *
					 * @see {@link https://github.com/stefanocudini/leaflet-search|stefanocudini/leaflet-search: Search stuff in a Leaflet map}
					 * @see {@link https://labs.easyblog.it/maps/leaflet-search/|Leaflet.Control.Search}
					 * @see {@link https://github.com/stefanocudini/leaflet-list-markers|stefanocudini/leaflet-list-markers: A Leaflet Control for listing visible markers/features in a interactive box}
					 * @see {@link https://labs.easyblog.it/maps/leaflet-list-markers/|Leaflet List Markers}
					 *
					 * @see {@link https://blogs.kent.ac.uk/websolutions/2015/01/29/filtering-map-markers-with-leaflet-js-a-brief-technical-overview/|Filtering map markers with Leaflet.js: a brief technical overview – Web Solutions}
					 *
					 * @see {@link http://jsfiddle.net/FranceImage/9xjt8223/|Dynamic Layer Groups - JSFiddle}
					 * @see {@link https://codepen.io/gvenech/pen/QEjEGg|Leaflet Example with LayerGroup}
					 *
					 */
					var easyShowAreaMarkerButton = L.easyButton({

						states: [
							{
								"stateName": "show-area-event",
								"title": "show area finders",
								"icon": "fa-eye",
								"onClick": function(btn, map) {
							
									var tag;

									var modalHeader, modalBody, modalFooter;
									var baseModal;
									
									var viewLayer = null;
									
									tag = '<div class="modal-header">'
											+ '  <h4 style="text-align: center;">活動資訊</h4>'
											+ '</div>';
									modalHeader = jQuery(tag);

									tag = '<div class="modal-footer">'
											+ '  <input type="button" class="btn btn-primary" data-dismiss="modal" value="關閉" />'
											+ '</div>';
									modalFooter = jQuery(tag);

									tag = '<table class="table table-bordered table-hover table-responsive">'
											+ '  <thead>'
											+ '    <tr>'
											+ '      <th style="text-align: center; cursor: default;">上線時間</th>'
											+ '    </tr>'
											+ '  </thead>'
											+ '  <tbody class="rowlink"></tbody>'
											+ '</table>';
									modalBody = jQuery(tag);

									map.eachLayer(function(layer) {
									
										var trElement;
									
										if ((layer instanceof L.Marker) && (map.getBounds().contains(layer.getLatLng()))) {
										
											if (layer.options.icon.options.className == 'leaflet-div-icon-finder') {
											
												tag = '<tr>'
														// + '  <td style="text-align: center;"><span class="' + layer.options.icon.options.className + '"></span></td>'
														+ '  <td style="text-align: center;"><span class="' + layer.options.icon.options.className + '"></span></td>'
														+ '</tr>';
												trElement = jQuery(tag);
												
												trElement.find('td').on('click', function(event) {
												
													viewLayer = layer;
													
													baseModal.modal('hide');
												});
												
												modalBody.find('tbody').append(trElement);
											}
										}
									});
									
									baseModal = FormUtils.addBaseModal(modalHeader, modalBody, modalFooter);
									
									baseModal.on('hidden.bs.modal', function(event) {
								
										jQuery(this).remove();
										
										if (viewLayer != null) {
										
											map.setView(viewLayer.getLatLng(), 15);
										}
									});
									
									baseModal.modal('show');
								}
							} 
						]
					});

					var mapId = 'map' + Math.random().toString(36).substr(2, 6);
					
					jQuery('body').append('<div class="container-fluid" style="height: 100%;"></div>');
					
					jQuery(jQuery('.container-fluid')[0]).append('<div id="' + mapId + '" class="row" style="height: 100%;"></div>');
					
					map = L.map(mapId);
					
					// set map tiles source
					L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

							// attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
							maxZoom: 18
						}
					).addTo(map);
					
					easySuggestionButton.addTo(map);
					
					map.setView([position.coords.latitude, position.coords.longitude], 16);
					
					showSelectRoleModal();
				});
			},
			function(error) {
			
				// console.log(error.code);
				// console.log(error.message);
				
				if (error.code === 1) {
				
					// @todo 2019/03/13 ace 改成顯示無法關閉的視窗。
					FormUtils.showMessage(
					
						'必須允許地理定位功能才能繼續執行程式！',
						function() {
						}
					);
				}
			}
		);
	}
});