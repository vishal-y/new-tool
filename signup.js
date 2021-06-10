function signup(){
  
  let key = document.getElementById('pass').value ;
   let conkey = document.getElementById('pass2').value ;
   
   if (key != conkey) {
     document.getElementById("text").innerHTML = "password mis matched !"
     document.getElementById("text").style.background="red"
   }
   else{
     document.getElementById("text").innerHTML = "password  matched 😀 !"
     document.getElementById("text").style.background="green"
   }
  
         let name = document.getElementById("name").value;
         let pass = document.getElementById("pass").value;
        let pass2 = document.getElementById("pass2").value;


   localStorage.setItem("uname",name)
   localStorage.setItem("upass",pass)
   localStorage.setItem("upass2",pass2)
}