(function(){
var T="https://app.rotely.co/t",K="rotely_src",C="rotely_clk",U="utm_medium utm_campaign utm_term utm_content",I="rotely_internal",d=document,l=location;
function get(k){try{return localStorage.getItem(k)||""}catch{return ""}}
function put(k,v){try{localStorage[v?"setItem":"removeItem"](k,v)}catch{}}
function q(k){try{return new URLSearchParams(l.search).get(k)||""}catch{return ""}}
var i=q("internal");if(i)put(I,i=="1"&&i);if(i=="1"||get(I)=="1")return;
function send(x){var b=JSON.stringify(x);try{if(!navigator.sendBeacon(T,b))throw 0}catch{try{var r=fetch(T,{method:"POST",body:b,keepalive:true,mode:"no-cors"});if(r&&typeof r.catch=="function")r.catch(function(){})}catch{}}}
send({p:l.pathname,r:d.referrer,u:l.href});
function event(e,w){send({e:e,w:w,s:get(K).toLowerCase().replace(/[^a-z0-9._:-]/g,"").slice(0,80)})}
function clk(){try{return JSON.parse(get(C))||{}}catch{}return{}}
function each(s,f){s.split(" ").forEach(f)}
var h="",o=clk(),n={},m,v;
if(!get(K)){try{h=d.referrer?new URL(d.referrer).hostname:""}catch{}
if(v=q("utm_source"))put(K,v);else if(h&&!/(^|\.)rotely\.co$/.test(h))put(K,"ref:"+h)}
each("gclid gbraid wbraid fbclid msclkid",function(k){if(/^[\w.-]{1,200}$/.test(v=q(k)))n.click_id=v,n.click_type=k});
each(U,function(k){if(v=q(k).toLowerCase().replace(/[^a-z0-9._-]/g,"").slice(0,40))n[k]=m=v});
if(n.click_id?n.click_id!=o.click_id:m&&!o.click_id&&!o.utm_campaign)put(C,JSON.stringify(n));
function fill(){var c=clk();c.src=get(K).slice(0,80);
each("src "+U+" click_id click_type",function(k){d.querySelectorAll('input[name="'+k+'"]').forEach(function(f){if(c[k]&&!f.value)f.value=c[k]})});
}
d.readyState<"l"?fill():d.addEventListener("DOMContentLoaded",fill);
(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,d,"clarity","script","z916qssiqm");
var qv=0,vis=0,sc=0,started=0,t0=d.visibilityState=="visible"?Date.now():null;
function QV(){if(qv)return;qv=1;try{if(typeof fbq=="function")fbq("trackCustom","QualityVisit")}catch{}}
function chk(){var now=Date.now();if(t0!==null)vis+=Math.max(0,now-t0);t0=d.visibilityState=="visible"?now:null;if(t0===null)return;var h=d.documentElement,m=Math.max(1,h.scrollHeight-innerHeight);if((scrollY/m)>=.5)sc=1;if(sc&&vis>=45e3)QV()}
addEventListener("scroll",chk,{passive:true});setInterval(chk,5e3);d.addEventListener("visibilitychange",chk);
d.addEventListener("focusin",function(e){var f=e.target&&e.target.form;if(f&&f.id=="setup-form"){if(!started){started=1;event("form_start","setup")}QV()}});
function cta(a){try{var u=new URL(a.href,l.href);if(u.origin=="https://app.rotely.co"&&u.pathname=="/demo")return "demo";if(u.origin=="https://rotely.co"||u.origin=="https://www.rotely.co"){if(u.hash=="#setup"&&(u.pathname=="/"||u.pathname=="/start"))return "setup";if(u.pathname=="/start")return "start"}}catch{}return ""}
d.addEventListener("click",function(e){var a=e.target&&e.target.closest&&e.target.closest("a[href]"),w=a&&cta(a);if(w){event("cta_click",w);if(w=="demo")QV()}});
})();
