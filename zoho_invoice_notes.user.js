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
    // First lets wait till all AJAX functions are done loading
    setTimeout(function() {
        showNotes();
    }, 4000);
});

function showNotes() {
    setTimeout(function() {

        // On a view change, we will need to refresh the notes as well as re-apply click handlers
        $('a.ember-view').click(function() {
            showNotes();
        });

        $('.table .popovercontainer').each(function(i, v) {
            $(v).mouseover();

            setTimeout(function() {
                // console.log ($('.tooltip-inner:first').text());
                $(v).siblings('.my-notes').remove();
                $(v).parent().css('width', '300px').append('<span class="my-notes">' + $('.tooltip-inner:first').text() + '</span>');
                $(v).mouseout();
            }, (i+1)*200);

        });
    }, 2000);
}
