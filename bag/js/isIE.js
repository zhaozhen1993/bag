(function(window) {
var ms_ie = false;
var ua = window.navigator.userAgent.toLowerCase();
// alert(ua);
// var ua = navigator.userAgent.toLowerCase();
var old_ie = ua.indexOf('MSIE');
var new_ie = ua.indexOf('trident/');
var is360 = false;
var append = document.getElementById("append");
if((old_ie > -1) || (new_ie > -1)) {
ms_ie = true;
}
// alert(old_ie> -1);
// alert(new_ie > -1);
if(window.navigator.appName.indexOf("Microsoft") != -1) {
me_ie = true;
alert("低版本的ie可能不能展示更好的效果哦！！！如果是360浏览器请改为极速模式")
}

if((window.navigator.mimeTypes[40] || !window.navigator.mimeTypes.length)) {
is360 = true;

}

//if(ms_ie) {
//document.documentElement.className += "ie";
//append.style.display = "block";
//} else {
//append.style.display = "none";
//}

})(window);