import React, { Component } from "react";

export default class Starfall extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    let canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Event Listeners

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    });
    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Stars
    function Star(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = {
        x: (Math.random() - 0.5) * 5,
        y: 3
      };
      this.friction = Math.random();
      console.log(this.friction);
      this.gravity = 1;
    }

    Star.prototype.draw = function() {
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.shadowColor = "#E3EAEF";
      c.shadowBlur = 20;
      c.fill();
      c.closePath();
      c.restore();
    };

    Star.prototype.update = function() {
      this.draw();

      //When the ball hit bottom of the screen
      if (this.y + this.radius + this.velocity.y >= canvas.height - 400) {
        this.velocity.y = -this.velocity.y * this.friction;
        this.shatter();
      } else {
        this.velocity.y += this.gravity;
      }
      this.x += this.velocity.x;
      this.y += this.velocity.y;
    };

    Star.prototype.shatter = function() {
      this.radius -= 3;
      for (let i = 0; i < 8; i++) {
        miniStars.push(new MiniStar(this.x, this.y, 2));
      }
    };

    function MiniStar(x, y, radius, color) {
      Star.call(this, x, y, radius, color);
      this.velocity = {
        x: randomIntFromRange(-5, 5),
        y: randomIntFromRange(-15, 15)
      };
      this.friction = 0.2;
      this.gravity = 0.1;
      this.timeToLive = 75;
      this.opacity = 1;
    }
    MiniStar.prototype.draw = function() {
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = `rgba(227,234,239,${this.opacity})`;
      c.shadowColor = "#E3EAEF";
      c.shadowBlur = 20;
      c.fill();
      c.closePath();
      c.restore();
    };

    MiniStar.prototype.update = function() {
      this.draw();
      if (this.y + this.radius + this.velocity.y >= canvas.height) {
        this.velocity.y = -this.velocity.y * this.friction;
      } else {
        this.velocity.y += this.gravity;
      }

      this.y += this.velocity.y;
      this.x += this.velocity.x;
      this.timeToLive -= 1;
      this.opacity -= 1 / this.timeToLive;
    };

    let stars;
    let miniStars;
    // let backgroundStars;
    let ticker = 0;
    let randomSpawnRate = 75;
    function init() {
      stars = [];
      miniStars = [];
      //   backgroundStars = [];

      //   for (let i = 0; i < 1; i++) {
      //     stars.push(new Star(canvas.width / 2, 30, 30, "#E3EAEF"));
      //   }
      //   for (let i = 0; i < 150; i++) {
      //     const x = Math.random() * canvas.width;
      //     const y = Math.random() * canvas.height;
      //     const radius = Math.random() * 3;
      //     backgroundStars.push(new Star(x, y, radius, "black"));
      //   }
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        star.update();
        if (star.radius <= 0) {
          stars.splice(index, 1);
        }
      });

      miniStars.forEach((miniStar, index) => {
        miniStar.update();
        if (miniStar.timeToLive <= 0) {
          miniStars.splice(index, 1);
        }
      });
      ticker++;
      if (ticker % randomSpawnRate === 0) {
        const x = Math.random() * canvas.width;
        stars.push(new Star(x, -100, 12, "white"));
        randomSpawnRate = randomIntFromRange(75, 200);
      }
      //   backgroundStars.forEach(backgroundStar => {
      //     backgroundStar.draw();
      //   });
    }

    init();
    animate();
  }
  render() {
    return <canvas />;
  }
}
