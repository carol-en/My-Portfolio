import React, { Component } from 'react';


const background = {
    data: {
        url: "https://i.imgur.com/9WSZvp7.jpg",
        width: window.innerWidth,
        height: window.innerHeight
    }
}

class CanvasReact extends Component {

    componentDidMount () {
        this.init();
    }

    init = () =>  {
            const canvas = this.refs.canvas;
            const heroCanvas = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const image = new Image();
            image.src = background.data.url;

            image.onload = () => {
                heroCanvas.drawImage(image, 0, 0, canvas.width, canvas.height);
            }

            window.addEventListener("resize", () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight; 

                image.remove();
                heroCanvas.drawImage(image, 0, 0, canvas.width, canvas.height);
            })
        
    }




    render() {
        return (
            <>
            <section>
                <h1>This Is My Canvas Component</h1>
                <canvas ref="canvas" className="hero"/>
            </section>

            </>
        )
    }

}

export default CanvasReact