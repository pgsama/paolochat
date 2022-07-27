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
    <form  class="modal-body" id="urlForm" name="urlForm" nameForm="urlForm" onsubmit="changeBackground();return false" >
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


const openPictureModal = () => {
  const html = `        
    <div class="modal-content">
    <div class="window-header">
        <span onclick="closeModal()" class="close">X</span>
        <span class="disabled">—
            
        </span>
        <span class="disabled">▢</span>
    </div>

    <div class="modal-header">
        <p>CHANGE YOUR PROFILE PICTURE</p>
        
    </div>
    <form  class="modal-body" id="pictureForm" name="pictureForm" nameForm="pictureForm" onsubmit="changePicture();return false" >
        <input id="Code" type="text" placeholder="Enter new url for picture"/>
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


const updateUser =  async () => {
  const response = await fetch("http://localhost:8080/api/updateuser/"+user._id, {
    method: "PUT",
    headers: {

      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  });

  const data = await response.json();
  return data;
};


///////////////////////////////////////////////////////////////////////////////////////////


const changeBackground = (e) => {

 const Code = document.querySelector("#Code").value;
  user.bg = Code;
  document.querySelector("body").style.backgroundImage = `url(${Code})`;
  updateUser().then(console.log);
  showErrorModal("success","Background changed");
  closeModal();

}

const changePicture = (e) => {
  

