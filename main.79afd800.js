parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".main-carousel"),t=new Flickity(e,{cellAlign:"center",contain:!0,arrowShape:!1,pageDots:!1}),n=document.querySelector(".navbar"),o=document.querySelector(".menu__toggler"),c=document.querySelector(".menu__buy"),l=document.querySelector(".menu__brand-link"),i=document.querySelector("body"),s=document.querySelector(".announcement__video"),a=document.querySelector(".announcement__video-clicker");function r(e,t){var n=document.getElementById(e),o=document.createElement("DIV");o.setAttribute("class","img-magnifier-glass"),n.parentElement.insertBefore(o,n),o.style.backgroundImage="url('"+n.src+"')",o.style.backgroundRepeat="no-repeat",o.style.backgroundSize=n.width*t+"px "+n.height*t+"px";var c=3,l=o.offsetWidth/2,i=o.offsetHeight/2;function s(e){e.preventDefault();var s=function(e){var t,o=0,c=0;return e=e||window.event,t=n.getBoundingClientRect(),o=e.pageX-t.left,c=e.pageY-t.top,o-=window.pageXOffset,c-=window.pageYOffset,{x:o,y:c}}(e),a=s.x,r=s.y;a>n.width-l/t&&(a=n.width-l/t),a<l/t&&(a=l/t),r>n.height-i/t&&(r=n.height-i/t),r<i/t&&(r=i/t),o.style.left=a-l+"px",o.style.top=r-i+"px",o.style.backgroundPosition="-"+(a*t-l+c)+"px -"+(r*t-i+c)+"px"}o.addEventListener("mousemove",s),n.addEventListener("mousemove",s),o.addEventListener("touchmove",s),n.addEventListener("touchmove",s)}o.onclick=function(){o.classList.toggle("menu__toggler--active"),c.classList.toggle("menu__buy--active"),n.classList.toggle("navbar--open"),l.classList.toggle("menu__brand-link--open"),i.classList.toggle("header--open")},n.onclick=function(){o.classList.toggle("menu__toggler--active"),c.classList.toggle("menu__buy--active"),n.classList.toggle("navbar--open"),l.classList.toggle("menu__brand-link--open"),i.classList.toggle("header--open")},a.onclick=function(){s.classList.toggle("announcement__video--active"),a.classList.toggle("announcement__video-clicker--active")},r("myimage",3);var u=document.getElementById("button-scroll");function d(){document.body.scrollTop>20||document.documentElement.scrollTop>20?u.style.display="block":u.style.display="none"}window.onscroll=function(){d()},u.onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.79afd800.js.map