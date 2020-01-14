/**
 * FileUtils
 *  
 * @author ace
 * 
 * @version 2013/12/30 初始版本。
 * @version 2015/02/27 調整成可提供requirejs、require(CommonJS格式)使用。
 *
 * @see <a href="http://nodejs.org/api/fs.html">File System</a>
 * @see <a href="http://nodejs.org/api/stream.html">Stream</a>
 * @see <a href="http://nodejs.org/api/crypto.html">Crypto</a>
 * @see <a href="http://www.hacksparrow.com/how-to-generate-md5-sha1-sha512-sha256-checksum-hashes-in-node-js.html">How to Generate md5, sha1, sha512, sha256 Checksum Hashes in Node.js</a>
 * @see <a href="http://stackoverflow.com/questions/11293857/fastest-way-to-copy-file-in-node-js">Fastest way to copy file in node.js</a>
 * @see <a href="http://www.sitepoint.com/accessing-the-file-system-in-node-js/">Accessing the File System in Node.js</a>
 * @see <a href="http://stackoverflow.com/questions/11447872/callback-to-handle-completion-of-pipe">callback to handle completion of pipe</a>
 *   
 */
 
(function() {

  /**
   * 計算檔案之MD5 hash code
   *  
   * @author ace
   * 
   * @version 2013/12/31 初始版本。   
   *   
   * @param {String} digestEncoding Digest Encoding Type。
   * @param {String} file File Name(Full Path)。
   * @param {Function} callback Callback Function。
   *  
   * @require 
   *
   */
  function getFileMD5HashCode(digestEncoding, file, callback) {

    var fs = require('fs');
    var crypto = require('crypto');
	
    var shasum = crypto.createHash('md5');
  
    var readStream = fs.ReadStream(file);
		
    readStream.on('data', function(data) { shasum.update(data); });
    readStream.on('end', function() { callback(shasum.digest(digestEncoding)); });
  }
	
  /**
   * 取得檔案資訊
   *  
   * @author ace
   * 
   * @version 2015/03/04 初始版本。   
   *   
   * @param {String} file File Name(Full Path)。
   * @param {Function} callback Callback Function。
   *  
   * @require fs
   *
   */
	function getFileInfo(file, callback) {
	
		var fs = require('fs');
		var path = require('path');
		
		var result = {};
		
		fs.stat(file, function(err, stats) {
		
			if (err) {
			
				callback(err, stats);
			}
			else {

				requirejs(['DateTimeUtils', 'FileUtils'], function(DateTimeUtils, FileUtils) {
				
					result['filename'] = path.basename(file);
					result['modify_datetime'] = DateTimeUtils.doDateTimeToDateTimeString(stats.mtime, true);
					
					getFileMD5HashCode('hex', file, function(hashCode) {result['hash_code'] = hashCode; callback(err, result);});
				});
			}
		});
	}
	
  /**
   * 取得目錄下的檔案資訊
   *  
   * @author ace
   * 
   * @version 2015/03/04 初始版本。   
   *   
   * @param {String} dir dir Name(Full Path)。
   * @param {Function} callback Callback Function。
   *  
   * @require fs
   *
	 * @comment 不處理子目錄下的檔案。
	 *
	 * @todo
	 *
   */
	function getDirListFileInfo(dir, callback) {
	
		var fs = require('fs');
		
		var result = new Array();
		var numIndex = 0;
		
		var fileList;
		
		function operateListFileInfo() {
			
			var filename;
			
			function setFileInfo(err, fileInfo) {

				if (err) {
				
					console.log(err);
					callback(err);
				}
				else {
				
					result.push(fileInfo);
					operateListFileInfo();
				}
			}
			
			if (numIndex < fileList.length) {
				
				filename = fileList[numIndex++];
				getFileInfo(dir + '/' + filename, setFileInfo);
			}
			else {
			
				callback(null, result);
			}
		}
			
		fs.readdir(dir, function(err, files) {
						
			if (err) {
			
				callback(err);
			}
			else {
			
				fileList = files;
				operateListFileInfo();
			}
		});
	}
	
  /**
   * 複製檔案
   *  
   * @author ace
   * 
   * @version 2013/12/31 初始版本。   
   *   
   * @param {String} sourceFile Source File(Full Path)。
   * @param {String} targetFile Target File(Full Path)。
   *  
   * @require 
   *
   */
  function copyFile(sourceFile, targetFile) {
  
    var fs = require('fs');
    
    var readStream = fs.createReadStream(sourceFile);
    var writeStream = fs.createWriteStream(targetFile);
    
    readStream.on('end', function() { console.log('Copy File:' + sourceFile + ' => ' + targetFile); });
    
    writeStream.on('finish', function() {
    
        // 寫入完成後同步Access Time、Modify Time。
        fs.stat(sourceFile, function(err, stats) { 
				
					if (err) {
					
						console.log(err);
					}
					else {
					
						fs.utimesSync(targetFile, stats.atime, stats.mtime); 
					}
				});
      }
    );
    
    readStream.pipe(writeStream);  
  }
	
	if (typeof define === 'function') {

		define([], function() {
		
			return {
	
				getFileMD5HashCode: getFileMD5HashCode,
				getFileInfo: getFileInfo,
				getDirListFileInfo: getDirListFileInfo,
				copyFile: copyFile
			};
		});	
	}
	else if (typeof exports !== 'undefined') {
	
		exports.getFileMD5HashCode = getFileMD5HashCode;
		exports.getFileInfo = getFileInfo;
		exports.getDirListFileInfo = getDirListFileInfo;
		exports.copyFile = copyFile;
	}
})();