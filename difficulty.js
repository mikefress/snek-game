import { getSnakeSpeed } from './snake.js'

let SNAKE_SPEED = getSnakeSpeed();

const easyButton = document.getElementById('easy-button')
const mediumButton = document.getElementById('medium-button')
const hardButton = document.getElementById('hard-button')

easyButton.addEventListener('click', function() {
    easyButton.style.backgroundColor = 'hsl(50, 100%, 50%)'
    mediumButton.style.backgroundColor = 'white'
    hardButton.style.backgroundColor = 'white'
    alert('What are you? a Wuss?')
    SNAKE_SPEED = SNAKE_SPEED/2
})

mediumButton.addEventListener('click', function() {
    easyButton.style.backgroundColor = 'white'
    mediumButton.style.backgroundColor = 'hsl(50, 100%, 50%)'
    hardButton.style.backgroundColor = 'white'
    alert('Ok, Medium it is.')
    SNAKE_SPEED = getSnakeSpeed()
})

hardButton.addEventListener('click', function() {
    easyButton.style.backgroundColor = 'white'
    mediumButton.style.backgroundColor = 'white'
    hardButton.style.backgroundColor = 'hsl(50, 100%, 50%)'
    alert('ooOOoohh! Hard man are ya?')
    SNAKE_SPEED = SNAKE_SPEED*2
})


export function getDifficultySetting() {
    return SNAKE_SPEED;
}