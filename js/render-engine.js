'use strict';

class RenderEngine {
  constructor (ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.width = canvasWidth;
    this.height = canvasHeight;

    this.floor = null;
    this.clouds = [];
  }

  render () {
    this._renderFloor();
  }

  _renderFloor () {
    this.ctx.fillRect(0, this.floor.y, this.width, this.height - this.floor.y);
  }
}
