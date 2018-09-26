//focando o local do input
const input = document.getElementById("listComposerInput");
//focando o botao ADD
const addButton = document.querySelector(".list-composer__button");

addButton.addEventListener("click", function(event){
    event.preventDefault();
    
    //validando para não aceitar input vazio ou nulo
    if(input.value === undefined || input.value === null || input.value === "" || input.value === " "){
        input.focus();
        return false;
    }
    //focando o local onde colocaremos as tarefas inputadas
    const textBox = document.querySelector(".list-area__box");
    //criando a tag onde colocaremos as tarefas inputadas
    const textArea = document.createElement("span");
    //criando o texto HTML que deverá estar dentro da tag criada acima
    textArea.innerHTML += `<span class="span-content"><p class="list-area__text">${input.value}</p>
            <a href="#" onclick="check(this)" id="check"><i class="far fa-check-circle"></i></a>
            <a href="#" onclick="del(this)" id="del"><i class="far fa-times-circle"></i></a></span>`

    //colocando a tag span dentro do local onde ficarão as tarefas
    textBox.appendChild(textArea);
    //display block para os elementos ficarem um embaixo do outro
    textBox.style.display = "block";
    //limpando o input após o click do botão
    input.value = null;

    //deletando TUDO!!! 
    const buttonDel = document.querySelector(".list-area__button-del");
    
    buttonDel.addEventListener("click", function(event){
        event.preventDefault();
        textArea.remove();
    });
});


//deletando separadamente as tarefas incluidas
function del(exclude){
    let ex = exclude.parentNode;
    ex.remove();
}

//(des)checando separadamente as tarefas incluidas
function check(checker){
    let ch = checker.parentNode;

    if(ch.style.color == "black"){
        ch.style.textDecoration = "line-through";
        ch.style.color = "#a8a8a8";        
    } else {
        ch.style.textDecoration = "none";
        ch.style.color = "black"; 
    }
}

//checando TUDO!!!
const buttonCheck = document.querySelector(".list-area__button-check");
let contador = 0;
console.log(buttonCheck);
  
function checkAll(){
    let checkboxes = document.querySelectorAll(".span-content");
    for (let i = 0; i < checkboxes.length; i++){
        if (contador % 2 === 0){
            checkboxes[i].style.textDecoration = "line-through";
            checkboxes[i].style.color = "#a8a8a8";
            buttonCheck.innerHTML = "UNCHECK ALL";
        } else{
            checkboxes[i].style.textDecoration = "none";
            checkboxes[i].style.color = "black";
            buttonCheck.innerHTML = "CHECK ALL";
        }
    }
    contador++
}

