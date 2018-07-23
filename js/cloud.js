'use strict';

class Cloud {
  constructor (canvasWidth, canvasHeight, z, maxZ) {
    this.radius = canvasHeight / 15 * z / maxZ;
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
}
