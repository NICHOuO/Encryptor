
function copyText(){
    let messageCopy;
    
    messageCopy= document.getElementById("ShowText").innerHTML;
    console.log(messageCopy)
    document.getElementById("cuadro").value = messageCopy;
    navigator.clipboard.writeText(messageCopy);
    
}


function buttonDisappear(){
    let buttonElement= document.getElementById("Copy");
    buttonElement.style.display=('none');
}
