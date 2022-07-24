var rel ;
var value;
$(document).ready(function () {
    value = $("#Id").attr("value");
    getUser(value).then((user) => { 
        const mainusername = document.getElementById("main-username");
        const profile = document.querySelector("#profile");
        mainusername.innerHTML = user.username;
        profile.src = user.picture;
        connect(user);
        const body = document.querySelector("body");
        body.style.backgroundImage = `url(${user.bg})`;

    });
    loadContacts();    
});

$("li").click(function () {
    rel = $(this).attr("rel");

    if (rel === "contact") {
        $("#contact-page").show();
    }

    if(rel === "settings" ){
        openUrlModal();
    }
    
});

const getUser = async (v) => {
    const response = await fetch("http://localhost:8080/api/user/" + v);
    const user = await response.json();
    return user;
};


const setUser = async (user) => {
    const response = await fetch("http://localhost:8080/api/updateuser/"+user._id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const u = await response.json();
    return u;
}