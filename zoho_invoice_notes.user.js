// ==UserScript==
// @name        Invoice Notes
// @namespace   https://github.com/alok-mishra/userscripts
// @description Shows invoice notes without having to hover your mouse
// @author      Alok Mishra <alok@alokmishra.com>
// @match       https://invoice.zoho.com/*
// @version     0.2
// @downloadURL https://github.com/alok-mishra/userscripts/raw/master/zoho_invoice_notes.user.js
// @updateURL   https://github.com/alok-mishra/userscripts/raw/master/zoho_invoice_notes.user.js
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.3.min.js
// @icon        http://i61.tinypic.com/20af9dy.png
// ==/UserScript==

$(function() {
    setTimeout(function() {
        $('.popovercontainer').each(function(i, v) {
            $(v).mouseover();

            setTimeout(function() {
                $(v).mouseout();
            }, i*500);

        });

        /*
         * $('.popovercontainer').mouseover(function() {
         *     console.log('mouse over');
         * });
         */
    }, 6000);
});
