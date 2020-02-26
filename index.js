let changeColor = document.getElementById('changeColor');

let circle = document.getElementById('circle');

let moving = document.getElementById('moving');

let moveIt = [
    { transform: 'translate(0, 0)',},
    { transform: 'translate(0, -500px)',},
    { transform: 'translate(500px, 0)',},
    { transform: 'translate(0, 500px)',},
    { transform: 'translate(-500px, 0)',},
    { transform: 'translate(0, -500px)',},
];

function getRandomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
};

changeColor.onclick = function() {
 circle.style.backgroundColor = getRandomColor ();
};

moving.onclick = function() {
    circle.animate(moveIt, {
        duration: 3000,
        iterations: 2,
        fill: 'backwards'
    });
};
