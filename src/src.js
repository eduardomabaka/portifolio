
const principal = document.getElementById("conteudo_principal")
const girar = document.getElementById("loading")
const corpo = document.getElementById("corpo")

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    once: true
  });
});
/*  aqui começa o ciclo de loading */
setTimeout(()=>{
    girar.style.display= "block";
    principal.style.display = "none";
    corpo.style.background = "rgb(68, 68, 104)"
},0)

setTimeout(()=>{
    girar.style.display= "none";
    principal.style.display = "block";
    corpo.style.background = "rgb(7, 7, 46)";
    AOS.refresh(); 
},3000)

// Inicia o efeito de digitação depois do loading
function startTyping(){
    const el = document.getElementById('typing');
    if(!el) return;
    const text = el.dataset.text || el.textContent || '';
    el.textContent = '';
    let i = 0;
    const speed = 100; // ms por caractere
    const timer = setInterval(()=>{
        if(i < text.length){
            el.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

setTimeout(startTyping, 3000);

/* agora vamos fazer o efeito pergunta clique qparece a resposta */
function abrir1() {
    texto = document.getElementById("texto1")
    texto1 = document.getElementById("texto1.1")
    if (texto.style.display == "block"){
        texto.style.display = "none"
        texto1.style.display = "none"
    }else{
        texto.style.display = "block"
        texto1.style.display = "block"
    }
}
function abrir2() {
    texto = document.getElementById("texto2")
    if (texto.style.display == "block"){
        texto.style.display = "none"
    }else{
        texto.style.display = "block"
    }
}
function abrir3() {
    texto = document.getElementById("texto3")
    texto2 =document.getElementById("texto3.1")
    texto3 =document.getElementById("texto3.2")
    if (texto.style.display == "block"){
        texto.style.display = "none"
        texto2.style.display = "none"
        texto3.style.display = "none"
    }else{
        texto.style.display = "block"
        texto2.style.display = "block"
        texto3.style.display = "block"
    }
}
function abrir4() {
    texto = document.getElementById("texto4")
    if (texto.style.display == "block"){
        texto.style.display = "none"
    }else{
        texto.style.display = "block"
    }
}
/* termina  aqui */