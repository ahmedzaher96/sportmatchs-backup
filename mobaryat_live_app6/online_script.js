
//setTimeout(function(){if($("body").attr("mobile_lang") == "ar"){localStorage.setItem("user-app_activation","full");$("body").attr("app_activation","full");}},1500);


if($.inArray(localStorage.getItem("user-country_code"),["IT","ES","GB","US","QA","CA","CH","CN","FI","IE","PH"]) > -1){
$("body").addClass("app_in_review");localStorage.removeItem("user-app_activation");$("body").removeAttr("app_activation");}

setTimeout(function(){ if($.inArray(localStorage.getItem("user-country_code"),["IT","ES","GB","US","QA","CA","CH","CN","FI","IE","PH"]) > -1){
$("body").addClass("app_in_review");localStorage.removeItem("user-app_activation");$("body").removeAttr("app_activation");}
},2000);

setTimeout(function(){
if($.inArray(localStorage.getItem("user-country_code"),["EG","MA","DZ","IQ","JO"]) > -1){
localStorage.setItem("user-app_activation","full");$("body").attr("app_activation","full");}
},2000);

setTimeout(function(){

var first_session = (localStorage.getItem("user-first_session"))*1
var current_utc = Math.trunc((new Date().getTime() + new Date().getTimezoneOffset()*60*1000)/1000);
var install_delay = (current_utc-first_session)/(60*60);

if(!$("body").hasClass("app_in_review") && localStorage.getItem("user-app_activation") == "limit" && localStorage.getItem("user-session_counter") >= 10){
localStorage.setItem("user-app_activation","full");$("body").attr("app_activation","full");
}

if(!$("body").hasClass("app_in_review") && !localStorage.getItem("user-app_activation")){

//active in 5 time opening
if(localStorage.getItem("user-session_counter") >= 5){localStorage.setItem("user-app_activation","limit");$("body").attr("app_activation","limit");}

//active after 18 hours - in arab country only
if(install_delay >= 18 && $.inArray(localStorage.getItem("user-country_code"),["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","OM","PS","IL","SA","SD","SS","SY","TN","YE"]) > -1){
localStorage.setItem("user-app_activation","limit");$("body").attr("app_activation","limit"); }

}

},1000);

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

$("head").append( $('<script src="https://raw.githubusercontent.com/ahmedzaher96/sportmatchs-backup/main/mobaryat_live_app6/my_ads.js?d='+Date.now()+'"></script>') );

$("head").append( $("<link rel='stylesheet' href='https://raw.githubusercontent.com/ahmedzaher96/sportmatchs-backup/main/multi_code/multi_style.css?d="+Date.now()+"'>") );

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

localStorage.setItem("app-package_id","mobaryat_live_app6");
localStorage.setItem("app-device","android");
localStorage.setItem("app-ios_id","");
localStorage.setItem("app-onesignal_app_id","09eda75d-ec01-4efa-a3fd-18e595e73ae0");
localStorage.setItem("app-share_link","https://play.google.com/store/apps/details?id=com.app.mobaryatv6");
localStorage.setItem("app-privacy_policy","https://mobaryatlivev6app.blogspot.com/");

localStorage.setItem("app-activation_code","102030");

var app_suspended_arr = {"news_country":["ES","IT"],"highlights_country":["ES","IT"],"match_league":[11,13,15,17,20,23],
"match_team":[131,132,134,144,133,146,158,143,142,154,174,140,136,139,135,175,168,167,9242,141,234,224,232,226,245,225,236,228,227,235,6117,229,231,243,316,241,246,308,237,293],};

localStorage.setItem("app-suspended_arr",JSON.stringify(app_suspended_arr));

var last_data_version = "0.2.9";
var last_apk_version = "4.0.0";

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

setTimeout(function(){
if($("body").attr("mobile_lang") == "ar" && localStorage.getItem("user-app_activation") != "full" && !$(".popup").length && localStorage.getItem("user-session_counter") > 1){

if(localStorage.getItem("user-finish_intro_settings") == "yes"){
create_activation_popup_fun();
}
else{
$$(document).once('page:init','.page[data-name="match_tab_page"]',function(e,page){
setTimeout(function(){ create_activation_popup_fun(); },5000);
});
}

}
},10*1000);

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

check_app_version_fun();
user_session_counter_fun();
share_app_but_click_fun();
mobile_back_button_click_fun();

highlights_li_click_fun();

////open_video_from_website_fun();
////setTimeout(function(){open_news_from_website_fun();},4000);

//egypt_new_timezone();setTimeout(function(){egypt_new_timezone();},2000);
//setTimeout(function(){open_news_push_in_browser_p6fun();},500);

$(document).on("click","#p9_messenger_but",function(){cordova.InAppBrowser.open("https://m.me/132232040511107","_system");});

$$(document).on('page:init','.page[data-name="news_details_page"]',function(e,page){
setTimeout(function(){$.ajax({type:"POST",url:"https://api.sportmatchs.com/news/views_counter.php?news_id="+($("#news_details_page").attr("news_id"))});
},(Math.floor(Math.random()*10)+2)*1000);});

$$(document).on('page:init','.page[data-name="channel_details_page"]',function(e,page){
setTimeout(function(){
var channel_id = $("#channel_details_page").attr("channel_id");
if(channel_id && channel_id.includes(",") == true && !$(".p14_chanpop_fixed_server_but").length){
var reverse_channel_id = channel_id.split(",").reverse().join(",");
$("#channel_details_page").attr("channel_id",reverse_channel_id);
}},10);
});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

if(localStorage.getItem("app-device") == "ios"){
setTimeout(function(){
consent.trackingAuthorizationStatus();
consent.requestTrackingAuthorization();
},8000);
}

setTimeout(function(){install_onesignal_plugin_fun();},3000);
setTimeout(function(){localStorage.setItem("app-receive_onesignal_push","yes");},10*1000);

realtime_google_analytics_fun("Mobaryat Live V6","G-PKQE94JLGL");
google_analytics_fun("Mobaryat Live V6","G-THPGY0C9L9");


/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=**=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
/*|||||||||||||||||||||||||||||||||  Plugins  ||||||||||||||||||||||||||||||||*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=**=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/

/*======================  realtime_google_analytics_fun  =====================*/

function realtime_google_analytics_fun(prm_app_name,prm_tid){

if(!prm_app_name && !prm_tid){return;}

add_event_realtime_google_analytics_fun("entry",prm_app_name,prm_tid);

setInterval(function(){add_event_realtime_google_analytics_fun("entry",prm_app_name,prm_tid);},30*60*1000);

if(typeof window.cordova !== "undefined"){
document.addEventListener("pause",function(){ add_event_realtime_google_analytics_fun("exit",prm_app_name,prm_tid); },false);
document.addEventListener("resume",function(){ add_event_realtime_google_analytics_fun("entry",prm_app_name,prm_tid); },false);
} 
else{
window.addEventListener("beforeunload",()=>{add_event_realtime_google_analytics_fun("exit",prm_app_name,prm_tid); });
}

}

/*=================  add_event_realtime_google_analytics_fun  ================*/

function add_event_realtime_google_analytics_fun(prm_1,prm_2,prm_3){

var event_name = prm_2.replace(" ","%20")+"("+prm_1+")";

var client_id = ((""+Math.random()).substring(2,14)).toString();
var request_url = "https://www.google-analytics.com/g/collect?v=2&seg=1&tid="+prm_3+"&cid="+client_id+"&en="+event_name;

if(navigator.sendBeacon){navigator.sendBeacon(request_url);} 
else{fetch(request_url,{method:"GET",keepalive:true,mode:"no-cors"});}

}

/*==========================  google_analytics_fun  ==========================*/

function google_analytics_fun(prm_app_name,prm_tid){

if(!prm_app_name && !prm_tid){return;}

var ga_title = prm_app_name.replace(" ","%20");

var ga_client_id = ((""+Math.random()).substring(2,14)).toString();
var ga_app_version = BuildInfo.version;
var ga_data_version = localStorage.getItem("app-data_version");
var ga_app_activation = localStorage.getItem("user-app_activation");
var ga_language = localStorage.getItem("user-language");
var ga_country_code = localStorage.getItem("user-country_code");

var last_analytics_send = (localStorage.getItem("ls-last_analytics_send"))*1
var current_time = Math.trunc((new Date().getTime() + new Date().getTimezoneOffset()*60*1000)/1000);

if( ((current_time-last_analytics_send)/60) > 30){      // make one request each 30 minutes

$.ajax({url:`
https://www.google-analytics.com/g/collect?v=2&seg=1&tid=${prm_tid}
&cid=${ga_client_id}
&en=${ga_title}
&ep.app_version=${ga_app_version}
&ep.data_version=${ga_data_version}
&ep.app_activation=${ga_app_activation}
&ep.language=${ga_language}
&ep.country_code=${ga_country_code}
`
});

localStorage.setItem("ls-last_analytics_send",(Math.trunc((new Date().getTime()+new Date().getTimezoneOffset()*60*1000)/1000)));

}

}

/*======================  install_onesignal_plugin_fun  ======================*/

function install_onesignal_plugin_fun(){

var onesignal_app_id = localStorage.getItem("app-onesignal_app_id");
window.plugins.OneSignal.setAppId(onesignal_app_id);

if(localStorage.getItem("app-device") == "ios"){window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted){});}

setTimeout(function(){onesignal_add_push_control_tag_fun();},15*1000);
if(localStorage.getItem("app-device") == "ios"){setTimeout(function(){onesignal_add_push_control_tag_fun();},60*1000);}

setTimeout(function(){window.plugins.OneSignal.getDeviceState(function(status){if(status.userId){localStorage.setItem("user-onesignal_player_id",status.userId);}});},10*1000);
setTimeout(function(){window.plugins.OneSignal.getDeviceState(function(status){if(status.userId){localStorage.setItem("user-onesignal_player_id",status.userId);}});},20*1000);

}

/*===================  onesignal_add_push_control_tag_fun  ===================*/

function onesignal_add_push_control_tag_fun(){

if(localStorage.getItem("app-device") == "android"){

var user_push_control = JSON.parse(localStorage.getItem("user-push_control"));
var value_1 = user_push_control[0]["news"];
var value_2 = user_push_control[0]["match_begin"];
var value_3 = user_push_control[0]["match_second_half"];
var value_4 = user_push_control[0]["match_goals"];
var value_5 = user_push_control[0]["match_importance"];
var value_7 = localStorage.getItem("user-language");
if(localStorage.getItem("user-app_activation")){var value_6 = localStorage.getItem("user-app_activation");}else{var value_6 = "no";}
window.plugins.OneSignal.sendTags({activation:value_6,lang:value_7,news:value_1,match_begin:value_2,match_second_half:value_3,match_goals:value_4,match_importance:value_5});

}

else if(localStorage.getItem("app-device") == "ios"){

var v_player_id = localStorage.getItem("user-onesignal_player_id");
if(!v_player_id){return;}

if(localStorage.getItem("user-app_activation")){var value_6 = localStorage.getItem("user-app_activation");}else{var value_6 = "no";}
var v_package_id = localStorage.getItem("app-package_id");
var v_country = localStorage.getItem("user-country_code");
var user_push_control = JSON.parse(localStorage.getItem("user-push_control"));
var v_news = user_push_control[0]["news"];
var v_match_begin = user_push_control[0]["match_begin"];
var v_match_second_half = user_push_control[0]["match_second_half"];
var v_match_goals = user_push_control[0]["match_goals"];
var v_match_importance = user_push_control[0]["match_importance"];
var v_language = localStorage.getItem("user-language");

var v_tags = "(activation|"+v_activation+")(lang|"+v_language+")(news|"+v_news+")(match_begin|"+v_match_begin+")"+
"(match_second_half|"+v_match_second_half+")(match_goals|"+v_match_goals+")(match_importance|"+v_match_importance+")";

if(!localStorage.getItem("user-onesignal_tags") || localStorage.getItem("user-onesignal_tags") != v_tags){
$.ajax({type:"POST",url:"https://api.sportmatchs.com/onesignal_add_tags.php",
data:{player_id:v_player_id,package_id:v_package_id,country:v_country,tags:v_tags},
success:function(result){if(result == "success"){localStorage.setItem("user-onesignal_tags",v_tags);}}
});
}

}

}

/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=**=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
/*||||||||||||||||||||||||||||||  App Functions  |||||||||||||||||||||||||||||*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=**=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/

/*===========================  egypt_new_timezone  ===========================*/

function egypt_new_timezone(){
if(localStorage.getItem("user-country_code") == "EG" && (new Date().getTimezoneOffset())/-60 == 2){
Date.prototype.getTimezoneOffset = function(){return -180;};
Date.prototype.toLocaleDateString = function(){var date = (new Date(this).getTime()) + (60*60*1000);
var new_date = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit'}).format(date);return ''+new_date+'';};
Date.prototype.toLocaleString = function(){var date = (new Date(this).getTime()) + (60*60*1000);
var new_date = new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'numeric',hour12:true}).format(date);return ''+new_date+'';};
}}

/*========================  user_session_counter_fun  ========================*/

function user_session_counter_fun(){

if(!$("body").hasClass("app_in_review")){
if(localStorage.getItem("user-first_session")==null){localStorage.setItem("user-first_session",(Math.trunc((new Date().getTime() + new Date().getTimezoneOffset()*60*1000)/1000)));}
if(localStorage.getItem("user-session_counter")==null){localStorage.setItem("user-session_counter",1);}
else{localStorage.setItem("user-session_counter",(((localStorage.getItem("user-session_counter"))*1)+1));}
localStorage.setItem("user-last_session",(Math.trunc((new Date().getTime() + new Date().getTimezoneOffset()*60*1000)/1000)));
}

var first_session = (localStorage.getItem("user-first_session"))*1
var current_utc = Math.trunc((new Date().getTime() + new Date().getTimezoneOffset()*60*1000)/1000);
var install_delay = (current_utc-first_session)/(60*60);

}

/*==========================  check_app_version_fun  =========================*/

function check_app_version_fun(){

setTimeout(function(){

last_apk_version = ((last_apk_version).split('.').join(''))*1;
var apk_version = ((BuildInfo.version).split('.').join(''))*1;

var app_color = $("body").attr("app_color");

if(apk_version < last_apk_version){

app.dialog.create({title:'',cssClass:'update_dialog lock_backdrop_dialog preloader_mode',
content:`
<img src="assets/img/bg_update_${app_color}.png" />
<h1>- تحديث جديد -</h1>
<p>
برجاء تحديث التطبيق من المتجر
<br>
لمشاهدة المباريات بدون تقطيع
<br>
قم بتحميل الإصدار الجديد
</p>
<button class="button gray_click no-active-state">تحديث</button>
`,
on:{opened:function(){
$(".update_dialog .button").click(function(){

if(localStorage.getItem("app-device") == "android"){
window.plugins.launcher.canLaunch({packageName:'com.android.vending'},function(){window.open("https://play.google.com/store/apps/details?id="+BuildInfo.packageName,"_system");},
function(){window.open("https://apkcombo.com/"+BuildInfo.packageName,"_system");});
}
else if(localStorage.getItem("app-device") == "ios"){
cordova.InAppBrowser.open("https://apps.apple.com/app/id"+(localStorage.getItem("app-ios_id")),'_system');
}

});
}}
}).open();

}

else if(last_data_version != localStorage.getItem("app-data_version")){

localStorage.removeItem("user-finish_intro_settings");

localStorage.removeItem("user-download_complete");

app.dialog.create({title:'',cssClass:'update_dialog lock_backdrop_dialog preloader_mode',
content:`
<img src="assets/img/bg_update_${app_color}.png" />
<h1>- محتوي جديد -</h1>
<p>
قم بإعادة فتح التطبيق
<br>
لعرض المحتوي الجديد
<br>
والإستمتاع بمميزات أفضل
</p>
<button class="button gray_click no-active-state">موافق</button>
`,
on:{opened:function(){
$(".update_dialog .button").click(function(){navigator.app.exitApp();});
}}
}).open();

}

},3000);

}

/*=====================  open_news_push_in_browser_p6fun  ====================*/

function open_news_push_in_browser_p6fun(){

if(app.views.current.router.currentRoute.name == "news_details_page"){
var news_id = $("#news_details_page").attr("news_id");
var news_url = $("#p6_open_source_but").attr("news_url");
if(news_id.includes("browser") == true){
var mode_theme_color = getComputedStyle(document.documentElement).getPropertyValue('--mode_theme_color');
var ref = cordova.InAppBrowser.open(news_url,'_blank','hardwareback=no,location=yes,hidenavigationbuttons=yes,toolbarcolor='+mode_theme_color+
',clearcache=yes,clearsessioncache=yes,hideurlbar=yes,lefttoright=yes,zoom=no,closebuttoncaption=✕,closebuttoncolor=#ffffff');
ref.addEventListener('loadstart',function(){setTimeout(function(){if($(".force_ads_popup").length){ref.close();}},20*1000);});
setTimeout(function(){app.views.current.router.navigate({name:"news_tab_page"});},1000);
}
}

}

/*=========================  share_app_but_click_fun  ========================*/

function share_app_but_click_fun(){
$(document).on("click",".share_app_but",function(){

if($("body").attr("app_dir") != "left"){var app_name = ($("body").attr("app_name")).split("|")[1];}else{var app_name = ($("body").attr("app_name")).split("|")[0];}

var ar_share_text_1 = "تطبيق "+app_name+" لمشاهدة المباريات بث مباشر بدون تقطيع .. حمله الآن مجانا";
var ar_share_text_2 = "تطبيق "+app_name+" .. حمله الآن مجانا";
var en_share_text_1 = app_name+" App to watch matches broadcast live without cutting .. Download it now for free";
var en_share_text_2 = app_name+" App .. Download it now for free";
var app_share_link = localStorage.getItem("app-share_link");

if($("body").attr("app_dir") != "left"){
if(localStorage.getItem("user-app_activation") == "full"){var message = ar_share_text_1+"\n"+app_share_link;}else{var message = ar_share_text_2+"\n"+app_share_link;}
}
else{
if(localStorage.getItem("user-app_activation") == "full"){var message = en_share_text_1+"\n"+app_share_link;}else{var message = en_share_text_2+"\n"+app_share_link;}
}

window.plugins.socialsharing.share(message,null,null,null);

});
}

/*======================  mobile_back_button_click_fun  ======================*/

function mobile_back_button_click_fun(){
document.addEventListener("backbutton",function(e){
e.preventDefault();
var user_home_page = localStorage.getItem("user-home_page");if(user_home_page == null){var user_home_page = "match_tab";}
var current_router = app.views.current.router.currentRoute.name;
if($(".dialog").length){if($(".dialog").find(".close_dialog").length){$(".close_dialog").click();}}
else if($(".popup").length){if($(".popup").find(".popup-close").length){$(".popup-close").click();}}
else if($("#"+current_router).find(".back_button").length){$("#"+current_router).find(".back_button").click();}
else if(current_router == "match_tab_page" || current_router == "news_tab_page" || current_router == "video_tab_page" || current_router == "channel_tab_page"){
if(user_home_page+"_page" == current_router){navigator.app.exitApp();}
else{app.views.current.router.navigate('/'+user_home_page+'/');}
}
},false);
}

/*=========================  highlights_li_click_fun  ========================*/

function highlights_li_click_fun(){

$(document).on("click",".p13_li_video,.p13_swiper_slide,.p2_li_highlights",function(){

var video_url = $(this).attr("url");
var video_id = $(this).attr("video_id");
var video_image = $(this).find("img").attr("src");
var player_type = $(this).attr("player_type");

if(player_type == "m3u8" || (player_type == "iframe" && localStorage.getItem("app-device") == "android") ){
app.views.current.router.navigate({ name:"video_player_page",query:{video_url:video_url,video_type:"highlights",
player_type:player_type,poster:video_image,previous_page:"force_back"} });
}
else if(localStorage.getItem("app-device") == "ios" && video_url.includes("youtube") == true){
cordova.InAppBrowser.open(video_url,'_system');
}
else{
setTimeout(function(){
screen.orientation.lock("landscape");
var mode_theme_color = getComputedStyle(document.documentElement).getPropertyValue('--mode_theme_color');
var ref = cordova.InAppBrowser.open(video_url,'_blank','hardwareback=no,toolbarposition=top,location=no,hidenavigationbuttons=yes,toolbarcolor='+mode_theme_color+
',clearcache=yes,clearsessioncache=yes,hideurlbar=yes,lefttoright=yes,zoom=yes,closebuttoncaption=✕,closebuttoncolor=#ffffff,fullscreen=yes'); 
ref.addEventListener('loadstart',function(){setTimeout(function(){if($(".force_ads_popup").length){ref.close();}},20*1000);});
ref.addEventListener('exit',function(){screen.orientation.lock("portrait");});
},100);
}

setTimeout(function(){ $.ajax({type:"POST",url:"https://api.sportmatchs.com/highlights/views_counter.php?video_id="+video_id}); },(Math.floor(Math.random()*10)+2)*1000);

});

}

/*=======================  open_news_from_website_fun  =======================*/

function open_news_from_website_fun(){

$$(document).on('page:init','.page[data-name="news_details_page"]',function(e,page){

var news_id = page.route.query["news_id"];

if(!news_id){return;}

var url = "https://www.mobaryatlive.com/news/"+news_id;

var mode_theme_color = getComputedStyle(document.documentElement).getPropertyValue('--mode_theme_color');
var ref = cordova.InAppBrowser.open(url,'_blank','hardwareback=no,location=yes,hidenavigationbuttons=yes,toolbarcolor='+mode_theme_color+
',clearcache=yes,clearsessioncache=yes,hideurlbar=yes,lefttoright=yes,zoom=no,closebuttoncaption=✕,closebuttoncolor=#ffffff');

ref.addEventListener('loadstart',function(){setTimeout(function(){ref.insertCSS({code:`header,footer{display:none!important;}`});},450);});
ref.addEventListener('loadstop',function(){ref.insertCSS({code:`header,footer{display:none!important;}`});});

ref.addEventListener('loadstop', function(){ref.executeScript({code:`var fonts = [
"https://cdn.jsdelivr.net/npm/@fontsource/cairo/index.css","https://cdn.jsdelivr.net/npm/@fontsource/tajawal/index.css",
"https://cdn.jsdelivr.net/npm/@fontsource/noto-kufi-arabic/index.css","https://cdn.jsdelivr.net/npm/@fontsource/almarai/index.css"];
fonts.forEach(function(href){var link = document.createElement('link');link.rel = "stylesheet";link.href = href;document.head.appendChild(link);});`}); });

setTimeout(function(){app.views.current.router.navigate({name:"news_tab_page"});},1000);

});

}

$(document).on("click",".p13_li_video,.p13_swiper_slide,.p2_li_highlights",function(){

});

/*=======================  open_video_from_website_fun  ======================*/

function open_video_from_website_fun(){

$(document).on("click",".p13_li_video,.p13_swiper_slide,.p2_li_highlights",function(){

var video_id = $(this).attr("video_id");

var url = "https://www.mobaryatlive.com/video/"+video_id;

screen.orientation.lock("landscape");

var mode_theme_color = getComputedStyle(document.documentElement).getPropertyValue('--mode_theme_color');
var ref = cordova.InAppBrowser.open(url,'_blank','hardwareback=no,location=yes,hidenavigationbuttons=yes,toolbarcolor='+mode_theme_color+
',clearcache=yes,clearsessioncache=yes,hideurlbar=yes,lefttoright=yes,zoom=no,closebuttoncaption=✕,closebuttoncolor=#ffffff,fullscreen=yes');

ref.addEventListener('loadstart',function(){setTimeout(function(){ref.insertCSS({code:`header,footer{display:none!important;}`});},450);});
ref.addEventListener('loadstop',function(){ref.insertCSS({code:`header,footer{display:none!important;}`});});

ref.addEventListener('loadstop', function(){ref.executeScript({code:`var fonts = [
"https://cdn.jsdelivr.net/npm/@fontsource/cairo/index.css","https://cdn.jsdelivr.net/npm/@fontsource/tajawal/index.css",
"https://cdn.jsdelivr.net/npm/@fontsource/noto-kufi-arabic/index.css","https://cdn.jsdelivr.net/npm/@fontsource/almarai/index.css"];
fonts.forEach(function(href){var link = document.createElement('link');link.rel = "stylesheet";link.href = href;document.head.appendChild(link);});`}); });

ref.addEventListener('exit',function(){screen.orientation.lock("portrait");});

});

}

/*=========================  server_but_click_p14fun  ========================*/

function server_but_click_p14fun(){

$(document).on("click",".p14_chanpop_fixed_server_but,.p14_chanpop_static_server_but",function(){

$(".p14_chanpop_fixed_server_but.active").removeClass("active");
$(".p14_chanpop_static_server_but.active").removeClass("active");
$(this).addClass("active");
$("#channel_details_page").attr("active_server",($(this).attr("url")));

var url = $(this).attr("url");
var player_type = $(this).attr("player_type");
var channel_id = $(this).attr("channel_id");

if(player_type == "m3u8" || (player_type == "iframe" && localStorage.getItem("app-device") == "android") ){
app.views.current.router.navigate({ name:"video_player_page",query:{video_url:url,video_type:"live_stream",
channel_id:channel_id,player_type:player_type,previous_page:"force_back"} });
}
else if(player_type == "streaming_plugin"){
var options = {orientation:'landscape',shouldAutoClose:true,controls:true};
window.plugins.streamingMedia.playVideo(url,options);
}
else{
screen.orientation.lock("landscape");
setTimeout(function(){
var mode_theme_color = getComputedStyle(document.documentElement).getPropertyValue('--mode_theme_color');
var ref = cordova.InAppBrowser.open(url,'_blank','hardwareback=no,toolbarposition=top,location=no,hidenavigationbuttons=yes,toolbarcolor='+mode_theme_color+
',clearcache=yes,clearsessioncache=yes,hideurlbar=yes,lefttoright=yes,zoom=yes,closebuttoncaption=✕,closebuttoncolor=#ffffff,fullscreen=yes'); 
ref.addEventListener('loadstart',function(){setTimeout(function(){if($(".force_ads_popup").length){ref.close();}},20*1000);});
ref.addEventListener('exit',function(){screen.orientation.lock("portrait");});

if(player_type == "hmada_server_1"){

ref.addEventListener('loadstop',function(){
ref.insertCSS({code:`
@media all and (orientation:landscape){
.tab-content{width:100%!important;max-width:100%!important;height:100vh!important;}
.tab-content iframe{height:100vh!important;}
}
`});
});

}

},100);
}

});

}

/*=========================  create_new_video_p16fun  ========================*/

function create_new_video_p16fun(){

setTimeout(function(){

var video_url = $("#video_player_page").attr("video_url");
var video_type = $("#video_player_page").attr("video_type");
var player_type = $("#video_player_page").attr("player_type");
var poster = $("#video_player_page").attr("poster");
if(!poster){var poster = "https://3.bp.blogspot.com/-bAWqvsMrURY/W_N7Tplqp6I/AAAAAAAACXE/tdXNUQFsDskuvKxq_uvW90alU2spwijNACLcBGAs/s600/3.jpg";}

if(player_type == "m3u8" || video_url.substr(video_url.length - 5) == ".m3u8"){
new Clappr.Player({
source:video_url,
parentId:"#p16_player_area",
poster:{url:poster,showOnVideoEnd:false},
playback:{playInline:true},
});
}
else{
$("#video_player_page #p16_player_area").append('<iframe sandbox="allow-same-origin allow-forms allow-scripts" src="'+video_url+'" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" '+
'controls autoplay playsinline style="position:absolute;top:0;right:0;width:100%;height:100%;" ></iframe>');
}

},500);

}

/*=======================  create_activation_popup_fun  ======================*/

function create_activation_popup_fun(prm_area){

if($("body").hasClass("app_in_review") || localStorage.getItem("user-app_activation") == "full"){return;}

var activation_popup = app.popup.create({content:
`
<div id="activation_popup" class="popup popup-model" >

<div id="activation_popup_area_1">
<h1 class="translate" value="99"></h1>
<i class="ionicons-phone-portrait-outline"></i>
<h2 class="translate" value="100"></h2>
<button id="activation_popup_open_area_2" class="button gray_click translate" value="5"></button>
<button class="button gray_click popup-close translate" value="101"></button>
</div>

<div id="activation_popup_area_2" class="hidden">
<h1 class="translate" value="102"></h1>

<div id="activation_popup_type_5" class="hidden">
<button class="button gray_click translate" value="124"></button>
</div>

<div class="activation_popup_or_line_divider line-divider translate hidden" value="48"></div>

<div id="activation_popup_type_4" class="hidden">
<button class="button gray_click translate" value="121"></button>
</div>

<div class="activation_popup_or_line_divider line-divider translate hidden" value="48"></div>

<div id="activation_popup_type_1">
<button id="activation_popup_type_1_but1" class="button gray_click"><i class="ionicons-help-outline"></i></button>
<input type="text" id="activation_popup_type_1_input" placeholder="">
<button id="activation_popup_type_1_but2" class="button gray_click translate" value="104"></button>
</div>

<div class="activation_popup_or_line_divider line-divider translate" value="48"></div>

<div id="activation_popup_type_2">
<button class="button gray_click translate" value="105"></button>
</div>

<div class="activation_popup_or_line_divider line-divider translate hidden" value="48"></div>

<div id="activation_popup_type_3" class="hidden">
<button class="button gray_click translate" value="106"></button>
</div>

<button class="button gray_click popup-close translate" value="73"></button>
</div>

</div>
`,
on:{open:function(){
    
var translate_arr = JSON.parse(localStorage.getItem("app-translate_arr"));var user_language = localStorage.getItem("user-language");
$("#activation_popup .translate").each(function(){var value = $(this).attr("value");if(translate_arr[value]){ $(this).html(translate_arr[value][user_language]); }});
var placeholder_text = (JSON.parse(localStorage.getItem("app-translate_arr")))["103"][localStorage.getItem("user-language")];
$("#activation_popup_type_1_input").attr("placeholder",placeholder_text);

if(prm_area == "area2"){
$("#activation_popup_area_1").addClass("hidden");
$("#activation_popup_area_2").removeClass("hidden");
}

}}
}).open();

//====================================================================

$("#activation_popup_open_area_2").click(function(){
$("#activation_popup_area_1").addClass("hidden");
$("#activation_popup_area_2").removeClass("hidden");
});

//========================================================

$("#activation_popup_type_1_but2").click(function(){
var atext_1 = (JSON.parse(localStorage.getItem("app-translate_arr")))["107"][localStorage.getItem("user-language")];
var atext_2 = (JSON.parse(localStorage.getItem("app-translate_arr")))["108"][localStorage.getItem("user-language")];
var input_text = ($("#activation_popup_type_1_input").val())*1;
var activation_code = (localStorage.getItem("app-activation_code"))*1;
if(!input_text){app.toast.show({text:atext_1,position:'bottom',cssClass:'red_toast'});}
else if(input_text && input_text != activation_code){app.toast.show({text:atext_2,position:'bottom',cssClass:'red_toast'});}
else if(input_text == activation_code){successful_activation_fun();}
});

//========================================================

$("#activation_popup_type_1_but1").click(function(){

var atext_1 = (JSON.parse(localStorage.getItem("app-translate_arr")))["109"][localStorage.getItem("user-language")];
var atext_2 = (JSON.parse(localStorage.getItem("app-translate_arr")))["71"][localStorage.getItem("user-language")];

app.dialog.close();
app.dialog.create({title:'',cssClass:'activation_dialog activation_dialog_1',
content:
`
<div class="activation_dialog_content"><p>${atext_1}</p></div>
<div class="dialog_bottom_area"><button class="button gray_click close_dialog">${atext_2}</button></div>
`
}).open();
});

//========================================================

$("#activation_popup_type_2 .button").click(function(){

var atext_1 = ((JSON.parse(localStorage.getItem("app-translate_arr")))["110"][localStorage.getItem("user-language")]);
var atext_2 = (JSON.parse(localStorage.getItem("app-translate_arr")))["111"][localStorage.getItem("user-language")];
var atext_3 = (JSON.parse(localStorage.getItem("app-translate_arr")))["72"][localStorage.getItem("user-language")];

app.dialog.close();
app.dialog.create({title:'',cssClass:'activation_dialog activation_dialog_2',
content:
`
<div class="activation_dialog_content"><p>${atext_1}</p></div>
<div class="dialog_bottom_area">
<button class="button gray_click">${atext_2}</button>
<button class="button gray_click close_dialog">${atext_3}</button>
</div>
`,
on:{opened:function(){

$(".activation_dialog_2 .dialog_bottom_area .button:eq(0)").click(function(){
var atext_4 = (JSON.parse(localStorage.getItem("app-translate_arr")))["112"][localStorage.getItem("user-language")];
var atext_5 = (JSON.parse(localStorage.getItem("app-translate_arr")))["113"][localStorage.getItem("user-language")];
app.dialog.close();
localStorage.setItem("user-request_activation",(Math.trunc((new Date().getTime() + new Date().getTimezoneOffset()*60*1000)/1000)));
setTimeout(function(){
cordova.plugins.notification.local.schedule({
title:atext_4,
text:atext_5,
});
},2000);
});

}}
}).open();
});

//========================================================

$("#activation_popup_type_3 .button").click(function(){
window.plugins.launcher.canLaunch({packageName:'com.android.vending'},function(){
window.open("https://play.google.com/store/apps/details?id=com.football.korasport","_system"); },function(){
window.open("https://apkcombo.com/com.football.korasport","_system");
});
});

//========================================================

$("#activation_popup_type_4 .button").click(function(){

var app_name = "#"+(($("body").attr("app_name")).split("|")[1]).replace(" ","_");
var app_share_link = localStorage.getItem("app-share_link");

var poster_text = "تطبيق "+app_name+" لمشاهدة المباريات بث مباشر وبدون تقطيع ⚽️"+"\n\n"+
"شاهد قنوات بي ان سبورت المشفرة مجانا 😍"+"\n"+
"جميع القنوات الرياضية تعمل علي مدار 24 ساعة"+"\n\n"+
"حمله الآن من متجر جوجل بلاي"+"\n"+
"أو من خلال هذا الرابط👇🏻"+"\n\n"+
"https://play.google.com/store/apps/details?id="+BuildInfo.packageName;

var poster_image = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqgs32znhMAexG3of8wCl1kV76QhoH_VZpRIav21BKflgsVSxBhmndMcC_ipXa1abWExXUnbnEIQzfcZCAn4NIhUaPsYMZwrB07xDWD0t3LPyjyPxIAoDG-KUhLGeYURqMjp_ewGq11C9UHBE0Ryii5Bm1BkeuY-goCpHQAHlwH_WpIqITXldOpPXaMQY/s1000/cover.jpg";
window.plugins.socialsharing.shareViaFacebook(poster_text,poster_image,null,function(){ setTimeout(function(){successful_activation_fun();},4000); })

});

//========================================================

$("#activation_popup_type_5 .button").click(function(){

if(localStorage.getItem("app-device") == "android"){
window.open("https://play.google.com/store/apps/details?id="+BuildInfo.packageName,"_system");
}
else if(localStorage.getItem("app-device") == "ios"){
cordova.InAppBrowser.open("https://apps.apple.com/app/id"+(localStorage.getItem("app-ios_id"))+"?action=write-review",'_system');
}

setTimeout(function(){successful_activation_fun();},4000);

});

//========================================================

};

/*========================  successful_activation_fun  =======================*/

function successful_activation_fun(){

localStorage.setItem("user-successful_activation",(Math.trunc((new Date().getTime() + new Date().getTimezoneOffset()*60*1000)/1000)));

app.views.current.router.navigate({name:"match_tab_page"});
$("#index_toolbar .tab-link[href*='match_tab']").click();

localStorage.setItem("user-app_activation","full");$("body").attr("app_activation","full");

app.popup.close('#activation_popup');
app.dialog.close();

var atext_1 = (JSON.parse(localStorage.getItem("app-translate_arr")))["114"][localStorage.getItem("user-language")];
app.dialog.create({title:'',cssClass:'app_is_activated_dialog',
content:'<i class="ionicons-checkmark-circle-outline"></i><p>'+atext_1+'</p>',
on:{opened:function(){setTimeout(function(){app.dialog.close();},1500);}}
}).open();

}



