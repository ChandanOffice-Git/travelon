const headerMenuList = document.querySelectorAll('.header-menu li a');
console.log(headerMenuList);
headerMenuList.forEach(function(item){
    
    item.addEventListener('click',function(){
        headerMenuList.forEach(function(item){
            item.classList.remove('active')

        })
        item.classList.toggle('active')     

    })
})


const dropDown = document.querySelector(".drop")
const dropMenu = document.querySelector(".d-menu")

dropDown.addEventListener('click',function(item){

    dropMenu.classList.toggle('hello')
  
    
})



const toggleBtn = document.querySelector("#togglebtn")
const menu = document.querySelector(".header-menu")
toggleBtn.addEventListener('click',() => {

   menu.classList.toggle("tactive")
  
    
})
const darkbtn = document.getElementById('dark')
       

darkbtn.addEventListener('click',function(){
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        darkbtn.textContent ='light'

        
    }
    else{
        darkbtn.textContent ='dark'


    }
})

// const allImages = document.querySelectorAll('.carousel-list img')

// const activeSlider = 0;
// function runslider(){
//     allImages.forEach(image => image.style = 'transform : translatex(-${activeSlider*100%})')
// }
// runslider()


// document.getElementById("next").addEventListener('click',()=>{
//     activeSlider++
//     runslider()
// })

// document.getElementById("prev").addEventListener('click',()=>{
//     activeSlider--
//     runslider()
// })
const heADing = document.getElementById("ab")
const allboxImage =document.querySelectorAll(".img-box-I")



const heaDingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
       entry.target.classList.toggle("show-img",entry.isIntersecting)
       if(entry.isIntersecting){
        heaDingObserver.unobserve(entry.target)
       }
    })

},{threshold: .5})

allboxImage.forEach(image =>heaDingObserver.observe(image))



const counT =document.getElementById("count-n")

 let countStart = 10;

const counter = setInterval(() => {
   counT.innerHTML = ++countStart

   if(countStart === 232){
    clearInterval(counter)
   }

}, 1);


const counTI = document.getElementById("count-nI")

let countStartI = 10;

const counterI = setInterval(()=>{
    counTI.innerHTML = ++countStartI
    if( countStartI === 521){
        clearInterval(counterI)
    }
},1)




const counTII = document.getElementById("count-nII")
 let counterstartII = 10; 

const counterT = setInterval(()=>{
    counTII.innerHTML = ++counterstartII
    if(counterstartII === 1463){
        clearInterval(counterT)
    }
},1)


const counTIII = document.getElementById("count-nIII")
 let counterstartIII = 10; 

const counterTI = setInterval(()=>{
    counTIII.innerHTML = ++counterstartIII
    if(counterstartIII === 15){
        clearInterval(counterTI)
    }
},200)



const imageList = document.querySelectorAll(".image-list img")
const gallerySigle = document.querySelector(".gallery-body img")


imageList.forEach(singleImg =>{
    singleImg.addEventListener("click",(e)=>{
      gallerySigle.src = singleImg.src
    })
})

const miniImg = document.querySelectorAll(".minbox")

miniImg.forEach(function(item){
  item.addEventListener("click",function(){
    miniImg.forEach(function(item){
        item.classList.remove("xoom")
    })
    item.classList.toggle("xoom")
  })
})




const rollImage = document.querySelectorAll(".travel-mg")
rollImage.forEach(function(roll){
    roll.addEventListener("click",function(){
        rollImage.forEach(function(roll){
            roll.classList.toggle("rool")

        })
       
    })

})



const alltraImage =document.querySelectorAll(".travel-mg ")



const heaDingtbserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
       entry.target.classList.toggle("tra-img",entry.isIntersecting)
       if(entry.isIntersecting){
        heaDingtbserver.unobserve(entry.target)
       }
    })

},{threshold: .5})

alltraImage.forEach(image =>heaDingtbserver.observe(image))


const Teambox = document.querySelectorAll(".team-box")

Teambox.forEach(function(item){
    item.addEventListener("click",function(){
        Teambox.forEach(function(item){
          item.classList.remove("up")
      })
      item.classList.toggle("up")
    })
  })


