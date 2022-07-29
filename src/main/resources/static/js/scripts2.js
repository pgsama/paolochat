
var width = $(window).width();
var height = $(window).height();
var fontSize = width / 100;
var endTop;
var endLeft;

$(function () {

    function reportWindowSize2() {

        width = $(window).width();
        height = $(window).height();
        fontSize = width / 100;
        $('html').css('font-size', fontSize);

    }


    window.addEventListener('resize', reportWindowSize2);

    $('html').css('font-size', fontSize);


});


var showModal = (type = "", message = "" , user) => {
    if(user){
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
    }else{
        
    }
  
  }