// var rel ;
// var value;
// $(document).ready(function () {
//     value = $("#Id").attr("value");
//     getUser(value).then((user) => { 
//         const mainusername = document.getElementById("main-username");
//         const profile = document.getElementById("profile");
//         mainusername.innerHTML = user.username;
//         connect(user.username);
//         profile.src = user.picture;
//     });
    
// });

// $("li").click(function () {
//     rel = $(this).attr("rel");

//     console.log(rel);
//     if (rel == "chat") {
//         $("#chat-page").show();
        
//     }
//     if (rel == "contact") {
//         $("#contact-page").show();
//     }
// });

// const getUser = async (v) => {
//     const response = await fetch("http://localhost:8080/api/alluser");
//     const json = await response.json();
//     const user = json.find((user) => user._id == v);
//     return user;
// };
