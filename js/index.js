// Your code goes here

const darkMode = document.querySelector('body');
darkMode.addEventListener('click', (event) => {
    event.target.style.background = "black";
    event.target.style.color = "white";
})

const mainHeader = document.querySelector('h1');
mainHeader.addEventListener('click', (event) => {
    event.target.style.textTransform = "uppercase";
    event.target.style.fontWeight = "bold";
    setTimeout(function(){event.target.style.textTransform = ""}, 1000);
    setTimeout(function(){event.target.style.fontWeight = ""}, 1000);
}) 

const navLinks = document.querySelector('.nav');
navLinks.addEventListener('mouseover', (event) => {
    if (event.target.tagName === "A") {
    event.target.style.textShadow = "0 0 10px darkslategrey";
    setTimeout(function(){event.target.style.textShadow = "none"}, 500);
    }
})

const funBus = document.querySelector('.fun-bus-img');
funBus.addEventListener('dblclick', (event) => {
    event.target.setAttribute ("src", "img/funbus.png");
})

funBus.addEventListener('wheel', (event) => {
    event.target.setAttribute ("src", "img/fun-bus.jpg");
})












