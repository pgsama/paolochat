const addContact = () => {
  const Code = document.querySelector("#Code").value;
  getUser(Code).then((data) => {

    drawContact(Code);

    let { contacts } = user;

    const newContact = {
      _id: data._id,

      username: data.username,
      
    }

    user.contacts = [...contacts, newContact];

    updateUser().then(console.log);
    
    showErrorModal("success", "Contact Added");
    closeModal();

  }).catch((err) => {

    showErrorModal("error", "User not found");

  }
  );



};

var loadContacts = () => {
  getUser(value).then(({ contacts }) => {
    contacts.map((contacto) => {
      drawContact(contacto.username);
    });
  });
};



const drawContact = (user_data) => {
  getUser(user_data).then((data) => {
    const contact = document.createElement("li");
    contact.id = data._id;
    contact.classList.add("contact");
    contact.innerHTML = `
              <div class="wrap">
              <img
              src="${data.picture}"
              alt="" />
              <div class="meta">
              <p class="name">${data.username}</p>
              <div class="input-group">
              <span onclick="newChatPage('${data._id}')"><i class="fa fa-comments" style="font-size:1rem;" aria-hidden="true"></i></span>
              <span onclick="newFriendPage('${data._id}')"><i class="fa fa-user" aria-hidden="true"></i></span>
              </div>
              </div>
              </div>`;
    document.querySelector("#contactArea").appendChild(contact);

  });
}

const closeContactPage = () => {
  $("#contact-page").addClass("animate__zoomOut");
  setTimeout(function () {
    $("#contact-page").hide();
    $("#contact-page").removeClass("animate__zoomOut");
    
  }, 500);
}
