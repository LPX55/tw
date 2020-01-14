/**
 *
 * @module WunderlistUtils
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 * @see {@link https://developer.wunderlist.com/|Wunderlist Developer}
 * @see {@link https://developer.wunderlist.com/documentation|Documentation | Wunderlist Developer}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open|XMLHttpRequest.open() | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange|XMLHttpRequest.onreadystatechange | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState|XMLHttpRequest.readyState | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status|XMLHttpRequest.status | MDN}
 *
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest|XMLHttpRequest | MDN}
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest/responseType|XMLHttpRequest.responseType | MDN}
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest/setRequestHeader|XMLHttpRequest.setRequestHeader() | MDN}
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest/withCredentials|XMLHttpRequest.withCredentials | MDN}
 *
 * @see {@link https://www.w3schools.com/xml/xml_http.asp|XML HttpRequest}
 * @see {@link https://javascript.info/xmlhttprequest|XMLHttpRequest and AJAX}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started|Getting Started | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest|Using XMLHttpRequest | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests|Synchronous and asynchronous requests | MDN}
 *
 * @see {@link https://gist.github.com/EtienneR/2f3ab345df502bd3d13e|XMLHttpRequest RESTful (GET, POST, PUT, DELETE)}
 * @see {@link https://blog.garstasio.com/you-dont-need-jquery/ajax/|Ajax Requests – You Don't Need jQuery! – Free yourself from the chains of jQuery by embracing and understanding the modern Web API and discovering various directed libraries to help you fill in the gaps.}
 *
 */

(function(root) {

	var xhr = new XMLHttpRequest();

	/**
	 *
	 * @description 取得列表資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2018/09/17 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/list|List | Wunderlist Developer}
	 *
	 */
	function getLists(options) {
	
		var url = 'https://a.wunderlist.com/api/v1/lists';
		
		xhr.onreadystatechange = function() {

			if (xhr.readyState === 0) {				// UNSENT. Client has been created. open() not called yet.
			
			}
			else if (xhr.readyState === 1) {	// OPENED. open() has been called.
			
				xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

				xhr.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				xhr.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (xhr.readyState === 2) {	// HEADERS_RECEIVED. send() has been called, and headers and status are available.

			}
			else if (xhr.readyState === 3) {	// LOADING. Downloading; responseText holds partial data.

			}
			else if (xhr.readyState === 4) {	// DONE. The operation is complete.

				if (typeof options["callback"] === 'function') options["callback"](xhr.status, xhr.responseText);
			}
		};
		
		if ((typeof options["id"] !== 'undefined') && (options["id"] !== null)) url += '/' + options["id"];

		xhr.open('GET', url);
		xhr.send();
	};
	
	/**
	 *
	 * @description 新增工作資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2019/01/11 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/task|Task | Wunderlist Developer}
	 *
	 */
	function postTasks(options) {

		var url = 'https://a.wunderlist.com/api/v1/tasks';

		xhr.onreadystatechange = function() {

			if (this.readyState === 1) {

				this.setRequestHeader('Content-type', 'application/json; charset=utf-8');

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState === 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		xhr.open('POST', url, true);
		xhr.send(JSON.stringify(options["data"]));
	}
	
	/**
	 *
	 * @description 取得指定列表Id(ListId)的所有工作(Tasks)資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2018/09/17 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/task|Task | Wunderlist Developer}
	 *
	 */
	function getTasksByListId(options) {

		var url = 'https://a.wunderlist.com/api/v1/tasks';

		xhr.onreadystatechange = function() {

			if (this.readyState === 1) {

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState === 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		url += '?list_id=' + options["list_id"];

		xhr.open('GET', url);
		xhr.send();
	}

	/**
	 *
	 * @description 取得工作資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2018/09/17 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/task|Task | Wunderlist Developer}
	 *
	 */
	function getTasks(options) {

		var url = 'https://a.wunderlist.com/api/v1/tasks';

		xhr.onreadystatechange = function() {

			if (this.readyState === 1) {

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState === 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		url += '/' + options["id"];

		xhr.open('GET', url);
		xhr.send();
	}
	
	/**
	 *
	 * @description 更新工作資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2018/09/17 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/task|Task | Wunderlist Developer}
	 *
	 */
	function patchTasks(options) {

		var url = 'https://a.wunderlist.com/api/v1/tasks';

		xhr.onreadystatechange = function() {

			if (this.readyState === 1) {

				this.setRequestHeader('Content-type', 'application/json; charset=utf-8');

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState === 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		url += '/' + options["id"];

		xhr.open('PATCH', url);
		xhr.send(JSON.stringify(options["data"]));
	}

	/**
	 *
	 * @description 刪除工作資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2018/09/17 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/task|Task | Wunderlist Developer}
	 *
	 */
	function deleteTasks(options) {

		var url = 'https://a.wunderlist.com/api/v1/tasks';

		xhr.onreadystatechange = function() {

			if (this.readyState === 1) {

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState === 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		url += '/' + options["id"] + '?revision=' + options["revision"];

		xhr.open('DELETE', url);
		xhr.send();
	}
		
	/**
	 *
	 * @description 新增子工作資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2019/01/11 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/subtask|Subtask | Wunderlist Developer}
	 *
	 */
	function postSubtasks(options) {

		var url = 'https://a.wunderlist.com/api/v1/subtasks';

		xhr.onreadystatechange = function() {

			if (this.readyState === 1) {

				this.setRequestHeader('Content-type','application/json; charset=utf-8');

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState === 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		xhr.open('POST', url, true);
		xhr.send(JSON.stringify(options["data"]));
	}
	
	/**
	 *
	 * @description 取得工作Id的子工作(Subtasks)資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2018/09/17 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/subtask|Subtask | Wunderlist Developer}
	 *
	 */
	function getSubtasks(options) {

		var url = 'https://a.wunderlist.com/api/v1/subtasks';

		xhr.onreadystatechange = function() {

			if (this.readyState == 1) {

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState == 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		url += '?task_id=' + options["task_id"];

		xhr.open('GET', url);
		xhr.send();
	}
	
	/**
	 *
	 * @description 更新子工作資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2018/09/17 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/subtask|Subtask | Wunderlist Developer}
	 *
	 */
	function patchSubtasks(options) {

		var url = 'https://a.wunderlist.com/api/v1/subtasks';

		xhr.onreadystatechange = function() {

			if (this.readyState === 1) {

				this.setRequestHeader('Content-type','application/json; charset=utf-8');

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState === 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		url += '/' + options["id"];

		xhr.open('PATCH', url);
		xhr.send(JSON.stringify(options["data"]));
	}
		
	/**
	 *
	 * @description 新增工作Id的Note資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2019/01/11 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/note|Note | Wunderlist Developer}
	 *
	 */
	function postNotes(options) {

		var url = 'https://a.wunderlist.com/api/v1/notes';

		xhr.onreadystatechange = function() {

			if (this.readyState === 1) {
			
				this.setRequestHeader('Content-type', 'application/json; charset=utf-8');

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState === 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		xhr.open('POST', url, true);
		xhr.send(JSON.stringify(options["data"]));
	}
	
	/**
	 *
	 * @description 取得工作Id的Note資料。
	 *
	 * @param {Object} options 參數物件。
	 *
	 * @memberof module:WunderlistUtils
	 *
	 * @version 2018/09/17 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.wunderlist.com/documentation/endpoints/note|Note | Wunderlist Developer}
	 *
	 */
	function getNotes(options) {

		var url = 'https://a.wunderlist.com/api/v1/notes';

		xhr.onreadystatechange = function() {

			if (this.readyState === 1) {

				this.setRequestHeader('X-Access-Token', options["configurations"]["accessToken"]);
				this.setRequestHeader('X-Client-ID', options["configurations"]["clientID"]);
			}
			else if (this.readyState === 4) {

				if (typeof options["callback"] === 'function') options["callback"](this.status, this.responseText);
			}
		};

		url += '?task_id=' + options["id"];

		xhr.open('GET', url);
		xhr.send();
	}
	
	if (typeof define === 'function') {
	
		define([], function() { 
		
			return {
  
				"getLists": getLists,
				"postTasks": postTasks,
				"getTasksByListId": getTasksByListId,
				"getTasks": getTasks,
				"patchTasks": patchTasks,
				"deleteTasks": deleteTasks,
				"postSubtasks": postSubtasks,
				"getSubtasks": getSubtasks,
				"patchSubtasks": patchSubtasks,
				"postNotes": postNotes,
				"getNotes": getNotes
			}
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports.getLists = getLists;
		module.exports.postTasks = postTasks;
		module.exports.getTasksByListId = getTasksByListId;
		module.exports.getTasks = getTasks;
		module.exports.patchTasks = patchTasks;
		module.exports.deleteTasks = deleteTasks;
		module.exports.postSubtasks = postSubtasks;
		module.exports.getSubtasks = getSubtasks;
		module.exports.patchSubtasks = patchSubtasks;
		module.exports.postNotes = postNotes;
		module.exports.getNotes = getNotes;
	}
	else {
	
		if (typeof root.tw.ace33022.RequireJSConfig === 'undefined') throw new Error('tw.ace33022.RequireJSConfig is undefined.');
		
		root.tw.ace33022.util.WunderlistUtils.getLists = getLists;
		root.tw.ace33022.util.WunderlistUtils.postTasks = postTasks;
		root.tw.ace33022.util.WunderlistUtils.getTasksByListId = getTasksByListId;
		root.tw.ace33022.util.WunderlistUtils.getTasks = getTasks;
		root.tw.ace33022.util.WunderlistUtils.patchTasks = patchTasks;
		root.tw.ace33022.util.WunderlistUtils.deleteTasks = deleteTasks;
		root.tw.ace33022.util.WunderlistUtils.postSubtasks = postSubtasks;
		root.tw.ace33022.util.WunderlistUtils.getSubtasks = getSubtasks;
		root.tw.ace33022.util.WunderlistUtils.patchSubtasks = patchSubtasks;
		root.tw.ace33022.util.WunderlistUtils.postNotes = postNotes;
		root.tw.ace33022.util.WunderlistUtils.getNotes = getNotes;
	}
})(this);