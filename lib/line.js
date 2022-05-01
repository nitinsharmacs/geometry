const { createPoint } = require('./point.js');

const midPoint = function () {
  const xMid = (this.start.x + this.end.x) / 2
  const yMid = (this.start.y + this.end.y) / 2
  return createPoint(xMid, yMid);
};

const lineLength = function () {
  const xDiff = this.start.x - this.end.x;
  const yDiff = this.start.y - this.end.y;
  return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
};

const areLineParallel = function (line) {
  return this.slope() === line.slope();
};

const lineSlope = function () {
  const yDelta = this.start.y - this.end.y;
  const xDelta = this.start.x - this.end.x;
  return yDelta / xDelta;
};

const createLine = function (start, end) {
  const line = { start, end };
  const methods = {
    mid: midPoint,
    length: lineLength,
    slope: lineSlope,
    isParallelTo: areLineParallel
  };
  for (const method in methods) {
    line[method] = methods[method].bind(line);
  }
  return line;
};

exports.createLine = createLine;
