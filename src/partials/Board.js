import { SVG_NS, boardColor, lineColor } from '../settings.js'


export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }
  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    let line = document.createElementNS(SVG_NS, 'line');

    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', boardColor);
    svg.appendChild(rect);

    line.setAttributeNS(null, 'x1', `${this.width/2}`);
    line.setAttributeNS(null, 'y1', '0');
    line.setAttributeNS(null, 'x2', `${this.width/2}`);
    line.setAttributeNS(null, 'y2', `${this.height}`);
    line.setAttributeNS(null, 'stroke', lineColor);
    line.setAttributeNS(null, 'stroke-width', '4');
    line.setAttributeNS(null, 'stroke-dasharray', '20, 14');
    svg.appendChild(line);
  }
}