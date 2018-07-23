'use strict';

class Cloud {
  constructor (canvasWidth, canvasHeight, z, maxZ) {
    this.radius = canvasHeight / 15;
    this.position = {
      x: canvasWidth + this.radius,
      y: canvasHeight * 0.3,
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
