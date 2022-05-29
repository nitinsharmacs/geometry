const { Point } = require('./point.js');

class Style {
  constructor(styleRules) {
    this.styleRules = { ...styleRules };
  }

  create() {
    return Object.entries(this.styleRules).map(([attr, value]) => {
      return `${attr}: ${value}`;
    }).join(';');
  }

  addRule(rule) {
    this.styleRules = { ...this.styleRules, ...rule };
  }
}

class Div {
  constructor({ style, content }) {
    this.style = style;
    this.content = content;
  }
  html() {
    return `<div style="${this.style.create()}">${this.content || ''}</div>`
  }
}

class Canvas {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
  }
  draw(content) {
    const style = new Style({
      width: `${this.width}px`,
      height: `${this.height}px`,
      position: 'relative',
      border: '1px solid black',
    });
    return new Div({ style, content }).html();
  }
}

const transformRotate = (angle) => {
  return `rotate(${angle}rad)`;
};

const angle = (slope) => {
  return Math.atan(slope);
};

class Line {
  constructor(start, end) {
    this.start = new Point(start.x, start.y);
    this.end = new Point(end.x, end.y);
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
    const yDelta = this.end.y - this.start.y;
    const xDelta = this.end.x - this.start.x;
    return yDelta / xDelta;
  }

  toHTML() {
    const style = new Style({
      'background-color': 'black',
      'transform-origin': 'left top',
      position: 'absolute',
      left: `${this.start.x}px`,
      top: `${this.start.y}px`,
      width: `${this.length()}px`,
      height: '2px',
      transform: transformRotate(angle(this.slope())),
    });
    return new Div({ style }).html();
  }

  draw() {
    const canvas = new Canvas({
      height: 800,
      width: 900
    });
    const content = canvas.draw(this.toHTML());
    fs.writeFileSync('./line.html', content, 'utf8');
  }
}

exports.Line = Line;
