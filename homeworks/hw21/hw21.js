const nextEl = document.querySelector(".next_btn");
const prevEl = document.querySelector(".prev_btn");
const sliderImage = document.querySelector(".slider_images");
const imgEl = document.querySelectorAll("img");

let currImg = 1;

nextEl.addEventListener("click", () =>
{
    currImg++
    updateImg()
    prevEl.removeAttribute("hidden")
})
prevEl.addEventListener("click", () =>
{
    currImg--
    updateImg()
})
function updateImg(){
    if(currImg >= imgEl.length) {
        nextEl.style.visibility = 'hidden';
        prevEl.style.visibility = 'visible';
    } else if (currImg <= 1){
        nextEl.style.visibility = 'visible';
        prevEl.style.visibility = 'hidden';
    } else {
        nextEl.style.visibility = 'visible';
        prevEl.style.visibility = 'visible';
    }

    sliderImage.style.transform = `translateX(-${(currImg - 1) * 301}px)`;

}
