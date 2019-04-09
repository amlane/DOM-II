// Your code goes here

// const darkMode = document.querySelector('.dark-mode');
// darkMode.addEventListener('click', (event) => {
//     event.target.style.background = "black";
//     event.target.style.color = "white";
//     event.stopPropagation();
// })

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

const subscribe = document.querySelector('input');
subscribe.addEventListener('keydown', (event) => {
    console.log(`${event.key}`);
})

subscribe.addEventListener('focus', (event) => {
    event.target.style.background = "yellow";
}, true);

subscribe.addEventListener('blur', (event) => {
    event.target.style.background = '';    
  }, true);

const submitEmailBtn = document.querySelector('.subscribe');
submitEmailBtn.addEventListener('click', (event) => {
    alert(`WARNING! ALL YOUR EMAIL ARE BELONG TO US`)
})

const signMeUp = document.querySelector(".content-pick");
signMeUp.addEventListener('click', (event) => {
    if (event.target.id === "btn-1"){
        alert(`Are you sure you want fun in the sun?`);
        }
    else if (event.target.id === "btn-2") {
        alert(`Are you sure you want to climb a mountain?`);
        }
    else {
        alert(`Are you sure you want to stay on an island?`);
    }
});














