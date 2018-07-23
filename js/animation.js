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
    this.clouds = [[]];

    this.renderEngine = new RenderEngine(this.ctx, this.width, this.height, this.horizon);

    this.time = 0;
    this._start();
  }

  _start () {
    this._createFloor();
    this._interval = setInterval(() => { this._update(); }, 25);
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
    if (this.clouds[0].length < 10 && this.time % 1000 === 0) {
      const z = 100;
      this.clouds[0].push(new Cloud(this.width, this.height, z, maxZ));
      console.log('added clouds');
      this.renderEngine.clouds = this.clouds;
    }
  }

  _updateTime () {
    this.time += 25;
  }

  _destroyCloud (line, index) {
    this.clouds[line].splice(index, 1);
  }

  _update () {
    this._updateTime();

    this._createClouds();
    this.clouds.forEach((cloudsLine, line) => {
      cloudsLine.forEach((cloud, index) => {
        cloud.checkIfEnded() ? this._destroyCloud(line, index) : cloud.update();
      });
    });
  }
}
