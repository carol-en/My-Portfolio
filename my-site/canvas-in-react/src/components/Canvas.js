const canvas = this.refs.canvas;
const heroCanvas = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let width = canvas.width;
let height =  canvas.height;
const image = new Image();
image.src = "https://i.imgur.com/9WSZvp7.jpg";

export default window.Canvas;