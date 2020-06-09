function showFiles()
{
    let inputField=document.getElementById('input');
    let file=inputField.files;
    let fileReader=new FileReader;
    fileReader.onload=function(event){
        let fileContent=fileReader.result;
        $("preview").text(fileContent);
    }
    fileReader.readAstext(file[0]);
}
var x=getElementById("check1");
var x=getElementById("check2");
var x=getElementById("check3");
var x=getElementById("check4");
var x=getElementById("check5");

var check1;
$("#test-with-is").on("click", function(){
    check = $("#mycheckbox").is(":checked");
    if(check) {
        alert("Checkbox is checked.");
    } else {
        alert("Checkbox is unchecked.");
    }
}); 
var check2;
$("#test-with-is").on("click", function(){
    check = $("#mycheckbox").is(":checked");
    if(check) {
        alert("Checkbox is checked.");
    } else {
        alert("Checkbox is unchecked.");
    }
}); 
var check3;
$("#test-with-is").on("click", function(){
    check = $("#mycheckbox").is(":checked");
    if(check) {
        alert("Checkbox is checked.");
    } else {
        alert("Checkbox is unchecked.");
    }
}); 
var check4;
$("#test-with-is").on("click", function(){
    check = $("#mycheckbox").is(":checked");
    if(check) {
        alert("Checkbox is checked.");
    } else {
        alert("Checkbox is unchecked.");
    }
}); 
var check5;
$("#test-with-is").on("click", function(){
    check = $("#mycheckbox").is(":checked");
    if(check) {
        alert("Checkbox is checked.");
    } else {
        alert("Checkbox is unchecked.");
    }
}); 

var promise = new Promise(function(resolve){
    var check1 = checked;
    var check2 = checked;
    var check3 = checked;
    var check4 = checked;
    var check5 = checked;
    if(checked){
        resolve("Congrats");
    }
});

promise
.then(function(s){
    console.log(s);
})
