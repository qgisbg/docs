var cookiesWrapper = document.createElement('div');
cookiesWrapper.id = 'cookies-eu-banner';
cookiesWrapper.style.display = 'none';
cookiesWrapper.innerHTML += 'Ще следим кои страници се посещават най-често и ще пишем повече подобно съдържание. Съгласен?'
cookiesWrapper.innerHTML += '<button id="cookies-eu-reject">не</button>';
cookiesWrapper.innerHTML += '<button id="cookies-eu-accept">да</button>';
document.body.appendChild(cookiesWrapper);

new CookiesEuBanner(function () {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    
    ga('create', 'G-PH86CHF2H7', 'auto');
    ga('send', 'pageview');
}, true, true);
