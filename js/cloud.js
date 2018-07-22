'use strict';

class Cloud {
  constructor (canvasWidth, canvasHeight, z, maxZ) {
    this.radius = canvasHeight / 100 * z / maxZ;
    this.position = {
      x: canvasWidth + this.radius,
      y: canvasHeight * 0.3,
      z: z
    };

    this.animationAngle = 0;
  }

  update () {

  }
}
