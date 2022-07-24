const closeModal = () => {
  const modal = document.querySelector("#Modal");
  const body = document.querySelector("body");
  setInterval(() => {
    modal.classList.remove("enter");
    modal.classList.add("gone");
    body.classList.remove("no-scroll");
    setInterval(() => {
      modal.remove();
    }, 300);
  }, 1);
};

function openModal() {
  const html = `        
    <div class="modal-content">
    <div class="window-header">
        <span onclick="closeModal()" class="close">X</span>
        <span class="disabled">—
            
        </span>
        <span class="disabled">▢</span>
    </div>

    <div class="modal-header">
        <p>Add Friend by Code</p>
        
    </div>
    <form  class="modal-body" id="friendForm" name="friendForm" nameForm="Form" onsubmit="addContact();return false" >
        <input id="Code" type="text" placeholder="enter code friend"/>
        <button class="hidden" type="submit"></button>
    </form>
    <div class="modal-footer">
    </div>
    </div>`;

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = html;
  modal.id = "Modal";
  const body = document.querySelector("body");
  body.appendChild(modal);

  setTimeout(() => {
    modal.classList.add("enter");
  }, 1);
}


const openUrlModal = () => {
  const html = `        
    <div class="modal-content">
    <div class="window-header">
        <span onclick="closeModal()" class="close">X</span>
        <span class="disabled">—
            
        </span>
        <span class="disabled">▢</span>
    </div>

    <div class="modal-header">
        <p>CHANGE YOUR BACKGROUND</p>
        
    </div>
    <form  class="modal-body" id="urlForm" name="urlForm" nameForm="urlForm" onsubmit="updateUser();return false" >
        <input id="Code" type="text" placeholder="Enter new url background"/>
        <button class="hidden" type="submit"></button>
    </form>
    <div class="modal-footer">
    </div>
    </div>`;

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = html;
  modal.id = "Modal";
  const body = document.querySelector("body");
  body.appendChild(modal);

  setTimeout(() => {
    modal.classList.add("enter");
  }, 100);
};

const updateUser = () => {
  const id = document.querySelector("#id").value;

  getUser(id).then((user) => {
    //const Code = document.querySelector("#Code").value;
    console.log(JSON.stringify(user));
    // const response = fetch(`http://localhost:8080/api/updateuser/${id}`,{
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         Code: Code
    //     })
  });
};



///////////////////////////////////////////////////////////////////////////////////////////

const addContact = () => {

  const Code = document.querySelector("#Code").value;
  drawContact(Code);
  let {contacts} = user;
  
  const newContact = {
    username: Code,
  }

  contacts = [...contacts, newContact];



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
    console.log(data);
    const contact = document.createElement("li");
        contact.classList.add("contact");
        contact.innerHTML = `
            <div class="wrap">

            <img
            src="${data.picture}"
            alt="" />
            <div class="meta">
            <p class="name">${data.username}</p>
            <div class="input-group">
            <span onclick="newChatPage()"><i class="fa fa-comments" style="font-size:1rem;" aria-hidden="true"></i></span>
             <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            </div>
            </div>`;
        document.querySelector("#contactArea").appendChild(contact);

  }).catch((err) => {
    console.error("USER NOT FOUND 404",err);
  }
  );
}
