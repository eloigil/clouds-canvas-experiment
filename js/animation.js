'use strict';

class Animation {
  constructor (canvas, ctx) {
    this.ctx = ctx;

    this.width = canvas.width;
    this.height = canvas.height;

    this.horizon = {
      x: this.width / 2,
      y: this.height * 0.6
    };

    this.floor = null;
    this.clouds = [];

    this.renderEngine = new RenderEngine(this.ctx, this.width, this.height, this.horizon);

    this._start();
  }

  _start () {
    this._createFloor();
    this._interval = setInterval(() => { this._update(); }, 30);
    this.renderEngine.render();
  }

  _createFloor () {
    this.floor = {
      y: this.horizon.y,
      color: '#a9f27b'
    };

    this.renderEngine.floor = this.floor;
  }

  _createClouds () {
    // @TODO create 5 clouds for different z levels
    const maxZ = 100;
    if (this.clouds.length < 5) {
      const z = 100;
      this.clouds.push(new Cloud(this.width, this.height, z, maxZ));
      console.log('added clouds');
    }
    this.renderEngine.clouds = this.clouds;
  }

  _update () {
    this._createClouds();
    this.clouds.forEach(cloud => {
      cloud.update();
    });
  }
}
