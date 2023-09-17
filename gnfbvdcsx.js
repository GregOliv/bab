window.onload = function() {
    setTimeout(function() {
        var ad = document.querySelector("ins.adsbygoogle");
        if (ad && ad.innerHTML.replace(/\s/g, "").length == 0) {
            console.log('You seem to blocking Google AdSense ads in your browser.');
        }
    }, 2000);
};
