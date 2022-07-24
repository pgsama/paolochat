var filter = null;

var loginForm = document.querySelector('#loginForm');

$(".arrowButton").click(function (e) {
    e.preventDefault();
    var nameValue = $('#loginInput').val();
    if (nameValue) {
        $('#beep').prop('volume', 0.01);
        $("#beep").get(0).play();
    } else {
        $('#beeperror').prop('volume', 0.01);
        $("#beeperror").get(0).play();
    }
    let api = new XMLHttpRequest();
    let url = "http://localhost:8080/api/alluser";
    api.open("GET", url, true);
    api.send();
    api.onreadystatechange = function () {
        if (api.readyState == 4 && api.status == 200) {
            let json = JSON.parse(api.responseText);
            filter = json.find(function (element) {
                return element.username == $("#loginInput").val();
            });
            if (filter) {
               
                const body = document.querySelector("body");
                $(".bg").hide();
                const bg = document.querySelector(".bg");
                bg.style.backgroundImage = `url(${filter.bg})`;
                bg.className = "bg  animate__animated animate__flash";
                const profile = document.querySelector("#profile");
                if(filter.picture){
                profile.src = filter.picture;
                profile.className = "profile animate__animated animate__flash";
                const username = document.querySelector("#username");
                username.innerHTML = filter.username;
                username.classList = "animate__animated animate__flash";
            }
                $(".bg").fadeIn(2000);
                $("#loginInput").val("");
                $(".login-group").css("display", "none");
                $(".login-group").remove();
                $(".password-group").css("display", "flex");
            }
            else {
                console.info("not found");
                showErrorModal();
            }
        }

        else if (api.readyState == 4 && api.status != 200) {
            console.error("Api error : Actualmente no hay conexión con el servidor");
        }
    }
});

$(".arrowBack").click(function (e) {
    //reload page
    window.location.reload();

});


function showErrorModal() {
    const MessageModal = document.querySelector("#MessageModal");
    MessageModal.classList.remove("hidden");
    //MessageModal top 0%
    MessageModal.style.top = "0%";
    setTimeout(function () {
        MessageModal.style.top = "-50%";
        setTimeout(function () {
            MessageModal.classList.add("hidden");
        }, 1300);
    }
    , 1100);

}

function valid(e) {
    e.preventDefault();
    intent();
}

function intent() {
  
    $("#bg").fadeTo(2000, 1);
    $("#loginScreen").fadeTo(2000, 0);
    setTimeout(function () {
        showWelcome();
        setTimeout(function () {
            window.location.href = "http://localhost:8080/window/" + filter._id;
        }
            , 3500);
    }, 2000);

}
loginForm.addEventListener('submit', valid);

