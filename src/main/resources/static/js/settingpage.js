function exit(){

    var newDiv = document.createElement("div");
    newDiv.id = "welcome-group";
    var newP = document.createElement("p");
    newP.id = "welcome-text";
    newP.innerHTML = `<i class="fa-solid fa-robot"></i> See you later!`
    newDiv.appendChild(newP);
    document.body.appendChild(newDiv);

    setTimeout(function () {
        localStorage.removeItem("user");
        $("#welcome-group").fadeTo(2000, 1);
        setTimeout(function () {
            setTimeout(function () {
                window.location.href = "/";
            }, 4000);
        }, 1000);
        });

 
}

function OpenSettingPage() {

  const modal = document.createElement("div");

  modal.classList.add("modal");

  modal.innerHTML = settingPage();

  modal.id = "Modal";

  const body = document.querySelector("body");

  body.appendChild(modal);

  setTimeout(() => {

    modal.classList.add("enter");

  }, 100);


  const Code = document.getElementById("Code");
  Code.focus();
   

}

function settingPage () {

    return `<div id="settings">
    <div class="window-header">
        <span onclick="closeModal()" class="close">X</span>
        <span class="disabled">— </span>
        <span class="disabled">▢</span>
    </div>

    <div class="modal-header" style="margin: 0.5rem 0">
        <p>CHANGE YOUR BACKGROUND</p>
    </div>

    <form class="modal-body" id="bgForm" name="bgForm" nameForm="bgForm"
        onsubmit="changeBackground();return false">
        <input id="Code" type="text" placeholder="Enter url for background" />
        <button class="hidden" type="submit"></button>
    </form>

    <hr />


    <div class="modal-user">

        <div class="user-panel">
            <img src="${user.picture}" alt="">
        </div>

        <div class="user-options">
            <p>USERNAME : ${user.username}</p>
            <p> ACTIVE : <i class="fa fa-desktop fa-fade" style="color:rgb(106, 255, 106);"
                    aria-hidden="true"></i>
            </p>
            <div style=" width: 100%; justify-content: right; display: flex; gap: 2rem;">
                <button onclick="notAvailable()" style="background-color: rgb(246, 88, 88); padding: 0.5rem;">Delete Account</button>
                <button onclick="notAvailable()" style="background-color: rgb(19, 19, 26); padding: 0.5rem;">Hard Reset</button>
            </div>
        </div>
    </div>
    <hr />

    <div class="modal-releases">
        <h2 style="text-align:center; margin: 0.25rem;">CHANGE LOGS 28/07/22</h2>
        <ol id="releases">
            <p class="green-title">Implemented -></p>
            <li class="release-item">Background and Picture Management Added</li>
            <li class="release-item">Friends Management Added</li>
            <li class="release-item">Private Chats fixed</li>
            <li class="release-item">Authentication and Security Improved</li>
            <li class="release-item">Many Bugs Fixed</li>
            <li class="release-item">Many Secondary Complements Added</li>
            <li class="release-item">Performance Improved :<br>
              • Faster Page Loading <br>
              • Faster Request and Response Server to Client <br>    and vice-verse</li>
            <p class="red-title">To be added or completed -></p>
            <li class="release-item">Persistance messages in chats</li>
            <li class="release-item">Delete and Hard Reset to own account</li>
            <li class="release-item">Register form</li>
            <li class="release-item">Update own information form</li>
            <li class="release-item">Stickers and Gifs</li>
            <li class="release-item">Still many missing features</li>
        </ol>
    </div>

    <hr>

    <h2 style="text-align: center; margin: 0.5rem;">PAOLOCHAT</h2>

    <div class="modal-github">
        <a href="https://github.com/pgsama/paolochat" target="_blank" class="button-a"><img
                src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                alt="" />
        </a>
        <div style="
          display: flex;
          flex-direction: column;
         align-items: center;
         width: 75%;
        ">
            <strong>Repository Link: </strong>
            <br />
            <p>https://github.com/pgsama/paolochat.git</p>
        </div>

    </div>
   
    <hr>
    <div class="modal-footer">
        <button onclick="exit()" class="button" style="background-color:rgb(255, 85, 0);">Exit <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
</div>`
}