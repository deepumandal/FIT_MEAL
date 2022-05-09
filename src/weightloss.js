function slideshow() {
    let div = document.querySelector(".slideshow");
  
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");
  
    const imageArray = [
      "https://www.fitmeals.co.in/wp-content/uploads/2021/05/E92321D7-99A8-4343-ABE9-595C732CD6E4-3.jpg",
      "https://www.fitmeals.co.in/wp-content/uploads/2021/05/8B7C0945-E90C-46E1-9B35-B67136929EDE-2.jpg",
      "https://www.fitmeals.co.in/wp-content/uploads/2021/05/52383BDD-D644-454A-AC1D-50E2DF6B7AF6-2.jpg",
      "https://www.fitmeals.co.in/wp-content/uploads/2021/05/96C9BAE4-D634-416D-922A-C8E38B26FBD1-576x1024.jpg",
      "https://www.fitmeals.co.in/wp-content/uploads/2021/05/F497D877-C665-4718-9D60-DC6884CF8F86-2.jpg",
      "https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg",
    ];
    let i = 0;
    image1.src = imageArray[0];
    image2.src = imageArray[1];
    image3.src = imageArray[2];
    div.append(image1, image2, image3);
  
    setInterval(transition, 2000);
  
    function transition() {
      if (i == 6) {
        console.log("i:", i);
        i = 0;
      }
      image1.src = imageArray[i];
      image2.src = imageArray[i + 1];
      image3.src = imageArray[i + 2];
      div.append(image1, image2, image3);
  
      i += 3;
    }
  }

  
  slideshow();
  
  const track = document.querySelector(".carousel_track");
  
  const slides = Array.from(track.children);
  //console.log("slides:", slides);
  
  const nextButton = document.querySelector(".carousel_button--right");
  const prevButton = document.querySelector(".carousel_button--left");
  const dotsNav = document.querySelector(".carousel_nav");
  
  const slideWidth = slides[0].getBoundingClientRect().width;
  //console.log("slideWidth:", slideWidth);
  
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
  };
  
  slides.forEach(setSlidePosition);
  
  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };
  
  // When I click left, move slides to the left
  prevButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    // console.log("currentSlide:", currentSlide);
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
  });
  
  // When I click right, move slides to the right
  nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    //console.log("currentSlide:", currentSlide);
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  });
  
  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add("is-hidden");
      nextButton.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.add("is-hidden");
    } else {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.remove("is-hidden");
    }
  };
  
  setInterval(function () {
    const currentSlide = track.querySelector(".current-slide");
    console.log("currentSlide:", currentSlide);
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  
    if (nextIndex === 3) return;
  }, 3000);

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
    document.getElementById("sidepannel").style.width = "84%"
  }else{
    document.querySelector('#sidepannel').style.display = 'none'
    closeNav()
  }
}

$(document).ready(function(){
  $(window).resize(function(){
    check()
    console.log('working')
  });
});




function openNav() {



 
   document.getElementById("sidepannel").style.width = "550px"
   document.getElementById('sidepannel').style.display="block"

}

function closeNav() {
  document.getElementById("sidepannel").style.width = "0px"
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

  