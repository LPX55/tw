/**
 *
 * URIUtils
 *
 * @description URI Tools。
 *
 * @author ace
 *
 * @version 2017/09/30 初始版本。
 *
 * @see <a href="http://nwjs.io/">NW.js</a>
 * @see <a href="https://github.com/nwjs/nw.js">nwjs/nw.js: Call all Node.js modules directly from DOM/WebWorker and enable a new way of writing applications with all Web technologies.</a>
 * @see <a href="http://docs.nwjs.io/">NW.js Documentation</a>
 * @see <a href="http://docs.nwjs.io/en/latest/For%20Users/Migration/From%200.12%20to%200.13/">From 0.12 to 0.13 - NW.js Documentation</a>
 *
 * @see <a href="https://github.com/nwjs/nw.js/wiki">Home · nwjs/nw.js Wiki</a>
 * @see <a href="https://github.com/nwjs/nw.js/wiki/Differences-of-JavaScript-contexts">Differences of JavaScript contexts · nwjs/nw.js Wiki</a>
 * @see <a href="https://github.com/nwjs/nw.js/wiki/Using-Node-modules">Using Node modules · nwjs/nw.js Wiki</a>
 * @see <a href="https://github.com/nwjs/nw.js/wiki/Changes-related-to-node">Changes related to node · nwjs/nw.js Wiki</a>
 * @see <a href="https://github.com/nwjs/nw.js/wiki/About-Node.js-server-side-script-in-nw.js">About Node.js server side script in nw.js · nwjs/nw.js Wiki</a>
 * @see <a href="https://github.com/nwjs/nw.js/wiki/faq-name-conflict">Faq name conflict · nwjs/nw.js Wiki</a>
 *
 * @see <a href="https://nodejs.org/api/">Index | Node.js v8.6.0 Documentation</a>
 * @see <a href="https://nodejs.org/api/http.html">HTTP | Node.js v8.6.0 Documentation</a>
 * @see <a href="https://nodejs.org/api/https.html">HTTPS | Node.js v8.6.0 Documentation</a>
 * @see <a href="https://nodejs.org/api/url.html">URL | Node.js v8.6.0 Documentation</a>
 *
 * @see <a href="https://www.npmjs.com/package/cheerio">cheerio</a>
 * @see <a href="https://cheerio.js.org/">Cheerio</a>
 * @see <a href="https://github.com/cheeriojs/cheerio">cheeriojs/cheerio: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.</a>
 *
 * @see <a href="https://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express">javascript - HTTP GET Request in Node.js Express - Stack Overflow</a>
 *
 * @comment
 *
 * @todo
 *
 */

function getHTMLPage(options, callback)  {

  var client = require('http');
	
  if (options["protocol"] == 'https:')  client = require('https');

    client.get(options, function(res)  {

    var bodyChunks = [];	// Buffer the body entirely for processing as a whole.
    var result = {

      "statusCode": res.statusCode,
      // "headers": JSON.stringify(res.headers)
      "headers": res.headers
    };

    if (result["statusCode"] == 200)  {

      res
      .on('data', function(chunk)  {

        // process streamed parts here...
        bodyChunks.push(chunk);
      })
      .on('end', function() {

        result["pageContent"] = Buffer.concat(bodyChunks).toString();

        if (typeof callback == 'function') callback(result);
      });
    }
    else  {

      if (typeof callback == 'function') callback(result);
    }
  });
};

// 免費成人影片85Videos(http://85videos.com/)
function get85videos(uri, callback) {

  var options = require('url').parse(uri);
	
	var cheerio = require('cheerio');
	var jQuery;
	
	getHTMLPage(options, function(result) {
	
		if (result["statusCode"] == 200) {
		
			jQuery = cheerio.load(result["pageContent"]);
			
			jQuery('iframe').each(function(index, element) {
			
        var referer;
        var options;
				
				// http://85videos.com/embed/
				if (element["attribs"]["src"].indexOf('85videos.com/embed/') != -1) {
				
          referer = element["attribs"]["src"];
          options = require('url').parse(referer);
					
					getHTMLPage(options, function(result) {
					
            // http://85videos.com/play/
            if (result["statusCode"] == 200)  {
						
							jQuery = cheerio.load(result["pageContent"]);
							
							if (jQuery('video > source').length != 0) {
							
                options = require('url').parse(jQuery('video > source')[0]["attribs"]["src"]);

                options["headers"] = {

                  "Referer": referer
                };

                getHTMLPage(options, function(result)  {

									var returnValue = {"error_code": 0, "last_response": result};
									
									returnValue["uri"] = result["headers"]["location"];
									
                  // here return status code is 302
                  if (typeof callback == 'function') callback(returnValue);
                });
							}
							else {
							
								if (typeof callback == 'function') callback({"error_code": 1, "last_response": result});
							}
						}
						else {
						
							if (typeof callback == 'function') callback({"error_code": 1, "last_response": result});
						}
					});
				
					return false;
				}
				else {
				
					if (typeof callback == 'function') callback({"error_code": 1, "last_response": result});
				}
			});
		}
		else {
		
			if (typeof callback == 'function') callback({"error_code": 1, "last_response": result});
		}
	});
};

exports.getMP4PlayURI = function(uri, callback) {

  // by uri to run individual function
	
	if (uri.indexOf('85videos.com') != -1) {
	
		get85videos(uri, callback);
	}
	else {
	
	}
};