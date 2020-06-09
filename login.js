let uname = document.getElementById("uname");
let pwd = document.getElementById("pwd");

function validate(){
    if(uname.value=="admin"||pwd.value=="12345"){
        alert("validated");
        return true;
    }
    else{
        return false;
    }
}