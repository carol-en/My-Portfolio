
console.log("Connected to App");

// ==========================================

// DYNAMIC RESIZABLE & INTERACTIVE CANVAS

    //  TUTORIAL/ ARTICLE: 
           // https://codemyui.com/html5-canvas-scratch-off-reveal-image-animation/
    // CODEPEN: 
           // https://codepen.io/dudleystorey/pen/yJQxLX
    // MAKE IMAGE COVER (or contain):
           // https://codepen.io/supah/pen/BaNBmmw
    // DYNAMICALLY RESIZE CANVAS:
          // https://www.youtube.com/watch?v=vxljFhP2krI

// ==========================================

// ==============
// VARIABLES
// ==============
const hero = document.getElementById("hero"); // Get canvas with tag 'hero'
const heroCanvas = hero.getContext("2d"); // Get canvas functions
let img = new Image(); // create new image tag '<img>'
img.src = "./img/ink.png"; // Give image it's src url
let brushRadius =  (hero.width / 100) * 5;  
// brush/pen radius. canvas width divided by 100m multiply by 5
// Has to be dynamic depending on where mouse/finger is.
if(brushRadius < 50) { brushRadius = 50; }
// Make sure radius does not shrink below 50

// ==============
// Make image element 'cover' at center & center
// ==============
const coverImg = (img) => {
    const imgRatio = img.height / img.width;
    const winRatio = window.innerHeight / window.innerWidth;
    if (imgRatio > winRatio) { // If the image ration is larger than window ratio
      const h = window.innerWidth * imgRatio;
      heroCanvas.drawImage(img, 0, (window.innerHeight - h) / 2, window.innerWidth, h);
    }
    if (imgRatio < winRatio) { // If image ratio is smaller than window ratio
      const w = window.innerWidth * winRatio / imgRatio;
      heroCanvas.drawImage(img, (window.innerWidth - w) / 2, 0, w, window.innerHeight);
    }
  }
// ==============
// Listen if window resizes, re-pull window and height size, remove old image, generate new image
// ==============
addEventListener("resize", () => { 
    hero.width =  window.innerWidth;
    hero.height = window.innerHeight; 
    img.remove(); // remove initial image load
    // load in new image every time browser is resized
    coverImg(img);
});

// ==============
// Initialize at load of page.
// ==============
const init = () => { 
    hero.width =  window.innerWidth;
    hero.height = window.innerHeight;  
    img.onload = () => { coverImg(img); };  // first image loaded in 
}

// ==============
// detect left button clickdown
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
// ==============   
const detectLeftButton= (event) => {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

// ==============
// Get position of pointer/curser
// ==============
const getBrushPos = (xRef, yRef) => { 
    // xRef & yRef from event. Gets from mouse move or touch move the coordinates
    // ex: event.clientX = xRef & event.ClientY = yRef
    let heroRect = hero.getBoundingClientRect(); // Get data back from canvas size.
    return { // X & Y is location where mouse or finger press down
        // for X axis, subtract where mouse/finger press down at xRef from heroRect: the corner of the canvas.
            // Divide from Y axis where you subtract canva's  right to canvas's left corner then multiply by canva's full width
      x: Math.floor((xRef - heroRect.left) / (heroRect.right - heroRect.left) * hero.width),
      y: Math.floor((yRef - heroRect.top) / (heroRect.bottom - heroRect.top) * hero.height)
    };
}
// ==============
// 'draw' in new image
// (in reality: image generated above and inserted into canvas is being erased to reveal background image set in css)
// ==============
const drawDot = (mouseX, mouseY) => { // mouseX and mouseY come from getBrushPos, x y
    heroCanvas.beginPath();// Start drawing path
    heroCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
     // create circle. X axis coordinate of circle, Y axis coordinate of circle,  radius of circle,  
     // sAngle 'start' angle at 3 oClock @ 0,  eAngle 'end' Angle at PI, 
     // true/false draw counter clockwise 
    heroCanvas.fillStyle = '#000';
    heroCanvas.globalCompositeOperation = "destination-out"; 
    // inner strokes show background img, anything outside will still show image generated above aka the image created
    heroCanvas.fill();
}
// ==============
// detect mouse movement
// ==============
hero.addEventListener("mousemove", event => {
    let brushPos = getBrushPos(event.clientX, event.clientY);
    let leftBtn = detectLeftButton(event);
    if (leftBtn == 1) { // if left button is pressed down, begin drawing circle
        drawDot(brushPos.x, brushPos.y);
    }
}, false);
// ==============
// detect touch movement
// ==============
hero.addEventListener("touchmove", event => {
    event.preventDefault();
    let touch = event.targetTouches[0];
    if (touch) { // if screen is being touched draw circle
        let brushPos = getBrushPos(touch.pageX, touch.pageY);
        drawDot(brushPos.x, brushPos.y);
    }
}, false);

// initialize
// get canvas width & height,
// create first image on load
init();