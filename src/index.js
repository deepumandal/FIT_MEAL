////slideshow is here
let slideIndex =0;
showslides();


function showslides(){
    let i;
    let slides = document.getElementsByClassName("slides");
    console.log(slides)
    for(let i=0; i<slides.length ; i++){
        slides[i].style.display = "none";
        
    }

    slideIndex++;
    console.log(slideIndex)

    if(slideIndex>slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showslides,4000);   // change image every 2 seconds




}






//////////////////////              slide show ends here