
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

    $("#contact-page").moveTopLeft();


        width = $(window).width();
        height = $(window).height();
        fontSize = width / 100;
        $('html').css('font-size', fontSize);

    }


    window.addEventListener('resize', reportWindowSize);

    $('html').css('font-size', fontSize);




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
    let l = 0
    let t = 0;
    let c_width = $(window)?.width();
    let c_height = $(window)?.height();
    t = $(this)?.offset()?.top;
    l = $(this)?.offset()?.left;
    t = t?.toFixed(0);
    l = l?.toFixed(0);
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
    width = $(window)?.width();
    height = $(window)?.height();
}



$.fn.center = function () {
    this.css("top", ($(window).height() - this.height()) / 5 + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + "px");
    return this;
}



var showErrorModal = (type = "", message = "") => {
    
    const MessageModal = document.querySelector("#MessageModal");
    const modalimage = document.querySelector("#modal-image");
  
    switch (type) {
        case "error":
            modalimage.src = "/error.png";
            break;
        case "success":
            modalimage.src = "/success.png";
            break;
        default:
            modalimage.src = "/error.png";
            break;
    }
  
    const modaltext = document.querySelector("#modal-text");
    modaltext.innerHTML = message;
    MessageModal.classList.remove("hidden");
    MessageModal.style.top = "0%";
    setTimeout(function () {
        MessageModal.style.top = "-50%";
        setTimeout(function () {
            MessageModal.classList.add("hidden");
        }, 1300);
    }
    , 1100);
  
  }