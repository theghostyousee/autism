document.addEventListener('DOMContentLoaded', function() {
    const proofButton = document.getElementById('proofButton');
    const Telegram = document.getElementById('tg');

    proofButton.addEventListener('click', function() {
        tweetIQ();
    });

    Telegram.addEventListener('click', function() {
        window.open("https://t.me/BurnAvax", + "_blank")
    });

});

function tweetIQ() {
    var text = `My proof `;
    window.open("https://twitter.com/intent/tweet?&text=\n" + text, "_blank");
}
