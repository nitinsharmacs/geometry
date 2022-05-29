const { Point } = require('./point.js');

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  midPoint() {
    const xMid = (this.start.x + this.end.x) / 2
    const yMid = (this.start.y + this.end.y) / 2
    return new Point(xMid, yMid);
  }
  length() {
    const xDiff = this.start.x - this.end.x;
    const yDiff = this.start.y - this.end.y;
    return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
  }
  isParallelTo(line) {
    return this.slope() === line.slope();
  }
  slope() {
    const yDelta = this.start.y - this.end.y;
    const xDelta = this.start.x - this.end.x;
    return yDelta / xDelta;
  }
}

exports.createLine = createLine;
