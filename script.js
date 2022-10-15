
var indexes={
   firstSliderIndex :1,
   SecondSliderIndex : 2,
};


window.onscroll =()=>{
    if(window.onscrollY){
        document.querySelector('header').classList.add('active');
    }
    else{
     document.querySelector('header').classList.remove('active');
    }
 }



 
var currentIndex={
   firstIndex:1,
   secondIndex:1
};

displaySlides(currentIndex.firstIndex,"first");
displaySlides(currentIndex.secondIndex,"second");
function setslides(num,slider){
   console.log("slider : ",slider)
if(slider==="first"){
   displaySlides(currentIndex.firstIndex+=num,slider);
}
    else{
      displaySlides(currentIndex.secondIndex+=num,slider);
    }
}

function currentSlide(n,slider){
   if(slider==="first"){
      displaySlides(currentIndex.firstIndex=n,slider);
   }
       else{
         displaySlides(currentIndex.secondIndex=n,slider);
       }
    
}

function displaySlides(num,slider){

 var slides1=document.getElementsByClassName("swiper-slide")
 var cols=document.getElementsByClassName("r specials ")
 var slide2=document.getElementsByClassName("feature-slide")
 console.log("slides : ",slides1);
 console.log("slides : ",slide2);
 var dot1=document.getElementsByClassName("dot1");
 var dot2=document.getElementsByClassName("dot2");
 console.log("slider ",slider)
 console.log("specials ",cols)

 if(slider==="first"){
   if(num<1){
      currentIndex.firstIndex=slides1.length;
   }
   if(num>slides1.length){
      currentIndex.firstIndex=1;
   }
   var x;
   for(x=0; x<slides1.length; x++){
      slides1[x].style.display="none";
   }
   for(x=0; x<dot1.length; x++){
      dot1[x].className=dot1[x].className.replace(" active", "");
   }
   slides1[currentIndex.firstIndex-1].style.display="block";
   dot1[currentIndex.firstIndex-1].className += " active";
 }
 else if(slider==="second"){
      if(num<1){
         currentIndex.secondIndex=slide2.length;
      }
      if(num>slide2.length){
         currentIndex.secondIndex=1;
      }
      var x;
      for(x=0; x<slide2.length; x++){
         slide2[x].style.display="none";
         cols[x].style.backgroundColor="white";
         cols[x].style.color="black";
      }
      for(x=0; x<dot2.length; x++){
         dot2[x].className=dot2[x].className.replace(" active", "");
      }
      slide2[currentIndex.secondIndex-1].style.display="flex";
      cols[currentIndex.secondIndex-1].style.backgroundColor="rgb(240, 199, 124)";
      cols[currentIndex.secondIndex-1].style.color="white";
      dot2[currentIndex.secondIndex-1].className += " active";
    }
 
 
}

function colorRange(r){
   let x=0;
   var HoveredBox=document.getElementsByClassName("r ranges");

   for( x=0; x<HoveredBox.length; x++) {
     
      HoveredBox[x].style.color="black";;
      HoveredBox[x].style.backgroundColor='white';
   }
   HoveredBox[r].style.color="white";
   HoveredBox[r].style.backgroundColor="rgb(240, 199, 124)";
}
