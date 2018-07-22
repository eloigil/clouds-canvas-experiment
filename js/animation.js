'use strict';

class Animation {
  constructor (canvas, ctx) {
    this.ctx = ctx;

    this.width = canvas.width;
    this.height = canvas.height;

    this.renderEngine = new RenderEngine();

    this.floor = null;
    this.clouds = [];

    this._start();
  }

  _start () {
    this._createFloor();
    this._update();
  }
}
