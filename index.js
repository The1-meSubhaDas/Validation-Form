console.log("JavaScript Project 4");

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const mobileNumber = document.getElementById("mobileNumber");
let validUser = false;
let validMobile = false;
let validEmail = false;

// console.log(name, email, mobileNumber)
userName.addEventListener("blur",()=>{
    console.log("Your name is blured");
    // Validation of name
    let regex = /^[a-z A-Z]([A-Za-z0-9]){7,12}$/;
    let str = userName.value;
    console.log(regex ,str)
    if(regex.test(str)){
        console.log("Name is matched.");
        userName.classList.remove("is-invalid");
        validUser = true;
    }
    else{
        console.log("Name does not match.")
        userName.classList.add("is-invalid");
        validUser = false;
    }
})

email.addEventListener("blur",()=>{
    console.log("Your email is blured");
    // Validation of email
    let regex = /^([\w \. \-]+)@([\w \. \-]+)\.([a-zA-Z]){1,7}$/;
    let str = email.value;
    console.log(regex ,str);
    if(regex.test(str)){
        console.log("Email is matched.");
        email.classList.remove("is-invalid");
        validEmail = true ;
    }
    else{
        console.log("Email does not match.")
       email.classList.add("is-invalid");
       validEmail = false ;
    }
})

mobileNumber.addEventListener("blur",()=>{
    console.log("Your mobileNumber is blured");
    // Validation of mobileNumber
    let regex = /^([0-9]){10}$/;
    let str = mobileNumber.value;
    console.log(regex ,str)
    if(regex.test(str)){
        console.log("Mobile Number is matched.");
        mobileNumber.classList.remove("is-invalid");
        validMobile = true ;
    }
    else{
        console.log("Mobile Number does not match.")
        mobileNumber.classList.add("is-invalid");
        validMobile = false ;
    }
})
let btn = document.getElementById("btn").addEventListener("click",(e)=>{
    e.preventDefault();

    console.log("You Have Submitted The Form.")
    // Submit Your Form--

    if(validEmail && validMobile && validUser){
        console.log("Phone Number, Email and Username are valid. You can submit this form.")

        let alert1 = document.getElementById("alert1");
        let danger = document.getElementById("danger");
        alert1.classList.add("show");
        danger.classList.remove("show");
        // $('danger').alert("close");
        // $('danger').hide();

    }
    else{
        console.log("Phone Number, Email or Username are not valid. You can not submit this form. Please recheck it");
        let alert1 = document.getElementById("alert1");
        let danger = document.getElementById("danger");
        danger.classList.add("show");
        alert1.classList.remove("show");
        // $('alert1').alert("close");
        // $('alert1').hide();
    }


})
