const slides=document.querySelectorAll(".slide")
console.log(slides)
let counter=0;

slides.forEach( (slide,index)=>{
    // slide.style.left=`${index *100}%` 
    slide.style.left=`${index * 30}%`
    

}  )

const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter * 100}%)`
        }
    )
}
 
const goPrev=()=>{
    counter--;
    
    if (counter < 0) {
        counter = slides.length - 1
       
      
        // counter = slides.length - 1; 
        
    }
    document.getElementById('prev').disabled = (counter === 0); // Disable prev on first slide
    document.getElementById('next').disabled = (counter === slides.length - 1); // Enable next if not the last slide
   
    
       
    
    
    
    slideImage()
}
const goNext=()=>{
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Wrap around to the first slide
    }
    document.getElementById('prev').disabled = (counter === 0); // Disable prev on first slide
    document.getElementById('next').disabled = (counter === slides.length - 1); // Enable next if not the last slide
   
    
    slideImage()
    
}

document.getElementById('prev').disabled = (counter === 0); // Disable prev on first slide
document.getElementById('next').disabled = (counter === slides.length - 1); // Enable next if not the last slide
