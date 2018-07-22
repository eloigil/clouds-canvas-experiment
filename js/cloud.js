'use strict';

class Cloud {
  constructor (canvasHeight, x, y, z) {
    this.radius = canvasHeight / 100;
    this.position = {
      x: x,
      y: y,
      z: z
    };

    this.animationAngle = 0;
  }

  update () {

  }
}
