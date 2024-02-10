/* State variable*/
let message;
let encryptor;
let result = null;
let textBox=null;
function getText() {
    message = document.getElementById("cuadro").value;
    console.log(message)
    encryptor=message.split(" ");
    console.log(encryptor);

    for (let i = 0; i < encryptor.length; i++) {
        result = encryptor[i].split('');
        console.log(result)
        for (let j = 0; j < encryptor[i].length; j++) {
            if (result[j] == "i") {
            result[j] = "imes"
            } else if (result[j] == "o") {
            result[j] = "ober"
            }
            else if (result[j]=="e")
            {
            result[j] = "enter"
            }
            else if (result[j]=="a")
            {
            result[j] = "ai"
            }
            else if (result[j]=="u")
            {
            result[j] = "ufat"
            }
        }
        encryptor[i] = result.join('').toString();
        
        }
        textBox=encryptor.toString().replace(/,/g, " ")
        console.log(textBox)
        
   
}


function changeTextWithHTML() {
    let labelElement = document.getElementById("ShowText");
    labelElement.innerHTML =
        textBox;
}

function imageTextDisappear(){
    let imageElement= document.getElementById("ImagenOff");
    let textNoneElement=document.getElementById("TextNomessageOff");
    let textWishElement=document.getElementById("TextWishOff");
    let CopyButtonElement=document.getElementById("Copy");
    let labelElement = document.getElementById("ShowText");
    textWishElement.style.display='none';
    textNoneElement.style.display='none';
    imageElement.style.display='none';
    CopyButtonElement.style.display='block';
    labelElement.style.display='block';
    
}

