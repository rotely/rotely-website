(function () {
var a = window.ROTELY_ADS || {}, d = document, w = window;
var g = String(a.google || ""), m = String(a.meta || ""), u = String(a.ms || "");
var ok = /^[A-Za-z0-9_-]{1,64}$/;
function load(src) { var s = d.createElement("script"); s.async = true; s.src = src; d.head.appendChild(s); }
if (ok.test(g)) {
w.dataLayer = w.dataLayer || [];
w.gtag = w.gtag || function () { w.dataLayer.push(arguments); };
w.gtag("js", new Date());
w.gtag("config", g);
load("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(g));
}
if (ok.test(m) && !w.fbq) {
var n = w.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
if (!w._fbq) w._fbq = n;
n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
w.fbq("init", m);
w.fbq("track", "PageView");
load("https://connect.facebook.net/en_US/fbevents.js");
}
if (ok.test(u)) {
w.uetq = w.uetq || [];
var s = d.createElement("script");
s.async = true;
s.src = "https://bat.bing.com/bat.js";
s.onload = function () { var q = w.uetq; w.uetq = new w.UET({ ti: u, q: q }); w.uetq.push("pageLoad"); };
d.head.appendChild(s);
}
})();
