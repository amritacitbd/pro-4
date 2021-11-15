$(document).ready(function(){
    // create port main variable
    var mixer =  mixitup('.port-main');

    $('.port-list ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        });

});