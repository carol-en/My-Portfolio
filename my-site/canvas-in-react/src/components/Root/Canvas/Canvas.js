import React, { Component } from 'react';
import main from "./main.css";



class Canvas extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.init = this.init.bind(this);
        this.cover = this.cover.bind(this);
        this.detectLeftButton = this.detectLeftButton.bind(this);
        this.getBrushPos = this.getBrushPos.bind(this);

      }
    
    componentDidMount () {
        this.init();
    }

    cover(image, cxt) {
        const imgRatio = image.height / image.width;
        const winRatio = window.innerHeight / window.innerWidth;
        if (imgRatio > winRatio) { // If the image ration is larger than window ratio
          const h = window.innerWidth * imgRatio;
          cxt.drawImage(image, 0, (window.innerHeight - h) / 2, window.innerWidth, h);
        }
        if (imgRatio < winRatio) { // If image ratio is smaller than window ratio
          const w = window.innerWidth * winRatio / imgRatio;
          cxt.drawImage(image, (window.innerWidth - w) / 2, 0, w, window.innerHeight);
        }
      }

    init()  {
            const canvas = this.canvasRef.current;
            const cxt = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const image = new Image();
            image.src = "https://i.imgur.com/GHKzJPM.png";

            image.onload = () => {
                this.cover(image, cxt);
            }

            window.addEventListener("resize", () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                image.remove();
                this.cover(image, cxt);
            })

            canvas.addEventListener("mousemove", event => {
                let brushPos = this.getBrushPos(event.clientX, event.clientY, canvas);
                let leftBtn = this.detectLeftButton(event);
                if(leftBtn === true) { // if left button is pressed down, begin drawing circle
                    this.drawDot(brushPos.x, brushPos.y, cxt);
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
                    this.drawDot(brushPos.x, brushPos.y, cxt);
                }
            }, false);
    }

    detectLeftButton(event) {
        if ('buttons' in event) {
            return event.buttons === 1;
        } else if ('which' in event) {
            return event.which === 1;
        } else {
            return event.button === 1;
        }
    }

    getBrushPos(xRef, yRef, canvas) { 
        // xRef & yRef from event. Gets from mouse move or touch move the coordinates
        // ex: event.clientX = xRef & event.ClientY = yRef
        let canvasRect = canvas.getBoundingClientRect(); // Get data back from canvas size.
        return { // X & Y is location where mouse or finger press down
            // for X axis, subtract where mouse/finger press down at xRef from heroRect: the corner of the canvas.
                // Divide from Y axis where you subtract canva's  right to canvas's left corner then multiply by canva's full width
          x: Math.floor((xRef - canvasRect.left) / (canvasRect.right - canvasRect.left) * canvas.width),
          y: Math.floor((yRef - canvasRect.top) / (canvasRect.bottom - canvasRect.top) * canvas.height)
        };
    }

    drawDot = (mouseX, mouseY, cxt) => { // mouseX and mouseY come from getBrushPos, x y
        let brushRadius =  (window.innerWidth / 100) * 5;
        if(brushRadius < 50) { brushRadius = 50; }
        cxt.beginPath();// Start drawing path
        cxt.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
         // create circle. X axis coordinate of circle, Y axis coordinate of circle,  radius of circle,  
         // sAngle 'start' angle at 3 oClock @ 0,  eAngle 'end' Angle at PI, 
         // true/false draw counter clockwise 
         cxt.fillStyle = '#000';
         cxt.globalCompositeOperation = "destination-out"; 
        // inner strokes show background img, anything outside will still show image generated above aka the image created
         cxt.fill();
    }

    render() {
        return (
            <>
            <h1>Hello from canvas</h1>
            
            <canvas ref={this.canvasRef}  className="hero"/>
            </>
        )
        
    }

}

export default Canvas