/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/
document.getElementById('botonCopiar').style.display="none";


function validarMayusculas(texto){
  //Si el texto contiene números o mayúsulas o acentos
  if((/\d/.test(texto))||(/[A-ZÜÑ]/.test(texto))||(/[áéíóúÁÉÍÓÚ]/.test(texto))||texto==""){
    return true;//El texto contiene error
  }else{
    return false;//El texto es correcto
  }

}

function encriptar(){
  let textoInicial = document.getElementById('textoParaConvertir').value;
  let validar=validarMayusculas(textoInicial);
  if(validar==true){
    //Si el texto contiene error entonces cambia la advertencia y el icono a rojo
    textoError();
  }else{
    //Si el texto es correcto entonces cambia la advertencia y el icono a gris y elimina la imagen y el mensaje de texto no encontrado
    //Luego encripta las vocales del texto, pone el resultado como valor para el párrafo y muestra el botón Copiar
    limpiar();
    let textoEncriptado = textoInicial.replace(/a/g, "ai")
                                      .replace(/e/g, "enter")
                                      .replace(/i/g, "imes")
                                      .replace(/o/g, "ober")
                                      .replace(/u/g, "ufat");
    document.getElementById('salida').innerHTML = textoEncriptado;
    document.getElementById('botonCopiar').style.display="block";

    return;
  }
}

function desencriptar(){
  let textoInicial = document.getElementById('textoParaConvertir').value;
  let validar=validarMayusculas(textoInicial);
  if(validar==true){
    //Si el texto contiene error entonces cambia la advertencia y el icono a rojo
    textoError();
  }else{
    //Si el texto es correcto entonces cambia la advertencia y el icono a gris y elimina la imagen y el mensaje de texto no encontrado
    //Luego desencripta las llaves de encriptacion del texto, pone el resultado como valor para el párrafo y muestra el botón Copiar
    limpiar();
    let textoDesencriptado = textoInicial.replace(/ai/g, "a")
                                         .replace(/enter/g, "e")
                                         .replace(/imes/g, "i")
                                         .replace(/ober/g, "o")
                                         .replace(/ufat/g, "u");
    document.getElementById('salida').innerHTML = textoDesencriptado;
    document.getElementById('botonCopiar').style.display="block";
    return;
  }
}

function copiar(){
  //Se obtiene el valor del párrafo que muestra el resultado de la encriptación/desencriptación
  let textoResultado = document.getElementById('salida').innerHTML;
  //Se intenta copiar ese texto resultante en el portapapeles
  navigator.clipboard.writeText(textoResultado).then(function() {
        console.log('Texto copiado al portapapeles');//Ya se puede pegar en el área de texto
    }).catch(function(err) {
        console.error('Error al copiar al portapapeles: ', err);//Error en el copiado
    });

}

function limpiar(){
  document.getElementById('advertencia').style.color="#495057";
  document.getElementById('advertencia_icono').src = './assets/advertencia.png';
  document.getElementById('advertenciaResultado').style.display="none";

}

function textoError(){
  document.getElementById('advertencia').style.color="red";
  document.getElementById('advertencia_icono').src = './assets/advertencia-hover.png';
}
