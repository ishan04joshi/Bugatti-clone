const mouse = document.getElementsByClassName('lmao')[0]
const display = document.getElementsByClassName('hover-caption')[0]

mouse.addEventListener('mouseenter', () => {
    display.classList.add('active')
})