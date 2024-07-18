let clickCount = 0;

function p3Button() {
    window.location.href = "p4.html";
}

function changeText() {
    const textElement = document.getElementById('textOntb');
    clickCount++;
    
    if (clickCount === 1) {
        textElement.textContent = "You have entered the world of Middle-earth,";
    } else if (clickCount === 2) {
        textElement.textContent = "a land of beauty and peril.";
    } else if (clickCount === 3) {
        textElement.textContent = "I am Gandalf the Grey,";
    } else if (clickCount === 4) {
        textElement.textContent = "and an exciting adventure awaits you here.";
    } else if (clickCount === 5) {
        textElement.textContent = "Your journey begins now!";
    } else if (clickCount === 6) {
        textElement.textContent = "and you will face many challenges";
    } else if (clickCount === 7) {
        textElement.textContent = "and uncover many secrets.";
    } else if (clickCount === 8) {
        textElement.textContent = "Remember, the fate of Middle-earth... ";
    } else if (clickCount === 9) {
        textElement.textContent = "depends on your courage and wisdom.";
    } else if (clickCount === 10) {
        textElement.textContent = "Let us embark on this quest together!";
    } else if (clickCount === 11) {
        createButton();
    }
}

function createButton() {
    const button = document.createElement('button');
    button.className = 'btB3';
    button.textContent = 'Click Me';
    button.addEventListener('click', otherFunction);
    const textElement = document.getElementById('textElement');
    textElement.appendChild(button);
}

function otherFunction() {
    window.location.href = "p3.4.html"
}

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('textElement');
    textElement.addEventListener('click', changeText);
});
