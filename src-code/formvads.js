var names = document.getElementById('named')
var email = document.getElementById('email')
var age = document.getElementById('number')
var compani = document.getElementById('company')
var thought = document.getElementById('thought')
var regName = /^[A-Za-z]+$/
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
var form = document.getElementById('survey-form')
var error1 = document.getElementById('error')

form.addEventListener('submit',function(e) {
    let messages =[]

    if(names.value === ''){
        alert('Name is required.')
        return false
    }

    if (email.value === '' ){
        alert('Email is required.')
        return false
    }

    if (email.value != regEmail + '@gmail.com'){
        alert('Invalid Email')
        return false
    }

    if(number.value === ''){
        alert('Age is required.')
        return false
    }

    if(number.value < 18){
        alert('Invalid Age.')
        return false
    }

    if(company.value === ''){
        alert('Company name is required.')
        return false
    }

    e.preventDefault()
    alert("Form is submitted.")
});