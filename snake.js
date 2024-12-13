import { getInputDirection } from "./input.js";

export let SNAKE_SPEED = 10;  // Initial speed
const snakeBody = [{ x: 20, y: 20 }];
let newSegments = 0;

const SPEED_INCREMENT = 0.1;  // Kecepatan bertambah setiap kali ular tumbuh
const BASE_SPEED = 10;  // Kecepatan dasar ular

export function update() {
    addSegments();

    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    });
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    newSegments = 0;
}

// Fungsi untuk menyesuaikan kecepatan berdasarkan panjang ular
export function setSnakeSpeed() {
    const snakeLength = snakeBody.length;
    const speedIncrease = Math.floor(snakeLength / 5);  // Setiap 5 segmen ular bertambah
    SNAKE_SPEED = BASE_SPEED + SPEED_INCREMENT * speedIncrease;  // Meningkatkan kecepatan ular
}
