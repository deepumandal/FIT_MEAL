

let signupArr = JSON.parse(localStorage.getItem("signupDetails")) || [];

document.getElementById("signup").addEventListener("click", function(){

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;

    let signupObj = {
        firstName : firstName,
        lastName : lastName,
        username : username,
        email : email,
        mobile : mobile,
        password : password
    };

    if(firstName=="" || lastName=="" || username=="" || email=="" || mobile=="" || password==""){
        alert("Please fill in all the details.");
    }
    else{
        signupArr.push(signupObj);
        console.log(signupArr);

        localStorage.setItem("signupDetails", JSON.stringify(signupArr));

        window.location.href = "../html/login.html";
    }
});