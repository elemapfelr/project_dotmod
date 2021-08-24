'use strict'

const loginForm=document.querySelector('form#loginForm');
const userEmail=loginForm.querySelector('#userEmail');
const userPw=loginForm.querySelector('#userPW');
const loginOKBtn=loginForm.querySelector('#loginOkBtn');

loginOKBtn.addEventListener('click',loginOkFunc);

function loginOkFunc(event){
    if(userEmail.value==""){
        alert('Please enter your Email.');
        userEmail.focus();
        return false;
    }

    if(userPw.value==""){
      alert('Please enter password.');
      userPw.focus();
      return false;
    }

    alert('Login successful.');

    loginForm.submit();
}