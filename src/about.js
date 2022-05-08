

import topBar from "../components/topbarComp.js";

<<<<<<< HEAD
document.getElementById("topBar").innerHTML = topBar;
=======
document.getElementById("topBar").innerHTML = topBar;

////slideshow is here
let slideIndex =0;

showslides();

function showslides(n){

    let i;
    let slides = document.getElementsByClassName("slides");
    let data = document.getElementsByClassName("data")
  //  console.log(data)
   console.log(slides)
    for(let i=0; i<slides.length ; i++){
        slides[i].style.display = "none";
       data[i].style.display = "none"
    }

   
    
    slideIndex++;


    if(slideIndex>slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
  data[slideIndex-1].style.display = 'flex'
    setTimeout(showslides,4000);   // change image every 2 seconds

}


//////////////////////              slide show ends here



// client slideshow

////slideshow is here
>>>>>>> fca6abf18f4546d674ffa41079cb57886f8dc31b
