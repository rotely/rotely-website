(function(){
var T="https://app.rotely.co/t",K="rotely_src",C="rotely_clk",U="utm_medium utm_campaign utm_term utm_content",I="rotely_internal",d=document,l=location;
function get(k){try{return localStorage.getItem(k)||""}catch{return ""}}
function put(k,v){try{localStorage[v?"setItem":"removeItem"](k,v)}catch{}}
function q(k){try{return new URLSearchParams(l.search).get(k)||""}catch{return ""}}
var i=q("internal");if(i)put(I,i=="1"&&i);if(i=="1"||get(I)=="1")return;
var b=JSON.stringify({p:l.pathname,r:d.referrer,u:l.href});
try{if(!navigator.sendBeacon(T,b))throw 0}catch{try{fetch(T,{method:"POST",body:b,keepalive:true,mode:"no-cors"})}catch{}}
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
d.readyState<"l"?fill():d.addEventListener("DOMContentLoaded",fill)
})();
