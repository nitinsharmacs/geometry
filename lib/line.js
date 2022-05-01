const { createPoint } = require('./point.js');

const midPoint = function () {
  const xMid = (this.start.x + this.end.x) / 2
  const yMid = (this.start.y + this.end.y) / 2
  return createPoint(xMid, yMid);
};

const lineLength = function ({ start, end }) {
  const xDiff = start.x - end.x;
  const yDiff = start.y - end.y;
  return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
};

const createLine = function (start, end) {
  const line = { start, end };
  line.mid = midPoint.bind(line);
  line.length = lineLength(line);
  return line;
};

exports.createLine = createLine;
