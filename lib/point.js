const arePointsEqual = function (point) {
  const axes = ['x', 'y'];
  return axes.every(function (axis) {
    return this[axis] === point[axis];
  }.bind(this));
};

const movePoint = function (offset) {
  this.x += offset['x'];
  this.y += offset['y'];
  return this;
};

const createPoint = function (x, y) {
  const point = { x, y };
  point.areEqual = arePointsEqual.bind(point);
  point.move = movePoint.bind(point);
  return point;
};

exports.createPoint = createPoint;
