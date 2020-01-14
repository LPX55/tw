/**
 *
 * @description require.js環境設定值。
 *
 * @version 2013/11/29 ace 初始版本。
 * @version 2015/05/20 ace 新增Custombox(http://dixso.github.io/custombox/)。
 * @version 2015/10/12 ace 新增PapaParse(http://papaparse.com/)。
 * @version 2015/10/12 ace 新增Highcharts(http://www.highcharts.com/)。
 * @version 2015/10/21 ace 新增ReUtil。
 * @version 2015/10/24 ace 新增BaseForm。
 * @version 2015/10/30 ace 新增js-xlsx。
 * @version 2016/02/23 ace 新增jquery-rss。
 * @version 2016/02/26 ace 新增jQuery Grid Plugin。
 * @version 2016/03/08 ace 新增FormUtil。
 * @version 2016/05/03 ace 新增jquery-contextual-menu。
 * @version 2016/05/10 ace 新增jquery-blockUI。
 * @version 2016/05/10 ace 新增jquery-simplemodal。
 * @version 2016/05/16 ace 新增jquery-timepicker-1.10.0。
 * @version 2016/10/11 ace 新增Bootstrap。
 * @version 2016/10/15 ace 新增Bootbox-4.4.0。
 * @version 2016/10/26 ace 新增Bootcards-1.1.2。
 * @version 2016/11/03 ace 新增jasny-bootstrap。
 * @version 2016/11/07 ace 新增bootstrap-fileinput。
 * @version 2016/11/09 ace 新增download(https://github.com/rndme/download/)。
 * @version 2016/11/14 ace 獨立jasny-bootstrap-rowlink。
 * @version 2017/02/10 ace 新增FileSaver。
 * @version 2017/02/10 ace 新增jszip。
 * @version 2017/02/11 ace 新增xlsx-loader。
 * @version 2017/02/12 ace 新增Blob.js。
 * @version 2017/02/22 ace 新增CodeMapUtil.js。
 * @version 2017/02/22 ace 新增XLSXUtil.js。
 * @version 2017/03/03 ace 新增Roles.js。
 * @version 2017/03/05 ace 新增Unveil.js(http://luis-almeida.github.io/unveil/)。
 * @version 2017/03/10 ace 新增md5.js(https://github.com/blueimp/JavaScript-MD5)。
 * @version 2017/04/10 ace 新增bootstrap-datetimepicker(https://github.com/Eonasdan/bootstrap-datetimepicker)。
 * @version 2017/05/26 ace 新增CodeMirror(https://codemirror.net/)。
 * @version 2017/05/27 ace 新增iScroll(http://iscrolljs.com/)。
 * @version 2017/05/27 ace 新增drawer(https://github.com/blivesta/drawer/)。
 * @version 2017/06/23 ace 新增video-js(http://videojs.com/)。
 * @version 2017/06/23 ace 新增videojs-hotkeys(https://github.com/ctd1500/videojs-hotkeys)。
 * @version 2017/06/23 ace 新增videojs-hotkeys-loader。
 * @version 2017/06/28 ace 新增editable-table(https://github.com/mindmup/editable-table)。
 * @version 2017/06/28 ace 新增jQuery-Tabledit(http://markcell.github.io/jquery-tabledit/)。
 * @version 2017/06/28 ace 新增X-editable(http://vitalets.github.io/x-editable/)。
 * @version 2017/07/17 ace 新增jsTree(https://www.jstree.com/)。
 * @version 2017/07/22 ace 新增AncestorForm01(tw.ace33022.backbone.view.AncestorForm01)。
 * @version 2017/09/12 ace 新增Cropper(https://fengyuanchen.github.io/cropper/)。
 * @version 2017/10/13 ace 新增VideoUtil。
 * @version 2017/11/18 ace 新增Colorpicker(https://farbelous.github.io/bootstrap-colorpicker/)。
 * @version 2018/01/11 ace 新增math.js(http://mathjs.org/)。
 * @version 2018/01/14 ace 新增jquery-tablesorter(https://github.com/christianbach/tablesorter)。
 * @version 2018/01/26 ace 新增timdream/wordcloud2.js: Tag cloud/Wordle presentation on 2D canvas or HTML(https://github.com/timdream/wordcloud2.js)。
 * @version 2018/07/17 ace 新增X-editable(http://vitalets.github.io/x-editable/)。
 * @version 2018/07/18 ace 新增tristen/tablesort: A small tablesorter in plain JavaScript(https://github.com/tristen/tablesort)。
 * @version 2018/08/08 ace 新增Leaflet - a JavaScript library for interactive maps(https://leafletjs.com/)。
 * @version 2018/08/08 ace 新增Leaflet.EasyButton(http://cliffcloud.github.io/Leaflet.EasyButton/v1/)。
 * @version 2018/09/01 ace 新增RLifeUtil。
 * @version 2018/09/17 ace 新增WunderlistUtil。
 * @version 2018/10/16 ace 新增mustache.js。
 * @version 2019/03/18 ace 新增toastr.js。
 * @version 2019/04/08 ace 新增peerjs。
 *
 * @author ace
 *
 * @see {@link https://en.wikipedia.org/wiki/CommonJS|CommonJS - Wikipedia}
 * @see {@link http://wiki.commonjs.org/wiki/CommonJS|CommonJS Spec Wiki}
 *
 * @see {@link http://requirejs.org/|RequireJS}
 * @see {@link https://requirejs.org/docs/whyamd.html|Why AMD?}
 * @see {@link https://github.com/amdjs/amdjs-api/wiki/AMD|AMD · amdjs/amdjs-api Wiki}
 *
 * @see {@link https://jqueryui.com/upgrade-guide/1.11/|jQuery UI 1.11 Upgrade Guide | jQuery UI}
 *
 * @see {@link http://www.ruanyifeng.com/blog/2012/10/javascript_module.html|Javascript模块化编程（一）：模块的写法 - 阮一峰的网络日志}
 * @see {@link http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html|Javascript模块化编程（二）：AMD规范 - 阮一峰的网络日志}
 * @see {@link http://www.ruanyifeng.com/blog/2012/11/require_js.html|Javascript模块化编程（三）：require.js的用法 - 阮一峰的网络日志}
 * @see {@link https://www.haorooms.com/post/requirejs_sy_lj|RequireJs的使用和快速理解}
 * @see {@link http://lemonlatte.logdown.com/posts/180796-requirejs-using-notes|RequireJS 使用筆記 « JUST a LOG}
 * @see {@link https://www.sitepoint.com/understanding-requirejs-for-effective-javascript-module-loading/|Understanding RequireJS for Effective JavaScript Module Loading}
 * @see {@link https://stackoverflow.com/questions/18070356/requirejs-when-to-use-paths-versus-packages|javascript - RequireJS: when to use 'paths' versus 'packages' - Stack Overflow}
 *
 * @see {@link https://stackoverflow.com/questions/8131265/loading-backbone-and-underscore-using-requirejs|javascript - Loading Backbone and Underscore using RequireJS - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/12113172/how-do-i-use-jquery-ui-with-requirejs|javascript - How do I use jquery ui with requirejs - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/15728329/requirejs-jquery-multiple-dependent-non-module-jquery-plugins-like-jquery-ui-and|javascript - requirejs jquery multiple dependent non module jquery plugins like jquery-ui and jqGrid - Stack Overflow}
 * @see {@link https://datatables.net/forums/discussion/14409/tabletools-w-requirejs-does-not-find-datatables/p1|TableTools w/ RequireJS does not find DataTables — DataTables forums}
 *
 * @see {@link http://sheetjs.com/|SheetJS - Home}
 * @see {@link https://github.com/sheetjs/js-xlsx|SheetJS/js-xlsx: SheetJS Community Edition -- Spreadsheet Parser and Writer}
 * @see {@link http://www.trirand.com/blog/|jQuery Grid Plugin – jqGrid}
 * @see {@link https://github.com/tonytomov/jqGrid|tonytomov/jqGrid: jQuery grid plugin}
 * @see {@link http://dixso.github.io/custombox/|Custombox - Modal dialog with awesome effects}
 * @see {@link https://github.com/dixso/custombox/|dixso/custombox: Modal window effects with transitions CSS3.}
 * @see {@link https://www.ericmmartin.com/projects/simplemodal/|SimpleModal / Eric Martin / ericmmartin.com}
 * @see {@link https://github.com/ericmmartin/simplemodal|ericmmartin/simplemodal: A modal dialog framework for jQuery}
 * @see {@link http://malsup.com/jquery/block/|jQuery BlockUI Plugin}
 *
 * @comment 2019/04/25 ace jquery-ui需使用雙引號(")包覆(標準JSON格式)，否則會造成載入過程出錯。
 * @comment 2019/04/25 ace JavaScript變數命名不可採用'-'符號，例如：sprintf-js會造成JavaScript載入時判定錯誤的命名格式。
 * @comment 2019/04/25 ace jquery-ui 11的版本已全面支援requirejs的寫法(jquery-ui 10的版本仍需透過shim屬性設定相依性關系)。
 * @comment 2019/04/25 ace jasny-bootstrap包含的fileinput與bootstrap-fileinput提供功能重疊，改採載入獨立的模組。
 *
 */

(function(root) {

	var Configuration;

	var result;

	var jQueryPath = 'jquery' + '/';
	var jQueryUIPath = jQueryPath + 'jquery-ui' + '/';
	var jQueryMobilePath = jQueryPath + 'jquery-mobile' + '/';

	var jqGridPath = jQueryPath + 'jqGrid' + '/';

	var acePath;
	var voPath;
	var daoPath;
	var browserUIPath;
	
	if (typeof process !== 'undefined') {

		// nodeJS enviroment

		if (typeof nw !== 'undefined') {
		
			// NW.js執行環境
		
			// 採用HTML標籤引入資料時不會有module物件。
			if (typeof module === 'undefined') {
			
				Configuration = root.Configuration;
			}
			else {
			
				result = require(process.env.NODE_PATH + '/' + 'tw/ace33022/Configuration.js');
			}
		}
		else {
		
			Configuration = require(process.env.ConfigurationFile);
		}
	}
	else {

		// Rhino/Browser enviroment

		Configuration = root.Configuration;
	}

	if (typeof Configuration === 'undefined') throw new Error('Configuration is undefined!');

	acePath = Configuration.AceDir + '/';
	voPath = Configuration.VODir + '/';
	daoPath = Configuration.DAODir + '/';
	browserUIPath = Configuration["BrowserUIDir"] + '/';
	
	result = {

    // Pass the top-level main.js/index.js require
    // function to requirejs so that node modules
    // are loaded relative to the top-level JS file.
		// nodeRequire: require,

		// baseUrl: '../javascripts',
		// baseUrl: Configuration.JSLibDir + '/',
		"baseUrl": Configuration.JSLibDir,

    "paths": {

			// 3rd lib
			"underscore": "underscore/underscore",
      "moment": "moment/moment",
			"sprintfjs": "sprintf-js/src/sprintf",
			"md5": "JavaScript-MD5-2.7.0/js/md5",	/* @version 2017/03/10 新增md5.js。 */
			"math": "mathjs-3.19.0/dist/math",	/* @version 2018/01/11 新增math.js(http://mathjs.org/)。 */
			"mustache": "mustache.js-3.0.0/mustache",	/* @version 2018/10/16 新增mustache.js。 */
			"papaparse": "PapaParse/papaparse",	/* @version 2015/10/12 新增PapaParse(http://papaparse.com/)。	*/
			"js-xlsx": "js-xlsx-0.8.3/dist/xlsx",	/* @version 2015/10/30 新增js-xlsx。 */
			"jszip": "js-xlsx-0.8.3/dist/jszip",	/* @version 2017/02/10 新增jszip。 */

			// Cross Platform Util
      "tw.ace33022.util.DateTimeUtil": acePath + 'util/DateTimeUtil',
			"tw.ace33022.util.StringUtil": acePath + 'util/StringUtil',
			"tw.ace33022.util.CodeMapUtil": acePath + 'util/CodeMapUtil',	/* @version 2017/02/22 新增CodeMapUtil.js。 */
			"tw.ace33022.util.XLSXUtil": acePath + 'util/XLSXUtil',	/* @version 2017/02/22 新增XLSXUtil.js。 */
			"tw.ace33022.util.WunderlistUtil": acePath + 'util/WunderlistUtil',	/* @version 2018/09/17 新增WunderlistUtil。 */
			"tw.ace33022.util.RLifeUtil": acePath + 'util/RLifeUtil',	/* @version 2018/09/01 新增RLifeUtil。 */
			
			"tw.ace33022.util.InitDataUtil": acePath + 'util/InitDataUtil',	/* @version 2017/06/19 新增tw.ace33022.ace33022.util.InitDataUtil。 */

			"xlsx-loader": acePath + 'xlsx-loader',	/* @version 2017/02/11 新增xlsx-loader。 */
			// "videojs-hotkeys-loader": acePath + 'videojs-hotkeys-loader',	/* @version 2017/06/23 新增videojs-hotkeys-loader。 */

			// Browser Platform
			"filesaver": "FileSaver.js-1.3.3/FileSaver",	/* @version 2017/02/10 新增FileSaver(https://github.com/eligrey/FileSaver.js) */
			"blob": "Blob.js/Blob",	/* @version 2017/02/12 新增Blob.js。 */
			"download": "download-1.4.6/download",	/* @version 2016/11/09 新增download(https://github.com/rndme/download/)。 */
			
			"highcharts": "Highcharts-4.1.9/js/highcharts.src",	/* @version 2015/10/12 新增Highcharts(http://www.highcharts.com/)。	*/

			"leaflet": "Leaflet-1.3.3/dist/leaflet",	/* @version 2018/08/08 新增Leaflet - a JavaScript library for interactive maps(https://leafletjs.com/)。 */
			"leaflet.EasyButton": "Leaflet.EasyButton-2.3.0/src/easy-button",	/* @version 2018/08/08 新增Leaflet.EasyButton(http://cliffcloud.github.io/Leaflet.EasyButton/v1/)。 */
			
			"cropper": "cropper-3.0.0/dist/cropper",	/* @version 2017/09/12 新增Cropper(https://fengyuanchen.github.io/cropper/)。 */
			
			"peerjs": "peerjs-0.3.16/dist/peer",	/* @version 2019/04/08 新增peerjs。 */
			
			"backbone": "backbone/backbone",
			"custombox": "custombox/src/js/custombox",	/* @version 2015/05/20 新增Custombox(http://dixso.github.io/custombox/)。 */
			"custombox-legacy": "custombox/src/js/legacy",	/* @version 2015/05/20 新增Custombox(http://dixso.github.io/custombox/)。 */
			"IScroll": "iscroll-5.2.0/build/iscroll",	/* @version 2017/05/27 新增iScroll(http://iscrolljs.com/)。 */
			
			"videojs": "video-js/video",	/* @version 2017/06/23 新增video-js(http://videojs.com/)。 */
			"videojs-hotkeys": "videojs-hotkeys/videojs.hotkeys",	/* @version 2017/06/23 新增videojs-hotkeys(https://github.com/ctd1500/videojs-hotkeys)。 */
			"wordcloud": "wordcloud2.js-1.0.5/src/wordcloud2",	/* @version 2018/01/26 新增timdream/wordcloud2.js: Tag cloud/Wordle presentation on 2D canvas or HTML(https://github.com/timdream/wordcloud2.js)。 */
			"tablesort": "tablesort/src/tablesort",	/* @version 2018/07/18 新增tristen/tablesort: A small tablesorter in plain JavaScript(https://github.com/tristen/tablesort)。 */
			
			"jquery": jQueryPath + 'jquery-1.11.3',

			/* jQuery UI */
			/* jQuery UI 10 的檔案名稱。*/
			"jquery.ui.core": jQueryUIPath + 'ui/jquery.ui.core',
			"jquery.ui.widget": jQueryUIPath + 'ui/jquery.ui.widget',
			"jquery.ui.position": jQueryUIPath + 'ui/jquery.ui.position',
			"jquery.ui.autocomplete": jQueryUIPath + 'ui/jquery.ui.autocomplete',
			"jquery.ui.button": jQueryUIPath + 'ui/jquery.ui.button',
			"jquery.ui.datepicker": jQueryUIPath + 'ui/jquery.ui.datepicker',
			"jquery.ui.dialog": jQueryUIPath + 'ui/jquery.ui.dialog',
			"jquery.ui.progressbar": jQueryUIPath + 'ui/jquery.ui.progressbar',
			"jquery.ui.draggable": jQueryUIPath + 'ui/jquery.ui.draggable',
			"jquery.ui.droppable": jQueryUIPath + 'ui/jquery.ui.droppable',
			"jquery.ui.resizable": jQueryUIPath + 'ui/jquery.ui.resizable',
			"jquery.ui.effect": jQueryUIPath + 'ui/jquery.ui.effect',
			"jquery.ui.menu": jQueryUIPath + 'ui/jquery.ui.menu',
			"jquery.ui.mouse": jQueryUIPath + 'ui/jquery.ui.mouse',
			"jquery.ui.sortable": jQueryUIPath + 'ui/jquery.ui.sortable',

			/* jQuery UI i18n */
			"jquery.ui.datepicker-zh-TW": jQueryUIPath + 'ui/i18n/jquery.ui.datepicker-zh-TW',

			/* jQuery UI 11 的檔案名稱。*/
			// 'core': jQueryUIPath + 'ui/core',
			// 'widget': jQueryUIPath + 'ui/widget',
			// 'position': jQueryUIPath + 'ui/position',
			// 'autocomplete': jQueryUIPath + 'ui/autocomplete',
			// 'button': jQueryUIPath + 'ui/button',
			// 'datepicker': jQueryUIPath + 'ui/datepicker',
			// 'dialog': jQueryUIPath + 'ui/dialog',
			// 'progressbar': jQueryUIPath + 'ui/progressbar',
			// 'draggable': jQueryUIPath + 'ui/draggable',
			// 'droppable': jQueryUIPath + 'ui/droppable',
			// 'resizable': jQueryUIPath + 'ui/resizable',
			// 'effect': jQueryUIPath + 'ui/effect',
			// 'menu': jQueryUIPath + 'ui/menu',
			// 'mouse': jQueryUIPath + 'ui/mouse',
			// 'sortable': jQueryUIPath + 'ui/sortable',

			'jquery.dataTables': jQueryPath + 'DataTables-1.10.11/media/js/jquery.dataTables',

			"jquery.jqGrid": jqGridPath + 'js/jquery.jqGrid',	/* @version 2016/02/26 新增jQuery Grid Plugin。 */
			"grid.base": jqGridPath + 'js/grid.base',
			"grid.celledit": jqGridPath + 'js/grid.celledit',
			"grid.common": jqGridPath + 'js/grid.common',
			"grid.filter": jqGridPath + 'js/grid.filter',
			"grid.formedit": jqGridPath + 'js/grid.formedit',
			"grid.grouping": jqGridPath + 'js/grid.grouping',
			"grid.import": jqGridPath + 'js/grid.import',
			"grid.inlinedit": jqGridPath + 'js/grid.inlinedit',
			"grid.jqueryui": jqGridPath + 'js/grid.jqueryui',
			"grid.pivot": jqGridPath + 'js/grid.pivot',
			"grid.subgrid": jqGridPath + 'js/grid.subgrid',
			"grid.treegrid": jqGridPath + 'js/grid.treegrid',
			"jqDnR": jqGridPath + 'js/jqDnR',
			"jqModal": jqGridPath + 'js/jqModal',
			"jquery.fmatter": jqGridPath + 'js/jquery.fmatter',
			"grid.utils": jqGridPath + 'js/grid.utils',
			"ui.multiselect": jqGridPath + 'js/addons/ui.multiselect',

			"jquery.jqGrid.locale-tw": jqGridPath + 'js/i18n/grid.locale-tw',	/* jQuery Grid Plugin i18n */

			'jquery.rss': jQueryPath + 'jquery-rss-3.2.1/src/jquery.rss',	/* @version 2016/02/23 新增jquery-rss。 */

			'jquery.contextmenu': jQueryPath + 'jquery-contextual-menu/jquery.contextmenu',	/* @version 2016/05/03 新增jquery-contextual-menu。 */

			'jquery.blockUI': jQueryPath + 'blockui-2.70/jquery.blockUI',	/* @version 2016/05/10 新增jquery-blockUI。 */

			'jquery.simplemodal': jQueryPath + 'simplemodal-1.4.5/src/jquery.simplemodal',	/* @version 2016/05/10 新增jquery-simplemodal。 */

			"jquery.timepicker": jQueryPath + 'jquery-timepicker-1.10.0/jquery.timepicker',	/* @version 2016/05/16 新增jquery-timepicker-1.10.0。 */

			"jquery.unveil": jQueryPath + 'unveil-1.3.0/jquery.unveil',	/* @version 2017/03/05 新增Unveil.js。 */

			"jquery.drawer": jQueryPath + 'drawer-3.2.2/dist/js/drawer',	/* @version 2017/05/27 新增drawer(https://github.com/blivesta/drawer/)。 */

			"jquery-tabledit": jQueryPath + 'jquery-tabledit-1.2.3/jquery.tabledit',	/* @version 2017/06/28 新增jQuery-Tabledit(http://markcell.github.io/jquery-tabledit/)。 */

			"editable-table": jQueryPath + 'mindmup-editabletable',	/* @version 2017/06/28 新增editable-table(https://github.com/mindmup/editable-table)。 */

			"jstree": jQueryPath + 'jstree-3.3.4/dist/jstree',	/* @version 2017/07/17 新增jsTree(https://www.jstree.com/)。 */

			"jquery-tablesorter": jQueryPath + 'tablesorter/jquery.tablesorter',	/* * @version 2018/01/14 新增jquery-tablesorter(https://github.com/christianbach/tablesorter)。 */

			"toastr": jQueryPath + 'toastr-2.1.4/build/toastr.min',	/* @version 2019/03/18 新增toastr.js。 */

			/* Bootstrap */
			"bootstrap": "bootstrap/bootstrap/dist/js/bootstrap",	/* @version 2016/10/11 新增Bootstrap。 */
			"jasny-bootstrap": "bootstrap/jasny-bootstrap/dist/js/jasny-bootstrap",	/* @version 2016/11/03 新增jasny-bootstrap-3.1.3。 */
			"jasny-rowlink": "bootstrap/jasny-bootstrap/js/rowlink",	/* @version 2016/11/14 獨立jasny-bootstrap-rowlink。 */
			"bootbox": "bootstrap/bootbox-4.4.0/bootbox",	/* @version 2016/10/15 新增Bootbox-4.4.0。 */
			"bootcards": "bootstrap/bootcards-1.1.2/dist/js/bootcards",	/* @version 2016/10/26 新增Bootcards-1.1.2。 */
			"bootstrap-fileinput": "bootstrap/bootstrap-fileinput/js/fileinput",	/* @version 2016/11/07 新增bootstrap-fileinput。 */
			"bootstrap-datetimepicker": "bootstrap/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min",	/* @version 2017/04/10 新增bootstrap-datetimepicker(https://github.com/Eonasdan/bootstrap-datetimepicker)。 */
			"bootstrap-colorpicker": "bootstrap/bootstrap-colorpicker-2.5.1/dist/js/bootstrap-colorpicker.min",	/* @version 2017/11/18 新增Colorpicker(https://farbelous.github.io/bootstrap-colorpicker/)。 */

			"x-editable-bootstrap3": "x-editable/dist/bootstrap3-editable/js/bootstrap-editable",		/* @version 2017/06/28 新增X-editable(http://vitalets.github.io/x-editable/)。 */
			"x-editable-bootstrap": "x-editable/dist/bootstrap3-editable/js/bootstrap-editable",		/* @version 2018/07/17 新增X-editable(http://vitalets.github.io/x-editable/)。 */

			// vo
      'tw.ace33022.vo.Ancestor': voPath + 'Ancestor',
			'tw.ace33022.vo.TWSEDayTrnLogs': voPath + 'TWSEDayTrnLogs',
			'tw.ace33022.vo.FoundationAmountDayTrnLogs': voPath + 'FoundationAmountDayTrnLogs',
			'tw.ace33022.vo.ForeignHandedStocksLogs': voPath + 'ForeignHandedStocksLogs',
			'tw.ace33022.vo.FuturesDayTrnLogs': voPath + 'FuturesDayTrnLogs',
			'tw.ace33022.vo.ForeignFuturesDayTrnLogs': voPath + 'ForeignFuturesDayTrnLogs',
			'tw.ace33022.vo.DealerFuturesDayTrnLogs': voPath + 'DealerFuturesDayTrnLogs',
			'tw.ace33022.vo.InvestFuturesDayTrnLogs': voPath + 'InvestFuturesDayTrnLogs',
			'tw.ace33022.vo.FuturesLargeStayAllLogs': voPath + 'FuturesLargeStayAllLogs',
			'tw.ace33022.vo.FuturesLargeStayLogs': voPath + 'FuturesLargeStayLogs',
			'tw.ace33022.vo.OptionsCallDayTrnLogs': voPath + 'OptionsCallDayTrnLogs',
			'tw.ace33022.vo.OptionsPutDayTrnLogs': voPath + 'OptionsPutDayTrnLogs',
			'tw.ace33022.vo.ForeignOptionsDayTrnLogs': voPath + 'ForeignOptionsDayTrnLogs',
			'tw.ace33022.vo.DealerOptionsDayTrnLogs': voPath + 'DealerOptionsDayTrnLogs',
			'tw.ace33022.vo.InvestOptionsDayTrnLogs': voPath + 'InvestOptionsDayTrnLogs',
			'tw.ace33022.vo.OptionsCallLargeStayAllLogs': voPath + 'OptionsCallLargeStayAllLogs',
			'tw.ace33022.vo.OptionsCallLargeStayLogs': voPath + 'OptionsCallLargeStayLogs',
			'tw.ace33022.vo.OptionsPutLargeStayAllLogs': voPath + 'OptionsPutLargeStayAllLogs',
			'tw.ace33022.vo.OptionsPutLargeStayLogs': voPath + 'OptionsPutLargeStayLogs',
			'tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs': voPath + 'ForeignFuturesOptionsDayTrnLogs',
			'tw.ace33022.vo.DealerFuturesOptionsDayTrnLogs': voPath + 'DealerFuturesOptionsDayTrnLogs',
			'tw.ace33022.vo.InvestFuturesOptionsDayTrnLogs': voPath + 'InvestFuturesOptionsDayTrnLogs',
			'Stocks': voPath + 'Stocks',
			'ForeignStocksDayTrnLogs': voPath + 'ForeignStocksDayTrnLogs',
			'DealerStocksDayTrnLogs': voPath + 'DealerStocksDayTrnLogs',
			'InvestStocksDayTrnLogs': voPath + 'InvestStocksDayTrnLogs',
			'OptionsDailyTrnLogs': voPath + 'OptionsDailyTrnLogs',
			"tw.ace33022.vo.Program": voPath + 'Program',
			"tw.ace33022.vo.OperatePanel": voPath + 'OperatePanel',
			"tw.ace33022.vo.OperatePanelDetail": voPath + 'OperatePanelDetail',
      'tw.ace33022.vo.Consumptions': voPath + 'Consumptions',
      'tw.ace33022.vo.ProductNameStatistics': voPath + 'ProductNameStatistics',
      'tw.ace33022.vo.ClassifyNameStatistics': voPath + 'ClassifyNameStatistics',
      'tw.ace33022.vo.InvoiceLogs': voPath + 'InvoiceLogs',
			'tw.ace33022.vo.InvoicePrizeLogs': voPath + 'InvoicePrizeLogs',
			'tw.ace33022.vo.CodeContrastDetail': voPath + 'CodeContrastDetail',
			'tw.ace33022.vo.Products': voPath + 'Products',
			'tw.ace33022.vo.POSTrnLogs': voPath + 'POSTrnLogs',
			'tw.ace33022.vo.POSTrnLogsDetail': voPath + 'POSTrnLogsDetail',
			"tw.ace33022.vo.Roles": voPath + 'Roles',
			"tw.ace33022.vo.RolesPrograms": voPath + 'RolesPrograms',
      "tw.ace33022.vo.Users": voPath + 'Users',
			"tw.ace33022.vo.Lottery649Logs": voPath + 'Lottery649Logs',	// @version 2017/04/24 新增tw.ace33022.vo.Lottery649Logs。
			"tw.ace33022.vo.Sizes": voPath + 'Sizes',	// @version 2017/06/10 新增tw.ace33022.vo.Sizes。
			"tw.ace33022.vo.SizeGroups": voPath + 'SizeGroups',	// @version 2017/06/10 新增tw.ace33022.vo.SizeGroups。
			"tw.ace33022.vo.SizeGroupsDetail": voPath + 'SizeGroupsDetail',	// @version 2017/06/10 新增tw.ace33022.vo.SizeGroupsDetail。
			"tw.ace33022.vo.Sugars": voPath + 'Sugars',	// @version 2017/06/10 新增tw.ace33022.vo.Sugars。
			"tw.ace33022.vo.SugarGroups": voPath + 'SugarGroups',	// @version 2017/06/10 新增tw.ace33022.vo.SugarGroups。
			"tw.ace33022.vo.SugarGroupsDetail": voPath + 'SugarGroupsDetail',	// @version 2017/06/10 新增tw.ace33022.vo.SugarGroupsDetail。
			"tw.ace33022.vo.IceDosages": voPath + 'IceDosages',	// @version 2017/06/10 新增tw.ace33022.vo.IceDosages。
			"tw.ace33022.vo.IceDosageGroups": voPath + 'IceDosageGroups',	// @version 2017/06/10 新增tw.ace33022.vo.IceDosageGroups。
			"tw.ace33022.vo.IceDosageGroupsDetail": voPath + 'IceDosageGroupsDetail',	// @version 2017/06/10 新增tw.ace33022.vo.IceDosageGroupsDetail。
			"tw.ace33022.vo.Drinks": voPath + 'Drinks',	// @version 2017/06/11 新增tw.ace33022.vo.Drinks。
			"tw.ace33022.vo.LargeClasses": voPath + 'LargeClasses',	// @version 2017/06/15 新增tw.ace33022.vo.LargeClasses。
			"tw.ace33022.vo.MiddleClasses": voPath + 'MiddleClasses',	// @version 2017/06/15 新增tw.ace33022.vo.MiddleClasses。
			"tw.ace33022.vo.SmallClasses": voPath + 'SmallClasses',	// @version 2017/06/15 新增tw.ace33022.vo.SmallClasses。
			"tw.ace33022.vo.Departments": voPath + 'Departments',	// @version 2017/06/16 新增tw.ace33022.vo.Departments。

      "LoggedLogs": voPath + 'LoggedLogs',
			'UserMobiles': voPath + 'UserMobiles',
			'UserTels': voPath + 'UserTels',

			// dao
			"tw.ace33022.dao.Ancestor": daoPath + 'Ancestor',
			"tw.ace33022.dao.db.Ancestor": daoPath + 'db/Ancestor',
			"tw.ace33022.dao.ws.Ancestor": daoPath + 'ws/Ancestor',
			"tw.ace33022.dao.ls.Ancestor": daoPath + 'ls/Ancestor',

			// dao/db/vo
			"tw.ace33022.dao.db.vo.Ancestor": daoPath + 'db/vo/Ancestor',
			'tw.ace33022.dao.db.vo.TWSEDayTrnLogs': daoPath + 'db/vo/TWSEDayTrnLogs',
			'tw.ace33022.dao.db.vo.FoundationAmountDayTrnLogs': daoPath + 'db/vo/FoundationAmountDayTrnLogs',
			'tw.ace33022.dao.db.vo.ForeignHandedStocksLogs': daoPath + 'db/vo/ForeignHandedStocksLogs',
			'tw.ace33022.dao.db.vo.FuturesDayTrnLogs': daoPath + 'db/vo/FuturesDayTrnLogs',
			'tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs': daoPath + 'db/vo/ForeignFuturesDayTrnLogs',
			'tw.ace33022.dao.db.vo.DealerFuturesDayTrnLogs': daoPath + 'db/vo/DealerFuturesDayTrnLogs',
			'tw.ace33022.dao.db.vo.InvestFuturesDayTrnLogs': daoPath + 'db/vo/InvestFuturesDayTrnLogs',
			'tw.ace33022.dao.db.vo.FuturesLargeStayAllLogs': daoPath + 'db/vo/FuturesLargeStayAllLogs',
			'tw.ace33022.dao.db.vo.FuturesLargeStayLogs': daoPath + 'db/vo/FuturesLargeStayLogs',
			'tw.ace33022.dao.db.vo.OptionsCallDayTrnLogs': daoPath + 'db/vo/OptionsCallDayTrnLogs',
			'tw.ace33022.dao.db.vo.OptionsPutDayTrnLogs': daoPath + 'db/vo/OptionsPutDayTrnLogs',
			'tw.ace33022.dao.db.vo.ForeignOptionsDayTrnLogs': daoPath + 'db/vo/ForeignOptionsDayTrnLogs',
			'tw.ace33022.dao.db.vo.DealerOptionsDayTrnLogs': daoPath + 'db/vo/DealerOptionsDayTrnLogs',
			'tw.ace33022.dao.db.vo.InvestOptionsDayTrnLogs': daoPath + 'db/vo/InvestOptionsDayTrnLogs',
			'tw.ace33022.dao.db.vo.OptionsCallLargeStayAllLogs': daoPath + 'db/vo/OptionsCallLargeStayAllLogs',
			'tw.ace33022.dao.db.vo.OptionsCallLargeStayLogs': daoPath + 'db/vo/OptionsCallLargeStayLogs',
			'tw.ace33022.dao.db.vo.OptionsPutLargeStayAllLogs': daoPath + 'db/vo/OptionsPutLargeStayAllLogs',
			'tw.ace33022.dao.db.vo.OptionsPutLargeStayLogs': daoPath + 'db/vo/OptionsPutLargeStayLogs',
			'tw.ace33022.dao.db.vo.ForeignFuturesOptionsDayTrnLogs': daoPath + 'db/vo/ForeignFuturesOptionsDayTrnLogs',
			'tw.ace33022.dao.db.vo.DealerFuturesOptionsDayTrnLogs': daoPath + 'db/vo/DealerFuturesOptionsDayTrnLogs',
			'tw.ace33022.dao.db.vo.InvestFuturesOptionsDayTrnLogs': daoPath + 'db/vo/InvestFuturesOptionsDayTrnLogs',

			'StocksDAO': daoPath + 'db/vo/StocksDAO',
			'ForeignStocksDayTrnLogsDAO': daoPath + 'db/vo/ForeignStocksDayTrnLogsDAO',
			'DealerStocksDayTrnLogsDAO': daoPath + 'db/vo/DealerStocksDayTrnLogsDAO',
			'InvestStocksDayTrnLogsDAO': daoPath + 'db/vo/InvestStocksDayTrnLogsDAO',
			'OptionsDailyTrnLogsDAO': daoPath + 'db/vo/OptionsDailyTrnLogsDAO',

			"tw.ace33022.dao.db.vo.Program": daoPath + 'db/vo/Program',
			'tw.ace33022.dao.db.vo.OperatePanels': daoPath + 'db/vo/OperatePanels',
			'tw.ace33022.dao.db.vo.OperatePanelsDetail': daoPath + 'db/vo/OperatePanelsDetail',
      'tw.ace33022.dao.db.vo.Consumptions': daoPath + 'db/vo/Consumptions',
      'tw.ace33022.dao.db.vo.ProductNameStatistics': daoPath + 'db/vo/ProductNameStatistics',
      'tw.ace33022.dao.db.vo.ClassifyNameStatistics': daoPath + 'db/vo/ClassifyNameStatistics',
      'tw.ace33022.dao.db.vo.InvoiceLogs': daoPath + 'db/vo/InvoiceLogs',
			'tw.ace33022.dao.db.vo.InvoicePrizeLogs': daoPath + 'db/vo/InvoicePrizeLogs',
			'tw.ace33022.dao.db.vo.CodeContrastDetail': daoPath + 'db/vo/CodeContrastDetail',
			"tw.ace33022.dao.db.vo.Products": daoPath + 'db/vo/Products',
			"tw.ace33022.dao.db.vo.Roles": daoPath + 'db/vo/Roles',
			"tw.ace33022.dao.db.vo.RolesPrograms": daoPath + 'db/vo/RolesPrograms',
      "tw.ace33022.dao.db.vo.Users": daoPath + 'db/vo/Users',
			"tw.ace33022.dao.db.vo.Sizes": daoPath + 'db/vo/Sizes',	// @version 2017/06/10 新增tw.ace33022.dao.db.vo.Sizes。
			"tw.ace33022.dao.db.vo.SizeGroups": daoPath + 'db/vo/SizeGroups',	// @version 2017/06/10 新增tw.ace33022.dao.db.vo.SizeGroups。
			"tw.ace33022.dao.db.vo.SizeGroupsDetail": daoPath + 'db/vo/SizeGroupsDetail',	// @version 2017/06/10 新增tw.ace33022.dao.db.vo.SizeGroupsDetail。
			"tw.ace33022.dao.db.vo.Sugars": daoPath + 'db/vo/Sugars',	// @version 2017/06/10 新增tw.ace33022.dao.db.vo.Sugars。
			"tw.ace33022.dao.db.vo.SugarGroups": daoPath + 'db/vo/SugarGroups',	// @version 2017/06/10 新增tw.ace33022.dao.db.vo.SugarGroups。
			"tw.ace33022.dao.db.vo.SugarGroupsDetail": daoPath + 'db/vo/SugarGroupsDetail',	// @version 2017/06/10 新增tw.ace33022.dao.db.vo.SugarGroupsDetail。
			"tw.ace33022.dao.db.vo.IceDosages": daoPath + 'db/vo/IceDosages',	// @version 2017/06/10 新增tw.ace33022.dao.db.vo.IceDosages。
			"tw.ace33022.dao.db.vo.IceDosageGroups": daoPath + 'db/vo/IceDosageGroups',	// @version 2017/06/10 新增tw.ace33022.dao.db.vo.IceDosageGroups。
			"tw.ace33022.dao.db.vo.IceDosageGroupsDetail": daoPath + 'db/vo/IceDosageGroupsDetail',	// @version 2017/06/10 新增tw.ace33022.dao.db.vo.IceDosageGroupsDetail。
			"tw.ace33022.dao.db.vo.Drinks": daoPath + 'db/vo/Drinks',	// @version 2017/06/11 新增tw.ace33022.dao.db.vo.Drinks。
			"tw.ace33022.dao.db.vo.LargeClasses": daoPath + 'db/vo/LargeClasses',	// @version 2017/06/16 新增tw.ace33022.dao.db.vo.LargeClasses。
			"tw.ace33022.dao.db.vo.MiddleClasses": daoPath + 'db/vo/MiddleClasses',	// @version 2017/06/16 新增tw.ace33022.dao.db.vo.MiddleClasses。
			"tw.ace33022.dao.db.vo.SmallClasses": daoPath + 'db/vo/SmallClasses',	// @version 2017/06/16 新增tw.ace33022.dao.db.vo.SmallClasses。
			"tw.ace33022.dao.db.vo.Departments": daoPath + 'db/vo/Departments',	// @version 2017/06/16 新增tw.ace33022.dao.db.vo.Departments。

			// 'tw.ace33022.dao.vo.POSTrnLogs': daoPath + 'vo/POSTrnLogs',
			// 'tw.ace33022.dao.vo.POSTrnLogsDetail': daoPath + 'vo/POSTrnLogsDetail',
      'LoggedLogsDAO': daoPath + 'db/vo/LoggedLogsDAO',
			'UserMobilesDAO': daoPath + 'db/vo/UserMobilesDAO',
			'UserTelsDAO': daoPath + 'db/vo/UserTelsDAO',

			"tw.ace33022.dao.db.vo.Lottery649Logs": daoPath + 'db/vo/Lottery649Logs',	// @version 2017/04/24 新增tw.ace33022.dao.vo.Lottery649Logs。

			// dao/db/program
			"tw.ace33022.dao.db.program.Ancestor": daoPath + 'db/program/Ancestor',
			"tw.ace33022.dao.db.program.BAS09030": daoPath + 'db/program/BAS09030',
			"tw.ace33022.dao.db.program.INV00012": daoPath + 'db/program/INV00012',
			"tw.ace33022.dao.db.program.CHA00010": daoPath + 'db/program/CHA00010',
			"tw.ace33022.dao.db.program.POS00010": daoPath + 'db/program/POS00010',
			"tw.ace33022.dao.db.program.SYS00010": daoPath + 'db/program/SYS00010',
			"tw.ace33022.dao.db.program.SYS00020": daoPath + 'db/program/SYS00020',	// @version 2017/03/22 新增tw.ace33022.dao.SYS00020。
			"tw.ace33022.dao.db.program.SYS00030": daoPath + 'db/program/SYS00030',	// @version 2017/04/08 新增tw.ace33022.dao.SYS00030。
			"tw.ace33022.dao.db.program.SYS01011": daoPath + 'db/program/SYS01011',
			"tw.ace33022.dao.db.program.SYS09010": daoPath + 'db/program/SYS09010',
			"tw.ace33022.dao.db.program.SYS09020": daoPath + 'db/program/SYS09020',
			"tw.ace33022.dao.db.program.SYS09100": daoPath + 'db/program/SYS09100',

			// dao/ws/vo
			"tw.ace33022.dao.ws.vo.Ancestor": daoPath + 'ws/vo/Ancestor',
			"tw.ace33022.dao.ws.vo.OperatePanels": daoPath + 'ws/vo/OperatePanels',
			"tw.ace33022.dao.ws.vo.OperatePanelsDetail": daoPath + 'ws/vo/OperatePanelsDetail',
			"tw.ace33022.dao.ws.vo.Programs": daoPath + 'ws/vo/Programs',

			// dao/ws/program
			"tw.ace33022.dao.ws.program.Ancestor": daoPath + 'ws/program/Ancestor',
			"tw.ace33022.dao.ws.program.BAS00010": daoPath + 'ws/program/BAS00010',
			"tw.ace33022.dao.ws.program.BAS09030": daoPath + 'ws/program/BAS09030',
			"tw.ace33022.dao.ws.program.CHA00010": daoPath + 'ws/program/CHA00010',
			"tw.ace33022.dao.ws.program.INV00012": daoPath + 'ws/program/INV00012',
			"tw.ace33022.dao.ws.program.MSC00010": daoPath + 'ws/program/MSC00010',
			"tw.ace33022.dao.ws.program.POS00010": daoPath + 'ws/program/POS00010',
			"tw.ace33022.dao.ws.program.SYS00010": daoPath + 'ws/program/SYS00010',
			"tw.ace33022.dao.ws.program.SYS00020": daoPath + 'ws/program/SYS00020',
			"tw.ace33022.dao.ws.program.SYS00030": daoPath + 'ws/program/SYS00030',
			"tw.ace33022.dao.ws.program.SYS00110": daoPath + 'ws/program/SYS00110',
			"tw.ace33022.dao.ws.program.SYS00120": daoPath + 'ws/program/SYS00120',
			"tw.ace33022.dao.ws.program.SYS00130": daoPath + 'ws/program/SYS00130',
			"tw.ace33022.dao.ws.program.SYS00210": daoPath + 'ws/program/SYS00210',
			"tw.ace33022.dao.ws.program.SYS00220": daoPath + 'ws/program/SYS00220',
			"tw.ace33022.dao.ws.program.SYS00230": daoPath + 'ws/program/SYS00230',
			"tw.ace33022.dao.ws.program.SYS00240": daoPath + 'ws/program/SYS00240',
			"tw.ace33022.dao.ws.program.SYS00250": daoPath + 'ws/program/SYS00250',
			"tw.ace33022.dao.ws.program.SYS00260": daoPath + 'ws/program/SYS00260',
			"tw.ace33022.dao.ws.program.SYS00270": daoPath + 'ws/program/SYS00270',
			"tw.ace33022.dao.ws.program.SYS01011": daoPath + 'ws/program/SYS01011',
			"tw.ace33022.dao.ws.program.SYS09010": daoPath + 'ws/program/SYS09010',
			"tw.ace33022.dao.ws.program.SYS09020": daoPath + 'ws/program/SYS09020',
			"tw.ace33022.dao.ws.program.SYS09100": daoPath + 'ws/program/SYS09100',

			// dao/ls/vo
			"tw.ace33022.dao.ls.vo.Ancestor": daoPath + 'ls/vo/Ancestor',
			"tw.ace33022.dao.ls.vo.Programs": daoPath + 'ls/vo/Program',

			// backbone model
			"tw.ace33022.backbone.model.Ancestor": acePath + 'util/browser/backbone/model/Ancestor',
			"tw.ace33022.backbone.model.ws.Ancestor": acePath + 'util/browser/backbone/model/ws/Ancestor',
			"tw.ace33022.backbone.model.ws.program.Ancestor": acePath + 'util/browser/backbone/model/ws/program/Ancestor',
			"tw.ace33022.backbone.model.ws.program.BAS00010": acePath + 'util/browser/backbone/model/ws/program/BAS00010',
			"tw.ace33022.backbone.model.ws.program.SYS00010": acePath + 'util/browser/backbone/model/ws/program/SYS00010',
			"tw.ace33022.backbone.model.ws.program.SYS00020": acePath + 'util/browser/backbone/model/ws/program/SYS00020',
			"tw.ace33022.backbone.model.ws.program.SYS00030": acePath + 'util/browser/backbone/model/ws/program/SYS00030',
			"tw.ace33022.backbone.model.ws.program.SYS00110": acePath + 'util/browser/backbone/model/ws/program/SYS00110',
			"tw.ace33022.backbone.model.ws.program.SYS00120": acePath + 'util/browser/backbone/model/ws/program/SYS00120',
			"tw.ace33022.backbone.model.ws.program.SYS00130": acePath + 'util/browser/backbone/model/ws/program/SYS00130',
			"tw.ace33022.backbone.model.ws.program.SYS00210": acePath + 'util/browser/backbone/model/ws/program/SYS00210',
			"tw.ace33022.backbone.model.ws.program.SYS00220": acePath + 'util/browser/backbone/model/ws/program/SYS00220',
			"tw.ace33022.backbone.model.ws.program.SYS00230": acePath + 'util/browser/backbone/model/ws/program/SYS00230',
			"tw.ace33022.backbone.model.ws.program.SYS00240": acePath + 'util/browser/backbone/model/ws/program/SYS00240',
			"tw.ace33022.backbone.model.ws.program.SYS00250": acePath + 'util/browser/backbone/model/ws/program/SYS00250',
			"tw.ace33022.backbone.model.ws.program.SYS00260": acePath + 'util/browser/backbone/model/ws/program/SYS00260',
			"tw.ace33022.backbone.model.ws.program.SYS00270": acePath + 'util/browser/backbone/model/ws/program/SYS00270',

			"tw.ace33022.util.browser.BaseForm": acePath + 'util/browser/BaseForm',			/* @version 2015/10/24 新增BaseForm。 */
			"tw.ace33022.util.browser.ReUtil": acePath + 'util/browser/ReUtil',					/* @version 2015/10/21 新增ReUtil。 */
			"tw.ace33022.util.browser.FormUtil": acePath + 'util/browser/FormUtil',			/* @version 2016/03/08 新增FormUtil。 */
			
			"tw.ace33022.util.browser.VideoUtil": acePath + 'util/browser/VideoUtil',		/* @version 2017/10/13 新增VideoUtil。 */
			
			"tw.ace33022.browser.CommonForm": browserUIPath + 'CommonForm',	/* @version 2020/01/12 新增CommonForm。 */

			// backbone view
			"tw.ace33022.backbone.view.ButtonsNavigatorMethod00": acePath + 'util/browser/bootstrap/backbone/view/ButtonsNavigatorMethod00',
			"tw.ace33022.backbone.view.ButtonsNavigatorMethod01": acePath + 'util/browser/bootstrap/backbone/view/ButtonsNavigatorMethod01',
			"tw.ace33022.backbone.view.AncestorFormMethod00": acePath + 'util/browser/bootstrap/backbone/view/AncestorFormMethod00',
			"tw.ace33022.backbone.view.AncestorFormMethod01": acePath + 'util/browser/bootstrap/backbone/view/AncestorFormMethod01',
			"tw.ace33022.backbone.view.AncestorForm00": acePath + 'util/browser/bootstrap/backbone/view/AncestorForm00',
			"tw.ace33022.backbone.view.AncestorForm01": acePath + 'util/browser/bootstrap/backbone/view/AncestorForm01',
			"tw.ace33022.backbone.view.AncestorForm02": acePath + 'util/browser/bootstrap/backbone/view/AncestorForm02',
			"tw.ace33022.backbone.view.BAS00010": acePath + 'util/browser/bootstrap/backbone/view/BAS00010',
			"tw.ace33022.backbone.view.MSC00010": acePath + 'util/browser/bootstrap/backbone/view/MSC00010',
			"tw.ace33022.backbone.view.POS00020": acePath + 'util/browser/bootstrap/backbone/view/POS00020',
			"tw.ace33022.backbone.view.SYS00010": acePath + 'util/browser/bootstrap/backbone/view/SYS00010',
			"tw.ace33022.backbone.view.SYS00020": acePath + 'util/browser/bootstrap/backbone/view/SYS00020',
			"tw.ace33022.backbone.view.SYS00030": acePath + 'util/browser/bootstrap/backbone/view/SYS00030',
			"tw.ace33022.backbone.view.SYS00040": acePath + 'util/browser/bootstrap/backbone/view/SYS00040',
			"tw.ace33022.backbone.view.SYS00110": acePath + 'util/browser/bootstrap/backbone/view/SYS00110',
			"tw.ace33022.backbone.view.SYS00120": acePath + 'util/browser/bootstrap/backbone/view/SYS00120',
			"tw.ace33022.backbone.view.SYS00130": acePath + 'util/browser/bootstrap/backbone/view/SYS00130',
			"tw.ace33022.backbone.view.SYS00210": acePath + 'util/browser/bootstrap/backbone/view/SYS00210',
			"tw.ace33022.backbone.view.SYS00220": acePath + 'util/browser/bootstrap/backbone/view/SYS00220',
			"tw.ace33022.backbone.view.SYS00230": acePath + 'util/browser/bootstrap/backbone/view/SYS00230',
			"tw.ace33022.backbone.view.SYS00240": acePath + 'util/browser/bootstrap/backbone/view/SYS00240',
			"tw.ace33022.backbone.view.SYS00250": acePath + 'util/browser/bootstrap/backbone/view/SYS00250',
			"tw.ace33022.backbone.view.SYS00260": acePath + 'util/browser/bootstrap/backbone/view/SYS00260',
			"tw.ace33022.backbone.view.SYS00270": acePath + 'util/browser/bootstrap/backbone/view/SYS00270',
			
			"tw.ace33022.browser.endup.MSC00010": acePath + 'browser/endup/MSC00010',
			"tw.ace33022.browser.endup.MSC00020": acePath + 'browser/endup/MSC00020'
		},

		// 由於載入時是使用AMD(Asynchronous Module Definition)方式載入，對於不是採用define設計的程式碼會因為需要使用其它套件的程式碼而造成非預期的錯誤發生，在requirejs中可以透過shim屬性設定相依性套件來解決這種狀況。
		"shim": {

			"backbone": {

				deps: ["underscore", "jquery"]
			},
			"custombox": {	/* @version 2015/05/20 新增Custombox(http://dixso.github.io/custombox/)。 */

				deps: ["custombox-legacy", "jquery"],
				exports: "custombox"
			},
			"peerjs": {
			
				exports: "Peer"
			},
			"highcharts": {	/* @version 2015/10/12 新增Highcharts(http://www.highcharts.com/)。	*/

				deps: ["jquery"],
				exports: "highcharts"
			},
			"js-xlsx": {	/* @version 2015/10/30 新增js-xlsx。 */

				deps: ["xlsx-loader"]
			},
			'jquery.dataTables': {

				deps: ["jquery"]
			},
			'jquery.rss': {

				deps: ["jquery"]
			},
			'jquery.contextmenu': {	/* @version 2016/05/03 新增jquery-contextual-menu。 */

				deps: ["jquery"]
			},
			'jquery.blockUI': {	/* @version 2016/05/10 新增jquery-blockUI。 */

				deps: ["jquery"]
			},
			'jquery.simplemodal': {	/* @version 2016/05/10 新增jquery-simplemodal。 */

				deps: ["jquery"]
			},
			"jquery.timepicker": {	/* @version 2016/05/16 新增jquery-timepicker-1.10.0。 */

				deps: ["jquery"]
			},
			"jquery.unveil": {	/* @version 2017/03/05 新增Unveil.js。 */

				deps: ["jquery"]
			},
			"jquery.drawer": {	/* @version 2017/05/27 新增drawer(https://github.com/blivesta/drawer/)。 */

				deps: ["jquery"]
			},
			"jquery-tabledit": {	/* @version 2017/06/28 新增jQuery-Tabledit(http://markcell.github.io/jquery-tabledit/)。 */

				deps: ["jquery"]
			},
			"editable-table": {	/* @version 2017/06/28 新增editable-table(https://github.com/mindmup/editable-table)。 */

				deps: ["jquery"]
			},
			"jstree": {	/* @version 2017/07/17 新增jsTree(https://www.jstree.com/)。 */

				deps: ["jquery"]
			},
			"x-editable-bootstrap3": {	/* @version 2017/06/28 新增X-editable(http://vitalets.github.io/x-editable/)。 */

				deps: ["jquery", "bootstrap"]
			},
			"x-editable-bootstrap": {	/* @version 2018/07/17 新增X-editable(http://vitalets.github.io/x-editable/)。 */

				deps: ["jquery", "bootstrap"]
			},
			"cropper": {	/* * @version 2017/09/12 新增Cropper(https://fengyuanchen.github.io/cropper/)。 */

				deps: ["jquery"]
			},
			"toastr": {	/* @version 2019/03/18 新增toastr.js。 */
			
				deps: ["jquery"]
			},
			"jquery.jqGrid": {

				deps: ["jquery",
							 "grid.base",
							 "grid.celledit",
							 "grid.common",
							 "grid.filter",
							 "grid.formedit",
							 "grid.grouping",
							 "grid.import",
							 "grid.inlinedit",
							 "grid.jqueryui",
							 "grid.pivot",
							 "grid.subgrid",
							 "grid.treegrid",
							 "jqDnR",
							 "jqModal",
							 "jquery.fmatter",
							 "grid.utils",
							 "ui.multiselect"
							]
			},
			"ui.multiselect": {

				deps: ["jquery",
							 "jquery.ui.core",
							 "jquery.ui.sortable"
						  ]
			},
			"jquery.jqGrid.locale-tw": {

				deps: ["jquery.jqGrid"]
			},
			"jquery-tablesorter": {	/* * @version 2018/01/14 新增jquery-tablesorter(https://github.com/christianbach/tablesorter)。 */

				deps: ["jquery"]
			},

			// jQuery UI 10 以前的版本需設定相依關係(保留)。
			"jquery.ui.core": {

				deps: ["jquery"]
			},
			"jquery.ui.widget": {

				deps: ["jquery"]
			},
			"jquery.ui.position": {

				deps: ["jquery"]
			},
			"jquery.ui.mouse": {

				deps: ["jquery.ui.widget"]
			},
			"jquery.ui.autocomplete": {

				deps: ["jquery.ui.core",
							 "jquery.ui.widget",
							 "jquery.ui.position",
							 "jquery.ui.menu"
				]
			},
			"jquery.ui.button": {

				deps: ["jquery.ui.core",
							 "jquery.ui.widget"
				]
			},
			"jquery.ui.datepicker": {

				deps: ["jquery.ui.core"]
			},
			"jquery.ui.datepicker-zh-TW": {  // jQuery UI i18n

				deps: ["jquery.ui.datepicker"]
			},
			"jquery.ui.dialog": {

				deps: ["jquery.ui.core",
							 "jquery.ui.widget",
							 "jquery.ui.position",
							 "jquery.ui.button",
							 "jquery.ui.draggable",
							 "jquery.ui.resizable",
							 "jquery.ui.effect"
							]
			},
			"jquery.ui.draggable": {

				deps: ["jquery.ui.core",
							 "jquery.ui.mouse",
							 "jquery.ui.widget"
							]
			},
			"jquery.ui.droppable": {

				deps: ["jquery.ui.core",
							 "jquery.ui.mouse",
							 "jquery.ui.widget",
							 "jquery.ui.draggable"
							]
			},
			"jquery.ui.resizable": {

				deps: ["jquery.ui.core",
							 "jquery.ui.mouse",
							 "jquery.ui.widget"
							]
			},
			"jquery.ui.menu": {

					deps: ["jquery.ui.core",
								 "jquery.ui.widget",
								 "jquery.ui.position"
								]
			},
			"jquery.ui.progressbar": {

				deps: ["jquery.ui.core",
							 "jquery.ui.widget"
							]
			},
			"jquery.ui.sortable": {

				deps: ["jquery.ui.core",
							 "jquery.ui.widget",
							 "jquery.ui.mouse"
							]
			},
			"bootstrap": {

				deps: ["jquery"]
			},
			"bootbox": {

				deps: ["bootstrap"]
			},
			"bootcards": {	/* @version 2016/10/26 新增Bootcards-1.1.2。 */

				deps: ["jquery",
				       "bootstrap"]
			},
			"bootstrap-fileinput": {	/* @version 2016/11/07 新增bootstrap-fileinput-4.3.5。 */

				deps: ["jquery",
				       "bootstrap"]
			},
			"jasny-rowlink": {

				deps: ["jquery",
				       "bootstrap"]
			},
			"bootstrap-datetimepicker": {	/* @version 2017/04/10 新增bootstrap-datetimepicker(https://github.com/Eonasdan/bootstrap-datetimepicker)。 */

				deps: ["jquery", "bootstrap", "moment"]
			},
			"bootstrap-colorpicker": {	/* @version 2017/11/18 新增Colorpicker(https://farbelous.github.io/bootstrap-colorpicker/)。 */

				deps: ["jquery", "bootstrap"]
			},
			"tablesort": {	/* @version 2018/07/18 新增tristen/tablesort: A small tablesorter in plain JavaScript(https://github.com/tristen/tablesort)。 */

				exports: "tablesort"
			},
			"leaflet.EasyButton": {	/* @version 2018/08/08 新增Leaflet.EasyButton(http://cliffcloud.github.io/Leaflet.EasyButton/v1/)。 */

				deps: ["leaflet"]
			}
		},

		"packages": [
			{
				"name": "codemirror",	// @version 2017/05/26 新增CodeMirror(https://codemirror.net/)。
				"location": "codemirror",
				"main": "lib/codemirror"
			}
		],

    "suppress": {

      "nodeShim": true
    }
	};
	
	if (typeof Configuration["paths"] !== 'undefined') for (var path in Configuration["paths"]) result.paths[path] = Configuration.paths[path];
	
	if (typeof Configuration["packages"] !== 'undefined') {
	
		Configuration["packages"].forEach(function(element) {
		
			var packageName = element["name"];
			
			var found = result["packages"].find(function(element) { return element["name"] == packageName; });
			
			if (typeof found !== 'undefined') {

				for (var property in element) found[property] = element[property];
			}
			else {
			
				result["packages"].push(element);
			}
		});
	}
	
	if (typeof process !== 'undefined') {

		// nodeJS執行環境

		if ((typeof nw !== 'undefined') && (typeof module == 'undefined')) {

			// NW.js執行環境

			// 採用HTML標籤引入資料時不會有module物件。
			root.tw.ace33022.RequireJSConfig = result;
		}
		else {

			result.nodeRequire = require;	// 在Rhino環境下不必然啟用require，判斷後再設定nodeRequire屬性。

			module.exports = result;
		}
	}
	else if (typeof exports !== 'undefined') {

		result.nodeRequire = require;	// 在Rhino環境下不必然啟用require，判斷後再設定nodeRequire屬性。

		module.exports = result;
	}
	else {

		root.tw.ace33022.RequireJSConfig = result;
	}
})(this);