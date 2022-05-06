const form=document.getElementById("login-form");

form.addEventListener('submit',function(event){
    if(!validate())
    {
        event.preventDefault();
    }
  
})

function validate()
{
    let username=document.getElementById("username");
    let pwd=document.getElementById("password");
    var flag1=flag2=false;
    if(username.value=='admin'){
        username.style.borderColor="lightgrey";
        document.getElementById("uname-lbl").innerText="User Name";
        document.getElementById("uname-lbl").style.color="black";
        flag1=true;
    } 
    else{
        username.style.borderColor="red";
        document.getElementById("uname-lbl").innerText="Invalid Username!";
        document.getElementById("uname-lbl").style.color="red";
        username.value='';
        
        flag1=false;
    }
    if(pwd.value=='12345'){
        pwd.style.borderColor="lightgrey";
        document.getElementById("pwd-lbl").innerText="Password";
        document.getElementById("pwd-lbl").style.color="black";
        flag2=true;
    } 
    else{
        pwd.style.borderColor="red";
        document.getElementById("pwd-lbl").innerText="Invalid Password!";
        document.getElementById("pwd-lbl").style.color="red";
        pwd.value='';
        flag2=false;
    }

    if(flag1 && flag2){
        return true;
    }
    else{
        
        return false;
    }
  
}