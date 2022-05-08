
let data = JSON.parse(localStorage.getItem("signupDetails"));

document.getElementById("login").addEventListener("click", function(){

    let usernameLogin = document.getElementById("username").value;
    let passwordLogin = document.getElementById("password").value;

    let flag = false;

    let loginArr = [];

    for(let i=0; i<data.length; i++){

        console.log(data[i].username);
        if((data[i].username == usernameLogin || data[i].email == usernameLogin) && data[i].password == passwordLogin){

            var loginObj = {
                name : data[i].username,
                email : data[i].email,
            };

            loginArr.push(loginObj);

            localStorage.setItem("loginDetails", JSON.stringify(loginObj));

            flag = true;
            break;
        }
    }

    if(flag){

        alert("Login successful.");

        let homepage = localStorage.setItem("homepageUser",JSON.stringify(loginObj));
        window.location.href = "../index.html";
    }
    else{

        alert("Wrong username or password");
    }
})