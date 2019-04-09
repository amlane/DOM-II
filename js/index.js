// Your code goes here

// let sampleButton = document.querySelector('.sampleButton');
// sampleButton.addEventListener('click', (event) => {
//   alert('You Clicked the Sample Button!')
// setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// })

let navLinks = document.querySelector('nav');
navLinks.addEventListener('mouseover', (event) => {
    event.target.style.textShadow = "0 0 10px orange";
    setTimeout(function(){event.target.style.textShadow = "none"}, 300);
    event.stopPropagation()
})