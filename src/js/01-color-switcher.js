function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColorStart = document.querySelector('[data-start]');
const changeColorStop = document.querySelector('[data-stop]');
const body = document.body;
let intervaId = null;

changeColorStart.addEventListener('click', changeColorStartClick);
changeColorStop.addEventListener('click', changeColorStopClick);

function updateBodyBGcolor() {
  body.style.backgroundColor = getRandomHexColor();
}

function changeColorStartClick() {
    intervaId = setInterval(updateBodyBGcolor, 1000);
    changeColorStart.disabled = true;
    if (changeColorStart.disabled) {
        changeColorStop.disabled = false;
    };
};

function changeColorStopClick() {
    clearInterval(intervaId);
    changeColorStop.disabled = true;
    if (changeColorStop.disabled) {
        changeColorStart.disabled = false;
    };
};



