import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js'
import {  getDifficultySetting } from './difficulty.js'

let startNoise = new Audio('./audio/Ding.mp3')
let loseNoise = new Audio('./audio/lose.wav')
window.onload = function() {
    startNoise.play()
}

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board')
let gameOver = false;

function main(currentTime) {
    if (gameOver) {
        loseNoise.play()
        if (confirm('Game Over! \n\n Press ok to try again? ...')) {
            window.location = '/snek-game/';
        }
        return;
    }
    let SNAKE_SPEED = getDifficultySetting()

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)

}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}