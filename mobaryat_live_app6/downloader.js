

localStorage.setItem("app-package_id","mobaryat_live_app6");
localStorage.setItem("app-device","android");


//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

if(localStorage.getItem("user-download_complete") == "yes"){setTimeout(function(){receive_onesignal_push_fun();},300);}

function receive_onesignal_push_fun(){

if(localStorage.getItem("app-device") == "ios" && localStorage.getItem("app-onesignal_app_id")){
window.plugins.OneSignal.setAppId(localStorage.getItem("app-onesignal_app_id"));}

window.plugins.OneSignal.setNotificationOpenedHandler(function(jsonData){

if(localStorage.getItem("app-receive_onesignal_push") != "yes" && localStorage.getItem("user-download_complete") == "yes"){

if(jsonData['notification']['launchURL'] && localStorage.getItem("app-device") == "ios"){
var prm_launch_url = JSON.stringify(jsonData['notification']['launchURL']);
var prm_launch_url = prm_launch_url.split('"').join('').split("'").join('');
cordova.InAppBrowser.open(prm_launch_url,'_system');
}

if(jsonData['notification']['additionalData']['prm_home_page']){
var prm_home_page = JSON.stringify(jsonData['notification']['additionalData']['prm_home_page']);
localStorage.setItem("app-receive_onesignal_push","yes");
var prm_home_page = prm_home_page.split('"').join('').split("'").join('');
//var prm_home_page = decodeURIComponent(prm_home_page);

if( (prm_home_page.includes("channel_tab") == false && prm_home_page.includes("video_player") == false) ||
(prm_home_page.includes("video_player") == true && localStorage.getItem("user-app_activation")) ||
(prm_home_page.includes("channel_tab") == true && localStorage.getItem("user-app_activation") == "full") ){
var files_root = localStorage.getItem("app-files_root");
window.location = files_root + "index.html?home_page="+prm_home_page;
}

}

else if(jsonData['notification']['additionalData']['prm_facebook_post']){
var prm_facebook_post = JSON.stringify(jsonData['notification']['additionalData']['prm_facebook_post']);
localStorage.setItem("app-receive_onesignal_push","yes");
var prm_facebook_post = prm_facebook_post.split('"').join('').split("'").join('');
var page_id = prm_facebook_post.split("|")[0];var post_id = prm_facebook_post.split("|")[1];
cordova.InAppBrowser.open("https://www.facebook.com/"+page_id+"/posts/"+post_id,"_system");
}

}
}).endInit();

};

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

document.addEventListener("DOWNLOADER_unzipError", function(event){
if(!$("body").attr("mobile_lang") || $("body").attr("mobile_lang") == "ar"){$("#m2_p1").text("حدث خطأ أثناء تثبيت المحتوي");}else{$("#m2_p1").text("Content installing error");}
if(!$("body").attr("mobile_lang") || $("body").attr("mobile_lang") == "ar"){$("#m2_p2").text("برجاء إعادة فتح التطبيق");}else{$("#m2_p2").text("Please open app again");}
$("#m2_progress_div1").css("display","none");
});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

document.addEventListener("DOWNLOADER_unzipSuccess", function(event){

$("#m2_rocket_logo").removeClass("pulse").addClass("tada");

if(!$("body").attr("mobile_lang") || $("body").attr("mobile_lang") == "ar"){$("#m2_p1").text("تم التثبيت بنجاح");}else{$("#m2_p1").text("Installation complete");}

$("#m2_p1").css("font-size","20px").css("color","#1b941b").css("margin","35px 0 0 0");
$("#m2_progress_div1").css("display","none");
$("#m2_p2").css("display","none");

if(localStorage.getItem("app-device") == "ios"){ var files_root = window.WkWebView.convertFilePath(cordova.file.dataDirectory) + "files/"; }
else{ var files_root = cordova.file.externalApplicationStorageDirectory+ "files/"; }

localStorage.setItem("app-files_root",files_root);

localStorage.setItem("user-download_complete","yes");

setTimeout(function(){
change_statusbar_color_fun("light-mode_theme_color");
window.location = files_root + "index.html";
},1500);

});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

document.addEventListener("DOWNLOADER_downloadProgress", function(event){
var data = event.data;
var perc = parseInt(data);

if(!$("body").attr("mobile_lang") || $("body").attr("mobile_lang") == "ar"){$("#m2_p1").text("جاري تثبيت المحتوي");}else{$("#m2_p1").text("Content is Installation");}

$("#m2_progress_bar").css("width",perc+"%").attr("width",perc+"%");
if(perc > 0){ $("#m2_progress_div1").css("display","block"); }
if(perc >= 0 && perc <= 16){ $("#m2_progress_bar").css("background-color","#C92A2A"); }
if(perc > 16 && perc <= 33){ $("#m2_progress_bar").css("background-color","#ff4e11"); }
if(perc > 33 && perc <= 50){ $("#m2_progress_bar").css("background-color","#ff8e15"); }
if(perc > 50 && perc <= 66){ $("#m2_progress_bar").css("background-color","#fab733"); }
if(perc > 66 && perc <= 83){ $("#m2_progress_bar").css("background-color","#8cba40"); }
if(perc > 83 && perc <= 100){ $("#m2_progress_bar").css("background-color","#22af3d"); }
if(perc == 100){ $("#m2_progress_div1").css("border-radius","3px"); }
});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

localStorage.removeItem("user-download_start");

function DownZipFile(){

if(localStorage.getItem("user-download_complete") == "yes" || localStorage.getItem("user-download_start") == "yes"){return;}

setTimeout(function(){

if(localStorage.getItem("app-device") == "ios"){ var file_system_path = cordova.file.dataDirectory; }
else{ var file_system_path = cordova.file.externalApplicationStorageDirectory; }

downloader.init({fileSystem: file_system_path, folder: "files", unzip: true, delete: true});

downloader.get("https://myzip.pages.dev/appv29_android.zip");

localStorage.setItem("user-download_start","yes");

},500);

}

//*=*=**=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

$$(document).on('page:init','.page[data-name="download_page"]',function(e,page){
DownZipFile();
window.addEventListener('online',function(){DownZipFile();});
window.addEventListener('offline',function(){localStorage.removeItem("user-download_start");});
});

if(app.views.current.router.currentRoute.name == "download_page"){
DownZipFile();
window.addEventListener('online',function(){DownZipFile();});
window.addEventListener('offline',function(){localStorage.removeItem("user-download_start");});
}



