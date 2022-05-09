
window.onscroll = function () { myFunction() };

var main_header = document.getElementById("navbar");
var sticky = main_header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    main_header.classList.add("sticky")
  } else {
    main_header.classList.remove("sticky");
  }
}

// this is navbar property above



// this is js code for side panel

// console.log("dhfjkd",window.screen.width)
// if(window.screen.width>=1204){
//   document.getElementById("sidepannel").style.width = "550px"
// }

// console.log(window.matchMedia('(max-width:1200px)').matches)

function check(){

  if(!window.matchMedia('(max-width:1200px)').matches){
    console.log(!window.matchMedia('(max-width:1200px)').matches)
    document.querySelector('#sidepannel').style.display = 'flex'
  
    // alert('')
    document.getElementById("sidepannel").style.width = "74%"
  }else{
    document.querySelector('#sidepannel').style.display = 'none'
    closeNav()
  }
}

$(document).ready(function(){
  $(window).resize(function(){
    check()
  });
});


let acc = document.querySelector("#sidebar_bottom").children
console.log(acc[1],acc[4],acc[6])

//1

acc[1].addEventListener('click', function(){
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }
})






function openNav() {



 
   document.getElementById("sidepannel").style.width = "550px"
   document.getElementById('sidepannel').style.display="block"

}

function closeNav() {
  document.getElementById("sidepannel").style.width = "0px"
}


//user display

let user = JSON.parse(localStorage.getItem("signupDetails"));
console.log("user:", user);
if(user == null){
  document.getElementById("user").innerHTML = "";
}
else{
  document.getElementById("user").innerHTML = user[0].username;
}

let acc = document.querySelector("#sidebar_bottom").children
console.log(acc[1],acc[4],acc[6])

//1

acc[1].addEventListener('click', function(){
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }
})   