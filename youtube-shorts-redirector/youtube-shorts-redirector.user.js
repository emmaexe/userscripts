// ==UserScript==
// @run-at      document-start
// @version     1.0.0
// @name        YouTube shorts redirector.
// @namespace   https://github.com/emmaexe/userscripts
// @author      emmaexe
// @description Redirect all youtube shorts to the regular youtube player.
// @licence     GPL-3.0
// @homepageURL https://github.com/emmaexe/userscripts
// @supportURL  https://github.com/emmaexe/userscripts/issues
// @include     *://youtube.*/*
// @include     *://*.youtube.*/*
// @icon        https://github.com/emmaexe/userscripts/youtube-shorts-redirector/assets/youtube-ico-32.png
// @grant       none
// ==/UserScript==

function shortsCheck(mutation){
    if (location.href.includes('/shorts/')) {
        location.replace(location.href.replace('/shorts/', '/watch?v='))
    }
}

shortsCheck();

const shortsObserver = new MutationObserver(shortsCheck).observe(document, {subtree: true, childList: true});