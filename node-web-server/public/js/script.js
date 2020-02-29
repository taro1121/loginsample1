let formTest = () => {
//function formTest(){
  if (document.login.username.value === "" && document.login.password.value === ""){
    alert("Please enter Username and Password!");
  } else if (document.login.username.value === ""){
    alert("Please enter Username");
  } else if (document.login.password.value === ""){
    alert("Please enter Password");
  } else if (document.login.password.value === shiftString(document.login.username.value)){
    alert("Congratulations!")
  } else{
    alert("Invalid password.  Here is the username and password you entered - " + document.login.username.value + " / " + document.login.password.value);
  }
}

let shiftString = str =>{
//function shiftString(str){
  let ch = 0;
  let shift = '';
  
//  for(i=0;i<str.length;i++){
  for (let index in str){
    ch = str.charCodeAt(index);
    if(ch === 122){
      ch = 96;
    }
    shift =  shift + String.fromCharCode(ch + 1);
  }
  return shift;
}

//function mirrorString(str){
//  var char = '';
//  var mirror = '';
//  
//  for(i=0;i<str.length;i++){
//    char = str.substring(i,i+1);
//    mirror = char + mirror;
//  }
//  console.log("Entered str is:" + str + ":");
//  console.log("Mirror str is:" + mirror + ":");
//  return mirror;
//}