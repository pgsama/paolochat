//jquery function
var pagecounter = 1;

function newChatPage() {
    const html = `<div class="window-header">
    <span class="close">X</span>
    <span class="minimize">—</span>
    <span class="expand">▢</span>
</div>
<div class="container ui-resizable">
    <ul id="messageArea"></ul>
    <form id="messageForm${pagecounter}" class="messageForm" name="messageForm${pagecounter}" nameForm="messageForm${pagecounter}">
        <div class="form-group">
            <div class="input-group clearfix">
                <input type="text" id="message" placeholder="Type a message..." autocomplete="off"
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
chatPage.id = "chat-page"+pagecounter;
chatPage.innerHTML = html;
document.body.appendChild(chatPage);

$("#chat-page"+pagecounter).draggable();
$("#chat-page"+pagecounter).css("position", "absolute");
$("#chat-page"+pagecounter+" .container").resizable({
    minHeight: fontSize*40,
    minWidth: fontSize*20,
});

const messageForm = document.querySelector("#messageForm"+pagecounter);
messageForm.addEventListener('submit', send, true);
pagecounter = pagecounter + 1;
}