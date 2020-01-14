
(function(root) { 

	/**
	 *
	 * 建立Workbook物件
	 *
   * @param
   *  
   * @return Workbook
	 *
	 * @version 2017/02/22 初始版本。
	 *  
	 * @see
	 *
	 * @description
	 *
	 * @author ace
	 *
	 * @comment
	 * 
	 */
	var Workbook = function() {
							
		if (!(this instanceof Workbook)) return new Workbook();
								
		this.SheetNames = [];
		this.Sheets = {};
	}

	/**
	 *
	 * 從陣列資料產生XLSX Sheet
	 *
   * @param {Array} 來源資料
   *  
   * @return XLSX Sheet
	 *
	 * @version 2017/02/22 初始版本。
	 *  
	 * @see
	 *
	 * @description
	 *
	 * @author ace
	 *
	 * @comment
	 * 
	 */
	var getSheetFromArrayOfArrays = function(source) {
							
		var datenum = function(v, date1904) {
							
			var epoch;
								
			if (date1904) v += 1462;
								
				epoch = Date.parse(v);
								
				return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
		};
								
		var ws = {};
		var range = {
								
			s: {
									
				c: 10000000,
				r: 10000000
			},
			e: {
									
				c: 0,
				r: 0
			}
		};
								
		for (var R = 0; R != source.length; ++R) {
								
			for (var C = 0; C != source[R].length; ++C) {
									
				if (range.s.r > R) range.s.r = R;
				if (range.s.c > C) range.s.c = C;
				if (range.e.r < R) range.e.r = R;
				if (range.e.c < C) range.e.c = C;
										
				var cell = {
										
					v: source[R][C]
				};
										
				if (cell.v == null) continue;
										
				var cell_ref = XLSX.utils.encode_cell({
										
					c: C,
					r: R
				});

				if (typeof cell.v === 'number') {
										
					cell.t = 'n';
				}	
				else if (typeof cell.v === 'boolean') {
										
					cell.t = 'b';
				}	
				else if (cell.v instanceof Date) {
										
					cell.t = 'n';
					cell.z = XLSX.SSF._table[14];
					cell.v = datenum(cell.v);
				} 
				else {
						
					cell.t = 's';
				}
					
				ws[cell_ref] = cell;
			}
		}
		
		if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
								
		return ws;
	};

	/**
	 *
	 * 儲存檔案
	 *
   * @param {Date} Workbook物件。
	 * @param {String} 檔案類型。
	 * @param {String} 檔案名稱。
   *  
   * @return
	 *
	 * @version 2017/02/22 初始版本。
	 *  
	 * @see
	 *
	 * @description
	 *
	 * @author ace
	 *
	 * @comment
	 * 
	 */
	var saveFile = function(wb, bookType, filename) {
	
		// String to Array Binary?
		var s2ab = function(source) {
							
			var result;
			var view;
								
			var index;
								
			if (typeof ArrayBuffer !== 'undefined') {
								
				result = new ArrayBuffer(source.length);
				view = new Uint8Array(result);
									
				for (index = 0; index != source.length; ++index) view[index] = source.charCodeAt(index) & 0xFF;
			} 
			else {
								
				result = new Array(source.length);
									
				for (index = 0; index != source.length; ++index) result[index] = source.charCodeAt(index) & 0xFF;
			}
								
			return result;
		};
	
		var wbout;
		var blob;
									
		wbout = XLSX.write(wb, {
							
			bookType: bookType,
			bookSST: false,
			type: "binary"
		});
									
		blob = new Blob([s2ab(wbout)], {type: "application/octet-stream"});
		
		saveAs(blob, filename);
	};
	
	if (typeof define === 'function') {
	
		define(["js-xlsx", "filesaver", "blob"], function() { 
		
			return {
  
				Workbook: Workbook,
				getSheetFromArrayOfArrays: getSheetFromArrayOfArrays,
				saveFile: saveFile
			}
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports = Workbook;
		module.exports = getSheetFromArrayOfArrays;
		module.exports = saveFile;
	}
	else {
	
		if (typeof root.tw.ace33022.RequireJSConfig === 'undefined') throw new Error('tw.ace33022.RequireJSConfig is undefined.');
		
		root.tw.ace33022.utils.XLSXUtils.Workbook = Workbook;
		root.tw.ace33022.utils.XLSXUtils.getSheetFromArrayOfArrays = getSheetFromArrayOfArrays;
		root.tw.ace33022.utils.XLSXUtils.saveFile = saveFile;
	}
})(this);