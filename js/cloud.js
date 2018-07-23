'use strict';

class Cloud {
  constructor (canvasWidth, canvasHeight, z) {
    this.radius = canvasHeight / 10;
    this.position = {
      x: canvasWidth + this.radius,
      y: canvasHeight * 0.2,
      z: z
    };

    this.speed = -5;
    this.animationAngle = 0;
  }

  update () {
    this.position.x += this.speed;
  }

  checkIfEnded () {
    console.log(this.position.x <= 0 - this.radius);
    return (this.position.x <= 0 - this.radius);
  }
}
