
const mainHeader = document.querySelector('h1');
mainHeader.addEventListener('click', (event) => {
    event.target.style.textTransform = "uppercase";
    event.target.style.fontWeight = "bold";
    event.target.style.textShadow = "2px 2px 2px #1C6EA4";
    setTimeout(function(){event.target.style.textTransform = ""}, 1000);
    setTimeout(function(){event.target.style.fontWeight = ""}, 2000);
    setTimeout(function(){event.target.style.textShadow = ""}, 3000);
}) 

const navLinks = document.querySelector('.nav');
navLinks.addEventListener('mouseover', (event) => {
    if (event.target.tagName === "A") {
    event.target.style.textShadow = "2px 2px 2px orange";
    setTimeout(function(){event.target.style.textShadow = "none"}, 300);
    }
})


const funBus = document.querySelector('.fun-bus-img');
funBus.addEventListener('dblclick', (event) => {
    event.target.setAttribute ("src", "img/funbus.png");
})

funBus.addEventListener('wheel', (event) => {
    event.target.setAttribute ("src", "img/fun-bus.jpg");
})

const textArea = document.querySelector('.text-area');




const sendBtn = document.querySelector('button');
sendBtn.addEventListener('click', (event) => {
    alert(`Your message has been sent!`);
});