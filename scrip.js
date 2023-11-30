const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slides, index) => {
        slides.style.left = `$(index*100)%`
    }
)
const goPrev = () => {
    counter--
    slideImage()
}
const goNext = () => {
    counter++
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}