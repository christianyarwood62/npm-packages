const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const wideImageFrame = document.querySelector('#wide-image-frame');
let style = window.getComputedStyle(wideImageFrame);


// Initialise a picture counter to rotate through the images
let pictureCounter = 0;

// Event: upon clicking the right arrow in the navigation, the images will move left until the end where it goes back to the first image
rightArrow.addEventListener('click', () => {
    if (pictureCounter === 2) {
        wideImageFrame.style.transitionDuration = '2s';
        wideImageFrame.style.right = '0px';
        pictureCounter = 0;
        firstDot.style.backgroundColor = 'black';
        secondDot.style.backgroundColor = 'lightgray';
        thirdDot.style.backgroundColor = 'lightgray';
    } else {
        console.log('You pressed the right arrow');
        pictureCounter = ++pictureCounter;
        wideImageFrame.style.transitionDuration = '2s';
        wideImageFrame.style.right = `${pictureCounter * 350}` + 'px';
        if (pictureCounter === 1) {
            firstDot.style.backgroundColor = 'lightgray';
            secondDot.style.backgroundColor = 'black';
            thirdDot.style.backgroundColor = 'lightgray';
        } else {
            firstDot.style.backgroundColor = 'lightgray';
            secondDot.style.backgroundColor = 'lightgray';
            thirdDot.style.backgroundColor = 'black';
        };
    }
})

// Event: upon clicking the right arrow in the navigation, the images will move right until the end where it goes back to the last image
leftArrow.addEventListener('click', () => {
    if (pictureCounter === 0) {
        wideImageFrame.style.transitionDuration = '2s';
        wideImageFrame.style.right = '700px';
        pictureCounter = 2;
        firstDot.style.backgroundColor = 'lightgray';
        secondDot.style.backgroundColor = 'lightgray';
        thirdDot.style.backgroundColor = 'black';
    } else {
        console.log('You pressed the left arrow');
        pictureCounter = --pictureCounter;
        wideImageFrame.style.transitionDuration = '2s';
        wideImageFrame.style.right = `${pictureCounter * 350}` + 'px';
        if (pictureCounter === 0) {
            firstDot.style.backgroundColor = 'black';
            secondDot.style.backgroundColor = 'lightgray';
            thirdDot.style.backgroundColor = 'lightgray';
        } else {
            firstDot.style.backgroundColor = 'lightgray';
            secondDot.style.backgroundColor = 'black';
            thirdDot.style.backgroundColor = 'lightgray';
        }
    }
})

// Allows the user to choose the dots in the navigation to go to a specific image
const firstDot = document.querySelector('#dot-1');
const secondDot = document.querySelector('#dot-2');
const thirdDot = document.querySelector('#dot-3');

// Initialise the first dot to be greyed out upon DOM initialisation
firstDot.style.backgroundColor = 'black';

firstDot.addEventListener('click', () => {
    wideImageFrame.style.transitionDuration = '2s';
    wideImageFrame.style.right = '0px';
    pictureCounter = 0;
    firstDot.style.backgroundColor = 'black';
    secondDot.style.backgroundColor = 'lightgray';
    thirdDot.style.backgroundColor = 'lightgray';
})

secondDot.addEventListener('click', () => {
    wideImageFrame.style.transitionDuration = '2s';
    wideImageFrame.style.right = '350px';
    pictureCounter = 1;
    firstDot.style.backgroundColor = 'lightgray';
    secondDot.style.backgroundColor = 'black';
    thirdDot.style.backgroundColor = 'lightgray';
})

thirdDot.addEventListener('click', () => {
    wideImageFrame.style.transitionDuration = '2s';
    wideImageFrame.style.right = '700px';
    pictureCounter = 2;
    firstDot.style.backgroundColor = 'lightgray';
    secondDot.style.backgroundColor = 'lightgray';
    thirdDot.style.backgroundColor = 'black';
})


const imageTransitionTime = 4000;
const rotateThroughImages = function moveImagePosition() {
    if (pictureCounter === 2) {
        wideImageFrame.style.transitionDuration = '2s';
        wideImageFrame.style.right = '0px';
        pictureCounter = 0;
        firstDot.style.backgroundColor = 'black';
        secondDot.style.backgroundColor = 'lightgray';
        thirdDot.style.backgroundColor = 'lightgray';
        setTimeout(rotateThroughImages, imageTransitionTime);
    } else {
        pictureCounter = ++pictureCounter;
        if (pictureCounter === 0) {
            firstDot.style.backgroundColor = 'black';
            secondDot.style.backgroundColor = 'lightgray';
            thirdDot.style.backgroundColor = 'lightgray';
        } else if (pictureCounter === 1) {
            firstDot.style.backgroundColor = 'lightgray';
            secondDot.style.backgroundColor = 'black';
            thirdDot.style.backgroundColor = 'lightgray';
        } else {
            firstDot.style.backgroundColor = 'lightgray';
            secondDot.style.backgroundColor = 'lightgray';
            thirdDot.style.backgroundColor = 'black';
        };
        wideImageFrame.style.transitionDuration = '2s';
        wideImageFrame.style.right = `${pictureCounter * 350}` + 'px';
        setTimeout(rotateThroughImages, imageTransitionTime);
    }
}

setTimeout(rotateThroughImages, imageTransitionTime);

