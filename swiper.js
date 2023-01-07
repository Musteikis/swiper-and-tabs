const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 40,
    speed: 1000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-butston-prev',
    }
});

// Change button style
const buttons = document.getElementsByTagName("button")
swiper.on("slideChange", function(){
    // Remove button style
    for(let button of buttons){
        button.classList.remove("active")
    }

    // Add button style by slide index
    let index = swiper.activeIndex
    buttons[index].classList.add("active")
    console.log(index)
})

// Slide changes by button index 
for(let button of buttons){
    button.addEventListener("click", function(){
        let index = this.getAttribute("index")
        swiper.slideTo(index)
    })
}