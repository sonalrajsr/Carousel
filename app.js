const btnRight = document.querySelector(".btn-next");
const btnLeft = document.querySelector(".btn-prev");
const container = document.querySelector(".container");
const slides = Array.from(document.querySelectorAll(".slide"));
const indexIndication = document.querySelector(".counter span:nth-child(1)");
const total_images = document.querySelector(".counter span:nth-child(2)")
total_images.innerHTML = slides.length
let index = 0;
function jumpping(){
    gsap.to(container, {
        keyframes: [
          { duration: 0.1, x: -4 },
          { duration: 0.1, x: 4 },
          { duration: 0.1, x: -4 },
          { duration: 0.1, x: 0 },
        ],
    });
}
btnRight.addEventListener("click", () => {
    const right_timeline = gsap.timeline()
    // console.log(index)
    if (index >= slides.length-1){
        jumpping()
    }else if (index < slides.length-1){
        right_timeline
        .to(slides[index+1], {
        x : 0, 
        duration : 1
    })
    index++;
    indexIndication.innerHTML = index+1
    }
    // console.log(index)

})

btnLeft.addEventListener("click", () => {
    const left_timeline = gsap.timeline()
    // console.log(index)
    if (index <= slides.length-1 && index > 0){
        left_timeline
        .to(slides[index], {
        x : "-100%", 
        duration : 1
        })
        index--;
        indexIndication.innerHTML = index+1

    }else {
        jumpping()
    }
    
})
