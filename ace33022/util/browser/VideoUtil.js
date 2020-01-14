/**
 *
 * @description VideoUtils
 *
 * @version 2017/10/13 初始版本。
 *
 * @author ace
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link https://jquery.com/|jQuery}
 *
 */

(function(root) {

	define(["videojs", "videojs-hotkeys", "jquery"], function(videojs) {

		/**
		 *
		 * @description Videojs object
		 *
		 * @param {String} id。
		 * @param {Object} options。
		 *
		 * @return
		 *
		 * @version 2017/10/13 初始版本。
		 *
		 * @author ace
		 *
		 * @see {@link https://videojs.com/|Video.js: The Player Framework}
		 * @see {@link https://github.com/videojs/video.js|videojs/video.js: Video.js - open source HTML5 & Flash video player}
		 * @see {@link http://videojs.github.io/font/|VideoJS}
		 * @see {@link https://github.com/videojs/video.js/wiki/Skins|Skins · videojs/video.js Wiki}
		 *
		 * @see {@link https://docs.videojs.com/|Home | Video.js Documentation}
		 * @see {@link https://docs.videojs.com/docs/|https://docs.videojs.com/docs/}
		 *
		 * @see {@link https://docs.videojs.com/docs/api/|API Documentation Index}
		 *
		 * @see {@link https://docs.videojs.com/docs/guides/setup.html|Videojs Setup}
		 * @see {@link https://docs.videojs.com/docs/guides/options.html|Videojs Options}
		 * @see {@link https://docs.videojs.com/docs/guides/components.html|Videojs Components}
		 * @see {@link https://docs.videojs.com/docs/guides/skins.html|Videojs Skins}
		 *
		 * @see {@link https://docs.videojs.com/tutorial-options.html|Tutorial: options | Video.js Documentation}
		 *
		 * @see {@link https://www.lifewire.com/set-height-html-element-100-percent-3467075|How to Set the Height of an HTML Element to 100%}
		 * @see {@link https://github.com/videojs/video.js/issues/3027|16:9 or 4:3 scaling option - videos of a different aspect ratio aren't vertically centred · Issue #3027 · videojs/video.js}
		 * @see {@link https://stackoverflow.com/questions/18849839/how-to-disable-scrollbar-in-webpage-not-hide-scrollbar|html - How to DISABLE scrollbar in webpage? (not HIDE scrollbar) - Stack Overflow}
		 *
		 * @todo 2019/02/14 ThisAV網站採用video.js播放器，有實作預覽畫面功能(like youtube)！！
		 *
		 * @comment SDMT-810 時を止めて近親相姦やりたい放題！ 妹は僕の中出しオナホール - 視頻 - ThisAV.com-世界第一中文成人娛樂網站(http://www.thisav.com/video/301775/sdmt-810-%E6%99%82%E3%82%92%E6%AD%A2%E3%82%81%E3%81%A6%E8%BF%91%E8%A6%AA%E7%9B%B8%E5%A7%A6%E3%82%84%E3%82%8A%E3%81%9F%E3%81%84%E6%94%BE%E9%A1%8C%EF%BC%81-%E5%A6%B9%E3%81%AF%E5%83%95%E3%81%AE%E4%B8%AD%E5%87%BA%E3%81%97%E3%82%AA%E3%83%8A%E3%83%9B%E3%83%BC%E3%83%AB.html)
		 *
		 */
		var getVideojs = function(videoId, options) {
		
			var result;

			var skin_css = '.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {'
									 + '  width: 10em;'
									 + '}'

									 + '.video-js .vjs-controls-disabled .vjs-big-play-button {'
									 + '  display: none!important;'
									 + '}'

									 + '.video-js .vjs-control {'
									 + '  width: 3em;'
									 + '}'

									 + '.video-js .vjs-menu-button-inline:before {'
									 + '  width: 1.5em;'
									 + '}'

									 + '.vjs-menu-button-inline .vjs-menu {'
									 + '  left: 3em;'
									 + '}'

									 + '.vjs-paused.vjs-has-started.video-js .vjs-big-play-button,.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button {'
									 + '  display: block;'
									 + '}'

									 + '.video-js .vjs-load-progress div,.vjs-seeking .vjs-big-play-button,.vjs-waiting .vjs-big-play-button {'
									 + '  display: none!important;'
									 + '}'

									 + '.video-js .vjs-mouse-display:after,.video-js .vjs-play-progress:after {'
									 + '  padding: 0 .4em .3em;'
									 + '}'

									 + '.video-js.vjs-ended .vjs-loading-spinner {'
									 + '  display: none;'
									 + '}'

									 + '.video-js.vjs-ended .vjs-big-play-button {'
									 + '  display: block !important;'
									 + '}'

									 + '.video-js *,.video-js:after,.video-js:before {'
									 + '  box-sizing: inherit;'
									 + '  font-size: inherit;'
									 + '  color: inherit;'
									 + '  line-height: inherit;'
									 + '}'

									 + '.video-js.vjs-fullscreen,.video-js.vjs-fullscreen .vjs-tech {'
									 + '  width: 100%!important;'
									 + '  height: 100%!important;'
									 + '}'

									 + '.video-js {'
									 + '  font-size: 14px;'
									 + '  overflow: hidden;'
									 + '}'

									 + '.video-js .vjs-control {'
									 + '  color: inherit;'
									 + '}'

									 + '.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {'
									 + '  width: 8.35em;'
									 + '}'

									 + '.video-js .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content {'
									 + '  height: 3em;'
									 + '  width: 6.35em;'
									 + '}'

									 + '.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before {'
    							 + '  text-shadow: 0 0 1em #fff,0 0 1em #fff,0 0 1em #fff;'
									 + '}'

									 + '.video-js .vjs-spacer,.video-js .vjs-time-control {'
									 + '  display: -webkit-box;'
									 + '  display: -moz-box;'
									 + '  display: -ms-flexbox;'
									 + '  display: -webkit-flex;'
									 + '  display: flex;'
									 + '  -webkit-box-flex: 1 1 auto;'
									 + '  -moz-box-flex: 1 1 auto;'
									 + '  -webkit-flex: 1 1 auto;'
									 + '  -ms-flex: 1 1 auto;'
									 + '  flex: 1 1 auto;'
									 + '}'

									 + '.video-js .vjs-time-control {'
									 + '  -webkit-box-flex: 0 1 auto;'
									 + '  -moz-box-flex: 0 1 auto;'
									 + '  -webkit-flex: 0 1 auto;'
									 + '  -ms-flex: 0 1 auto;'
									 + '  flex: 0 1 auto;'
									 + '  width: auto;'
									 + '}'

									 + '.video-js .vjs-time-control.vjs-time-divider {'
									 + '  width: 14px;'
									 + '}'

									 + '.video-js .vjs-time-control.vjs-time-divider div {'
									 + '  width: 100%;'
									 + '  text-align: center;'
									 + '}'

									 + '.video-js .vjs-time-control.vjs-current-time {'
									 + '  margin-left: 1em;'
									 + '}'

									 + '.video-js .vjs-time-control .vjs-current-time-display,.video-js .vjs-time-control .vjs-duration-display {'
									 + '  width: 100%;'
									 + '}'

									 + '.video-js .vjs-time-control .vjs-current-time-display {'
									 + '  text-align: right;'
									 + '}'

									 + '.video-js .vjs-time-control .vjs-duration-display {'
									 + '  text-align: left;'
									 + '}'

									 + '.video-js .vjs-play-progress:before,.video-js .vjs-progress-control .vjs-play-progress:before,.video-js .vjs-remaining-time,.video-js .vjs-volume-level:after,.video-js .vjs-volume-level:before,.video-js.vjs-live .vjs-time-control.vjs-current-time,.video-js.vjs-live .vjs-time-control.vjs-duration,.video-js.vjs-live .vjs-time-control.vjs-time-divider,.video-js.vjs-no-flex .vjs-time-control.vjs-remaining-time {'
									 + '  display: none;'
									 + '}'

									 + '.video-js.vjs-no-flex .vjs-time-control {'
									 + '  display: table-cell;'
									 + '  width: 4em;'
									 + '}'

									 + '.video-js .vjs-progress-control {'
									 + '  position: absolute;'
									 + '  left: 0;'
									 + '  right: 0;'
									 + '  width: 100%;'
									 + '  height: .5em;'
									 + '  top: -.5em;'
									 + '}'

									 + '.video-js .vjs-progress-control .vjs-load-progress,.video-js .vjs-progress-control .vjs-play-progress,.video-js .vjs-progress-control .vjs-progress-holder {'
									 + '  height: 100%;'
									 + '}'

									 + '.video-js .vjs-progress-control .vjs-progress-holder {'
									 + '  margin: 0;'
									 + '}'

									 + '.video-js .vjs-progress-control:hover {'
									 + '  height: 1.5em;'
									 + '  top: -1.5em;'
									 + '}'

									 + '.video-js .vjs-control-bar {'
									 + '  -webkit-transition: -webkit-transform .1s ease 0s;'
									 + '  -moz-transition: -moz-transform .1s ease 0s;'
									 + '  -ms-transition: -ms-transform .1s ease 0s;'
									 + '  -o-transition: -o-transform .1s ease 0s;'
									 + '  transition: transform .1s ease 0s;'
									 + '}'

									 + '.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-active .vjs-control-bar,.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-inactive .vjs-control-bar,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-active .vjs-control-bar,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-control-bar,.video-js.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-control-bar {'
									 + '  visibility: visible;'
									 + '  opacity: 1;'
									 + '  -webkit-backface-visibility: hidden;'
									 + '  -webkit-transform: translateY(3em);'
									 + '  -moz-transform: translateY(3em);'
									 + '  -ms-transform: translateY(3em);'
									 + '  -o-transform: translateY(3em);'
									 + '  transform: translateY(3em);'
									 + '  -webkit-transition: -webkit-transform 1s ease 0s;'
									 + '  -moz-transition: -moz-transform 1s ease 0s;'
									 + '  -ms-transition: -ms-transform 1s ease 0s;'
									 + '  -o-transition: -o-transform 1s ease 0s;'
									 + '  transition: transform 1s ease 0s;'
									 + '}'

									 + '.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-active .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-inactive .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-active .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-progress-control,.video-js.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-progress-control {'
									 + '  height: .25em;'
									 + '  top: -.25em;'
									 + '  pointer-events: none;'
									 + '  -webkit-transition: height 1s,top 1s;'
									 + '  -moz-transition: height 1s,top 1s;'
									 + '  -ms-transition: height 1s,top 1s;'
									 + '  -o-transition: height 1s,top 1s;'
									 + '  transition: height 1s,top 1s;'
									 + '}'

									 + '.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-active.vjs-fullscreen .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-inactive.vjs-fullscreen .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-active.vjs-fullscreen .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-inactive.vjs-fullscreen .vjs-progress-control,.video-js.vjs-has-started.vjs-playing.vjs-user-inactive.vjs-fullscreen .vjs-progress-control {'
									 + '  opacity: 0;'
									 + '  -webkit-transition: opacity 1s ease 1s;'
									 + '  -moz-transition: opacity 1s ease 1s;'
									 + '  -ms-transition: opacity 1s ease 1s;'
									 + '  -o-transition: opacity 1s ease 1s;'
									 + '  transition: opacity 1s ease 1s;'
									 + '}'

									 + '.video-js.vjs-live .vjs-live-control {'
									 + '  margin-left: 1em;'
									 + '}'

									 + '.video-js .vjs-big-play-button {'
									 + '  top: 50%;'
									 + '  left: 50%;'
									 + '  margin-left: -1em;'
									 + '  margin-top: -1em;'
									 + '  width: 2em;'
									 + '  height: 2em;'
									 + '  line-height: 2em;'
									 + '  border: none;'
									 + '  border-radius: 50%;'
									 + '  font-size: 3.5em;'
									 + '  background-color: rgba(0,0,0,.45);'
									 + '  color: #fff;'
									 + '  -webkit-transition: border-color .4s,outline .4s,background-color .4s;'
									 + '  -moz-transition: border-color .4s,outline .4s,background-color .4s;'
									 + '  -ms-transition: border-color .4s,outline .4s,background-color .4s;'
									 + '  -o-transition: border-color .4s,outline .4s,background-color .4s;'
									 + '  transition: border-color .4s,outline .4s,background-color .4s;'
									 + '}'

									 + '.video-js .vjs-menu-button-popup .vjs-menu {'
									 + '  left: -3em;'
									 + '}'

									 + '.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-content {'
									 + '  background-color: transparent;'
									 + '  width: 12em;'
									 + '  left: -1.5em;'
									 + '  padding-bottom: .5em;'
									 + '}'

									 + '.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-item,.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-title {'
									 + '  background-color: #151b17;'
									 + '  margin: .3em 0;'
									 + '  padding: .5em;'
									 + '  border-radius: .3em;'
									 + '}'

									 + '.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-item.vjs-selected {'
									 + '  background-color: #2483d5;'
									 + '}'

									 + '.video-js .vjs-big-play-button {'
									 + '  background-color: rgba(0,0,0,0);'
									 + '  font-size: 8em;'
									 + '  border-radius: 50%;'
									 + '  height: 1em !important;'
									 + '  line-height: 1em !important;'
									 + '  margin-top: -0.5em !important;'
									 + '}'

									 + '.video-js:hover .vjs-big-play-button,.video-js .vjs-big-play-button:focus,.video-js .vjs-big-play-button:active {'
									 + '  background-color: rgba(0,0,0,0);'
									 + '}'

									 + '.video-js .vjs-loading-spinner {'
									 + '  border-color: #b99beb;'
									 + '}'

									 + '.video-js .vjs-control-bar2 {'
									 + '  background-color: #000000;'
									 + '}'

									 + '.video-js .vjs-control-bar {'
									 + '  background-color: rgba(0,0,0,0.4) !important;'
									 + '  color: #ffffff;'
									 + '  font-size: 16px;'	// button size
									 + '}'

									 + '.video-js .vjs-play-progress,.video-js  .vjs-volume-level {'
									 + '  background-color: #b99beb;'
									 + '}'

									 + '.video-js .vjs-load-progress {'
									 + '  background: rgba(255,255,255,0.8);'
									 + '}'

									 + '.video-js .vjs-big-play-button:hover {'
									 + '  color: #b99beb;'
									 + '}'

									 + '.video-js .vjs-control:focus:before, .video-js .vjs-control:hover:before {'
									 + '  color: #b99beb;'
									 + '  text-shadow: none;'
									 + '}';
		
			var defaultHotkeyOptions = {

				"seekStep": 5,
				"volumeStep": 0.1
			};

			var defaultVideojsOptions = {

				"controlBar": {

					"remainingTimeDisplay": false
				}
			};

			if (typeof options["hotkeys"] !== 'undefined') {

				if (typeof options["hotkeys"]["seekStep"] !== 'undefined') defaultHotkeyOptions["seekStep"] = options["hotkeys"]["seekStep"];
				if (typeof options["hotkeys"]["volumeStep"] !== 'undefined') defaultHotkeyOptions["volumeStep"] = options["hotkeys"]["volumeStep"];
			}

			if (typeof options["playbackRates"] !== 'undefined') defaultVideojsOptions["playbackRates"] = options["playbackRates"];

			videojs.registerComponent('StopButton',

				videojs.extend(videojs.getComponent('Button'), {

					"constructor": function() {

						videojs.getComponent('Button').apply(this, arguments);

						// Font Awesome
						this.addClass('fa');
						this.addClass('fa-square');

						this.controlText('Stop');
					},
					"handleClick": function() {

						this.player().pause();

						this.player().currentTime(this.player().duration());
					}
				})
			);

			videojs.registerComponent('BackwardButton',

				videojs.extend(videojs.getComponent('Button'), {

					"constructor": function() {

						videojs.getComponent('Button').apply(this, arguments);

						// Font Awesome
						this.addClass('fa');
						this.addClass('fa-angle-double-left');

						this.controlText('-' + defaultHotkeyOptions["seekStep"] + 'sec');
					},
					"handleClick": function() {

						var curTime = this.player().currentTime() - defaultHotkeyOptions["seekStep"];

						if (this.player().currentTime() <= defaultHotkeyOptions["seekStep"]) curTime = 0;

						this.player().currentTime(curTime);
					}
				})
			);

			videojs.registerComponent('ForwardButton',

				videojs.extend(videojs.getComponent('Button'), {

					"constructor": function() {

						videojs.getComponent('Button').apply(this, arguments);

						// Font Awesome
						this.addClass('fa');
						this.addClass('fa-angle-double-right');

						this.controlText('+' + defaultHotkeyOptions["seekStep"] + 'sec');
					},
					"handleClick": function() {

						var wasPlaying = !this.player().paused();
						var curTime;

						if (wasPlaying) this.player().pause();

						curTime = this.player().currentTime() + defaultHotkeyOptions["seekStep"];

						if (curTime >= this.player().duration()) curTime = this.player().duration();

						this.player().currentTime(curTime);

						if (wasPlaying) this.player().play();
					}
				})
			);
			
			jQuery('head').append('<style>' + skin_css + '</style>');

			jQuery('#' + videoId).attr('preload', 'none');
			jQuery('#' + videoId).attr('controls', 'controls');

			if (!jQuery('#' + videoId).hasClass('video-js')) jQuery('#' + videoId).addClass('video-js');
			
			jQuery('#' + videoId).css({

				"margin": "0px",
				"width": "100%",
				"height": "100%",
				"overflow": "hidden"
			});

			result = videojs(videoId, defaultVideojsOptions, function() {

				var self = this;

				this.getChild('controlBar').addChild('StopButton', {}, 1);
				this.getChild('controlBar').addChild('BackwardButton', {}, 6);
				this.getChild('controlBar').addChild('ForwardButton', {}, 8);

				// focus back on player, keepy hotkey can be used.
				this.on('useractive', function(event) { self.focus(); });
				this.on('userinactive', function(event) { self.focus(); });
				
				this.on('click', function(event) { self.focus(); });
				
				this.off('dblclick');	// disable hotkeys full screen event
				
				// PlaybackRateMenuItem
				this.getChild('controlBar').getChild('PlaybackRateMenuButton').children()[1].children().forEach(function(element, index) {

					element.on('click', function(event) { self.focus(); });
				});
				
				this.hotkeys(defaultHotkeyOptions);
			});
			
			result.volume(0.5);
			if (typeof options["defaultVolume"] !== 'undefined') result.volume(options["defaultVolume"]);
			
			if (typeof options["src"] !== 'undefined') result.src(options["src"]);
			
			return result;
		};

		return {

			getVideojs: getVideojs
		};
	});
})(this);