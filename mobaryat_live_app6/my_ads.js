

//setTimeout(function(){ check_force_ads_fun(); },(Math.floor(Math.random()*6)+18)*1000);

setTimeout(function(){ show_custom_app_open_ads_fun(); },2000);

setTimeout(function(){ create_force_admob_banner_2_fun(); },3000);


// Old Ads Unit
var admob_id_banner = "ca-app-pub-9012932067054814/5487729153";                 // Test : ca-app-pub-3940256099942544/6300978111
var admob_id_interstitial = "ca-app-pub-9012932067054814/9043830782";           // Test : ca-app-pub-3940256099942544/1033173712
var admob_id_rewarded_interstitial = "ca-app-pub-9012932067054814/8433559563";  // Test : ca-app-pub-3940256099942544/5354046379
var admob_id_app_open = "ca-app-pub-9012932067054814/6226095753";               // Test : ca-app-pub-3940256099942544/9257395921

/* // New Ads Unit
var admob_id_banner = "ca-app-pub-9012932067054814/5183543871";                 // Test : ca-app-pub-3940256099942544/6300978111
var admob_id_interstitial = "ca-app-pub-9012932067054814/9235303678";           // Test : ca-app-pub-3940256099942544/1033173712
var admob_id_rewarded_interstitial = "ca-app-pub-9012932067054814/2445458645";  // Test : ca-app-pub-3940256099942544/5354046379
var admob_id_app_open = "ca-app-pub-9012932067054814/1132376976";               // Test : ca-app-pub-3940256099942544/9257395921
*/


var ads_status = "enable";

if($("body").hasClass("app_in_review")){var ads_status = "disable";}

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

if(ads_status == "enable"){

localStorage.removeItem("lsads-last_click_any_ads");
localStorage.removeItem("lsads-last_show_app_open");
localStorage.removeItem("lsads-show_banner");
localStorage.setItem("lsads-loadfail_banner_counter",0);
localStorage.removeItem("lsads-show_force_banner");
localStorage.removeItem("lsads-load_interstitial");
localStorage.removeItem("lsads-load_rewarded_interstitial");
localStorage.removeItem("lsads-last_show_fullscreen_ads");

setTimeout(function(){ admob.start();admob_events_fun(); },500);

setTimeout(function(){ load_admob_app_open_fun(); },1000);

setTimeout(function(){
document.addEventListener("resume",function(){
var current_ms = Math.trunc((new Date().getTime())/1000);
var sub_min_last_show_app_open = (current_ms-(localStorage.getItem("lsads-last_show_app_open")))/60;
var sub_min_last_click_any_ads = (current_ms-(localStorage.getItem("lsads-last_click_any_ads")))/60;
if(sub_min_last_show_app_open > 8 && sub_min_last_click_any_ads > 5){ load_admob_app_open_fun(); }
});
},30*1000);

setTimeout(function(){ load_admob_banner_fun(); },2000);

setTimeout(function(){ load_admob_fullscreen_ads_fun(); },4000);

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

$(document).on("click",`
.p2_li_highlights,#p2_open_channel_popup_but,#p2_channel_not_active_but,
.p5_li_news,.p6_li_more_news,
.p13_swiper_slide,.p13_li_video,
.p14_chanpop_fixed_server_but,.p14_chanpop_static_server_but,
.p15_li_channel,.p15_sdialog_inapp_area .button
`,function(){

var minimum_minutes = 5;

if(!localStorage.getItem("lsads-load_interstitial") && !localStorage.getItem("lsads-load_rewarded_interstitial")){return;}

var current_ms = Math.trunc((new Date().getTime())/1000);
var sub_min_last_show_fullscreen_ads = (current_ms-(localStorage.getItem("lsads-last_show_fullscreen_ads")))/60;

if(sub_min_last_show_fullscreen_ads > minimum_minutes){

if(localStorage.getItem("lsads-load_interstitial") == "yes"){admob_interstitial.show();}
else if(localStorage.getItem("lsads-load_rewarded_interstitial") == "yes"){admob_rewarded_interstitial.show();}

}

});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

}

/*======================  show_custom_app_open_ads_fun  ======================*/

function show_custom_app_open_ads_fun(){

// Hmada Ads Url
var ads_url = "https://beginshello.com/fcv57tsp?key=ee66ff0cbe780bafa7e0a62cf1863a6b";
//var ads_url = "https://otieu.com/4/10244101";

// Ahmed Ads Url
//var ads_url = "https://www.profitableratecpm.com/z5tv7ku2u?key=167372b3ca376151dd96ff7afb2e778c";

var ads_type = "inappbrowser";

if(ads_status != "enable" || localStorage.getItem("user-finish_intro_settings") != "yes"){return;}

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

if(ads_type == "inappbrowser"){

if($("body").attr("app_dir") != "left"){var closebuttoncaption = "❌ تخطي الإعلان";}else{var closebuttoncaption = "❌ Close Ad";}

if(($("body").attr("app_dir") != "left" && localStorage.getItem("app-device") == "android") || ($("body").attr("app_dir") == "left" &&
localStorage.getItem("app-device") == "ios")){var lefttoright = "no";}else{var lefttoright = "yes";}

var mode_theme_color = getComputedStyle(document.documentElement).getPropertyValue('--mode_theme_color');
var ref = cordova.InAppBrowser.open(ads_url,'_blank','hardwareback=no,toolbarposition=top,location=yes,hidenavigationbuttons=yes,toolbarcolor='+mode_theme_color+
',clearcache=yes,clearsessioncache=yes,hideurlbar=yes,lefttoright='+lefttoright+',zoom=no,closebuttoncaption='+closebuttoncaption+',closebuttoncolor=#ffffff,fullscreen=yes');

}

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

if(ads_type == "iframe"){

app.popup.close('.popup');

app.popup.create({content:
`
<div class="open_app_ads_popup popup popup-model" >

<div id="open_app_ads_popup_progressbar" style="position:relative;overflow:hidden;z-index:1;background-color:#fff;
border:1px solid var(--rose_color);width:200px;height:9px;border-radius:50px;margin:28px auto 0;">
<span style="position:relative;display:block;z-index:99999;background-color:var(--rose_color);height:-webkit-fill-available;width:0;"></span>
</div>

<button class="button gray_click popup-close hidden" style="background-color:var(--rose_color);border-radius:50px;width:auto;
height:36px;padding:0 17px 0.5px;font-family:'myfont1';font-size:15.5px;font-weight:bold;letter-spacing:0.7px;
color:#fff;text-transform:capitalize;position:relative;z-index:99999;margin:22px auto 0;"></button>

<iframe sandbox="allow-same-origin allow-forms allow-scripts" src="${ads_url}" style="position:absolute;top:0;right:0;width:100%;height:100%;" ></iframe>

</div>
`
}).open();

$(".open_app_ads_popup")[0].style.setProperty('background-color','var(--light_bg_color2)','important');

if($("body").attr("app_dir") == "left"){$(".open_app_ads_popup .popup-close").text("Close Ad");$("#open_app_ads_popup_progressbar").css("direction","ltr");}
else{$(".open_app_ads_popup .popup-close").text("تخطي الإعلان");}

var interval_timer = 4;
var progressbar_interval = setInterval(function(){
var old_width = $("#open_app_ads_popup_progressbar span").width();
var new_width = old_width + ((100/((interval_timer*1000)/10))*200/100);
$("#open_app_ads_popup_progressbar span").css("width",new_width);
},10);

setTimeout(function(){
$("#open_app_ads_popup_progressbar").addClass("hidden");
$(".open_app_ads_popup .popup-close").removeClass("hidden");
clearInterval(progressbar_interval);
},4500);

}

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

}

/*============================  admob_events_fun  ============================*/

function admob_events_fun(){

document.addEventListener('admob.ad.dismiss',async()=>{
localStorage.setItem("lsads-last_click_any_ads",(Math.trunc((new Date().getTime())/1000)));
});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

document.addEventListener('admob.ad.load',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_app_open){
admob_app_open.show();
}});

document.addEventListener('admob.ad.show',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_app_open){

if(!localStorage.getItem("lsads-last_show_app_open")){
var limit_min_between_show = 5 - 2;     // meaning fullscreen ads show after 2 minutes of app start (5 - 1 >> after 1 min) || 5 number of minimum_minutes to fullscreen ads
localStorage.setItem("lsads-last_show_fullscreen_ads",(Math.trunc((new Date().getTime() - (limit_min_between_show*60*1000))/1000)));
}

localStorage.setItem("lsads-last_show_app_open",(Math.trunc((new Date().getTime())/1000)));
    
}});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

document.addEventListener('admob.ad.load',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_banner){
admob_banner.show();
}});

document.addEventListener('admob.ad.impression',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_banner){
$("body").addClass("admob_banner_show");
localStorage.setItem("lsads-show_banner","yes");
localStorage.setItem("lsads-loadfail_banner_counter",0);
}});

document.addEventListener('admob.ad.loadfail',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_banner){
if(localStorage.getItem("app-device") == "android" && window.innerHeight > window.innerWidth){
admob_banner.hide();
localStorage.removeItem("lsads-show_banner");
localStorage.setItem("lsads-loadfail_banner_counter",(localStorage.getItem("lsads-loadfail_banner_counter")*1)+1);
setTimeout(function(){ load_admob_banner_fun(); },(Math.floor(Math.random()*30)+30)*1000);
}
}});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

document.addEventListener('admob.ad.load',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_interstitial){
localStorage.setItem("lsads-load_interstitial","yes");
}});

document.addEventListener('admob.ad.impression',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_interstitial){
localStorage.setItem("lsads-last_show_fullscreen_ads",(Math.trunc((new Date().getTime())/1000)));
}});

document.addEventListener('admob.ad.dismiss',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_interstitial){
setTimeout(function(){ localStorage.removeItem("lsads-load_interstitial");load_admob_fullscreen_ads_fun(); },1000);
if($(".force_ads_popup").length){
localStorage.setItem("lsads-last_click_force_fullscreen_ads",(Math.trunc((new Date().getTime())/1000)));
$(".force_ads_popup *").detach();app.popup.close('.popup');
}
}});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

document.addEventListener('admob.ad.load',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_rewarded_interstitial){
localStorage.setItem("lsads-load_rewarded_interstitial","yes");
}});

document.addEventListener('admob.ad.impression',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_rewarded_interstitial){
localStorage.setItem("lsads-last_show_fullscreen_ads",(Math.trunc((new Date().getTime())/1000)));
}});

document.addEventListener('admob.ad.dismiss',async(evt)=>{if(evt.ad.opts.adUnitId == admob_id_rewarded_interstitial){
setTimeout(function(){ localStorage.removeItem("lsads-load_rewarded_interstitial");load_admob_fullscreen_ads_fun(); },1000);
if($(".force_ads_popup").length){
localStorage.setItem("lsads-last_click_force_fullscreen_ads",(Math.trunc((new Date().getTime())/1000)));
$(".force_ads_popup *").detach();app.popup.close('.popup');
}
}});

}

/*=========================  load_admob_app_open_fun  ========================*/

var admob_app_open;

function load_admob_app_open_fun(){

if(localStorage.getItem("user-finish_intro_settings") != "yes"){return;}

admob_app_open = new admob.AppOpenAd({
adUnitId:admob_id_app_open,
});

admob_app_open.load();

}

/*==========================  load_admob_banner_fun  =========================*/

var admob_banner;

function load_admob_banner_fun(){

if(localStorage.getItem("lsads-show_banner") == "yes" || localStorage.getItem("lsads-loadfail_banner_counter") > 2 /* max loadfail 3 times */ ){return;}

admob_banner = new admob.BannerAd({
adUnitId:admob_id_banner,
position:'bottom',
size:0             // To higt fill ads Use SMART_BANNER:5 not BANNER:0 - All Sizes BANNER:0 LARGE_BANNER:1 MEDIUM_RECTANGLE:2 FULL_BANNER:3 LEADERBOARD:4 SMART_BANNER:5
});

admob_banner.load();

}

/*======================  load_admob_fullscreen_ads_fun  =====================*/

function load_admob_fullscreen_ads_fun(){

if(localStorage.getItem("lsads-load_interstitial") == "yes" || localStorage.getItem("lsads-load_rewarded_interstitial") == "yes"){return;}

var ad_type = ["interstitial","rewarded_interstitial"][Math.floor(Math.random()*2)];

if(ad_type == "interstitial"){
load_admob_interstitial_fun();
setTimeout(function(){ if(localStorage.getItem("lsads-load_interstitial") != "yes"){load_admob_rewarded_interstitial_fun();} },7000);
}

else if(ad_type == "rewarded_interstitial"){
load_admob_rewarded_interstitial_fun();
setTimeout(function(){ if(localStorage.getItem("lsads-load_rewarded_interstitial") != "yes"){load_admob_interstitial_fun();} },7000);
}

setTimeout(function(){
if(localStorage.getItem("lsads-load_interstitial") != "yes" && localStorage.getItem("lsads-load_rewarded_interstitial") != "yes"){
setTimeout(function(){ load_admob_fullscreen_ads_fun(); },(Math.floor(Math.random()*120)+120)*1000);    // 2-4 minutes
}
},15*1000);

}

/*=======================  load_admob_interstitial_fun  ======================*/

var admob_interstitial;

function load_admob_interstitial_fun(){

if(localStorage.getItem("lsads-load_interstitial") == "yes"){return;}

admob_interstitial = new admob.InterstitialAd({
adUnitId:admob_id_interstitial,
});

admob_interstitial.load();

}

/*===================  load_admob_rewarded_interstitial_fun  =================*/

var admob_rewarded_interstitial;

function load_admob_rewarded_interstitial_fun(){

if(localStorage.getItem("lsads-load_rewarded_interstitial") == "yes"){return;}

admob_rewarded_interstitial = new admob.RewardedInterstitialAd({
adUnitId:admob_id_rewarded_interstitial,
});

admob_rewarded_interstitial.load();

}

/*===========================  check_force_ads_fun  ==========================*/

function check_force_ads_fun(ad_type){

if(ads_status != "enable" || !localStorage.getItem("user-app_activation") || $("body").attr("mobile_lang") != "ar" || localStorage.getItem("user-session_counter") < 3){return;}

var minimum_minutes = 12*60;	// 12 hours
//var minimum_minutes = 15;		// 15 minutes

var current_ms = Math.trunc((new Date().getTime())/1000);
var sub_min_last_click_force_banner = (current_ms-(localStorage.getItem("lsads-last_click_force_banner")))/60;
var sub_min_last_click_force_fullscreen_ads = (current_ms-(localStorage.getItem("lsads-last_click_force_fullscreen_ads")))/60;

if(!ad_type && sub_min_last_click_force_banner > minimum_minutes && sub_min_last_click_force_fullscreen_ads > minimum_minutes){
var ad_type = ["banner","fullscreen"][Math.floor(Math.random()*2)];
if(localStorage.getItem("app-device") == "ios"){var ad_type = "fullscreen";}
}

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

if(ad_type == "banner" && sub_min_last_click_force_banner > minimum_minutes){

var size_arr = [1,2,3,5];

size_arr.sort(()=>Math.random()-0.5);

create_force_admob_banner_fun(size_arr[0]);
setTimeout(function(){if(!$(".force_ads_popup").length && localStorage.getItem("lsads-show_force_banner") != "yes"){ create_force_admob_banner_fun(size_arr[1]); }},4000);
setTimeout(function(){if(!$(".force_ads_popup").length && localStorage.getItem("lsads-show_force_banner") != "yes"){ create_force_admob_banner_fun(size_arr[2]); }},8000);
setTimeout(function(){if(!$(".force_ads_popup").length && localStorage.getItem("lsads-show_force_banner") != "yes"){ create_force_admob_banner_fun(size_arr[3]); }},12000);

}

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

if(ad_type == "fullscreen" && sub_min_last_click_force_fullscreen_ads > minimum_minutes){

if(localStorage.getItem("lsads-load_interstitial") == "yes" || localStorage.getItem("lsads-load_rewarded_interstitial") == "yes"){
create_force_fullscreen_ads_popup_fun();
}
else{
load_admob_fullscreen_ads_fun();
setTimeout(function(){
if(localStorage.getItem("lsads-load_interstitial") == "yes" || localStorage.getItem("lsads-load_rewarded_interstitial") == "yes"){
create_force_fullscreen_ads_popup_fun();
}
},5000);
}

}

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

}

/*======================  create_force_admob_banner_fun  =====================*/

var force_admob_banner;

function create_force_admob_banner_fun(ad_size){

if(localStorage.getItem("app-device") == "ios"){return;}

if(!ad_size){var ad_size = 2;}

var ad_offset = 0;if(ad_size == 2){var ad_offset = 105;}

force_admob_banner = new admob.BannerAd({
adUnitId:admob_id_banner,
position:'top',
offset:ad_offset,
size:ad_size
});

force_admob_banner.load();

setTimeout(function(){if(!$(".force_ads_popup").length && localStorage.getItem("lsads-show_force_banner") != "yes"){force_admob_banner.hide();}},3900);

force_admob_banner.on('loadfail',()=>{force_admob_banner.hide();});

force_admob_banner.on('load',()=>{
if(!$(".force_ads_popup").length){
setTimeout(function(){ create_force_banner_popup_fun(ad_size);localStorage.setItem("lsads-show_force_banner","yes"); },500);
setTimeout(function(){ force_admob_banner.show(); },1500);
}
});

force_admob_banner.on('dismiss',()=>{
localStorage.setItem("lsads-last_click_force_banner",(Math.trunc((new Date().getTime())/1000)));
force_admob_banner.hide();
$(".force_ads_popup *").detach();
app.popup.close('.popup');
});

}

/*==================  create_force_fullscreen_ads_popup_fun  =================*/

function create_force_fullscreen_ads_popup_fun(){

if(document.fullscreenElement){document.exitFullscreen();}

app.popup.close('.popup');

app.popup.create({content:
`
<div class="force_ads_popup popup popup-model" >
<i class="ionicons-phone-portrait-outline"></i>
<h2></h2>
<button id="force_interstitial_popup_but" class="button gray_click"></button>
</div>
`
}).open();

var translate_arr = JSON.parse(localStorage.getItem("app-translate_arr"));
var user_language = localStorage.getItem("user-language");
var text_1 = translate_arr["122"][user_language];
var text_2 = translate_arr["123"][user_language];
$(".force_ads_popup h2").html(text_1);
$("#force_interstitial_popup_but").text(text_2);

$("#force_interstitial_popup_but").click(function(){

if(localStorage.getItem("lsads-load_interstitial") == "yes"){admob_interstitial.show();}
else if(localStorage.getItem("lsads-load_rewarded_interstitial") == "yes"){admob_rewarded_interstitial.show();}
else{$(".force_ads_popup *").detach();app.popup.close('.popup');}
});

}

/*======================  create_force_banner_popup_fun  =====================*/

function create_force_banner_popup_fun(ad_size){

var time = Math.floor(Math.random() * 6) + 10;		// 10 to 15 seconds

var force_ads_time_interval = setInterval(function(){
var new_time = (($("#force_ads_time_p").text())*1)-1;
if(new_time >= 0){$("#force_ads_time_p").text(new_time);}
if(new_time == 0 || !$(".force_ads_popup").length){
$("#force_ads_warning_p").css("margin-top","-5px");
$("#force_ads_warning_p").html(($("#force_ads_warning_p").html()).replace((($("#force_ads_warning_p").html()).split("<br>")[0]),
"<span style='font-size:19px;line-height:38px;'>&#11014;&#65039; &#11014;&#65039; &#11014;&#65039; &#11014;&#65039; &#11014;&#65039; &#11014;&#65039; &#11014;&#65039; &#11014;&#65039; &#11014;&#65039;</span>"));
$("#force_ads_warning_p").html(($("#force_ads_warning_p").html()).replace("ثم إضغط","الآن إضغط").replace("now click","then click"));
clearInterval(force_ads_time_interval);}
},1000);

if(document.fullscreenElement){document.exitFullscreen();}

app.popup.close('.popup');

app.popup.create({content:
`
<div class="force_ads_popup popup popup-model" >

<div id="force_ads_top_area" ad_size="${ad_size}"></div>

<p id="force_ads_warning_p"></p>

<ul id="force_ads_game_ul" class="can_answer hidden" target_country="0" >

<ol></ol>
<li><p class="force_ads_game_team_p" id="force_ads_game_team_p1"></p><p class="force_ads_game_team_p" id="force_ads_game_team_p2"></p></li>
<li><p class="force_ads_game_team_p" id="force_ads_game_team_p4"></p><p class="force_ads_game_team_p" id="force_ads_game_team_p3"></p></li>

<div id="force_ads_game_tlogo_div">
<img id="force_ads_game_tlogo" src="" />
<img class="force_ads_game_answer_logo hidden" type="true" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4cpn87cHSOF5NjqV4u_RY351_1CSmcOqlZes9W2D3WyI56X4m_wL5ZQf5vA47cy5lMAToZT_Zn4a7ahPJWLRn-GGPg1ehd-pxWLKemN3Gs66tjFOfl1pASTzuDuw63RjTGgE46nIxYZJu_5mrZwXshhCAVDEHE0u-S1zc6wf9X-T2kr89kEpZAAY4Vhk/s800/tick.png" />
<img class="force_ads_game_answer_logo hidden" type="false" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh11oNwLcrh27fRUMod_lTe7Nq71AMQ0wHSWUdEn4AtBxKADo1GZyuMVs6IoUXqcf-PjLAFNfVQ1S2kOQR5A8_VbjjpBGLSz7z96qk5BZ8NCO3wOegevn8kK4Z0Y5UQGhefMxfP7hG9ChS7ueUqzPeXbMI63M_fz1L8GCdvLreQH089uqbmUP3L5wrAdd4/s800/cross.png" />
<div id="force_ads_game_preloader" class="preloader"><span class="preloader-inner"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="16"></circle></svg></span></div>
</div>

</ul>

<div id="force_ads_result_div"></div>

</div>
`
}).open();

var translate_arr = JSON.parse(localStorage.getItem("app-translate_arr"));
var user_language = localStorage.getItem("user-language");
var text_1 = translate_arr["115"][user_language];
var text_2 = translate_arr["116"][user_language];
$("#force_ads_warning_p").html(text_1);
$("#force_ads_game_ul ol").text(text_2);
$("#force_ads_time_p").text(time);

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

////setTimeout(function(){create_random_question_fun();},100);

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

$(".force_ads_game_team_p").click(function(){

if(!$("#force_ads_game_ul").hasClass("can_answer")){return;}

$("#force_ads_game_ul").removeClass("can_answer");

var el = $(this);

el.attr("type","chacking");

setTimeout(function(){el.removeAttr("type");},250);
setTimeout(function(){el.attr("type","chacking");},500);
setTimeout(function(){el.removeAttr("type");},750);

setTimeout(function(){
if(el.hasClass("true_answer")){el.attr("type","true");$("#force_ads_result_div").append('<span type="true"></span>');
$(".force_ads_game_answer_logo[type='true']").removeClass("hidden");}
else{el.attr("type","false");$("#force_ads_result_div").append('<span type="false"></span>');
$(".force_ads_game_answer_logo[type='false']").removeClass("hidden");}
},1100);

setTimeout(function(){create_random_question_fun();},2200);

});

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

var question_team_arr = {
"GB":["108","110","104","114","109","105","116","113","38","106","15","10","107"],
"ES":["131","175","132","134","144","146","154","139","140","168","133","174","135","159","138"],
"IT":["224","226","227","232","225","228","236","234","235","316"],
"DE":["331","333","341","7171","337","354","332","339","392","350","352"],
"FR":["480","470","471","478","469","486","465","491","479"],
"EG":["8200","8201","22143","50882","50877","8299","8310","8303","8312"],
"SA":["5457","7549","8946","8941","8593","8942","8943","9976","8945","8228","20733"]
}

var rnkey_arr = [];
$.each(question_team_arr,function(key){rnkey_arr.push(key);});
for(var j,x,i=rnkey_arr.length;i;j=parseInt(Math.random()*i),x=rnkey_arr[--i],rnkey_arr[i]=rnkey_arr[j],rnkey_arr[j]= x);
if($.inArray(localStorage.getItem("user-country_code"),rnkey_arr) > -1){
rnkey_arr.splice(rnkey_arr.findIndex(el=>el==localStorage.getItem("user-country_code")),1);
rnkey_arr.unshift(localStorage.getItem("user-country_code"));}
var duplicate_arr = {};
rnkey_arr.forEach(function(key){duplicate_arr[key] = question_team_arr[key];});
question_team_arr = duplicate_arr;

localStorage.setItem("ls_question_team_arr",JSON.stringify(question_team_arr));

//*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

function create_random_question_fun(){

$("#force_ads_game_preloader").removeClass("hidden");
$(".force_ads_game_team_p").text("").removeAttr("team_id").removeAttr("type").removeClass("true_answer");

$(".force_ads_game_answer_logo").addClass("hidden");
$("#force_ads_game_tlogo").attr("src","");

var user_language_id = localStorage.getItem("user-language_id");

var question_team_arr = JSON.parse(localStorage.getItem("ls_question_team_arr"));

$.each(question_team_arr,function(key){for(var j,x,i=question_team_arr[key].length;i;j=parseInt(Math.random()*i),
x=question_team_arr[key][--i],question_team_arr[key][i]=question_team_arr[key][j],question_team_arr[key][j]=x);});

var target_country = $("#force_ads_game_ul").attr("target_country");

var team_1 = question_team_arr[Object.keys(question_team_arr)[target_country]][0];
var team_2 = question_team_arr[Object.keys(question_team_arr)[target_country]][1];
var team_3 = question_team_arr[Object.keys(question_team_arr)[target_country]][2];
var team_4 = question_team_arr[Object.keys(question_team_arr)[target_country]][3];

var json_url = "https://webws.365scores.com/web/squads/?langId="+user_language_id+
"&competitors="+team_1+","+team_2+","+team_3+","+team_4;

$.ajax({url:json_url,dataType:"json",
success:function(data){

for(var i = 0; i < data["competitors"].length; i++){
$("#force_ads_game_team_p"+(i+1)).text(data["competitors"][i]["name"]).attr("team_id",data["competitors"][i]["id"]);}

var true_team_id = data["competitors"][Math.floor(Math.random()*3)]["id"];
$("#force_ads_game_ul").addClass("can_answer");
$("#force_ads_game_tlogo").attr("src","https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/"+true_team_id);
$(".force_ads_game_team_p[team_id='"+true_team_id+"']").addClass("true_answer");
$("#force_ads_game_ul").removeClass("hidden");
$("#force_ads_game_preloader").addClass("hidden");
var next_country = (target_country*1)+1;
if(next_country > Object.keys(question_team_arr).length-1){var next_country = 0;}
$("#force_ads_game_ul").attr("target_country",next_country);

}
});

}

}

/*=====================  create_force_admob_banner_2_fun  ====================*/

var force_admob_banner_2;

function create_force_admob_banner_2_fun(){

if(localStorage.getItem("user-session_counter") < 3){return;}

var minimum_minutes = 5;
var current_ms = Math.trunc((new Date().getTime())/1000);
var sub_min_last_click_force_banner_2 = (current_ms-(localStorage.getItem("lsads-last_click_force_banner_2")))/60;
if(sub_min_last_click_force_banner_2 < minimum_minutes){return;}

force_admob_banner_2 = new admob.BannerAd({
adUnitId:admob_id_banner,
position:'top',
offset:105,
size:2
});

force_admob_banner_2.load();

force_admob_banner_2.on('dismiss',()=>{
localStorage.setItem("lsads-last_click_force_banner_2",(Math.trunc((new Date().getTime())/1000)));
force_admob_banner_2.hide();
$(".force_ads_popup *").detach();
app.popup.close('.popup');
});

force_admob_banner_2.on('load',()=>{
if(!$(".force_ads_popup").length){

setTimeout(function(){ force_admob_banner_2.show(); },1000);
setTimeout(function(){ app.popup.close('.force_ads_popup');force_admob_banner_2.hide(); },25*1000);

setTimeout(function(){

if(document.fullscreenElement){document.exitFullscreen();}

app.popup.close('.popup');

app.popup.create({content:
`
<div class="force_ads_popup popup popup-model" >

<div id="force_ads_top_area" ad_size="2"></div>

<p id="force_ads_warning_p">
يرجي الضغط علي هذا الإعلان
<br>
لمشاهدة المباريات مجانا بدون تقطيع
<br>
ولتجنب توقف التطبيق لديك
</p>

</div>
`
}).open();

},500);

}
});

}


