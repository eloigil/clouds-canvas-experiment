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
      this.clouds.forEach((cloudLine) => {
        cloudLine.forEach((cloud) => {
          this._renderCloud(cloud);
        });
      });
    }
  }
  _renderCloud (cloud) {
    const radius = cloud.radius * (cloud.position.z / 100);

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(cloud.position.x, cloud.position.y, radius, 0, 2 * Math.PI);
    this.ctx.strokeStyle = '#fff';
    this.ctx.globalAlpha = 0.8;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.fillStyle = '#fff';
    this.ctx.globalAlpha = 0.4;
    this.ctx.fill();
    this.ctx.restore();
  }
}
