var usernamePage = document.querySelector("#username-page");
var registerPage = document.querySelector("#register-page");
var chatPage = document.querySelector("#chat-page");
var usernameForm = document.querySelector("#usernameForm");
var contactform = document.querySelector("#contact-form");
var contactArea = document.querySelector("#contactArea");
var registerForm = document.querySelector("#registerForm");
var stompClient = null;
var user = null;

var END_POINT = "http://localhost:8080";

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
    var socket = new SockJS("/ws");
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
  stompClient.subscribe("/topic/private/" + user._id, onMessageReceived);
}

function onError(error) {}

function send(event, to) {
  event.preventDefault();

  const messageInput = document.querySelector("#message-" + to);

  const messageContent = messageInput.value.trim();

  if (messageContent && stompClient) {
    const chatMessage = {
      sender: user._id,
      content: messageInput.value,
      type: "CHAT",
    };

    stompClient.send("/app/chat.send/" + to, {}, JSON.stringify(chatMessage));
    printMessage(messageContent, user._id ,to);
    messageInput.value = "";
  }
}

function onMessageReceived(payload) {

  const json = JSON.parse(payload.body);
  printMessage(json.content, json.sender, json.sender);

}

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
