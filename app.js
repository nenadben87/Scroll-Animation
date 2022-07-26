
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', animateBoxes);



function animateBoxes() {
  const bottomBoundary = window.innerHeight / 5 * 4;

   boxes.forEach(function(box){

    const elementTop = box.getBoundingClientRect().top;
    

    console.log(elementTop);
    console.log(bottomBoundary);
    console.log(box);

     if(elementTop < bottomBoundary) {
       box.classList.add('active');
     } else {
       box.classList.remove('active');
     }
   })
}