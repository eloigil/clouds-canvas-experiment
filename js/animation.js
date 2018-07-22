'use strict';

class Animation {
  constructor (canvas, ctx) {
    this.ctx = ctx;

    this.width = canvas.width;
    this.height = canvas.height;

    this.renderEngine = new RenderEngine();

    this.horizon = this.height * 0.6;

    this.floor = null;
    this.clouds = [];

    this._start();
  }

  _start () {
    this._createFloor();
    this._update();
    this.renderEngine.render();
  }

  _createFloor () {
    this.floor = {
      y: this.horizon
    };
  }

  _createClouds () {
    this.clouds.push(new Cloud(this.height));
  }

  _update () {
    this._createClouds();
    this.clouds.forEach(cloud => {
      cloud.update();
    });
  }
}
