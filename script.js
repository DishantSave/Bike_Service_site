// for Toggle the dropdown menu ------------------------------
const toggleBtn = document.querySelector('.toggle_btn')
const toggleIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

   toggleIcon.classList = isOpen
    ?"fa-solid fa-xmark"
    :'fa-solid fa-bars'
}

// toggle dropdown ended------------------------------

// slider section started

const slides = document.querySelectorAll(".slide")

var counter =0;
// this forEach functin automaticaly assign width by the % to left 0%-100%-200%-300%
slides.forEach(
    (slides,index)=>{
        slides.style.top = `${index*100}%`
})
// console.log(slides);
const goNext = ()=>{
    if(counter < slides.length -1){
        counter++
        slideImage()
    }
   
  
}
const goPrev = ()=>{
    if(counter !=0){
        counter--
        slideImage()
    }
   
}
const slideImage = ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateY(-${counter*100}%)`
        }
    )
}