const body = document.querySelector('body');

Colorlist = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
function changeColor() {
    const randomColor = Colorlist[Math.floor(Math.random() * Colorlist.length)];
    console.log(randomColor);
    body.style.backgroundColor = randomColor;
}
setInterval(changeColor, 1000);