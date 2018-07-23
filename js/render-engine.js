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
    this._renderSky();
    this._renderFloor();
  }

  _renderSky () {
    this.ctx.fillStyle = '#cefaff';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  _renderFloor () {
    this.ctx.fillStyle = this.floor.color;
    this.ctx.fillRect(0, this.floor.y, this.width, this.height - this.floor.y);
  }
}
