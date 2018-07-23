'use strict';

class RenderEngine {
  constructor (ctx, canvasWidth, canvasHeight, horizon) {
    this.ctx = ctx;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.horizon = horizon;

    this.floor = null;
    this.clouds = [];
  }

  render () {
    this._renderSky();
    this._renderFloor();
    this._renderClouds();

    window.requestAnimationFrame(() => {
      this.render();
    });
  }

  _renderSky () {
    this.ctx.fillStyle = '#cefaff';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  _renderFloor () {
    this.ctx.fillStyle = this.floor.color;
    this.ctx.fillRect(0, this.floor.y, this.width, this.height - this.floor.y);
  }

  _renderClouds () {
    if (this.clouds.length !== 0) {
      this._renderCloud(this.clouds[0]);
    }
  }
  _renderCloud (cloud) {
    console.log(cloud.position);
    this.ctx.fillStyle = '#fff';
    this.ctx.globalAlpha = 0.6;
    this.ctx.beginPath();
    this.ctx.arc(cloud.position.x, cloud.position.y, cloud.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}
