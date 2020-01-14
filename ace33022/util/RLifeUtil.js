/**
 *
 * @description RLifeUtils
 *
 * @version 2018/09/01 初始版本。
 * @version 2018/10/09 判斷方式變更，改採用路徑編號判斷是否已下載。
 *
 * @author ace
 *
 * @see <a href="http://requirejs.org/">RequireJS</a>
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 *
 * @see <a href="http://underscorejs.org/">Underscore.js</a>
 * @see <a href="https://github.com/jashkenas/underscore">jashkenas/underscore: JavaScript's utility _ belt</a>
 *
 * @todo 20181001 沒有編號的asian目錄會無法進行比對，是否直接列入下載？
 *
 */

(function(root) { 

	/**
	 *
	 * @description 檢查來源字串陣列的影片是否已存在R Life資料中。
	 *
	 * @version 2018/09/01 初始版本。
	 *
	 * @param {Array} arrSource 來源字串陣列
	 * @param {Function} callback 回呼函數
	 *
	 * @return {Object} 
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript JavaScript | MDN}
	 *
	 */
	var check85VideoExistStatus = function(arrSource, callback) {
	
		var result = {
		
			"savedEntries": [],
			"notSavedEntries": [],
			"errorEntries": []
		};
		
		// var url = 'https://script.google.com/macros/s/AKfycbztxaQLHiCGNsn6Oil7nl-o1fOhUHBTWR3DG87KJvJa7m45B2Q/exec';
		var url = 'https://script.google.com/macros/s/AKfycbzPzdKP6aia4zXEeGZJsSlHg4Qe-_E68-2NSnfL/exec';
				
		if (typeof jQuery !== 'undefined') {
		
			jQuery.getJSON(url, function(data, textStatus, jqXHR) {
					
				arrSource.forEach(function(currentValue, index) {
						
					var pathCode;
					var key, index;
					var finded = false;
					
					if (currentValue.trim() !== '') {
					
						// videoCode = currentValue.match(/[a-z]+-[0-9]+/i);
						
						pathCode = currentValue.substr(currentValue.indexOf('videos/') + 'videos/'.length);
						pathCode = pathCode.substr(0, pathCode.indexOf('/'));
						
						// console.log(pathCode.trim());
						
						if (pathCode.trim() !== '') {
						
							for (key in data) {
							
								for (index = 0; index < data[key].length; index++) {
								
									if (data[key][index]["mp4_url"].indexOf(pathCode) !== -1) finded = true;

									if (finded === true) break;
								}
								
								if (finded === true) break;
							}
									
							if (finded === true) {
							
								result["savedEntries"].push(currentValue);
							}
							else {
							
								result["notSavedEntries"].push(currentValue);
							}
						}
						else {
						
							result["errorEntries"].push({
							
								"entry": currentValue,
								"error_message": "can not find path code"
							});
						}
					}
				});
				
				if (typeof callback === 'function') callback(result);
			});
		}
		else {
		
			arrSource.forEach(function(currentValue, index) {
			
				if (currentValue.trim() !== '') {
				
					result["notSavedEntries"].push(currentValue);
				}
			});
		
			if (typeof callback === 'function') callback(result);
		}
	};
	
	/**
	 *
	 * @description 檢查來源字串陣列的影片是否已存在。
	 *
	 * @version 2019/07/22 初始版本。
	 *
	 * @param {Array} arrSource 來源字串陣列
	 * @param {Function} callback 回呼函數
	 *
	 * @return {Object} 
	 *
	 * @author ace
	 *
	 */
	var check85TubeExistStatus = function(arrSource, callback) {
	
		var result = {
		
			"savedEntries": [],
			"notSavedEntries": [],
			"errorEntries": []
		};
		
		var data = {};
		
		data["downloaded"] = [
		
			{ "video_name": "姦山本玲奈本村紗枝", "url": "https://www.85tube.com/videos/647/jian-shan-ben-ling-nai-ben-cun-sha-zhi/" },
			{ "video_name": "[MIAD-812]ほろ酔いトロトロ肛門お姉さん 白咲碧", "url": "https://www.85tube.com/videos/1142/MIAD-812-zui-gang-men-zi-bai-xiao-bi/" },
			{ "video_name": "[DANDY-423] 知らない女だけが損をする！白咲碧", "url": "https://85tube.com/videos/1232/DANDY-423-zhi-nv-sun-bai-xiao-bi/" },
			{ "video_name": "FC2-388342 18嵗大奶學生妹飯店被無套抽插", "url": "https://www.85tube.com/videos/721/FC2-388342-18-sui-da-nai-xue-sheng-mei-fan-dian-bei-wu-tao-chou-cha/" },
			{ "video_name": "AV091", "url": "https://85tube.com/videos/4375/AV091/" },
			{ "video_name": "FC2PPV-1071430", "url": "https://85tube.com/videos/2559/FC2PPV-1071430/" },
			{ "video_name": "大奶美女被兩男輪奸", "url": "https://85tube.com/videos/1172/da-nai-mei-nv-bei-liang-nan-lun-jian/" },
			{ "video_name": "漂亮韓模在酒店被無套中出", "url": "https://85tube.com/videos/832/piao-liang-han-mo-zai-jiu-dian-bei-wu-tao-zhong-chu/" },
			{ "video_name": "20歲大學生旅館賺外快", "url": "https://www.85tube.com/videos/929/20-sui-da-xue-sheng-lv-guan-zhuan-wai-kuai/" },
			{ "video_name": "MGT-031 街上帶美女回家做愛", "url": "https://85tube.com/videos/1076/MGT-031-jie-shang-dai-mei-nv-hui-jia-zuo-ai/" },
			{ "video_name": "FC2-771536", "url": "https://85tube.com/videos/418/FC2-771536/" },
			{ "video_name": "新來的女同事很豪放在厠所幫我口爆", "url": "https://85tube.com/videos/827/xin-lai-de-nv-tong-shi-hen-hao-fang-zai-ce-suo-bang-wo-kou-bao/" },
			{ "video_name": "短髮辣妹口爆", "url": "https://85tube.com/videos/1149/duan-fa-la-mei-kou-bao/" },
			{ "video_name": "手コキ", "url": "https://85tube.com/videos/3970/shou/" },
			{ "video_name": "車模酒店做愛", "url": "https://85tube.com/videos/1544/che-mo-jiu-dian-zuo-ai/" },
			{ "video_name": "美少女雅庫儸刑房", "url": "https://85tube.com/videos/1810/mei-shao-nv-ya-ku-luo-xing-fang/" },
			{ "video_name": "馬來西亞援交妹妹", "url": "https://www.85tube.com/videos/1813/ma-lai-xi-ya-yuan-jiao-mei-mei/" },
			{ "video_name": "大三學生妹找肉棒幹自己", "url": "https://85tube.com/videos/946/da-san-xue-sheng-mei-zhao-rou-bang-gan-zi-ji/" },
			{ "video_name": "琴曲伏達性愛子", "url": "https://85tube.com/videos/5019/qin-qu-fu-da-xing-ai-zi/" },
			{ "video_name": "逢沢はるか 好色妻降臨", "url": "https://85tube.com/videos/678/feng-ze-hao-se-qi-jiang-lin/" },
			{ "video_name": "漂亮日本援交學生妹模特酒店賺外快", "url": "https://85tube.com/videos/6107/piao-liang-ri-ben-yuan-jiao-xue-sheng-mei-mo-te-jiu-dian-zhuan-wai-kuai/" },
			{ "video_name": "可愛日本學生妹酒店賣淫", "url": "https://85tube.com/videos/6540/ke-ai-ri-ben-xue-sheng-mei-jiu-dian-mai-yin/" },
			{ "video_name": "黑絲校服女子大生旅館自拍", "url": "https://85tube.com/videos/462/hei-si-xiao-fu-nv-zi-da-sheng-lv-guan-zi-pai/" },
			{ "video_name": "FC2-795111 18嵗無經驗的補習班同學", "url": "https://85tube.com/videos/682/FC2-795111-18-sui-wu-jing-yan-de-bu-xi-ban-tong-xue/" },
			{ "video_name": "大奶日女被内射", "url": "https://85tube.com/videos/1967/da-nai-ri-nv-bei-nei-she/" },
			{ "video_name": "白嫩無毛美女騎坐無套中出", "url": "https://85tube.com/videos/548/bai-nen-wu-mao-mei-nv-qi-zuo-wu-tao-zhong-chu/" },
			{ "video_name": "內射女高中生", "url": "https://85tube.com/videos/6276/nei-she-nv-gao-zhong-sheng/" },
			{ "video_name": "FC2PPV-1104852", "url": "https://85tube.com/videos/6644/FC2PPV-1104852/" },
			{ "video_name": "性感日女浴室性交", "url": "https://85tube.com/videos/953/xing-gan-ri-nv-yu-shi-xing-jiao/" },
			{ "video_name": "日本蘿莉與叔叔啪啪啪", "url": "https://85tube.com/videos/5688/ri-ben-luo-li-yu-shu-shu-pa-pa-pa/" },
			{ "video_name": "這是插到胃裡了吧", "url": "https://85tube.com/videos/3548/zhe-shi-cha-dao-wei-li-le-ba/" },
			{ "video_name": "偷拍可愛妹妹在公共厠所尿尿", "url": "https://www.85tube.com/videos/1524/tou-pai-ke-ai-mei-mei-zai-gong-gong-ce-suo-niao-niao/" },
			{ "video_name": "新加坡模特自慰", "url": "https://www.85tube.com/videos/122/xin-jia-po-mo-te-zi-wei/" },
			{ "video_name": "白嫩妹子無套性交", "url": "https://www.85tube.com/videos/1357/bai-nen-mei-zi-wu-tao-xing-jiao/" },
			{ "video_name": "第一視角日本美女的口活", "url": "https://85tube.com/videos/7073/di-yi-shi-jiao-ri-ben-mei-nv-de-kou-huo/" },
			{ "video_name": "1000Giri 日本大奶學生妹性交", "url": "https://85tube.com/videos/686/1000Giri-ri-ben-da-nai-xue-sheng-mei-xing-jiao/" },
			{ "video_name": "18嵗清純美女", "url": "https://85tube.com/videos/403/18-sui-qing-chun-mei-nv/" },
			{ "video_name": "口罩美女模特", "url": "https://85tube.com/videos/1892/kou-zhao-mei-nv-mo-te/" },
			{ "video_name": "弄得她好疼", "url": "https://85tube.com/videos/982/nong-de-ta-hao-teng/" },
			{ "video_name": "無毛中出...", "url": "https://85tube.com/videos/2794/wu-mao-zhong-chu/" },
			{ "video_name": "土下座され、断りきれずに1回だけ中出してしまう", "url": "https://85tube.com/videos/484/tu-xia-zuo-duan-1-hui-zhong-chu/" },
			{ "video_name": "可愛日本妹妹被無套内射", "url": "https://85tube.com/videos/1024/ke-ai-ri-ben-mei-mei-bei-wu-tao-nei-she/" },
			{ "video_name": "第一視角美女口交", "url": "https://85tube.com/videos/7074/di-yi-shi-jiao-mei-nv-kou-jiao/" },
			{ "video_name": "FC2PPV-1094237", "url": "https://85tube.com/videos/5080/FC2PPV-1094237/" },
			{ "video_name": "FC2PPV-1095942", "url": "https://85tube.com/videos/5081/FC2PPV-1095942/" },
			{ "video_name": "FC2 可愛口罩妹子穿著校服自慰", "url": "https://85tube.com/videos/442/FC2-ke-ai-kou-zhao-mei-zi-chuan-zhu-xiao-fu-zi-wei/" },
			{ "video_name": "短髮無毛日女", "url": "https://www.85tube.com/videos/927/duan-fa-wu-mao-ri-nv/" },
			{ "video_name": "新加坡情侶酒店做愛自拍", "url": "https://www.85tube.com/videos/15/xin-jia-po-qing-lv-jiu-dian-zuo-ai-zi-pai/" },
			{ "video_name": "大馬妹子被撿屍輪奸", "url": "https://www.85tube.com/videos/62/da-ma-mei-zi-bei-jian-shi-lun-jian/" },
			{ "video_name": "$300的越南援交", "url": "https://www.85tube.com/videos/144/300-de-yue-nan-yuan-jiao/" },
			{ "video_name": "童顔美女在醫院病房被醫生侵犯", "url": "https://www.85tube.com/videos/549/tong-yan-mei-nv-zai-yi-yuan-bing-fang-bei-yi-sheng-qin-fan/" },
			{ "video_name": "夜店妹子被迷奸", "url": "https://www.85tube.com/videos/1606/ye-dian-mei-zi-bei-mi-jian/" },
			{ "video_name": "妹妹睡覺偷偷的給她吃肉棒", "url": "https://www.85tube.com/videos/2274/mei-mei-shui-jue-tou-tou-de-gei-ta-chi-rou-bang/" },
			{ "video_name": "美女在夜晚的夢中被硬上", "url": "https://www.85tube.com/videos/2489/mei-nv-zai-ye-wan-de-meng-zhong-bei-ying-shang/" },
			{ "video_name": "嫩不嫩？", "url": "https://www.85tube.com/videos/3026/nen-bu-nen/" },
			{ "video_name": "超正美腿OL被無套内射", "url": "https://www.85tube.com/videos/1166/chao-zheng-mei-tui-OL-bei-wu-tao-nei-she/" },
			{ "video_name": "大奶騷貨被多男猛幹", "url": "https://www.85tube.com/videos/283/da-nai-sao-huo-bei-duo-nan-meng-gan/" },
			{ "video_name": "日本大學校花被學長強迫性交", "url": "https://www.85tube.com/videos/939/ri-ben-da-xue-xiao-hua-bei-xue-zhang-qiang-po-xing-jiao/" },
			{ "video_name": "可愛美乳酒店幹炮", "url": "https://www.85tube.com/videos/1061/ke-ai-mei-ru-jiu-dian-gan-pao/" },
			{ "video_name": "放工回家和美麗的女友做愛", "url": "https://www.85tube.com/videos/2244/fang-gong-hui-jia-he-mei-li-de-nv-you-zuo-ai/" },
			{ "video_name": "宅男和女友做愛自拍", "url": "https://www.85tube.com/videos/463/zhai-nan-he-nv-you-zuo-ai-zi-pai/" },
			{ "video_name": "可愛短髮妹妹酒店做愛", "url": "https://www.85tube.com/videos/1176/ke-ai-duan-fa-mei-mei-jiu-dian-zuo-ai/" },
			{ "video_name": "内射超有肉感的學生妹子", "url": "https://www.85tube.com/videos/1722/nei-she-chao-you-rou-gan-de-xue-sheng-mei-zi/" },
			{ "video_name": "日本模特在酒店與導演性交", "url": "https://www.85tube.com/videos/2030/ri-ben-mo-te-zai-jiu-dian-yu-dao-yan-xing-jiao/" },
			{ "video_name": "性感黑絲騎士中出", "url": "https://www.85tube.com/videos/464/xing-gan-hei-si-qi-shi-zhong-chu/" },
			{ "video_name": "美少女飯店性交", "url": "https://www.85tube.com/videos/1011/mei-shao-nv-fan-dian-xing-jiao/" },
			{ "video_name": "妹妹被拉進廁所強奸", "url": "https://www.85tube.com/videos/2660/mei-mei-bei-la-jin-ce-suo-qiang-jian/" },
			{ "video_name": "接吻練習變性交", "url": "https://www.85tube.com/videos/944/jie-wen-lian-xi-bian-xing-jiao/" },
			{ "video_name": "少女天團蒼井空性交攝影", "url": "https://www.85tube.com/videos/476/shao-nv-tian-tuan-cang-jing-kong-xing-jiao-she-ying/" },
			{ "video_name": "大乳房日本女朋友泳裝", "url": "https://www.85tube.com/videos/4850/da-ru-fang-ri-ben-nv-peng-you-yong-zhuang/" },
			{ "video_name": "絕對美少女酒店性交", "url": "https://www.85tube.com/videos/176/jue-dui-mei-shao-nv-jiu-dian-xing-jiao/" },
			{ "video_name": "中逝き女に中出し", "url": "https://www.85tube.com/videos/487/zhong-shi-nv-zhong-chu/" },
			{ "video_name": "日本學妹被逼幫學長口交", "url": "https://www.85tube.com/videos/2159/ri-ben-xue-mei-bei-bi-bang-xue-zhang-kou-jiao/" },
			{ "video_name": "可愛日本妹妹飯店性交", "url": "https://85tube.com/videos/1484/ke-ai-ri-ben-mei-mei-fan-dian-xing-jiao/" },
			{ "video_name": "美女人妻酒店偷情", "url": "https://85tube.com/videos/494/mei-nv-ren-qi-jiu-dian-tou-qing/" },
			{ "video_name": "高顔值女傭性交無碼", "url": "https://www.85tube.com/videos/1424/gao-yan-zhi-nv-yong-xing-jiao-wu-ma/" },
			{ "video_name": "大學生情侶綫上直播", "url": "https://www.85tube.com/videos/1426/da-xue-sheng-qing-lv-xian-shang-zhi-bo/" },
			{ "video_name": "三姐妹", "url": "https://www.85tube.com/videos/1700/san-jie-mei/" },
			{ "video_name": "ﾊﾟｲﾊﾟﾝｱｲﾄﾞﾙﾉ極限ﾌｪﾗ抜ｷ", "url": "https://www.85tube.com/videos/991/ji-xian-ba/" },
			{ "video_name": "正妹日女躺在酒店的床上被後入", "url": "https://www.85tube.com/videos/143/zheng-mei-ri-nv-tang-zai-jiu-dian-de-chuang-shang-bei-hou-ru/" },
			{ "video_name": "美麗日本模特無碼", "url": "https://85tube.com/videos/2211/mei-li-ri-ben-mo-te-wu-ma/" },
			{ "video_name": "素人彼女、ブリブリ音をたて大量精子かけられる1", "url": "https://85tube.com/videos/962/su-ren-bi-nv-yin-da-liang-jing-zi-1/" },
			{ "video_name": "19歲少女被大肉棒調教", "url": "https://www.85tube.com/videos/942/19-sui-shao-nv-bei-da-rou-bang-diao-jiao/" },
			{ "video_name": "妹妹睡覺偷偷的給她吃肉棒", "url": "https://85tube.com/videos/2274/mei-mei-shui-jue-tou-tou-de-gei-ta-chi-rou-bang/" },
			{ "video_name": "Cosplay尼爾和攝影肛交", "url": "https://www.85tube.com/videos/2955/cosplay-ni-er-he-she-ying-gang-jiao/" },
			{ "video_name": "老外的貼心女傭", "url": "https://www.85tube.com/videos/114/lao-wai-de-tie-xin-nv-yong/" },
			{ "video_name": "韓國美女被男友肛交内射", "url": "https://www.85tube.com/videos/1846/han-guo-mei-nv-bei-nan-you-gang-jiao-nei-she/" },
			{ "video_name": "性感日本美女的小穴寫真", "url": "https://www.85tube.com/videos/450/xing-gan-ri-ben-mei-nv-de-xiao-xue-xie-zhen/" },
			{ "video_name": "土豪包養的昂貴長腿美女", "url": "https://www.85tube.com/videos/356/tu-hao-bao-yang-de-ang-gui-zhang-tui-mei-nv/" },
			{ "video_name": "軟派美女被男友無套中出", "url": "https://www.85tube.com/videos/489/ruan-pai-mei-nv-bei-nan-you-wu-tao-zhong-chu/" },
			{ "video_name": "FC2超級可愛日本蘿莉妹子無套性愛", "url": "https://www.85tube.com/videos/358/FC2-chao-ji-ke-ai-ri-ben-luo-li-mei-zi-wu-tao-xing-ai/" },
			{ "video_name": "FC2-508339 大奶女子校生", "url": "https://85tube.com/videos/1386/FC2-508339-da-nai-nv-zi-xiao-sheng/" },
			{ "video_name": "風俗對沒有性經驗的新娘子實戰演練", "url": "https://85tube.com/videos/993/feng-su-dui-mei-you-xing-jing-yan-de-xin-nian-zi-shi-zhan-yan-lian/" },
			{ "video_name": "FC2PPV-1073365 18歳ふみ・現役女●高生に人生初のハメ撮りさせた・ロリ・学生", "url": "https://85tube.com/videos/2561/FC2PPV-1073365-18-sui-xian-yi-nv-gao-sheng-ren-sheng-chu-cuo-xue-sheng/" },
			{ "video_name": "超嫩小美女各種姿勢被抽插", "url": "https://85tube.com/videos/604/chao-nen-xiao-mei-nv-ge-zhong-zi-shi-bei-chou-cha/" },
			{ "video_name": "JavHD 可愛美少女被兩男輪流抽插", "url": "https://85tube.com/videos/683/JavHD-ke-ai-mei-shao-nv-bei-liang-nan-lun-liu-chou-cha/" },
			{ "video_name": "FC2PPV-1100643", "url": "https://85tube.com/videos/6019/FC2PPV-1100643/" },
			{ "video_name": "Cos 島風 豪可哎<3333", "url": "https://85tube.com/videos/6676/cos-dao-feng-hao-ke-ai-3333/" },
			{ "video_name": "18歳1 制服編", "url": "https://85tube.com/videos/1009/18-sui-1-zhi-fu-bian/" },
			{ "video_name": "旅店調教學生妹子", "url": "https://www.85tube.com/videos/922/lv-dian-diao-jiao-xue-sheng-mei-zi/" },
			{ "video_name": "野模黑絲美腿的誘惑", "url": "https://www.85tube.com/videos/1381/ye-mo-hei-si-mei-tui-de-you-huo/" },
			{ "video_name": "東京熱PP063芽衣", "url": "https://85tube.com/videos/5186/dong-jing-re-PP063-ya-yi/" },
			{ "video_name": "內射日本小美女", "url": "https://85tube.com/videos/3590/nei-she-ri-ben-xiao-mei-nv/" },
			{ "video_name": "頂級i美乳美少女", "url": "https://85tube.com/videos/496/ding-ji-i-mei-ru-mei-shao-nv/" },
			{ "video_name": "黑色性感内衣美女口交", "url": "https://85tube.com/videos/119/hei-se-xing-gan-nei-yi-mei-nv-kou-jiao/" },
			{ "video_name": "超級正的美女騎馬做愛", "url": "https://85tube.com/videos/534/chao-ji-zheng-de-mei-nv-qi-ma-zuo-ai/" },
			{ "video_name": "21嵗G罩巨乳學生", "url": "https://85tube.com/videos/2293/21-sui-G-zhao-ju-ru-xue-sheng/" },
			{ "video_name": "發現女友Line裡有她幫男性友人口交的偷情影片！吸屌取精後還吞下！一臉滿足！", "url": "https://85tube.com/videos/4058/fa-xian-nv-you-Line-li-you-ta-bang-nan-xing-you-ren-kou-jiao-de-tou-qing-ying-pian-xi-diao-qu-jing-hou-huan-tun-xia-yi-lian-man-zu/" },
			{ "video_name": "AV女優被兩個猛男狂幹", "url": "https://85tube.com/videos/2800/AV-nv-you-bei-liang-ge-meng-nan-kuang-gan/" },
			{ "video_name": "被私養的女大生", "url": "https://85tube.com/videos/943/bei-si-yang-de-nv-da-sheng/" },
			{ "video_name": "FC2-890350 童顔巨乳女子大生被大量中出", "url": "https://85tube.com/videos/488/FC2-890350-tong-yan-ju-ru-nv-zi-da-sheng-bei-da-liang-zhong-chu/" },
			{ "video_name": "FC2-926114 絕對的美少女", "url": "https://85tube.com/videos/178/FC2-926114-jue-dui-de-mei-shao-nv/" },
			{ "video_name": "FC2PPV-1073495 【ミス湘南】えりかちゃんEカップ美乳とハメ撮り公開SEX", "url": "https://85tube.com/videos/2564/FC2PPV-1073495-xiang-nan-E-mei-ru-cuo-gong-kai-SEX/" },
			{ "video_name": "騷人妻街上約男人到家裏做愛", "url": "https://85tube.com/videos/282/sao-ren-qi-jie-shang-yue-nan-ren-dao-jia-li-zuo-ai/" },
			{ "video_name": "[RBD-803] 週末奴隷の女 希島あいり", "url": "https://www.85tube.com/videos/1236/RBD-803-zhou-mo-nu-li-nv-xi-dao/" },
			{ "video_name": "中出素人騷妻", "url": "https://85tube.com/videos/9061/zhong-chu-su-ren-sao-qi/" },
			{ "video_name": "廁所内被大叔們中出【高仿AV】", "url": "https://85tube.com/videos/10957/ce-suo-nei-bei-da-shu-men-zhong-chu-gao-fang-AV/" },
			{ "video_name": "戶外約騷女回家做愛", "url": "https://85tube.com/videos/7064/hu-wai-yue-sao-nv-hui-jia-zuo-ai/" },
			{ "video_name": "砂拉越妹妹口爆", "url": "https://85tube.com/videos/6835/sha-la-yue-mei-mei-kou-bao/" },
			{ "video_name": "短髮妹子在酒店被内射", "url": "https://85tube.com/videos/5510/duan-fa-mei-zi-zai-jiu-dian-bei-nei-she/" },
			{ "video_name": "AV女優潮吹", "url": "https://85tube.com/videos/7080/AV-nv-you-chao-chui/" },
			{ "video_name": "FC2PPV-1094129", "url": "https://85tube.com/videos/5187/FC2PPV-1094129/" },
			{ "video_name": "ガチ１８歳ＳＳＳ級究極の美女をついに", "url": "https://85tube.com/videos/9085/sui-ji-jiu-ji-mei-nv/" },
			{ "video_name": "SS級美乳", "url": "https://85tube.com/videos/9060/SS-ji-mei-ru/" },
			{ "video_name": "Caribbeancom 051210-3722", "url": "https://85tube.com/videos/749/Caribbeancom-051210-3722/" },
			{ "video_name": "習呆呆口爆", "url": "https://85tube.com/videos/11302/xi-dai-dai-kou-bao/" },
			{ "video_name": "金發蘿莉萌妹子啪啪直播秀 坐上來就是一頓猛幹", "url": "https://85tube.com/videos/13162/jin-fa-luo-li-meng-mei-zi-pa-pa-zhi-bo-xiu-zuo-shang-lai-jiu-shi-yi-dun-meng-gan/" },
			{ "video_name": "一本道 011619_798 優秀和敏感性的女朋友", "url": "https://85tube.com/videos/674/yi-ben-dao-011619-798-you-xiu-he-min-gan-xing-de-nv-peng-you/" },
			{ "video_name": "超正長腿美女顏射吞精", "url": "https://85tube.com/videos/532/chao-zheng-zhang-tui-mei-nv-yan-she-tun-jing/" },
			{ "video_name": "Cos日本高中生蘿莉", "url": "https://85tube.com/videos/4349/cos-ri-ben-gao-zhong-sheng-luo-li/" },
			{ "video_name": "東北口音主播戶外直播勾引司機被司機往死裡操無套内射 第二集", "url": "https://85tube.com/videos/10967/dong-bei-kou-yin-zhu-bo-hu-wai-zhi-bo-gou-yin-si-ji-bei-si-ji-wang-si-li-cao-wu-tao-nei-she-di-er-ji/" },
			{ "video_name": "學生妹下課後", "url": "https://85tube.com/videos/1716/xue-sheng-mei-xia-ke-hou/" },
			{ "video_name": "FC2PPV-1073496 【個撮㉘】県立K2GALゆま☆混浴温泉旅行(2日目)", "url": "https://85tube.com/videos/2565/FC2PPV-1073496-ge-cuo-xian-li-K2GAL-hun-yu-wen-quan-lv-xing-2-ri-mu/" },
			{ "video_name": "性感黑絲騷女爬上老闆的大腿", "url": "https://85tube.com/videos/2151/xing-gan-hei-si-sao-nv-pa-shang-lao-ban-de-da-tui/" },
			{ "video_name": "FC2-890578 最後の調〇ドキュメンタリー　オムツ＋拘束テープで生挿入中出し", "url": "https://85tube.com/videos/651/FC2-890578-zui-hou-diao-ling-ju-shu-sheng-cha-ru-zhong-chu/" },
			{ "video_name": "大奶妹子被後父無套内射", "url": "https://85tube.com/videos/546/da-nai-mei-zi-bei-hou-fu-wu-tao-nei-she/" },
			{ "video_name": "FC2-899514 水中泳裝的性愛", "url": "https://85tube.com/videos/456/FC2-899514-shui-zhong-yong-zhuang-de-xing-ai/" },
			{ "video_name": "和情婦上酒店約炮流出", "url": "https://85tube.com/videos/7704/he-qing-fu-shang-jiu-dian-yue-pao-liu-chu/" },
			{ "video_name": "中學 011", "url": "https://85tube.com/videos/14802/zhong-xue-011/" },
			{ "video_name": "入珠肉棒大力肏著穴穴", "url": "https://85tube.com/videos/15332/ru-zhu-rou-bang-da-li-cao-zhu-xue-xue/" },
			{ "video_name": "FC2-388342 美少女被無套中出", "url": "https://85tube.com/videos/412/FC2-388342-mei-shao-nv-bei-wu-tao-zhong-chu/" },
			{ "video_name": "日本大學情侶在家做愛自拍", "url": "https://85tube.com/videos/1133/ri-ben-da-xue-qing-lv-zai-jia-zuo-ai-zi-pai/" },
			{ "video_name": "可愛的表妹來家裡", "url": "https://85tube.com/videos/23192/ke-ai-de-biao-mei-lai-jia-li/" },
			{ "video_name": "FC2-364608", "url": "https://85tube.com/videos/1379/FC2-364608/" },
			{ "video_name": "日本有馬成人性交影片", "url": "https://85tube.com/videos/1667/ri-ben-you-ma-cheng-ren-xing-jiao-ying-pian/" },
			{ "video_name": "美麗日女享受性愛", "url": "https://85tube.com/videos/129/mei-li-ri-nv-xiang-shou-xing-ai/" }
		];
		
		data["breaked"] = [
		
			{ "video_name": "美女正妹與我在酒店開房", "url": "https://85tube.com/videos/1995/mei-nv-zheng-mei-yu-wo-zai-jiu-dian-kai-fang/" },
			{ "video_name": "性感留學生小姐姐含J", "url": "https://85tube.com/videos/7842/xing-gan-liu-xue-sheng-xiao-jie-jie-han-J/" },
			{ "video_name": "隣の部屋のドチャシコ巨乳美女と騎乗位SEX", "url": "https://85tube.com/videos/1091/lin-bu-wu-ju-ru-mei-nv-qi-cheng-wei-SEX/" },
			{ "video_name": "Av高潮集錦", "url": "https://85tube.com/videos/4343/av-gao-chao-ji-jin/" },
			{ "video_name": "小女生愛愛", "url": "https://85tube.com/videos/4725/xiao-nv-sheng-ai-ai/" },
			{ "video_name": "短髮騷婦和同事在家偷情遭外流", "url": "https://www.85tube.com/videos/2431/duan-fa-sao-fu-he-tong-shi-zai-jia-tou-qing-zao-wai-liu/" },
			{ "video_name": "可愛新加坡妹妹很開心的被抽插", "url": "https://www.85tube.com/videos/58/ke-ai-xin-jia-po-mei-mei-hen-kai-xin-de-bei-chou-cha/" },
			{ "video_name": "可愛日本學生妹口交", "url": "https://www.85tube.com/videos/127/ke-ai-ri-ben-xue-sheng-mei-kou-jiao/" },
			{ "video_name": "高中情侶在家做愛自拍", "url": "https://www.85tube.com/videos/210/gao-zhong-qing-lv-zai-jia-zuo-ai-zi-pai/" },
			{ "video_name": "清純妹子睡覺被迷奸", "url": "https://www.85tube.com/videos/850/qing-chun-mei-zi-shui-jue-bei-mi-jian/" },
			{ "video_name": "大學美女被撿屍偷拍", "url": "https://www.85tube.com/videos/887/da-xue-mei-nv-bei-jian-shi-tou-pai/" },
			{ "video_name": "清純美女被哥哥性侵", "url": "https://www.85tube.com/videos/1055/qing-chun-mei-nv-bei-ge-ge-xing-qin/" },
			{ "video_name": "美女不省人事被撿屍", "url": "https://www.85tube.com/videos/1890/mei-nv-bu-sheng-ren-shi-bei-jian-shi/" },
			{ "video_name": "就是愛給你看凸點", "url": "https://www.85tube.com/videos/2602/jiu-shi-ai-gei-ni-kan-tu-dian/" },
			{ "video_name": "和前女友做愛", "url": "https://www.85tube.com/videos/786/he-qian-nv-you-zuo-ai/" },
			{ "video_name": "女友初次體驗肛交", "url": "https://www.85tube.com/videos/2253/nv-you-chu-ci-ti-yan-gang-jiao/" },
			{ "video_name": "超正女模和男友在家做愛自拍", "url": "https://www.85tube.com/videos/1126/chao-zheng-nv-mo-he-nan-you-zai-jia-zuo-ai-zi-pai/" },
			{ "video_name": "清純日女學生有碼影片", "url": "https://www.85tube.com/videos/636/qing-chun-ri-nv-xue-sheng-you-ma-ying-pian/" },
			{ "video_name": "日本妹子的粉紅小穴", "url": "https://www.85tube.com/videos/1749/ri-ben-mei-zi-de-fen-hong-xiao-xue/" },
			{ "video_name": "18嵗年輕學生妹子", "url": "https://www.85tube.com/videos/1751/18-sui-nian-qing-xue-sheng-mei-zi/" },
			{ "video_name": "短髮日本妹妹在酒店被多男玩弄", "url": "https://www.85tube.com/videos/2265/duan-fa-ri-ben-mei-mei-zai-jiu-dian-bei-duo-nan-wan-nong/" },
			{ "video_name": "飯店調教母狗", "url": "https://www.85tube.com/videos/431/fan-dian-diao-jiao-mu-gou/" },
			{ "video_name": "美女被男友帶回家打炮", "url": "https://www.85tube.com/videos/94/mei-nv-bei-nan-you-dai-hui-jia-da-pao/" },
			{ "video_name": "超可愛日本妹子酒店拍攝成人影片", "url": "https://www.85tube.com/videos/335/chao-ke-ai-ri-ben-mei-zi-jiu-dian-pai-she-cheng-ren-ying-pian/" },
			{ "video_name": "學生妹放學就要愛愛", "url": "https://www.85tube.com/videos/2153/xue-sheng-mei-fang-xue-jiu-yao-ai-ai/" },
			{ "video_name": "酒店嫖妓自拍攝影", "url": "https://www.85tube.com/videos/324/jiu-dian-piao-ji-zi-pai-she-ying/" },
			{ "video_name": "護士小姐被恐怖分子捆綁", "url": "https://www.85tube.com/videos/1409/hu-shi-xiao-jie-bei-kong-bu-fen-zi-kun-bang/" },
			{ "video_name": "新加坡旅行認識的金髮騷女", "url": "https://www.85tube.com/videos/2243/xin-jia-po-lv-xing-ren-shi-de-jin-fa-sao-nv/" },
			{ "video_name": "日男拍攝短髮女友口交", "url": "https://www.85tube.com/videos/466/ri-nan-pai-she-duan-fa-nv-you-kou-jiao/" },
			{ "video_name": "女子高生車内性交", "url": "https://www.85tube.com/videos/473/nv-zi-gao-sheng-che-nei-xing-jiao/" },
			{ "video_name": "偷拍黑絲店員被老闆後入", "url": "https://www.85tube.com/videos/4075/tou-pai-hei-si-dian-yuan-bei-lao-ban-hou-ru/" },
			{ "video_name": "ぽちゃ巨乳1", "url": "https://85tube.com/videos/1449/ju-ru-1/" },
			{ "video_name": "無毛學生妹被兩男輪插", "url": "https://85tube.com/videos/5493/wu-mao-xue-sheng-mei-bei-liang-nan-lun-cha/" },
			{ "video_name": "可愛日女被男友猛力抽插後中出", "url": "https://85tube.com/videos/950/ke-ai-ri-nv-bei-nan-you-meng-li-chou-cha-hou-zhong-chu/" },
			{ "video_name": "蘿莉2", "url": "https://85tube.com/videos/5089/luo-li-2/" },
			{ "video_name": "日本素人03", "url": "https://85tube.com/videos/6887/ri-ben-su-ren-03/" },
			{ "video_name": "日本素人04", "url": "https://85tube.com/videos/6888/ri-ben-su-ren-04/" },
			{ "video_name": "美麗日本妹性愛影片外流", "url": "https://85tube.com/videos/59/mei-li-ri-ben-mei-xing-ai-ying-pian-wai-liu/" },
			{ "video_name": "Hotel", "url": "https://85tube.com/videos/5024/hotel/" },
			{ "video_name": "素人妻と童貞くん1", "url": "https://85tube.com/videos/1709/su-ren-qi-tong-zhen-1/" },
			{ "video_name": "みさき20歳", "url": "https://85tube.com/videos/1407/20-sui/" },
			{ "video_name": "ハメ連初！！スタイル抜群1", "url": "https://85tube.com/videos/1368/lian-chu-ba-qun-1/" },
			{ "video_name": "日本學生情侶個人攝影", "url": "https://85tube.com/videos/936/ri-ben-xue-sheng-qing-lv-ge-ren-she-ying/" },
			{ "video_name": "素人口交個人攝影", "url": "https://85tube.com/videos/468/su-ren-kou-jiao-ge-ren-she-ying/" },
			{ "video_name": "FC2PPV-1090124", "url": "https://85tube.com/videos/5077/FC2PPV-1090124/" },
			{ "video_name": "日本大叔在韓國叫鷄偷拍", "url": "https://85tube.com/videos/8299/ri-ben-da-shu-zai-han-guo-jiao-ji-tou-pai/" },
			{ "video_name": "騷女酒店援交被變態男子偷拍", "url": "https://85tube.com/videos/1182/sao-nv-jiu-dian-yuan-jiao-bei-bian-tai-nan-zi-tou-pai/" },
			{ "video_name": "韓國美女酒店賣淫被偷拍", "url": "https://85tube.com/videos/875/han-guo-mei-nv-jiu-dian-mai-yin-bei-tou-pai/" },
			{ "video_name": "和日本小姐姐做愛就是舒服，騷得不要不要的！（怪獸星球）", "url": "https://85tube.com/videos/5519/he-ri-ben-xiao-jie-jie-zuo-ai-jiu-shi-shu-fu-sao-de-bu-yao-bu-yao-de-guai-shou-xing-qiu/" },
			{ "video_name": "日本醫院護士幫病患解決需要", "url": "https://85tube.com/videos/7048/ri-ben-yi-yuan-hu-shi-bang-bing-huan-jie-jue-xu-yao/" },
			{ "video_name": "馬來西亞美女騎馬途中高潮", "url": "https://85tube.com/videos/53/ma-lai-xi-ya-mei-nv-qi-ma-tu-zhong-gao-chao/" },
			{ "video_name": "18嵗高中妹妹在酒店被男友推", "url": "https://85tube.com/videos/2053/18-sui-gao-zhong-mei-mei-zai-jiu-dian-bei-nan-you-tui/" },
			{ "video_name": "萌妹子的櫻桃小嘴幫你口交", "url": "https://85tube.com/videos/9126/meng-mei-zi-de-ying-tao-xiao-zui-bang-ni-kou-jiao/" },
			{ "video_name": "可愛女友與我啪啪自拍", "url": "https://85tube.com/videos/1752/ke-ai-nv-you-yu-wo-pa-pa-zi-pai/" },
			{ "video_name": "女友見我還沒來就先自慰", "url": "https://85tube.com/videos/6118/nv-you-jian-wo-huan-mei-lai-jiu-xian-zi-wei/" },
			{ "video_name": "醉了做愛", "url": "https://85tube.com/videos/498/zui-le-zuo-ai/" },
			{ "video_name": "在沖涼房自慰", "url": "https://85tube.com/videos/5990/zai-chong-liang-fang-zi-wei/" },
			{ "video_name": "123456", "url": "https://85tube.com/videos/7977/123456/" },
			{ "video_name": "樓梯", "url": "https://85tube.com/videos/6828/lou-ti/" },
			{ "video_name": "FC2PPV-1100589", "url": "https://85tube.com/videos/6018/FC2PPV-1100589/" },
			{ "video_name": "FC2PPV-1072787 超絶可愛い☆そんな子にはエッチな事をしちゃいます", "url": "https://85tube.com/videos/2563/FC2PPV-1072787-chao-jue-ke-ai-zi-shi/" },
			{ "video_name": "帶嫩模回酒店幹炮", "url": "https://85tube.com/videos/7060/dai-nen-mo-hui-jiu-dian-gan-pao/" },
			{ "video_name": "日本美女被老外猛幹", "url": "https://85tube.com/videos/5325/ri-ben-mei-nv-bei-lao-wai-meng-gan/" },
			{ "video_name": "性福的小夥子有兩個妹子一起玩 自慰口交滴蠟 高難度姿勢做愛 玩的很嗨", "url": "https://85tube.com/videos/9898/xing-fu-de-xiao-huo-zi-you-liang-ge-mei-zi-yi-qi-wan-zi-wei-kou-jiao-di-la-gao-nan-du-zi-shi-zuo-ai-wan-de-hen-hai/" },
			{ "video_name": "超正美女性愛影片外流", "url": "https://85tube.com/videos/1230/chao-zheng-mei-nv-xing-ai-ying-pian-wai-liu/" },
			{ "video_name": "漂亮女生宿舍中被多人性侵", "url": "https://85tube.com/videos/3650/piao-liang-nv-sheng-su-she-zhong-bei-duo-ren-xing-qin/" },
			{ "video_name": "FC2-PPV-620786-1 白嫩小學妹旅館性交", "url": "https://85tube.com/videos/964/FC2-PPV-620786-1-bai-nen-xiao-xue-mei-lv-guan-xing-jiao/" },
			{ "video_name": "有點肉的日本學生妹子", "url": "https://85tube.com/videos/1968/you-dian-rou-de-ri-ben-xue-sheng-mei-zi/" },
			{ "video_name": "日本", "url": "https://85tube.com/videos/8261/ri-ben/" },
			{ "video_name": "風騷護士姐姐", "url": "https://85tube.com/videos/2231/feng-sao-hu-shi-jie-jie/" },
			{ "video_name": "人妻滿溢的巨乳‧松菫", "url": "https://85tube.com/videos/1460/ren-qi-man-yi-de-ju-ru-song-jin/" },
			{ "video_name": "媽媽親自傳授女兒口交技巧", "url": "https://85tube.com/videos/4751/ma-ma-qin-zi-chuan-shou-nv-ni-kou-jiao-ji-qiao/" },
			{ "video_name": "二次元FC2", "url": "https://85tube.com/videos/1573/er-ci-yuan-FC2/" },
			{ "video_name": "嫩白女友", "url": "https://85tube.com/videos/7551/nen-bai-nv-you/" },
			{ "video_name": "騷人妻飯店偷情", "url": "https://85tube.com/videos/1001/sao-ren-qi-fan-dian-tou-qing/" },
			{ "video_name": "大學美女和老外男友做愛影片外流", "url": "https://85tube.com/videos/1838/da-xue-mei-nv-he-lao-wai-nan-you-zuo-ai-ying-pian-wai-liu/" },
			{ "video_name": "背着老公約狼友3P的白嫩大波黑絲妹", "url": "https://85tube.com/videos/10342/bei-zhe-lao-gong-yue-lang-you-3P-de-bai-nen-da-bo-hei-si-mei/" },
			{ "video_name": "韓國美女被男友幹的啊啊叫", "url": "https://85tube.com/videos/1175/han-guo-mei-nv-bei-nan-you-gan-de-a-a-jiao/" },
			{ "video_name": "可愛學生妹子旅館中出", "url": "https://85tube.com/videos/472/ke-ai-xue-sheng-mei-zi-lv-guan-zhong-chu/" },
			{ "video_name": "被護士幹的好爽，超爽體位不要停", "url": "https://85tube.com/videos/2797/bei-hu-shi-gan-de-hao-shuang-chao-shuang-ti-wei-bu-yao-ting/" },
			{ "video_name": "ABP-554", "url": "https://85tube.com/videos/2034/ABP-554/" },
			{ "video_name": "短髮日妹和國外男友乾柴烈火", "url": "https://85tube.com/videos/8313/duan-fa-ri-mei-he-guo-wai-nan-you-qian-chai-lie-huo/" },
			{ "video_name": "夜店勾搭的性感美女", "url": "https://85tube.com/videos/1067/ye-dian-gou-da-de-xing-gan-mei-nv/" },
			{ "video_name": "上海寶馬銷售員美女李思彤", "url": "https://85tube.com/videos/362/shang-hai-bao-ma-xiao-shou-yuan-mei-nv-li-si-tong/" },
			{ "video_name": "大學生旅館3P性愛", "url": "https://85tube.com/videos/1029/da-xue-sheng-lv-guan-3P-xing-ai/" },
			{ "video_name": "拿學姐內衣打手槍", "url": "https://85tube.com/videos/2728/na-xue-jie-nei-yi-da-shou-qiang/" },
			{ "video_name": "射在肉肉學妹的肚子上", "url": "https://85tube.com/videos/17735/she-zai-rou-rou-xue-mei-de-du-zi-shang/" },
			{ "video_name": "HJ897", "url": "https://85tube.com/videos/18655/HJ897/" },
			{ "video_name": "性感小模酒店私拍外流", "url": "https://85tube.com/videos/22174/xing-gan-xiao-mo-jiu-dian-si-pai-wai-liu/" },
			{ "video_name": "東北口音主播戶外直播勾引司機被司機往死裡操無套内射", "url": "https://85tube.com/videos/10968/dong-bei-kou-yin-zhu-bo-hu-wai-zhi-bo-gou-yin-si-ji-bei-si-ji-wang-si-li-cao-wu-tao-nei-she/" },
			{ "video_name": "小美女帶著面具不敢露臉", "url": "https://85tube.com/videos/1395/xiao-mei-nv-dai-zhu-mian-ju-bu-gan-lu-lian/" },
			{ "video_name": "可愛日本妹妹被黑人狂幹", "url": "https://85tube.com/videos/9053/ke-ai-ri-ben-mei-mei-bei-hei-ren-kuang-gan/" },
			{ "video_name": "美白で清楚な人妻", "url": "https://85tube.com/videos/1638/mei-bai-qing-chu-ren-qi/" }
		];
	
		arrSource.forEach(function(currentValue, index) {
		
			var pathCode;
			var key, index;
			var finded = false;
			
			if (currentValue.trim() !== '') {
			
				pathCode = currentValue.substr(currentValue.indexOf('videos/') + 'videos/'.length);
				pathCode = pathCode.substr(0, pathCode.indexOf('/'));
				
				if (pathCode.trim() !== '') {
				
					for (key in data) {
					
						for (index = 0; index < data[key].length; index++) {
						
							if (data[key][index]["url"].indexOf(pathCode) !== -1) finded = true;

							if (finded === true) break;
						}
						
						if (finded === true) break;
					}

					if (finded === true) {
					
						result["savedEntries"].push(currentValue);
					}
					else {
					
						result["notSavedEntries"].push(currentValue);
					}
				}
				else {
				
					result["errorEntries"].push({
					
						"entry": currentValue,
						"error_message": "can not find path code"
					});
				}
			}
		});
			
		if (typeof callback === 'function') callback(result);
	};

	if (typeof define === 'function') {
	
		define(["jquery"], function() { 
		
			return {
  
				"check85VideoExistStatus": check85VideoExistStatus,
				"check85TubeExistStatus": check85TubeExistStatus
			}
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports.check85VideoExistStatus = check85VideoExistStatus;
		module.exports.check85TubeExistStatus = check85TubeExistStatus;
	}
	else {
	
		if (typeof root.tw.ace33022.RequireJSConfig === 'undefined') throw new Error('tw.ace33022.RequireJSConfig is undefined.');
		
		root.tw.ace33022.util.RLifeUtils.check85VideoExistStatus = check85VideoExistStatus;
		root.tw.ace33022.util.RLifeUtils.check85TubeExistStatus = check85TubeExistStatus;
	}
})(this);