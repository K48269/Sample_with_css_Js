



function isEmailAddress(){
  var a = document.employee.email.value;    
  var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var email=document.getElementById("checkemail");
  if(reg.test(a)){
    email.innerHTML="&#x2705; valid Email Address";
  }
  else{
    email.innerHTML="&#x1F5F7; invalid mobile Number";
  }
}

function isMobileNumber(){
var pattern=/^(0|[+91]{3})?[7-9][0-9]{9}$/;
var a = document.getElementById("checkmno");
var b= document.employee.mno.value
if(pattern.test(b)){
  a.innerHTML="&#x2705; valid Mobile Number"
}
else{
  a.innerHTML="&#x1F5F7; invalid mobile Number"
}
}


function myFunction() {
    var x = document.getElementById("en").value;
    if(x.length>=5){
      document.getElementById("Button").disabled = false;
    }
}
function myyFunction() {
  var id=document.employee.id.value;  
  var name=document.employee.name.value; 
  var password=document.employee.password.value;
  var mno=document.employee.mno.value;
  var email=document.employee.email.value;
  if(id!="" && name!="" && password!="" && mno!="" && email!=""){
  document.getElementById("Button_one").disabled = false;
  }

}

