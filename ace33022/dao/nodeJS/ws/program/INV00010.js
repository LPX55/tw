/**
 *
 * INV00010DAO
 *
 * @author ace
 *
 * @version 2015/03/12 初始版本。
 *
 * @description
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @comment
 *
 * @todo
 *
 */

(function() {

	var root = this;
	
	var http = require('http');
 
  var result = function(Configurations) {

		var serialVersionUID = new Number(1);     // 保留
		
		this.doDownload = function(fileFormat, callback) {
		
			var options = {
    
				method: 'GET',
				host: Configurations.location.host,
				port: Configurations.location.port,
				path: '/INV/INV00010/Download?FileFormat=' + fileFormat,
				headers: {
			
					'Content-Type': 'application/json; charset=utf-8',
					'Cookie': Configurations.location.cookie
				}
			};
			
			http.request(options, callback).end();
		}
		
    this.doInsert = function(vo, callback) {

			var options = {
    
				method: 'POST',
				host: Configurations.location.host,
				port: Configurations.location.port,
				path: '/INV/INV00010',
				headers: {
			
					'Content-Type': 'application/json; charset=utf-8',
					'Content-Length': Buffer.byteLength(vo.toJSONString(), 'utf8'),  
					'Cookie': Configurations.location.cookie
				}
			};
			
			var request = http.request(options, callback);
  
			request.write(vo.toJSONString());
			request.end();
    }
  }
	
	if (typeof define === 'function') {

		define([], function() {
		
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports = result;
	}
})();