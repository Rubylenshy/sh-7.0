
const input = document.querySelectorAll('input')
const select = document.querySelectorAll('select')
const message = document.querySelector('.message')
const messageIcon = document.querySelector('.message>img')
const submitBtn = document.querySelector('.submit-btn')
const label = document.querySelectorAll('label')


input[0].onkeyup = ()=>{
    if (input[0].value == '' || input[0].value.length < 3 ) {
        label[0].textContent = 'Enter a valid name'
        label[0].style.color = 'red'
    }
    else{
        label[0].textContent = 'Name'
        label[0].style.color = 'inherit'
    }
}
//Email Validation

var emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)(\.[a-z]+)(.[a-z]+)?$/
input[1].onkeyup = ()=>{

    if (input[1].value.match(emailRegex)) {
        label[1].textContent = 'Email'
        label[1].style.color = 'inherit'

    }
    else if(input[1].value == ""){
        label[1].textContent = 'Email cannot be empty'
        label[1].style.color = 'red'
    }else{
        label[1].textContent = 'Email address is not valid'
        label[1].style.color = 'red'
    }
}
input[1].onblur = ()=>{
    if (input[1].value != '' && input[1].value.match(emailRegex)) {
        label[1].textContent = 'Email'
    }else{
        label[1].textContent = 'Email address is not valid'
    }
}

var phoneNumber = /^(0)([0-9)]+)$/
input[2].onkeyup = ()=>{
    if (input[2].value.match(phoneNumber) && input[2].value.length == 11) {
        label[2].textContent = 'Phone Number'
        label[2].style.color = 'inherit'
    }
    else if(input[2].value.length < 11){
        label[2].textContent = 'Phone number is invalid'
        label[2].style.color = 'red'
    }
    else if(input[2].value = ''){
        label[2].textContent = 'Phone number cannot be empty'
        label[2].style.color = 'red'
    }
}


input[3].onkeyup = ()=>{
    if (input[3].value == '' ) {
        label[4].textContent = 'Password cannot be empty'
        label[4].style.color = 'red'
    }
    else if (input[3].value.length <= 6) {
        label[4].textContent = 'Enter at least 6 characters!'
        label[4].style.color = 'red'
    }
    else{
        label[4].textContent = 'Password'
        label[4].style.color = 'inherit'
    }
        
    }
// Show Password
function show(){
    if (input[3].type === 'password') {
        input[3].type = 'text';
    }else{
        input[3].type = 'password';
    }
};

const hide = document.querySelector('img.hide')
const showp = document.querySelector('img.show')
hide.addEventListener('click', ()=>{
    hide.style.display = 'none'
    showp.style.display = 'block'
    show()
})
showp.addEventListener('click', ()=>{
    showp.style.display = 'none'
    hide.style.display = 'block'
    show()
})


// document.addEventListener('keydown', (event)=>{
//     if (event.key === 'Enter') {
        
//       }
// })

    submitBtn.addEventListener('click', ()=>{
        
        for (let i = 0; i < input.length; i++) {
            if (input[i].value == '' ) {
                message.textContent = 'All fields are required!'
                message.style.color = 'red'
                input[i].style.border = '2px solid red'
    
                submitBtn.style.animation = 'shake .5s'
                setTimeout(() => {
                    message.textContent = 'Please provide the following details to complete your info.'
                    message.style.color = 'inherit'
                    input[i].style.border = '1px solid black'
                }, 3000);
            }
            else if(label[i].style.color == 'red'){
                message.textContent = 'Please input valid details!'
                message.style.color = 'red'
    
                submitBtn.style.animation = 'shake .5s'
            }
            else if(label[i].style.color != 'red' && input[i].value != '' && input[3].value.length >= 6 && input[2].value.length == 11 ){
                input[i].value = ''
                messageIcon.style.display = 'block'
                message.textContent = '🎊 Congratulations, your info has been received!'
                message.style.color = 'green'
                input[i].style.border = '1px solid black'
            }
        }
    })
