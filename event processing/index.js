function Input(event) {
    const elInput = event.target;
    const inputValue = elInput.value;
    let filteredValue = '';

    for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (!isNaN(char)) {
            continue;
        }
        filteredValue += char;
    }

    elInput.value = filteredValue;
}


function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}







field.addEventListener('click', function (event) {
    const clickX = event.clientX;
    const clickY = event.clientY;

    const fieldWidth = field.offsetWidth;
    const fieldHeight = field.offsetHeight;
    const ballSize = ball.offsetWidth;

    const ballX = clickX - field.offsetLeft - ballSize / 5;
    const ballY = clickY - field.offsetTop - ballSize / 5;

    const maxBallX = fieldWidth - ballSize;
    const maxBallY = fieldHeight - ballSize;
    const clampedBallX = Math.max(0, Math.min(ballX, maxBallX));
    const clampedBallY = Math.max(0, Math.min(ballY, maxBallY));

    ball.style.transform = `translate(${clampedBallX}px, ${clampedBallY}px)`;
});



const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

const lights = [redLight, yellowLight, greenLight];

let currentIndex = 0;

function changeLight() {
    currentIndex = (currentIndex + 1) % lights.length;

    lights.forEach(light => light.style.opacity = 0.3);

    lights[currentIndex].style.opacity = 1;
}




function selectBook(element) {
    let books = document.getElementsByClassName('book');
    for (let i = 0; i < books.length; i++) {
        books[i].classList.remove('selected');
    }
    element.classList.add('selected');
}






function showTooltip(event, text) {
    let tooltip = event.target.nextElementSibling;
    tooltip.innerText = text;

    let tooltipRect = tooltip.getBoundingClientRect();
    let buttonRect = event.target.getBoundingClientRect();

    if (tooltipRect.top < 0) {
        tooltip.classList.remove('tooltiptext-top');
        tooltip.classList.add('tooltiptext-bottom');
        tooltip.style.top = (buttonRect.height + 10) + 'px';
    } else {
        tooltip.classList.remove('tooltiptext-bottom');
        tooltip.classList.add('tooltiptext-top');
    }
}





function toggleCollapse(element) {
    element.classList.toggle('collapsed');
}
