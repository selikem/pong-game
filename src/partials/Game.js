import { SVG_NS, paddleHeight, paddleWidth, paddleGap, ballRadius, KEYS, SCORE } from '../settings.js';
import Board from './Board.js'
import Paddle from './Paddle.js'
import Ball from './Ball.js'
import Score from './Score'

export default class Game {

	constructor(element, width, height) {
		this.gameElement = document.getElementById(element);
		this.width = width;
		this.height = height;
		this.paused = false;
		this.gameBoard = new Board(width, height);
		this.player1 = new Paddle (height, paddleWidth, paddleHeight, paddleGap, (height-paddleHeight)/2, KEYS.p1Up, KEYS.p1Down);
		this.player2 = new Paddle (height, paddleWidth, paddleHeight, (width-(paddleWidth+paddleGap)), (height-paddleHeight)/2, KEYS.p2Up, KEYS.p2Down);
		this.ball = new Ball(ballRadius, width, height);
		this.player1score = new Score(this.width / 2 - SCORE.distance - 15, SCORE.topDistance, SCORE.size);
		this.player2score = new Score(this.width / 2 + SCORE.distance, SCORE.topDistance, SCORE.size);
		document.addEventListener('keydown', event => {
			if (event.key === KEYS.pause) {
				this.paused = !this.paused;
			}
		});
	}

	render() {
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.gameBoard.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.ball.render(svg, this.player1, this.player2);
		this.player1score.render(svg, this.player1.score);
		this.player2score.render(svg, this.player2.score);
	}

}