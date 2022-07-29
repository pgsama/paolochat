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
        <p>Add Friend by Name</p>
        
    </div>
    <form  class="modal-body" id="friendForm" name="friendForm" nameForm="Form" onsubmit="addContact();return false" >
        <input id="Code" type="text" placeholder="enter friend's name"/>
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
  const Code = document.getElementById("Code");
  Code.focus();
   
}

const openPictureModal = () => {
  const html = `        
    <div class="modal-content">
    <div class="window-header">
        <span onclick="closeModal()" class="close">X</span>
        <span class="disabled">— </span>
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
  }, 1);
  const Code = document.getElementById("Code");
  Code.focus();
   
};


const updateUser =  async () => {
  const response = await fetch(END_POINT+"/api/updateuser/"+user._id, {
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

const changeBackground = (e) => {
  
 const Code = document.querySelector("#Code").value;
  user.bg = Code;
  document.querySelector("body").style.backgroundImage = `url(${Code})`;
  updateUser().then();
  showModal("success","Background changed");
  closeModal();

}

const changePicture = (e) => {
  const Code = document.querySelector("#Code").value;
  user.picture = Code;
  document.querySelector("#profile").src = Code;
  updateUser().then();
  showModal("success","Picture changed");
  
  setTimeout(() => {
    closeModal();
  
  }, 100);

}

var notAvailable = () => {

  showModal("error","This feature is not available yet");
  
//   const html = `        <div class="modal-content">
//   <div class="window-header">
//       <span onclick="closeModal()" class="close">X</span>
//       <span class="disabled">—

//       </span>
//       <span class="disabled">▢</span>
//   </div>

//   <div class="modal-header">
//       <h2>At the moment this is not aviable</h2>

//   </div>

//   <div class="modal-body" id="friendForm" name="friendForm" nameForm="Form"
//       onsubmit="addContact();return false">
//       <p style="text-align: center; color: var(--titlecolor);"> working on new updates</p>
//   </div>

//   <div class="modal-footer">
//   </div>
// </div>`

// const modal = document.createElement("div");
// modal.classList.add("modal");
// modal.innerHTML = html;
// modal.id = "Modal";
// const body = document.querySelector("body");
// body.appendChild(modal);

// setTimeout(() => {
//   modal.classList.add("enter");
// }, 100);

// setTimeout(() => {
//   closeModal();
// }, 1000);

}