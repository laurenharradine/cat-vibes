const newVid = document.querySelector('video');
const newColour = document.querySelector('body');

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');

btn1.addEventListener('click', function () {

    newVid.src="https://laurenharradine.github.io/cat-vibes/videos/cat1.mp4";
    newColour.style.color="rgb(2, 20, 1)";
})
btn2.addEventListener('click', function () {

    newVid.src="https://laurenharradine.github.io/cat-vibes/videos/cat2.mp4"
    newColour.style.color="rgb(98, 252, 245)";
    
})
btn3.addEventListener('click', function () {

    newVid.src="https://laurenharradine.github.io/cat-vibes/videos/cat3.mp4"
    newColour.style.color="rgb(222, 0, 66)";

})
btn4.addEventListener('click', function () {

    newVid.src="https://laurenharradine.github.io/cat-vibes/videos/cat4.mp4"
    newColour.style.color="rgb(20, 18, 51)"; 

})