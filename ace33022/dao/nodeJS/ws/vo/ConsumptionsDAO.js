/**
 *
 * ConsumptionsDAO
 *
 * @author ace
 *
 * @version 2014/02/08 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @description 
 *
 * @todo 
 *
 */
 
define(["AncestorDAO"], function (AncestorDAO) {

  var ConsumptionsDAO = function () {

    var serialVersionUID = 1; // 保留
  
    this.doPost = function(vo, successCallback, errorCallback) {
  
      // dataType: "json" =>在success之回呼函數中取得之data參數為物件型態資料。
      // dataType: "text" =>在success之回呼函數中取得之data參數為字串型態資料。
      
      var http = require('http');
    
      var options = {
    
        method: "GET",
        host: "127.0.0.1",
        port: "8080",
        path: "/REST/JSON/CHA00010"
      };

      callback = function(response) {
    
        var result = "";

        // another chunk of data has been recieved, so append it to "str"
        response.on("data", function(chunk) { result += chunk; });

        // the whole response has been recieved, so we just print it out here
        response.on("end", function() { console.log(result); });
      }

      http.request(options, callback).end();    
    
      var strServerURL = new String("http://127.0.0.1:8080/");
      var strServerMethod = new String("REST/JSON/CHA00010");
      var strSourceURL = new String(strServerURL + strServerMethod);
    
      window.$.ajax({
        
        // @version 2013/11/21 Content-type屬性內容調整。  
        // contentType: "text/json; charset=utf-8",
        contentType: "application/json; charset=utf-8",
        url: strSourceURL,
        type: "POST",
        // dataType: "json",
        dataType: "text",
        data: vo.toJSONString(),
        success: function(data, textStatus) {
        
          if (typeof(successCallback) == "function") successCallback(data, textStatus);
        },
        error: function(jqXHR, textStatus) {
      
          if (typeof(errorCallback) == "function") errorCallback(jqXHR);
        }
      });
    }
  
    this.doGet = function (successCallback, errorCallback) {
  
      // dataType: "json" =>在success之回呼函數中取得之data參數為物件型態資料。
      // dataType: "text" =>在success之回呼函數中取得之data參數為字串型態資料。
  
      var strServerURL = new String("http://127.0.0.1:8080/");
      var strServerMethod = new String("REST/JSON/CHA00010");
      var strSourceURL = new String(strServerURL + strServerMethod);
  
      window.$.ajax({
      
        // @version 2013/11/21 Content-type屬性內容調整。      
        // contentType: "text/json",
        contentType: "application/json; charset=utf-8",
        url: strSourceURL,
        type: "GET",
        // dataType: "json",
        dataType: "text",
        success: function(data, textStatus) {

          if (typeof(successCallback) == "function") successCallback(data, textStatus);
        },
        error: function(jqXHR) {
      
          if (typeof(errorCallback) == "function") errorCallback(jqXHR);
        }
      });
    }
  }

  ConsumptionsDAO.prototype = new AncestorDAO();
  
  return ConsumptionsDAO;
});