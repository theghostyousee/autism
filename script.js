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
    var text = `This is my proof of participation for @PepeOn_INJ 🐸 🥷 `;
    window.open("https://twitter.com/intent/tweet?&text=\n" + text, "_blank");
}
