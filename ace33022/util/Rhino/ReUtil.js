/*
 * ReThink共用函數
 *  
 * @author ace
 * 
 * @version 2013/03/05 初始版本。
 * @version 2013/03/06 新增function getUsersByUserMobile()。
 * @version 2013/03/06 新增function getProductsByProductCode()。
 * @version 2013/03/22 新增function insertInvoiceEventLogs()。
 * @version 2013/04/01 新增function checkLogin()。
 * @version 2013/04/02 新增function checkInvoice()。
 * @version 2013/04/10 CommonQuery路徑調整。
 * @version 2013/04/10 函數insertInvoiceEventLogs()移至INV09010.js。
 * @version 2013/04/10 函數checkInvoice()移至INV09010.js。
 * @version 2013/04/10 新增function checkInvoiceFormat()。
 *
 * @see <a href="http://www.acwind.net/blog/?p=736">jQuery中使用同步方式调用ajax</a>
 *   
 */
 
/*
 * 使用電話號碼查詢員工資料。
 *  
 * @author ace
 * 
 * @version 2013/03/05 初始版本。   
 *   
 * @param {String} userTel 電話號碼。
 *  
 * @return 傳回Users資料物件。
 * @type text/json
 * 
 * @requires 
 *
 */
function getUsersByUserTel(userTel) {

  var result = new String();
  
  var strServerURL = new String("http://localhost:8080/");
  var strServerMethod = new String("ReThink/REST/json/CommonQuery?ReqNo=4&UserTel=" + userTel);
  var strSourceURL = new String(strServerURL + strServerMethod);
  
  window.$.ajax({
  
    async: false, // 使用同步模式，避免尚未取得正確資料前即執行success屬性，造成回傳值非預估結果值。
    url: strSourceURL,
    type: "GET",
    // dataType: "json",
    dataType: "text",
    contentType: "charset=utf-8",
    success: function(json) { result = json; }
  });
  
  return result;
}

/*
 * 使用手機號碼查詢員工資料。
 *  
 * @author ace
 * 
 * @version 2013/03/06 初始版本。   
 *   
 * @param {String} userMobile 電話號碼。
 *  
 * @return 傳回Users資料物件。
 * @type text/json
 * 
 * @requires 
 *
 */
function getUsersByUserMobile(userMobile) {

  var result = new String();
  
  var strServerURL = new String("http://localhost:8080/");
  var strServerMethod = new String("ReThink/REST/json/CommonQuery?ReqNo=5&UserMobile=" + userMobile);
  var strSourceURL = new String(strServerURL + strServerMethod);
  
  window.$.ajax({
  
    async: false, // 使用同步模式，避免尚未取得正確資料前即執行success屬性，造成回傳值非預估結果值。
    url: strSourceURL,
    type: "GET",
    // dataType: "json",
    dataType: "text",
    contentType: "charset=utf-8",
    success: function(json) { result = json; }
  });
  
  return result;
}

/*
 * 使用商品編號查詢商品資料。
 *  
 * @author ace
 * 
 * @version 2013/03/06 初始版本。   
 *   
 * @param {String} productCode 商品編號。
 *  
 * @return 傳回Products資料物件。
 * @type text/json
 * 
 * @requires 
 *
 */
function getProductsByProductCode(productCode) {

  var result = new String();
  
  var strServerURL = new String("http://localhost:8080/");
  var strServerMethod = new String("ReThink/REST/json/CommonQuery?ReqNo=6&ProductCode=" + productCode);
  var strSourceURL = new String(strServerURL + strServerMethod);
  
  window.$.ajax({
  
    async: false, // 使用同步模式，避免尚未取得正確資料前即執行success屬性，造成回傳值非預估結果值。
    url: strSourceURL,
    type: "GET",
    // dataType: "json",
    dataType: "text",
    contentType: "charset=utf-8",
    success: function(json) { result = json; }
  });
  
  return result;
}

/*
 * 檢查使用者是否已登入系統。
 *  
 * @author ace
 * 
 * @version 2013/04/01 初始版本。   
 *   
 * @return 使用者若已登入系統傳回字串"1"，否則傳回字串"0"。
 * @type Boolean
 * 
 * @requires 
 *
 */
function checkLogin() {

  var result = new String();
  
  var strServerURL = new String("http://localhost:8080/");
  var strServerMethod = new String("ReThink/REST/json/CommonQuery?ReqNo=7");
  var strSourceURL = new String(strServerURL + strServerMethod);
  
  window.$.ajax({
  
    async: false, // 使用同步模式，避免尚未取得正確資料前即執行success屬性，造成回傳值非預估結果值。
    url: strSourceURL,
    type: "GET",
    // dataType: "json",
    dataType: "text",
    contentType: "charset=utf-8",
    success: function(json) { 

      result = JSON.parse(json).returnValue;
      
      // 尚未登入則將網址轉向至使用者登入程式(BAS01010.html)
      // todo: 轉向登入成功後，應再轉向原執行之程式。
      if (result == "0") window.location = "/ReThink/BAS/BAS01010.html";
    }
  });
  
  return result;
}

/*
 * 檢查發票格式是否正確。
 *  
 * @author ace
 * 
 * @version 2013/04/10 初始版本。   
 *   
 * @return 發票格式正確傳回字串"0"，否則傳回字串"1"。
 * @type Boolean
 * 
 * @requires 
 *
 */
function checkInvoiceFormat(invoiceNo) {

  var result = new String();
  
  var strServerURL = new String("http://localhost:8080/");
  var strServerMethod = new String("ReThink/REST/json/CommonQuery?ReqNo=8" + "&" + "InvoiceNo=" + invoiceNo);
  var strSourceURL = new String(strServerURL + strServerMethod);
  
  window.$.ajax({
  
    async: false, // 使用同步模式，避免尚未取得正確資料前即執行success屬性，造成回傳值非預估結果值。
    url: strSourceURL,
    type: "GET",
    // dataType: "json",
    dataType: "text",
    contentType: "charset=utf-8",
    success: function(json) { 

      result = JSON.parse(json).returnValue;
    }
  });
  
  return result;
}