// ==UserScript==
// @name        doxter's Zoho skype2sip
// @namespace   http://www.doxter.de
// @description clickable telephone numbers (SIP)
// @include     https://crm.zoho.com/*
// @match       https://crm.zoho.com/crm/*
// @version     1
// ==/UserScript==

var pageURLCheckTimer = setInterval (
    function () {
        if (    this.lastPathStr  !== location.pathname
            ||  this.lastQueryStr !== location.search
            ||  this.lastPathStr   === null
            ||  this.lastQueryStr  === null
        ) {
            this.lastPathStr  = location.pathname;
            this.lastQueryStr = location.search;
            gmMain ();
        }
    }
    , 222
);

function gmMain () {
    if (window.self === window.top)
        alert ('"New" main (top) page loaded.');
    else
        alert ('"New" iframed page loaded.');
    regex = /skype:[\+]*(\d[\d\s\/]*\d).*/gi
    replace ="sip:$1"
    
    a=document.getElementById("headervalue_Phone").getElementsByTagName('a')[0]
    a.href=a.href.replace(regex,replace)
    a=document.getElementById("headervalue_Mobile").getElementsByTagName('a')[0]
    a.href=a.href.replace(regex,replace)
     a=document.getElementById("headervalue_Other").getElementsByTagName('a')[0]
    a.href=a.href.replace(regex,replace) //untestet kein Beispiel gefunden
    a=document.getElementById("headervalue_Home").getElementsByTagName('a')[0]
    a.href=a.href.replace(regex,replace) //untestet kein Beispiel gefunden
    
    a=document.getElementById("value_Phone").getElementsByTagName('a')[0]
    a.href=a.href.replace(regex,replace)
    a=document.getElementById("value_Mobile").getElementsByTagName('a')[0]
    a.href=a.href.replace(regex,replace)
    a=document.getElementById("value_Other").getElementsByTagName('a')[0]
    a.href=a.href.replace(regex,replace) //untestet kein Beispiel gefunden
    a=document.getElementById("value_Home").getElementsByTagName('a')[0]
    a.href=a.href.replace(regex,replace) //untestet kein Beispiel gefunden
    
}
