function header(){
    return `
    


// this is navbar property


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


function openNav() {
    document.getElementById("sidepannel").style.width = "600px"
}

function closeNav() {
    document.getElementById("sidepannel").style.width = "0"
}

//end here

// this is the js code of  meal plan
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

// this is the js code of  meal plan end here
    `
}

export default header;