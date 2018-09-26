const listComposerInput = document.getElementById("listComposerInput");
const composerButton = document.querySelector(".list-composer__button");

composerButton.addEventListener("click", function(event){
    event.preventDefault();

    if (listComposerInput.value === undefined || listComposerInput.value === null || listComposerInput.value === "" || listComposerInput.value === " "){
        return false;
    }

    const listArea = document.querySelector(".list-area");
    const listAreaBox = document.querySelector(".list-area__box");
    const createText = document.createElement("p");
    const createButtonCheck = document.createElement("button");
    const createButtonDelete = document.createElement("button");

    listAreaBox.appendChild(createText);
    createText.appendChild(listComposerInput.value);
    // listAreaBox.appendChild(createButtonCheck);
    // listAreaBox.appendChild(createButtonDelete);

    

});