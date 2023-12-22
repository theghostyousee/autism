document.addEventListener('DOMContentLoaded', function() {
    const proofButton = document.getElementById('proofButton');
    const Telegram = document.getElementById('tg');
    const Ray = document.getElementById('ray');

    proofButton.addEventListener('click', function() {
        tweetIQ();
    });

    Telegram.addEventListener('click', function() {
        window.open("https://t.me/ZooSolana", + "_blank")
    });

    Ray.addEventListener('click', function() {
        window.open("https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4uE5gm2mVVLFMBsdiwPWJos2j5xxuvH3Yhqnu13XCsV5&inputAmount=0&fixed=in", + "_blank")
    });

});

function tweetIQ() {
    var text = `I'm collecting my $ZOO airdrop for @ZooCoinSolana 🥚🐕🪂`;
    window.open("https://twitter.com/intent/tweet?&text=\n" + text, "_blank");
}
