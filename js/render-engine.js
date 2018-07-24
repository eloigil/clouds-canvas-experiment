'use strict';

class RenderEngine {
  constructor (ctx, canvasWidth, canvasHeight, horizon, maxZ) {
    this.ctx = ctx;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.horizon = horizon;
    this.maxZ = maxZ;

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

    const yAlpha = Math.atan((this.horizon.y - cloud.position.y) / this.maxZ);
    const y = this.horizon.y - (Math.tan(yAlpha) * cloud.position.z);

    const xFactor = cloud.position.z / this.maxZ;

    const color = 155 + cloud.position.z;

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(cloud.position.x * xFactor, y, radius, 0, 2 * Math.PI);
    this.ctx.strokeStyle = '#fff';
    this.ctx.globalAlpha = 0.8;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.fillStyle = `rgb(${color},${187 * cloud.position.z / 100},218)`;
    this.ctx.globalAlpha = 0.4;
    this.ctx.fill();
    this.ctx.restore();
  }
}
