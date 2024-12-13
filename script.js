import {
    update as updateSnake,
    draw as drawSnake,
    SNAKE_SPEED,
    getSnakeHead,
    snakeIntersection,
    setSnakeSpeed,  // Tambahkan ini
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
    if (gameOver) {
        if (confirm("Kamu kalah. Tekan OK untuk restart.")) {
            window.location = "/"; // Reload the page to restart
        }
        return; // Stop the game if it's over
    }

    window.requestAnimationFrame(main); // Request the next frame

    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    update(); // Update game state
    draw();   // Draw game elements
}

function update() {
    updateSnake();  // Update snake position
    updateFood();   // Update food position
    checkDeath();   // Check if game is over
    setSnakeSpeed();  // Adjust speed based on snake length
}

function draw() {
    gameBoard.innerHTML = "";  // Clear previous frame
    drawSnake(gameBoard);      // Draw snake
    drawFood(gameBoard);       // Draw food
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection(); // Check if snake collides with itself or out of bounds
}

window.requestAnimationFrame(main); // Start the game
