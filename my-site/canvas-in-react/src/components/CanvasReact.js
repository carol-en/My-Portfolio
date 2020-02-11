import React, { Component } from 'react';

class CanvasReact extends Component {


    componentDidMount () {
        this.init();
    }
    
    init = () => {
        const hero = this.refs.canvas;
        const heroCanvas = hero.getContext("2d");
        hero.width = window.innerWidth;
        hero.height =  window.innerHeight;
        let img = new Image();
        img.src =  "https://i.imgur.com/9WSZvp7.jpg";
        img.onload = () => {
            heroCanvas.drawImage(img, 0, 0, hero.width, hero.height);
        }
        window.addEventListener("resize", () => { 
            hero.width = window.innerWidth;
            hero.height =  window.innerHeight;

            img.remove();
            heroCanvas.drawImage(img, 0, 0, hero.width, hero.height);

        });  
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