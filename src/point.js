class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  areEqual(point) {
    const axes = ['x', 'y'];
    return axes.every(function (axis) {
      return this[axis] === point[axis];
    }.bind(this));
  }
  move(offset) {
    this.x += offset['x'];
    this.y += offset['y'];
    return this;
  }
}

exports.Point = Point;
