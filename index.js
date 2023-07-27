function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var w = window.innerWidth;
var h = window.innerHeight;
var heading = document.getElementsByTagName("h1")[0];
var imageposition = document.getElementsByTagName("img")[0]
imageposition.addEventListener("mouseover",Event =>{
    
    var randomNumberLeft = getRandomInt(w-10);
    var randomNumberTop = getRandomInt(h-10);
    Event.target.style.position = 'Absolute';
    Event.target.style.left = randomNumberLeft+'px';
    Event.target.style.top = randomNumberTop+'px';
    heading.style.position = 'Absolute';
    heading.style.left = randomNumberLeft+60+'px';
    heading.style.top = randomNumberTop+'px';
    heading.innerHTML = "You missed it!"
    heading.style.color = "Red";


});


// imageposition.addEventListener("mouseout",Event =>{
//     heading.innerHTML = "Click me if you can!"
//     heading.style.color = "Green";
// });

