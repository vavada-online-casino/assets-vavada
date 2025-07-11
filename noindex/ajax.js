(function ($) {
  $(function () {
    $("#panel").load("https://cdn.jsdelivr.net/gh/vavada-online-casino/assets-vavada@main/noindex/panel.html.js", function(response, status, xhr) {
      if (status == "error") {
        console.error("Error loading panel.html.js: " + xhr.status + " " + xhr.statusText);
      }
    });
    $("#block_big").load("https://cdn.jsdelivr.net/gh/vavada-online-casino/assets-vavada@main/noindex/gameBig.html.js", function(response, status, xhr) {
      if (status == "error") {
        console.error("Error loading gameBig.html.js: " + xhr.status + " " + xhr.statusText);
      }
    });
    $("#sport").load("https://cdn.jsdelivr.net/gh/vavada-online-casino/assets-vavada@main/noindex/sport.html.js", function(response, status, xhr) {
      if (status == "error") {
        console.error("Error loading sport.html.js: " + xhr.status + " " + xhr.statusText);
      }
    });
  });
})(jQuery);

!function (n) { "use strict"; n.loadCSS || (n.loadCSS = function () { }); var o = loadCSS.relpreload = {}; if (o.support = function () { var e; try { e = n.document.createElement("link").relList.supports("preload") } catch (t) { e = !1 } return function () { return e } }(), o.bindMediaToggle = function (t) { var e = t.media || "all"; function a() { t.addEventListener ? t.removeEventListener("load", a) : t.attachEvent && t.detachEvent("onload", a), t.setAttribute("onload", null), t.media = e } t.addEventListener ? t.addEventListener("load", a) : t.attachEvent && t.attachEvent("onload", a), setTimeout(function () { t.rel = "stylesheet", t.media = "only x" }), setTimeout(a, 3e3) }, o.poly = function () { if (!o.support()) for (var t = n.document.getElementsByTagName("link"), e = 0; e < t.length; e++) { var a = t[e]; "preload" !== a.rel || "style" !== a.getAttribute("as") || a.getAttribute("data-loadcss") || (a.setAttribute("data-loadcss", !0), o.bindMediaToggle(a)) } }, !o.support()) { o.poly(); var t = n.setInterval(o.poly, 500); n.addEventListener ? n.addEventListener("load", function () { o.poly(), n.clearInterval(t) }) : n.attachEvent && n.attachEvent("onload", function () { o.poly(), n.clearInterval(t) }) } "undefined" != typeof exports ? exports.loadCSS = loadCSS : n.loadCSS = loadCSS }("undefined" != typeof global ? global : this);