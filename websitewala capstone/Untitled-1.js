<script>
function validateform(){  
var name=document.myform.fname.value;  
var password=document.myform.password.value;  
  
if (fname==null || fname==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
} 
}  
</script>