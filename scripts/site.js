window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        document.getElementsByTagName('body')[0].classList.add('loaded');
    }, 1)
});