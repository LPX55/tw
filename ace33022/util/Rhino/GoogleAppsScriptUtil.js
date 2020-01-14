/*
 *
 * @description Google Apps Script
 *  
 * @version 2019/01/21 初始版本。
 *
 * @author ace
 *
 * @see {@link https://developers.google.com/apps-script/reference/|Reference Overview  |  Apps Script  |  Google Developers}
 * 
 */
 
/*
 *
 * @description URL Fetch Service
 *  
 * @version 2019/01/21 初始版本。
 *
 * @author ace
 *
 * @see {@link https://developers.google.com/apps-script/reference/url-fetch/|URL Fetch Service  |  Apps Script  |  Google Developers}
 * 
 */
var UrlFetchApp = {};

/*
 *
 * @description UrlFetchApp
 *  
 * @version 2019/01/21 初始版本。
 *
 * @author ace
 * 
 * @see {@link https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app|Class UrlFetchApp  |  Apps Script  |  Google Developers}
 * @see {@link https://developers.google.com/apps-script/reference/url-fetch/http-response|Class HTTPResponse  |  Apps Script  |  Google Developers}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino/Scripting_Java|Scripting Java | MDN}
 *
 * @see {@link https://docs.oracle.com/javase/6/docs/|Java SE 6 Documentation}
 * @see {@link https://docs.oracle.com/javase/7/docs/|Java Platform Standard Edition 7 Documentation}
 *
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/lang/Character.html|Character (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/lang/String.html|String (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html|StringBuffer (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html|InputStream (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/io/InputStreamReader.html|InputStreamReader (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/io/ByteArrayOutputStream.html|ByteArrayOutputStream (Java Platform SE 7 )}
 *
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/net/URL.html|URL (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/net/URLConnection.html|URLConnection (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/net/HttpURLConnection.html|HttpURLConnection (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/javax/net/ssl/HttpsURLConnection.html|HttpsURLConnection (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/javax/net/ssl/SSLContext.html|SSLContext (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/javax/net/ssl/TrustManager.html|TrustManager (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/javax/net/ssl/X509TrustManager.html|X509TrustManager (Java Platform SE 7 )}
 * @see {@link https://docs.oracle.com/javase/7/docs/api/javax/net/ssl/SSLHandshakeException.html|SSLHandshakeException (Java Platform SE 7 )}
 *
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/util/Map.html|Map (Java Platform SE 7 )}
 *
 * @see {@link https://www.tutorialspoint.com/java/java_characters.htm|Java Character Class}
 * @see {@link https://www.tutorialspoint.com/java/util/hashmap_size.htm|java.util.HashMap.size() Method Example}
 *
 * @see {@link https://docs.oracle.com/javase/tutorial/networking/urls/connecting.html|Connecting to a URL (The Java™ Tutorials > Custom Networking > Working with URLs)}
 * @see {@link https://docs.oracle.com/javase/tutorial/networking/urls/readingURL.html|Reading Directly from a URL (The Java™ Tutorials > Custom Networking > Working with URLs)}
 * @see {@link https://docs.oracle.com/javase/tutorial/networking/urls/readingWriting.html|Reading from and Writing to a URLConnection (The Java™ Tutorials > Custom Networking > Working with URLs)}
 *
 * @see {@link http://www.java2s.com/Tutorials/Java/URL_Connection_Address/How_to_use_java_net_URL.htm|How to use java.net.URL}
 * @see {@link http://www.java2s.com/Tutorials/Java/URL_Connection_Address/Work_with_HttpURLConnection.htm|Work with HttpURLConnection}
 * @see {@link http://www.java2s.com/Tutorials/Java/URL_Connection_Address/How_to_read_from_URL_Connection_in_Java.htm|How to read from URL Connection in Java}
 * @see {@link http://www.java2s.com/Tutorials/Java/URL_Connection_Address/How_to_read_HTTP_header_from_URL_using_URLConnection_in_Java.htm|How to read HTTP header from URL using URLConnection in Java}
 * @see {@link http://www.java2s.com/Tutorials/Java/URL_Connection_Address/How_to_read_content_from_a_URL_in_Java.htm|How to read content from a URL in Java}
 *
 * @see {@link https://www.tutorialspoint.com/java/java_url_processing.htm|Java URL Processing}
 * @see {@link https://www.geeksforgeeks.org/java-net-httpurlconnection-class-java/|Java.net.HttpURLConnection Class in Java - GeeksforGeeks}
 * @see {@link https://examples.javacodegeeks.com/core-java/net/url/java-net-url-example/|java.net.URL Example | Examples Java Code Geeks - 2019}
 * @see {@link https://www.mkyong.com/java/how-to-send-http-request-getpost-in-java/|How to send HTTP request GET/POST in Java – Mkyong.com}
 * @see {@link https://www.codejava.net/java-se/networking/how-to-use-java-urlconnection-and-httpurlconnection|How to use Java URLConnection and HttpURLConnection}
 * @see {@link https://blog.yslifes.com/archives/367|java HttpURLConnection來實作get及post動作 | 聰明的生活}
 * @see {@link https://www.cnblogs.com/shijiaqi1066/p/3753224.html|URLConnection类详解 - LaplaceDemon - 博客园}
 * @see {@link https://blog.csdn.net/iijse/article/details/6201101|利用URLConnection来发送POST和GET请求 - Ijse技术博客 - CSDN博客}
 * @see {@link https://my.oschina.net/huangcongmin12/blog/159345|Java 使用 URLConnection 模拟 Http Get和Post 提交 - 空云万里晴 - 开源中国}
 *
 * @see {@link https://tonylin.idv.tw/dokuwiki/doku.php/java:basic:urlconnection|URLConnection [阿兩的筆記本 Ryoutsu's Notebook]}
 * @see {@link https://kingori.co/minutae/2013/04/httpurlconnection-disconnect/|Do we need to call HttpURLConnection.disconnect()? • King'ori Maina}
 * @see {@link https://stackoverflow.com/questions/9150200/closing-urlconnection-and-inputstream-correctly|java - Closing URLConnection and InputStream correctly? - Stack Overflow}
 *
 * @see {@link https://www.javaworld.com.tw/jute/post/view?bid=5&id=266291|JWorld@TW Java論壇 - 偶爾在讀取 http input stream 時出現 Premature EOF 是 Java 的 bug 嗎？}
 * @see {@link https://stackoverflow.com/questions/13210108/reading-a-web-page-in-java-ioexception-premature-eof|io - Reading a web page in Java IOException Premature EOF - Stack Overflow}
 * @see {@link http://www.javaprogrammingforums.com/java-networking-tutorials/185-how-grab-html-source-code-website-url-index-page.html|How to Grab the HTML source code of a website URL index page?}
 *
 * @see {@link https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/315138/|Java HttpURLConnection超時和IO異常處理 | 程式前沿}
 * @see {@link https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-tw|HTTP 快取  |  Web  |  Google Developers}
 * @see {@link https://www.javaworld.com.tw/jute/post/view?bid=5&id=282317|JWorld@TW Java論壇 - 讀取已斷線的 socket 卻不會 catch IOException？}
 * @see {@link http://mrbearla.blogspot.com/2011/05/javaneturl.html|曾小魚的程式設計筆記: 用java.net.URL建立連線注意事項}
 * @see {@link https://magiclen.org/java-reader/|透過InputStreamReader讀取InputStream可能會失敗 | MagicLen}
 * @see {@link http://wannadoitnow.blogspot.com/2015/10/android-httpurlconnection-httprequest.html|Android - HttpURLConnection 基本教學 取得網頁資料(HTML, XML, JSON) - Min's capo - Tutorials. Easy, simple and quick}
 * @see {@link https://litotom.com/2016/05/11/java%E7%9A%84%E7%B6%B2%E8%B7%AF%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88/|Java的網路程式設計 - 綠豆湯}
 * @see {@link http://www.runoob.com/w3cnote/android-tutorial-httpurlconnection.html|7.1.3 Android HTTP请求方式:HttpURLConnection | 菜鸟教程}
 *
 * @see {@link https://stackoverflow.com/questions/39127819/cant-read-data-from-url-due-to-cloudflare|Can't read data from url due to cloudflare - Stack Overflow}
 *
 * @see {@link https://hype.codes/how-convert-inputstream-string-java|How to convert an InputStream to a String in Java? | Hype.Codes}
 * @see {@link https://www.baeldung.com/convert-input-stream-to-string|Java InputStream to String | Baeldung}
 *
 * @see {@link http://fannys23.pixnet.net/blog/post/43556945-%5Bjava%5D-%E8%99%95%E7%90%86%E7%84%A1%E6%B3%95%E9%80%8F%E9%81%8Essl%E6%8A%93%E5%8F%96%E7%B6%B2%E7%AB%99%E8%B3%87%E6%96%99%E7%9A%84%E5%95%8F%E9%A1%8C|[Java] 處理無法透過SSL抓取網站資料的問題 @ 小攻城師的戰場筆記 :: 痞客邦 ::}
 * @see {@link https://stackoverflow.com/questions/6659360/how-to-solve-javax-net-ssl-sslhandshakeexception-error|java - How to solve javax.net.ssl.SSLHandshakeException Error? - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/9619030/resolving-javax-net-ssl-sslhandshakeexception-sun-security-validator-validatore|java - Resolving javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed Error? - Stack Overflow}
 * @see {@link http://hant.ask.helplib.com/java/post_635651|如何解决 javax.net.ssl.SSLHandshakeException 错误？_java_帮酷编程问答}
 *
 * @todo Error message: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
 *
 */
UrlFetchApp["fetch"] = function(url, params) {

	// Packages.java.lang.System.setProperty('http.agent', 'Chrome');
	
	// print(Packages.java.lang.System.getProperty('http.agent'));
	// Packages.java.lang.System.setProperty('http.agent', 'Chrome');
	// print(Packages.java.lang.System.getProperty('http.agent'));
	
	var BUFFER_SIZE = 1024;
	
	var objUrl = new Packages.java.net.URL(url);
	var urlConn = objUrl.openConnection();
	
	var contentText = new Packages.java.lang.StringBuffer();
	
	var reader, bufferedReader, temp;
	// var buffer = Packages.java.lang.reflect.Array.newInstance(Packages.java.lang.Character.TYPE, BUFFER_SIZE);
	var buffer = Packages.java.lang.reflect.Array.newInstance(Packages.java.lang.Byte.TYPE, BUFFER_SIZE);
	
	var charsRead = 0;
	var charRead = 0;
	var inputStream;
	var readLength;
	
	var bao = new Packages.java.io.ByteArrayOutputStream();
	
	var text;
	var c;
	
	// cloudflare URLConnection Premature EOF
	urlConn.setRequestProperty('Connection', 'keep-alive');
	urlConn.setRequestProperty('Accept-Encoding', 'gzip,deflate');
	urlConn.setRequestProperty('Accept-Language', 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7');
	urlConn.setRequestProperty('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36');
	
	urlConn.setRequestMethod('GET');
	
	print('ResponseCode:' + urlConn.getResponseCode());
	
	// urlConn.setUseCaches(false);
	// urlConn.setConnectTimeout(600000);
	// urlConn.setReadTimeout(60 * 1000);
	
	if (urlConn.getResponseCode() == 200) {
	
		// bufferedReader = new Packages.java.io.BufferedReader(new Packages.java.io.InputStreamReader(objUrl.openStream(), 'UTF-8'));
		// reader = new Packages.java.io.InputStreamReader(objUrl.openStream(), 'UTF-8');
		// reader = new Packages.java.io.InputStreamReader(urlConn.getInputStream(), 'UTF-8');
		
		// inputStream = urlConn.getInputStream();
		inputStream = objUrl.openStream();
		try {

			/*
			try {
		
				// while ((charsRead = bufferedReader.read(buffer, 0, BUFFER_SIZE)) != -1) contentText.append(buffer, 0, charsRead);
				// while ((temp = bufferedReader.readLine()) != null) contentText.append(temp);
				// while ((c = reader.read()) != -1) print(c);
				
				// while ((charRead = reader.read()) != -1) contentText.append(charRead);
				// setChunkedStreamingMode()
				// Cache-Control:no-store, no-cache, must-revalidate, post-check=0, pre-check=0
				// http://japanhub.net/search/videos?search_query=SMA-73

				charRead = reader.read();
				
				while (charRead != -1) {
				
					contentText.append(new Packages.java.lang.Character(charRead));
					
					charRead = reader.read();
				}
				
				while ((c = inputStream.read(buffer)) >= 0) bao.write(buffer, 0, c);
			}
			catch(error) {
			
				// URLConnection Premature EOF
				// 讀取http://japanhub.net/網頁時，會因為有部份資料的Line Feed不連續造成Premature EOF的錯誤訊息。
				
				print('Error in getting URL content: ' + error.message);
			}
			*/
			
			/*
			while (true) {
			
				try {
				
					print(inputStream.available());
				
					readLength = inputStream.read(buffer);
			
					if (readLength < 0) break;
					
					bao.write(buffer, 0, readLength);
					
					// readLength = inputStream.read(buffer);
				}
				catch(error) {
				
					print('Error in getting URL content: ' + error.message);
					
					Packages.java.lang.Thread.sleep(5 * 1000);
				}
			}
			*/

			try {
			
				while (true) {
				
					print(inputStream.available());
				
					readLength = inputStream.read(buffer);
			
					if (readLength < 0) break;
					
					bao.write(buffer, 0, readLength);
					
					// readLength = inputStream.read(buffer);
				}
			}
			catch(error) {
			
				print('Error in getting URL content: ' + error.message);
			}
			
			// print(urlConn.getContentLength());
			// print(inputStream.available());
			// Packages.java.lang.Thread.sleep(5 * 1000);
		}
		finally {
		
			// bufferedReader.close();
			
			// text = new Packages.java.lang.String(bao.toByteArray(), 'UTF-8');
			
			text = bao.toString('UTF-8');
			
			// print(text.length());
			print(text);
			
			// var outToFile = new Packages.java.io.PrintWriter('K:/Rhino/FindVideo/java.html');
			// outToFile.println(text);

			inputStream.close();
			
			bao.close();
		}
		
		// http://japanhub.net/search/videos?search_query=SMA-73
		// print(contentText.length());
	}
	
	return {
	
		"getResponseCode": function() { return urlConn.getResponseCode(); },
		"getContentText": function() { return contentText.toString(); }
	};
};
