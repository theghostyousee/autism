document.addEventListener('DOMContentLoaded', function() {
    const numberDisplay = document.getElementById('numberDisplay');
    const proofButton = document.getElementById('proofButton');
    let currentValue = 10; // starting number

    const rouletteEffect = setInterval(function() {
        currentValue = Math.floor(Math.random() * (180 - 10 + 1)) + 10;
        numberDisplay.textContent = currentValue;
    }, 75);

    setTimeout(function() {
        clearInterval(rouletteEffect);
        proofButton.addEventListener('click', function() {
            tweetIQ(currentValue);
        });
    }, 1000); // stops the effect after 2 seconds
});

function tweetIQ(iqValue) {
    var text = `Just scored a ${iqValue} on the @AutisticInuSol IQ test.😐`;
    window.open("https://twitter.com/intent/tweet?&text=\n" + text, "_blank");
}