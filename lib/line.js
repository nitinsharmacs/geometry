const { createPoint } = require('./point.js');

const midPoint = function () {
  const xMid = (this.start.x + this.end.x) / 2
  const yMid = (this.start.y + this.end.y) / 2
  return createPoint(xMid, yMid);
};

const createLine = function (start, end) {
  const line = { start, end };
  line.mid = midPoint.bind(line);
  return line;
};

exports.createLine = createLine;
