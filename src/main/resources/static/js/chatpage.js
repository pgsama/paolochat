
function newChatPage(param ) {

    getUser(param).then((usuario) => {
    if (!$("#chat-page-" + param).length > 0) {
    const html = `
    <div class="window-header">
    <div style="display:flex;">
    <span onclick="closeChatPage('${param}')" class="close">X</span>
    <span class="minimize disabled">—</span>
    <span onclick="expandChatPage('${param}')" class="expand">▢</span>
    </div>
    <div class="window-title">
    <p>${usuario.username.toUpperCase()}</p>
    </div>
    </div>
<div class="container ui-resizable">
    <ul id="ul-${param}"></ul>

    <form id="messageForm${param}" class="messageForm" name="messageForm${param}" nameForm="messageForm${param}">
        <div class="form-group">
            <div class="input-group clearfix">
                <input type="text" id="message-${param}" placeholder="Type a message..." autocomplete="off"
                    />
                <button type="submit" class="primary">
                    Send
                </button>
            </div>
        </div>
    </form>

</div>`;

const chatPage = document.createElement('div');
chatPage.className = 'chatpage ui-draggable ui-draggable-handle animate__animated animate__backInLeft animate__faster';
chatPage.id = "chat-page-"+param;
chatPage.innerHTML = html;
document.body.appendChild(chatPage);

$("#chat-page-"+param).draggable();

$("#chat-page-"+param).css("position", "absolute");

$("#chat-page-"+param+" .container").resizable({
    minHeight: fontSize*40,
    minWidth: fontSize*40,
});


$("#chat-page-"+param).center();

window.addEventListener("resize", function () {
    $("#chat-page-"+param).moveTopLeft();
});

const messageForm = document.querySelector("#messageForm"+param);

messageForm.addEventListener('submit', (e)=> send(e,param), true);
}
});
}

function closeChatPage(param){

    
    window.removeEventListener("resize", function () {
        $("#chat-page-"+param).moveTopLeft();
    });

    setTimeout(function(){
        $("#chat-page-"+param).addClass("animate__zoomOut");
        setTimeout(function(){
            $("#chat-page-"+param).remove();
        }
        , 1000);
    }, 1);
    
}

function expandChatPage(param){
    $("#chat-page-"+param).draggable("disable");
    $("#chat-page-"+param+" .container").resizable("destroy");
    $("#chat-page-"+param+" .window-header").css("border-radius", "0px");
    $("#chat-page-"+param).css("top", "0px");
    $("#chat-page-"+param).css("left", "0px");
    $("#chat-page-"+param+" .container").css("height", "calc(100vh - 1.5rem)");
    $("#chat-page-"+param+" .container").css("width", "calc(100vw)");
    $("#chat-page-"+param).css("z-index", "9999");
}

function printMessage(message, param, to) {

    getUser(param).then((usuario) => {
  
    const messageArea = document.querySelector("#ul-" + to);
  
    if (messageArea) {
    const messageDiv = document.createElement("div");
  
    const liElement = document.createElement("li");
  
    if (usuario._id === user._id) {
      liElement.classList.add("chat-message");
  
    } else {
  
      liElement.classList.add("chat-message2");
    }
  
    let avatarElement = document.createElement("img");
  
    avatarElement.classList.add("avatar");
  
    avatarElement.src = usuario.picture;
  
    avatarElement.classList.add("avatar");
  
    liElement.appendChild(avatarElement);
  
    let spanElement = document.createElement("span");
  
    let usernameText = document.createTextNode(usuario.username);
  
    spanElement.appendChild(usernameText);
  
    messageDiv.appendChild(spanElement);
  
    const expression =/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const imageexpression = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
    const regex = new RegExp(expression);
    const regex2 = new RegExp(imageexpression);
    const messageText = document.createTextNode(message);
  
    let textElement;
  
    if (message.match(regex2)) {
      textElement = document.createElement("img");
      textElement.classList.add("message-image");
      textElement.src = message;
    } 
    else if (message.match(regex)) {
  
      textElement = document.createElement("a");
      const link = message;
      if (link.includes("http")) {
        textElement.href = message;
        textElement.target = "_blank";
      } else {
        textElement.href = "http://" + message;
        textElement.target = "_blank";
      }
    } else {
      textElement = document.createElement("p");
    }
  
    textElement.appendChild(messageText);
  
    messageDiv.appendChild(textElement);
  
    liElement.appendChild(messageDiv);
  
    messageArea.appendChild(liElement);
  
    messageArea.scrollTop = messageArea.scrollHeight;
  
  }
  });
  
  }