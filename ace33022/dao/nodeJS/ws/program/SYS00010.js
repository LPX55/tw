/**
 *
 * SYS00010DAO
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

    var serialVersionUID = 1; // 保留
		
    this.doLoginByUserAccount = function(userAccount, userPassword, callback) {

			var options = {
    
				method: 'GET',
				host: Configurations.location.host,
				port: Configurations.location.port,
				path: '/SYS/SYS00010' + '?' + 'Method=Login' + '&' + 'UserAccount=' + userAccount + '&' + 'UserPassword=' + userPassword
			};
  
			http.request(options, function(response) {
  
				// for (var item in response.headers) console.log(item + ": " + response.headers[item]);
				
				var data = '';
      
				response.on('data', function(chunk) {data += chunk;});
      
				response.on('end', function() {
				
					if (typeof callback === 'function') {
					
						callback(response, data);
					}
					else {
					
						console.log('StatusCode:' + response.statusCode);
					}
				});
			}).end();
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