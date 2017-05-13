import { SVG_NS, ballColor } from '../settings.js';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.x = this.boardWidth/2;
    this.y = this.boardHeight/2;
    this.vy = Math.floor(Math.random() * 10 - 5); 
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  wallCollision() {
    const hitTop = this.y-this.radius <= 0;
    const hitBottom = this.y+this.radius >= this.boardHeight;
    const hitLeft = this.x-this.radius <= 0;
    const hitRight = this.x+this.radius >= this.boardWidth;
    if (hitLeft || hitRight){ 
      this.vx = -this.vx;
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }
  }

  

  render (svg, player1, player2) {
    this.x += this.vx;
    this.y += this.vy;
    this.wallCollision();
    let circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'fill', ballColor);
    svg.appendChild(circle);
  }
}