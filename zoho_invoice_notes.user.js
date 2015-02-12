// ==UserScript==
// @name        Invoice Notes

// @description Shows invoice notes without having to hover your mouse
// @include     https://invoice.zoho.com/*
// @version     1
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.3.min.js
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
