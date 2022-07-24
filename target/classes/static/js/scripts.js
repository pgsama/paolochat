
var width = $(window).width();
var height = $(window).height();
var fontSize = width / 100;
var endTop;
var endLeft;

$(function () {

    function reportWindowSize() {
        var opt = {
            minHeight: fontSize * 25,
            minWidth: fontSize * 25,
        };


        width = $(window).width();
        height = $(window).height();
        fontSize = width / 100;
        $('html').css('font-size', fontSize);

    }

    $('html').css('font-size', fontSize);
    window.addEventListener('resize', reportWindowSize);


    $("#contact-page").draggable();
    $("#contact-page").css("position", "absolute");

    $("#addContact").click(function (event) {
        event.preventDefault();
        var contactInput = $("#contactInput").val();
        addContact(contactInput);
        $("#contactInput").val("");
    });
});



$.fn.moveTopLeft = function () {
    let c_width = $(window).width();
    let c_height = $(window).height();
    let t = $(this).offset().top;
    let l = $(this).offset().left;
    t = t.toFixed(0);
    l = l.toFixed(0);
    var newtop;
    var newleft;
    newtop = t * (100 / c_height);
    newleft = l * (100 / c_width);

    if (newtop < 99 && newleft < 99) {
        $(this).css({
            top: newtop + "%",
            left: newleft + "%"
        });
    }
    width = $(window).width();
    height = $(window).height();
}



$.fn.center = function () {
    this.css("position", "relative");
    this.css("top", ($(window).height() - this.height()) / 5 + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + "px");
    return this;
}