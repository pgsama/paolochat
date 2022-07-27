
var friendPageCount = 0;

function newFriendPage(param) {

    const { contacts } = user

    const contact = contacts.find(contact => contact._id === param)

    getUser(contact.username).then((data) => {

        const html = `
    <div class="window-header">
          <span class="close">X</span>
          <span class="minimize">—</span>
          <span class="disabled">▢</span>
    </div>
<div class="container ui-resizable">
    <div class="profile" style="height: 100%;">
        <div class="delete-group">
            <i class="fa fa-trash" aria-hidden="true"></i>
            <p>Delete of your Friends</p>
        </div>
        <div class="profile-content">
            <img id="profile" src="${data.picture}"
                style="width:5rem; height:5rem; border-radius:50%; object-fit: cover;" alt="">
            <p id="friend-username" style="font-weight: bolder;">${data.username}</p>
            <p id="friend-email">${data.email}</p>
            <p id="friend-phone">${data.phone}</p>
        </div>


    </div>
</div>`

        {/* <div class="contacts">
<ul id="contactArea2">
</ul>
</div> */}

        const previousPage = document.querySelector("#friend-page" + (friendPageCount - 1));

        if (previousPage) {

            setTimeout(() => {
                previousPage.classList.add("animate__fadeOutDownBig");
                setTimeout(() => {
                    previousPage.remove();
                }
                    , 600);
            }
                , 100);

        }

        const friendPage = document.createElement('div');
        const friendNumber = friendPageCount;

        friendPage.className = 'friendpage ui-draggable ui-draggable-handle animate__animated animate__backInLeft animate__faster';
        friendPage.id = "friend-page" + friendNumber;
        friendPage.innerHTML = html;
        document.body.appendChild(friendPage);

        $("#friend-page" + friendNumber).draggable();
        $("#friend-page" + friendNumber).css("position", "absolute");
        $("#friend-page" + friendNumber).center();
        $("#friend-page" + friendNumber + " .container").resizable({
            minHeight: fontSize * 40,
            minWidth: fontSize * 20,
        });

        window.addEventListener('resize', function () {
            $("#friend-page" + friendNumber).moveTopLeft();
        });


        friendPageCount = friendPageCount + 1;



    });
}

