function showWelcome(){
    var newDiv = document.createElement("div");
    newDiv.id = "welcome-group";
    var newP = document.createElement("p");
    newP.id = "welcome-text";
    newP.innerHTML = "Welcome to the chat";
    newDiv.appendChild(newP);
    document.body.appendChild(newDiv);
    setTimeout(function () {
        $("#welcome-group").fadeTo(2000, 1);
        setTimeout(function () {
            setTimeout(function () {
                $("#welcome-group").remove();
            }, 6000);
        }, 1000);
        });
    }