document.querySelector("form").addEventListener("submit",myform);
    function myform(){
      event.preventDefault();
      var flag=1;
      var obj={
        email:document.getElementById("email").value,
        pass:document.getElementById("password").value,
      }
      var arr=JSON.parse(localStorage.getItem("account-data"));
   console.log(arr);
    arr.map(function(e){
      if(e.email==obj.email && e.pass==obj.pass){
        //document.querySelector("h1").innerText="Sign in Successful";
        flag=0;
        //return;
      }
      // else {
      //   document.querySelector("h1").innerText="Wrong Credentials";
      // }
    })
    flag==1?alert("Wrong Credentials"):alert("Sign in Successful");
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}