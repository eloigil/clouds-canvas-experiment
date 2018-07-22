'use strict';

class Animation {
  constructor (canvas, ctx) {
    this.ctx = ctx;

    this.width = canvas.width;
    this.height = canvas.height;

    // this.renderEngine = new RenderEngine(this.ctx);

    this.horizon = this.height * 0.6;

    this.floor = null;
    this.clouds = [];

    this._start();
  }

  _start () {
    this._createFloor();
    this._update();
    // this.renderEngine.render();
  }

  _createFloor () {
    this.floor = {
      y: this.horizon
    };
  }

  _createClouds () {
    // @TODO create 5 clouds for different z levels
    const maxZ = 100;
    const z = 100;

    this.clouds.push(new Cloud(this.width, this.height, z, maxZ));
  }

  _update () {
    this._createClouds();
    this.clouds.forEach(cloud => {
      cloud.update();
    });
  }
}
