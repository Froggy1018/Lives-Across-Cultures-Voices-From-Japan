var background = [
    'https://i.ibb.co/RpMvh1dW/Screenshot-2025-11-06-205025.png',
    'https://i.ibb.co/1YH6tXjN/planning-japan-trip.jpg',
    'https://i.ibb.co/84c94ggg/map-of-tokyo-japan-travel-scaled.webp',
];

var randomIndex = Math.floor(Math.random()*background.length);
var selectedImage = background[randomIndex];

document.getElementById('background').style.backgroundImage = 'url(' + selectedImage + ')';