function signin(){
  
  let name = document.getElementById("name").value;
let pass = document.getElementById("pass").value;
  
let name1 = localStorage.getItem("uname");
let pass1 = localStorage.getItem("upass");


if (name != name1) {
  alert('incorrect username');
}

if (pass != pass1) {
  alert('incorrect password');
}

if (name == name1 && pass == pass1) {
  window.location.href="index.html";
}
  else{
    return false;
  }

}