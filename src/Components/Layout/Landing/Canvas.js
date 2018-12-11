import React, { Component } from "react";

export default class Canvas extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    let canvas = document.querySelector("canvas");

    if (window.innerWidth >= 1800) {
      canvas.width = window.innerWidth - 670;
    } else {
      canvas.width = window.innerWidth - 450;
    }
    canvas.height = window.innerHeight;

    let c = canvas.getContext("2d");
    c.fillStyle = "rgba(0,0,0, 0.6)";

    let mouse = {
      x: undefined,
      y: undefined
    };
    let maxRadius = 30;
    // let minRadius = 2;

    let colorArray = ["#55DDE0", "#33658A", "#2F4858", "#00D8FF", "#3AAED8"];

    window.addEventListener("mousemove", event => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
      };

      this.update = function() {
        if (
          this.x + this.radius > window.innerWidth ||
          this.x - this.radius < 0
        ) {
          this.dx = -this.dx;
        }
        if (
          this.y + this.radius > window.innerHeight ||
          this.y - this.radius < 0
        ) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //Interactivity
        if (
          mouse.x - this.x < 75 &&
          mouse.x - this.x > -75 &&
          mouse.y - this.y < 75 &&
          mouse.y - this.y > -75
        ) {
          if (this.radius < maxRadius) {
            this.radius += 2;
          }
        } else if (this.radius > 2) {
          this.radius -= 1;
        }
        this.draw();
      };
    }

    let circleArray = [];
    for (let i = 0; i < 500; i++) {
      let radius = Math.random() * 3 + 1;
      let x = Math.random() * window.innerWidth - radius * 2 + radius;
      let y = Math.random() * window.innerHeight - radius * 2 + radius;
      let dx = (Math.random() - 0.5) * 5;
      let dy = (Math.random() - 0.5) * 5;

      circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    };
    animate();
  }
  render() {
    return <canvas />;
  }
}
