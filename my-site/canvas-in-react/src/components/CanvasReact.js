import React, { Component } from 'react';
let brushRadius;


class CanvasReact extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.init = this.init.bind(this);
        this.cover = this.cover.bind(this);

      }
    
    componentDidMount () {
        this.init();
    }

    cover(image, heroCanvas) {
        const imgRatio = image.height / image.width;
        const winRatio = window.innerHeight / window.innerWidth;
        if (imgRatio > winRatio) { // If the image ration is larger than window ratio
          const h = window.innerWidth * imgRatio;
          heroCanvas.drawImage(image, 0, (window.innerHeight - h) / 2, window.innerWidth, h);
        }
        if (imgRatio < winRatio) { // If image ratio is smaller than window ratio
          const w = window.innerWidth * winRatio / imgRatio;
          heroCanvas.drawImage(image, (window.innerWidth - w) / 2, 0, w, window.innerHeight);
        }
      }

    init()  {
            const canvas = this.canvasRef.current;
            const heroCanvas = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const image = new Image();
            image.src = "https://i.imgur.com/9WSZvp7.jpg";

            image.onload = () => {
                heroCanvas.drawImage(image, 0, 0, canvas.width, canvas.height);
            }

            window.addEventListener("resize", () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                image.remove();
                this.cover(image, heroCanvas);
            })

            canvas.addEventListener("mousemove", event => {
                let brushPos = this.getBrushPos(event.clientX, event.clientY, canvas);
                let leftBtn = this.detectLeftButton(event);
                if (leftBtn == 1) { // if left button is pressed down, begin drawing circle
                    this.drawDot(brushPos.x, brushPos.y);
                }
            }, false);
            // ==============
            // detect touch movement
            // ==============
            canvas.addEventListener("touchmove", event => {
                event.preventDefault();
                let touch = event.targetTouches[0];
                if (touch) { // if screen is being touched draw circle
                    let brushPos = this.getBrushPos(touch.pageX, touch.pageY, canvas);
                    this.drawDot(brushPos.x, brushPos.y, heroCanvas);
                }
            }, false);
    }

    detectLeftButton= (event) => {
        if ('buttons' in event) {
            return event.buttons === 1;
        } else if ('which' in event) {
            return event.which === 1;
        } else {
            return event.button === 1;
        }
    }

    getBrushPos = (xRef, yRef, canvas) => { 
        // xRef & yRef from event. Gets from mouse move or touch move the coordinates
        // ex: event.clientX = xRef & event.ClientY = yRef
        let heroRect = canvas.getBoundingClientRect(); // Get data back from canvas size.
        return { // X & Y is location where mouse or finger press down
            // for X axis, subtract where mouse/finger press down at xRef from heroRect: the corner of the canvas.
                // Divide from Y axis where you subtract canva's  right to canvas's left corner then multiply by canva's full width
          x: Math.floor((xRef - heroRect.left) / (heroRect.right - heroRect.left) * canvas.width),
          y: Math.floor((yRef - heroRect.top) / (heroRect.bottom - heroRect.top) * canvas.height)
        };
    }

    drawDot = (mouseX, mouseY, heroCanvas) => { // mouseX and mouseY come from getBrushPos, x y
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

    render() {
        return <canvas ref={this.canvasRef}  className="hero"/>;
        
    }

}

export default CanvasReact