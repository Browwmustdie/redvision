//<![CDATA[
// Menu Top
$(document).ready(function(){var str=location.href.toLowerCase();$('.navigasi-atas ul li a').each(function(){if(str.indexOf(this.href.toLowerCase())>-1){$("li.highlight").removeClass("highlight");$(this).parent().addClass("highlight")}})})
$(function(){var pull=$('#pull');menu=$('.navigasi-atas ul');menuHeight=menu.height();$(pull).on('click',function(e){e.preventDefault();menu.slideToggle()});$(window).resize(function(){var w=$(window).width();if(w>320&&menu.is(':hidden')){menu.removeAttr('style')}})});

// Recent Posts and Recent Comments
$(".widget-content").each(function(){var e=$(this).text();if(e.match("recentcomments")){$.ajax({url:"/feeds/comments/default?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<ul class="adtopik-comments">';for(var r=0;r<e.feed.entry.length;r++){if(r==e.feed.entry.length)break;for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}if("content"in e.feed.entry[r]){var s=e.feed.entry[r].content.$t}else if("summary"in b_rc){var s=e.feed.entry[r].summary.$t}else var s="";var o=/<\S[^>]*>/g;s=s.replace(o,"");if(s.length>90){s=""+s.substring(0,70)+"..."}var u=e.feed.entry[r].title.$t;var a=e.feed.entry[r].author[0].name.$t;var f=e.feed.entry[r].author[0].gd$image.src;if(f.match("http://img1.blogblog.com/img/blank.gif")){var l='<img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/>'}else{if(f.match("http://img2.blogblog.com/img/b16-rounded.gif")){var l='<img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/>'}else{var l='<div class="avatarImg avatarcomments"><img class="avatarcomments" src="'+f+'"/></div>'}}n+="<li>"+l+'<a href="'+t+'">'+a+'</a><span>"'+s+'"</span></li>'}n+='</ul><div class="clear"/>';$(".widget-content").each(function(){if($(this).text().match("recentcomments")){$(this).html(n);$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}if(e.match("randomposts")){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){var t=e.feed.entry.length;var n=0;var r=t-5;var i=Math.floor(Math.random()*(r-n+1))+n;$.ajax({url:"/feeds/posts/default?alt=json-in-script&start-index="+i+"&max-results=5",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<ul class="adtopik-posts">';for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].author[0].name.$t;var u=e.feed.entry[r].published.$t.substring(0,10);var a=e.feed.entry[r].category[0].term;var f=e.feed.entry[r].content.$t;var l=$("<div>").html(f);var c=l.find("img:first").attr("src");var h=e.feed.entry[r].media$thumbnail.url;if(c===undefined){var p='<a class="arlina-tmb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"/>'}else{var p='<a class="arlina-tmb" href="'+t+'" style="background:url('+c+') no-repeat center center;background-size: cover"/>'}n+="<li>"+p+'<div class="post-arltopik"><h3 class="rcp-title"><a href="'+t+'">'+s+'</a></h3><span class="topik-date">'+u+'</span><span class="topik-author">'+o+"</span></div></li>"}n+='</ul><div class="clear"/>';$(".widget-content").each(function(){if($(this).text().match("randomposts")){$(this).html(n);$(this).find(".arlina-tmb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}})}if(e.match("recentposts")){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<ul class="adtopik-posts">';for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].author[0].name.$t;var u=e.feed.entry[r].published.$t.substring(0,10);var a=e.feed.entry[r].category[0].term;var f=e.feed.entry[r].content.$t;var l=$("<div>").html(f);var c=l.find("img:first").attr("src");var h=e.feed.entry[r].media$thumbnail.url;if(c===undefined){var p='<a class="arlina-tmb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"/>'}else{var p='<a class="arlina-tmb" href="'+t+'" style="background:url('+c+') no-repeat center center;background-size: cover"/>'}n+="<li>"+p+'<div class="post-arltopik"><h3 class="rcp-title"><a href="'+t+'">'+s+'</a></h3><span class="topik-date">'+u+'</span><span class="topik-author">'+o+"</span></div></li>"}n+='</ul><div class="clear"/>';$(".widget-content").each(function(){if($(this).text().match("recentposts")){$(this).html(n);$(this).find(".arlina-tmb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}})}})

// Main Menu
var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){if($(this).next().length>0){$(this).addClass("parent")}});$(".clickmenu").click(function(e){e.preventDefault();$(this).toggleClass("active");$(".nav").toggle()});adjustMenu()});$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth;adjustMenu()});var adjustMenu=function(){if(ww<768){$(".clickmenu").css("display","inline-block");if(!$(".clickmenu").hasClass("active")){$(".nav").hide()}else{$(".nav").show()}$(".nav li").unbind("mouseenter mouseleave");$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault();$(this).parent("li").toggleClass("hover")})}else if(ww>=768){$(".clickmenu").css("display","none");$(".nav").show();$(".nav li").removeClass("hover");$(".nav li a").unbind("click");$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")})}}

// Simple Tab
!function(a){"use strict";var b=function(b,c){var d=this;d.element=b,d.$element=a(b),d.tabs=d.$element.children(),d.options=a.extend({},a.fn.mtabs.defaults,c),d.current_tab=0,d.init()};b.prototype={init:function(){var a=this;a.tabs.length&&(a.build(),a.buildTabMenu())},build:function(){var b=this,c=b.options,d=c.tab_text_el,e=c.container_class;b.tab_names=[],b.$wrapper=b.$element.wrapInner('<div class="'+e+'" />').find("."+e),b.tabs.wrapAll('<div class="'+c.tabs_container_class+'" />'),b.tabs.each(function(c,e){var f,g=a(e),h=d;f=g.find(h).filter(":first").hide().text(),b.tab_names.push(f)}),a.isFunction(c.onReady)&&c.onReady.call(b.element)},buildTabMenu:function(){for(var b,c=this,d=c.options,e=d.tabsmenu_el,f=c.tab_names,g="<"+e+' class="'+d.tabsmenu_class+'">',h=0,i=f.length,j=function(){var a=arguments;return d.tmpl.tabsmenu_tab.replace(/\{[0-9]\}/g,function(b){var c=Number(b.replace(/\D/g,""));return a[c]||""})};i>h;h++)g+=j(h+1,f[h]);g+="</"+e+">",c.$tabs_menu=a(g).prependTo(c.$wrapper),b=c.$tabs_menu.find(":first")[0].nodeName.toLowerCase(),c.$tabs_menu.on("click",b,function(b){var d=a(this),e=d.index();c.show(e),b.preventDefault()}).find(":first").trigger("click")},show:function(b){var c=this,d=c.options,e=d.active_tab_class;c.tabs.hide().filter(":eq("+b+")").show(),c.$tabs_menu.children().removeClass(e).filter(":eq("+b+")").addClass(e),a.isFunction(d.onTabSelect)&&b!==c.current_tab&&d.onTabSelect.call(c.element,b),c.current_tab=b},destroy:function(){var a=this,b=a.options.tab_text_el;a.$tabs_menu.remove(),a.tabs.unwrap().unwrap(),a.tabs.removeAttr("style"),a.tabs.children(b+":first").removeAttr("style"),a.$element.removeData("mtabs")}},a.fn.mtabs=function(c,d){return this.each(function(){var e,f=a(this),g=f.data("mtabs");e="object"==typeof c&&c,g||f.data("mtabs",g=new b(this,e)),"string"==typeof c&&g[c](d)})},a.fn.mtabs.defaults={container_class:"tabs",tabs_container_class:"ximp-content",active_tab_class:"active-tab",tab_text_el:"h1, h2, h3, h4, h5, h6",tabsmenu_class:"ximple-menu",tabsmenu_el:"ul",tmpl:{tabsmenu_tab:'<li class="tab-{0}"><span>{1}</span></li>'},onTabSelect:null}}(window.jQuery,window,document);
//]]>
