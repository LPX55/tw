/*
 * F6472 JavaScript與Ajax網頁製作徹底研究 陳會安 著
 * 旗標出版股份有限公司
 *
 */

/*
 * 取得IE5、IE6等瀏覽程式之XMLHttpRequest物件。
 */
function getMSXMLHttpRequestObject() {
    
    var objXMLHttpRequest = null;

    // 找出IE5、IE6等瀏覽程式最新版MSXML剖析器。
    var strArrayMSXMLDesc = ["MSXML2.XMLHttp.4.0",
                             "MSXML2.XMLHttp.3.0",
                             "MSXML2.XMLHttp",
                             "Microsoft.XMLHttp"
                            ];
    for (intIndex = 0; intIndex < strArrayMSXMLDesc.length; intIndex++) {
        try {
            // 建立XMLHttpRequest物件。
            objXMLHttpRequest = new ActiveXObject(strArrayMSXMLDesc[intIndex]);
            break;
        } catch (e) {}
    }

    return objXMLHttpRequest;
}

/*
 * 取得XMLHttpRequest物件。
 */
function getXMLHttpRequestObject() {

    var objXMLHttpRequest = null;

    if (window.XMLHttpRequest) {
        // IE7、Mozilla、Safari等瀏覽程式。
        objXMLHttpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE5、IE6等瀏覽程式。
        objXMLHttpRequest = getMSXMLHttpRequestObject();
    }

    return objXMLHttpRequest;
}