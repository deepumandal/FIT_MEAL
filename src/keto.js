function slideshow() {
    let div = document.querySelector(".slideshow");
  
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");
  
    const imageArray = [
     "https://www.fitmeals.co.in/wp-content/uploads/2021/05/BD768075-20B6-4D6A-90BB-050E6E2B9012-2-576x1024.jpg",
     "https://www.fitmeals.co.in/wp-content/uploads/2021/09/D6423578-EB78-42DD-9028-246290940A73-576x1024.jpg",
     "https://www.fitmeals.co.in/wp-content/uploads/2021/05/C9D86D56-9249-44DF-A880-4B8AAE01E952-576x1024.jpg",
     "https://www.fitmeals.co.in/wp-content/uploads/2021/09/69100BD5-C846-4EF7-8FA1-724A12C0A371-576x1024.jpg",
     "https://www.fitmeals.co.in/wp-content/uploads/2021/09/E9B22918-94AC-426B-B5AE-A3D7D2465337-576x1024.jpg",
     "https://www.fitmeals.co.in/wp-content/uploads/2021/09/F1872E06-30AF-4DEC-B4D4-42E61673EF72-576x1024.jpg",
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
  