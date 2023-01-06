var arr=JSON.parse(localStorage.getItem("account-data")) || [];
document.querySelector("form").addEventListener("submit",myform);
function myform(){
  event.preventDefault();
  var obj={
     name:document.getElementById("name").value,
     email:document.getElementById("email").value,
     pass:document.getElementById("password").value,
  }
  arr.push(obj);
  localStorage.setItem("account-data",JSON.stringify(arr));
  alert("Signup success");
  // window.location.href="signin.html";
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
}