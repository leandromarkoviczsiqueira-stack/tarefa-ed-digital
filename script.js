const botoesCurtir = document.querySelectorA11(".curtir");
botoesCurtir.array.forEach(function(botaoCurtir){
let curtiu = false;
botaoCurtir.addEventListener("click", curtir);
function curtir(){
const contador = botaoCurtir.querySelector("span");
if(curtiu === false){
contador.textContent++;
curtiu = true;
} else{
    contador.textContent--;
    curtiu = false;
}
}
});

const bttema = document.querySelector(".btn-tema");
btntema.addEyentListener("click", mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro");
}


