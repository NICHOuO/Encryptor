/* State variable of decryptor*/
let textTodecryp;
function decryptor()
{
    textTodecryp=document.getElementById("cuadro").value;
 result2=textTodecryp.toString();
 decryp=result2.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u").replace(/,/g, " ");


}
   
function changeTextWithHTML2() {
    let decrypText = document.getElementById("ShowText");
    decrypText.innerHTML =decryp;
}

function buttonAppear(){
    let buttonElementAppear= document.getElementById("Copy");
    buttonElementAppear.style.display=('block');
}




