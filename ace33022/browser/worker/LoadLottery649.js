/**
 *
 * LoadLottery649
 *
 * @description
 *
 * @version 2018/01/07 初始版本。
 *
 * @author ace
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker">Worker - Web APIs | MDN</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage">Worker.postMessage() - Web APIs | MDN</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessage">Worker.onmessage - Web APIs | MDN</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API">Web Workers API - Web APIs | MDN</a>
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers">使用 Web Workers - Web APIs | MDN</a>
 *
 * @comment
 *
 * @todo
 *
 */

(function(root) {

	var loadFromCSV = function(file, configPapa, callback) {

		requirejs(["papaparse", "sprintfjs", "moment", "tw.ace33022.vo.Lottery649Logs"], function(PapaParse, sprintfjs, moment, Lottery649Logs) {

			var arrJSON = new Array();

			configPapa["step"] = function(results, parser) {

				var rowData = results.data[0];
				var tag;
				var vo = new Lottery649Logs();

				vo.setPeriod(rowData[0]);
				// vo.setDrawDate(moment(rowData[1], 'YYYYMMDD', true).format('YYYY/MM/DD'));
				vo.setDrawDate(rowData[1]);
				vo.setNum01(sprintf("%02d", rowData[2]));
				vo.setNum02(sprintf("%02d", rowData[3]));
				vo.setNum03(sprintf("%02d", rowData[4]));
				vo.setNum04(sprintf("%02d", rowData[5]));
				vo.setNum05(sprintf("%02d", rowData[6]));
				vo.setNum06(sprintf("%02d", rowData[7]));
				vo.setNumSpecial(sprintf("%02d", rowData[8]));
				vo.setPrize01(rowData[9]);
				vo.setPrize02(rowData[10]);
				vo.setPrize03(rowData[11]);
				vo.setPrize04(rowData[12]);
				vo.setPrize05(rowData[13]);
				vo.setPrize06(rowData[14]);
				vo.setPrize07(rowData[15]);
				vo.setPrizeNormal(rowData[16]);

				arrJSON.push(vo.toJSONObject());
			};

			configPapa["complete"] = function(results, file) {

				if (typeof callback === 'function') callback(arrJSON);
			};

			PapaParse.parse(file, configPapa);
		});
	};

	var onmessage = function(e) {

		var configPapa = {

			header: false,
			dynamicTyping: true,
			skipEmptyLines: true,
			worker: true
		};

		importScripts(e.data[0] + 'tw/ace33022/NameSpace.js');
		importScripts(e.data[0] + 'tw/ace33022/DefaultConfigurations.js');
		
		if (e.data[0].startsWith('http://127.0.0.1') || e.data[0].startsWith('https://127.0.0.1')) {
		
			importScripts(e.data[0] + 'Configurations.js');
		}
		else {
		
			importScripts(e.data[0] + 'tw/Configurations.js');
		}
		
		importScripts(e.data[0] + 'tw/ace33022/RequireJSConfig.js');
		
		if (e.data[0].startsWith('http://127.0.0.1') || e.data[0].startsWith('https://127.0.0.1')) {
		
			importScripts(e.data[0] + 'requirejs/require.js');
		}
		else {
		
			importScripts('https://cdnjs.cloudflare.com/ajax/libs/require.js/2.2.0/require.js');
		}
		
		tw.ace33022.RequireJSConfig.baseUrl = e.data[0];

		requirejs.config(tw.ace33022.RequireJSConfig);

		loadFromCSV(e.data[1], configPapa, function(arrJSON) { postMessage(JSON.stringify(arrJSON)); });
	};

	if (typeof define === 'function') {

		define([], function() {

			return {

				loadFromCSV: loadFromCSV
			}
		});
	}
	else if (typeof exports !== 'undefined') {

		module.exports = loadFromCSV;
	}
	else {

		root.onmessage = onmessage;	// 使用new Worker建立執行緒時需要onmessage函數。
	}
})(this);