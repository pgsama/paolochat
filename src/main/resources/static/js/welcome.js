function showWelcome(){
    
    const localUser = localStorage.getItem("user")
    const json = eval("filter = "+ localUser)

    var newDiv = document.createElement("div");
    newDiv.id = "welcome-group";
    var newP = document.createElement("p");
    newP.id = "welcome-text";
    newP.innerHTML = `<i class="fa-solid fa-chalkboard-user"></i> Welcome ${json.username}!`
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