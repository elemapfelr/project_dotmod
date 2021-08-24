'use strict'

const joinForm=document.querySelector('form#joinForm');
const userFirstName=joinForm.querySelector('#userFirstname');
const userLastName=joinForm.querySelector('#userLastname');
const userEmail=joinForm.querySelector('#userEmail');
const userPw1=joinForm.querySelector('#userPw');
const userPw2=joinForm.querySelector('#userPwConfirm');
const joinOKBtn=joinForm.querySelector('#joinOkBtn');
const spanPwChecked=document.querySelector('span.pwChecked')

userPw2.addEventListener('keyup',userPw2Func);
function userPw2Func(event){
    if(userPw1.value==userPw2.value){
       spanPwChecked.innerText="Password correct"
       spanPwChecked.style.color='#00f'
       return true;
    }
    else{
       spanPwChecked.innerText="Password incorrect"
       spanPwChecked.style.color='#f00'
       return false;
    }
}

joinOKBtn.addEventListener('click',joinOkFunc);

function joinOkFunc(event){
    if(userFirstName.value==""){
        alert('Please enter your first name.');
        userFirstName.focus();
        return false;
    }
    if(userLastName.value==""){
        alert('Please enter your last name.');
        userLastName.focus();
        return false;
    }
    
    if(userEmail.value==""){
        alert('Please enter your Email.');
        userEmail.focus();
        return false;
    }

    if(userPw1.value==""){
      alert('Please enter password.');
      userPw1.focus();
      return false;
    }

    if(!userPw2Func()){
      alert('Incorrect password.');
      userPw2.focus();
      userPw2.value='';
      return false;
    }

    alert('Registration successful.');

    joinForm.submit();
}