const button = document.getElementById("runaway-btn");
const yesButton = document.getElementById("yes");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    button.style.position = "absolute";
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
    const currentWidth = yesButton.offsetWidth;
    const currentHeight = yesButton.offsetHeight;
    
    const newWidth = currentWidth + 10; // Increase width by 10 pixels
    const newHeight = currentHeight + 10; // Increase height by 10 pixels
    
    yesButton.style.width = `${newWidth}px`;
    yesButton.style.height = `${newHeight}px`;
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
function redirectToAnotherWebsite() {
    // Replace 'https://example.com' with the actual URL you want to redirect to
    window.location.href = 'yes.html';
}