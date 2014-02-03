// ==UserScript==
// @name        doxter's Zoho skype2sip
// @namespace   http://www.doxter.de
// @description clickable telephone numbers (SIP)
// @include     https://crm.zoho.com/*
// @match       https://crm.zoho.com/crm/*
// @version     0.6
// @grant       none
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
    //if (window.self === window.top) 
        alert ('"New" main (top) page loaded.');
    //else
    //    alert ('"New" iframed page loaded.');
    
    regex = /skype:[\+]*(\d[\d\s\/\(\)]*\d).*/gi;
    replace ="sip:$1";
    
    var index;
    var ids = ["headervalue_Phone","value_Phone","headervalue_Mobile", "headervalue_Other","headervalue_Home","value_Mobile","value_Other","value_Home"];
    for (index = 0; index < ids.length; ++index) {
        a=document.getElementById(ids[index]);
        if (a !== undefined) {
            a=a.getElementsByTagName('a')[0];
            alert(ids[index] + ": " +a);
            if (a !== undefined) {
                a.href=a.href.replace(regex,replace);
                //alert(ids[index] +": "+ a);
            }
        }
    }
}
