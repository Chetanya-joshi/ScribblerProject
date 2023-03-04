var signUpModel = document.getElementById("ModalSign");



const SignUp = ()=>{
signUpModel.style.display = "flex";
}

const close = ()=>{
signUpModel.style.display = "none";
}

const SignIn = () =>{
    document.getElementById("ModalSign1").style.display = "flex";
}


const signFunction = ()=>{
    document.getElementById("ModalSign1").style.display = "none";
    signUpModel.style.display = "flex";
}
