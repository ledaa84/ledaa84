let btnGroup = createBtn();
let divButton = document.querySelector("div#button");
function createBtn(){
    let newBtn = document.createElement("button", {class: "btn btn-info"});
    newBtn.innerHTML = "Regisztráció";
    divButton.appendChild(newBtn);
}

