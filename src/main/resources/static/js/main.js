var usernamePage = document.querySelector("#username-page");
var registerPage = document.querySelector("#register-page");
var chatPage = document.querySelector("#chat-page");
var usernameForm = document.querySelector("#usernameForm");
var contactform = document.querySelector("#contact-form");
var contactArea = document.querySelector("#contactArea");
var registerForm = document.querySelector("#registerForm");
var stompClient = null;
var user = null;

var colors = [
  "#2196F3",
  "#32c787",
  "#00BCD4",
  "#ff5652",
  "#ffc107",
  "#ff85af",
  "#FF9800",
  "#39bbb0",
];

function connect(user2) {
  user = user2;
  if (user.username) {
    $("#main-username").text(user.username);
    var socket = new SockJS("/javatechie");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
  }
}

function openRegister(e) {
  e.preventDefault();
  registerPage.classList.remove("hidden");
  usernamePage.classList.add("hidden");
}

function backMenu() {
  usernamePage.classList.remove("hidden");
  registerPage.classList.add("hidden");
}

function onConnected() {
  stompClient.subscribe("/topic/public", onMessageReceived);
}

function onError(error) {}

function send(event) {
  event.preventDefault();
  const messageInput = document.querySelector("#message");
  var messageContent = messageInput.value.trim();

  if (messageContent && stompClient) {
    var chatMessage = {
      sender: user._id,
      content: messageInput.value,
      type: "CHAT",
    };
    stompClient.send("/app/chat.send", {}, JSON.stringify(chatMessage));
    messageInput.value = "";
  }
}

function onMessageReceived(payload) {
  var message = JSON.parse(payload.body);

  getUser(message.sender).then((user) => {

    const messageArea = document.querySelector("#messageArea");
    var messageElement = document.createElement("li");
    if (message.type === "JOIN") {
    } else if (message.type === "LEAVE") {
      messageElement.classList.add("event-message");
      message.content = message.sender + " left!";
    } else {
      messageElement.classList.add("chat-message");
      var avatarElement = document.createElement("img");
      avatarElement.src = user.picture;
      avatarElement.classList.add("avatar");
      messageElement.appendChild(avatarElement);
      var usernameElement = document.createElement("span");
      var usernameText = document.createTextNode(user.username);
      usernameElement.appendChild(usernameText);
      messageElement.appendChild(usernameElement);
    }
    var textElement = document.createElement("p");
    var messageText = document.createTextNode(message.content);
    textElement.appendChild(messageText);
    messageElement.appendChild(textElement);
    messageArea.appendChild(messageElement);
    messageArea.scrollTop = messageArea.scrollHeight;
  });
}

$(document).ready(function () {
  $("#button").click(function () {
    $("#beep2").prop("volume", 0.05);
    $("#beep2").get(0).play();
  });
});

function showErrorModal() {
  document.querySelector("#MessageModal").classList.add("active");
  setTimeout(function () {
    document.querySelector("#MessageModal").classList.add("fade");
    setTimeout(function () {
      document.querySelector("#MessageModal").classList.remove("active");
      document.querySelector("#MessageModal").classList.remove("fade");
    }, 1);
  }, 1500);
}
