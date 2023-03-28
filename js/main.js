function check(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if(name.value.length < 10){
        name.style.borderColor = "red";
        return false;
    }
    else if(email.value.indexOf("@") == -1){
        name.style.border = "none";
        email.style.borderColor = "red";
        return false;
    }
    else if(message.value.length < 30){
        email.style.border = "none";
        message.style.borderColor = "red";
        return false;
    }else{
        message.style.border = "none";
        name.value = "";
        email.value = "";
        message.value = "";
        return true;
    }
}


