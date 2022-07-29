
$(document).ready(function() {

const body = document.querySelector("body");

const loadingDiv = document.createElement("div");
loadingDiv.id = "Modal";
loadingDiv.className = "loading animate__animated";
loadingDiv.innerHTML = `<i class="fas fa-spinner fa-pulse"></i> <p>Loading...</p>`
body.appendChild(loadingDiv);

setTimeout(() => {
    loadingDiv.classList.add("animate__fadeOut");

    setTimeout(() => {
        body.removeChild(loadingDiv);
        const DockBar = document.querySelector("#DockBar");
        DockBar.className = "dockbar animate__animated animate__fadeInUpBig animate__faster";    
    }, 600);
}
, 500);
});