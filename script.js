/* global $ */
$(function () {
    $('.tab').hide();
    $('.tabs li a').on('click', function (event) {
        event.preventDefault(); // not showing the links clicked like #blog or #contact on the url
        $('.tabs').find('.current').removeClass('current'); // find the tab with the current element(higlighted tab class and remove it)
        $(this).addClass('current'); // current tab is in the highlighted class 
        $(this.hash).slideDown("fast").siblings().hide();
    })
    // .first().click(); remove after testing
});