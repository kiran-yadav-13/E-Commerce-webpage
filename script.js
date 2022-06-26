
var indexes={
   firstSliderIndex :1,
   SecondSliderIndex : 2,
};
// var index;
// var id;

window.onscroll =()=>{
    if(window.onscrollY){
        document.querySelector('header').classList.add('active');
    }
    else{
     document.querySelector('header').classList.remove('active');
    }
 }



 
// var currentIndex=1;
// displaySlides(currentIndex);

// function setslides(num){
//     displaySlides(currentIndex+=num);
// }

// function currentSlide(n){
//     displaySlides(currentIndex=n);
// }

// function displaySlides(num){

//  var slides=document.getElementsByClassName("swiper-slide slide");
//  var dots=document.getElementsByClassName("dot");
//  console.log(dots)
//  if(num<1){
//     currentIndex=slides.length;
//  }
//  if(num>slides.length){
//     currentIndex=1;
//  }
//  var x;
//  for(x=0; x<slides.length; x++){
//     slides[x].style.display="none";
//  }
//  for(x=0; x<dots.length; x++){
//     dots[x].className=dots[x].className.replace(" active", "");
//  }
//  slides[currentIndex-1].style.display="block";
//  dots[currentIndex-1].className += " active";
// }

// setInterval(function(){
//   currentIndex++;
//   displaySlides(currentIndex);
// },5000)

// next /previous controls
// n-number of slide
// id -container id  index-current slide number in the slider



displaySlides(indexes.firstSliderIndex,'first','firstSliderIndex');
// displaySlides(indexes.SecondSliderIndex,'second','SecondSliderIndex');

// prev,next control

function setslides(n,id,index){
  
    displaySlides(indexes[index]+=n,id,index);

   
}

function currentSlide(n,id,index){
    displaySlides(indexes[index]=n,id,index);
    setInterval(function(){
      indexes[index]++;
     displaySlides(indexes[index], id,index);
   },5000)
   
}

function displaySlides(n, id,index){
   console.log("n ",n," id ", id, " indexe " ,index);
   console.log("indexes ", index, " indexes[index] ",indexes[index])

 var slides=document.querySelectorAll(`#${id} .slide`);
 var dots=document.getElementsByClassName("dot");
 var speciality=document.getElementsByClassName("r specials");
 if(n<1){
    indexes[index]=slides.length;
    speciality[n-1]=speciality.length;
 }
 if(n>slides.length){
   indexes[index]=1;
  
 }
 var x;
 for(x=0; x<slides.length; x++){
    slides[x].style.display="none";
 }
 
 for(x=0; x<dots.length; x++){
    dots[x].className=dots[x].className.replace(" active", "");
 }

 if(index=="SecondSliderIndex"){
   for(x=0; x<speciality.length; x++){
      speciality[x].style.backgroundColor="#fff";
      speciality[x].style.color="black";
   }
   speciality[indexes[index]-1].style.backgroundColor="rgb(224, 190, 127)";
   speciality[indexes[index]-1].style.color="#fff";
 }
 slides[indexes[index]-1].style.display="flex";

 dots[indexes[index]-1].className += " active";



}
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
