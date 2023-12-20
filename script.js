document.addEventListener('DOMContentLoaded', function() {
    const proofButton = document.getElementById('proofButton');
    const Telegram = document.getElementById('tg');

    proofButton.addEventListener('click', function() {
        tweetIQ();
    });

    Telegram.addEventListener('click', function() {
        window.open("https://t.me/ZooAvax", + "_blank")
    });

});

function tweetIQ() {
    var text = `I'm collecting my animals for @ZooAvax 🥚🐕`;
    window.open("https://twitter.com/intent/tweet?&text=\n" + text, "_blank");
}
