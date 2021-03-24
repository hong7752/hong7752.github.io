$(document).ready(function () {
    $('#carouselExampleIndicators').carousel({ interval: 4000 });
});

window.addEventListener('scroll', () => {
    moveBar('#e74c3c')
})
function moveBar(color = '#0984e3') {
    let bar = document.querySelector('.bar')
    let w =
        Math.ceil((Math.round(window.pageYOffset) /
            (document.body.scrollHeight - window.innerHeight)) *
            100)
    bar.style.width = w + '%'
    bar.style.background = color
}
