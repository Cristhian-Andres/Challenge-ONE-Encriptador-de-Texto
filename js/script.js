function validar_texto(e) {
  let patron = /^[a-z ]$/;
  return patron.test(e.key);
}

function campo_vacio(campo){
  if(campo.length <=0 ){
    error = document.querySelector('.mensaje-error');
    error.textContent = "*Ingrese el texto";
   setTimeout(()=>{
    error.textContent = "";
   },3000)
    return true;
  }
  return false
}

document.addEventListener("DOMContentLoaded", () => {
  let textoEncriptar = document.querySelector("#texto_encriptar");
  let textoCifrado = document.querySelector("#texto_cifrado");

  let btnEncriptar = document.querySelector("#encriptar");
  
  btnEncriptar.addEventListener("click", encriptar);

  function encriptar(e) {
    // Cancel refresh
    e.preventDefault();

    let texto = textoEncriptar.value.toLowerCase();
    if(campo_vacio(texto)){
      return;
    }
    let data = texto.split("");
    let cifrado = "";
    let nuevoTexto = [];
    data.forEach((letra, index) => {
        cifrado = letra
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
        .replace(/0/g, "")
        .replace(/1/g, "")
        .replace(/2/g, "")
        .replace(/3/g, "")
        .replace(/4/g, "")
        .replace(/5/g, "")
        .replace(/6/g, "")
        .replace(/7/g, "")
        .replace(/8/g, "")
        .replace(/9/g, "");
        nuevoTexto.push(cifrado);
    });

    textoCifrado.value = nuevoTexto.join('');
    //  Clear textarea
    textoEncriptar.value = ""
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let textoEncriptar = document.querySelector("#texto_encriptar");
  let textoCifrado = document.querySelector("#texto_cifrado");

  let btndesencriptar = document.querySelector("#desencriptar");

  btndesencriptar.addEventListener("click", desencriptar);

  function desencriptar(e) {
    // Cancel refresh
    e.preventDefault();

    let texto = textoEncriptar.value;
    if (campo_vacio(texto)) {
      return;
    }
    let nuevoTexto = "";

    nuevoTexto = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u")
      .replace(/0/g, "")
      .replace(/1/g, "")
      .replace(/2/g, "")
      .replace(/3/g, "")
      .replace(/4/g, "")
      .replace(/5/g, "")
      .replace(/6/g, "")
      .replace(/7/g, "")
      .replace(/8/g, "")
      .replace(/9/g, "");
   
    textoCifrado.value = nuevoTexto.toLowerCase();
    //  Clear textarea
    textoEncriptar.value = "";
  }
});

let textoCifrado = document.querySelector("#texto_cifrado");
let texto_encriptar = document.querySelector("#texto_encriptar");

let btncopiar = document.querySelector("#copiar");

btncopiar.addEventListener("click", async (e) => {
  e.preventDefault();

  textoCifrado.select();
  await navigator.clipboard.writeText(textoCifrado.value.toLowerCase())
  const paste = await navigator.clipboard.readText()
  texto_encriptar.value = paste;
});

