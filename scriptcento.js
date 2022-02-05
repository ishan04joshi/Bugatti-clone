const check = document.getElementsByClassName('lol')[0]
const navbar = document.getElementsByClassName('collapse-navbar')[0]

const hover = document.getElementsByClassName('model-list')[0]
const list = document.getElementsByClassName('hidden-list')[0]

const hover1 = document.getElementsByClassName('model-list')[1]
const list1 = document.getElementsByClassName('hidden-list')[1]

const hover2 = document.getElementsByClassName('model-list')[2]
const list2 = document.getElementsByClassName('hidden-list')[2]

const hover3 = document.getElementsByClassName('model-list')[4]
const list3 = document.getElementsByClassName('hidden-list')[3]

const click = document.getElementsByClassName('cento-animation')[0]
const animation = document.getElementsByClassName('cento-1-1')[0]
const animation1 = document.getElementsByClassName('cento-1-2')[0]
const animation2 = document.getElementsByClassName('cento-1-3')[0]
const animation3 = document.getElementsByClassName('cento-1-4')[0]

click.addEventListener('mouseenter', () => {
    animation.classList.add('active')
    animation1.classList.add('active')
    animation2.classList.add('active')
    animation3.classList.add('active')
    
});

check.addEventListener('click', () => {
    navbar.classList.toggle('active')
});





hover.addEventListener('mouseenter', () => {
    list.classList.toggle('active')
    list1.classList.remove('active')
    list2.classList.remove('active')
    list3.classList.remove('active')
});

hover1.addEventListener('mouseenter', () => {
    list1.classList.toggle('active')
    list.classList.remove('active')
    list2.classList.remove('active')
    list3.classList.remove('active')
});

hover2.addEventListener('mouseenter', () => {
    list2.classList.toggle('active')
    list.classList.remove('active')
    list1.classList.remove('active')
    list3.classList.remove('active')
});

hover3.addEventListener('mouseenter', () => {
    list3.classList.toggle('active')
    list.classList.remove('active')
    list1.classList.remove('active')
    list2.classList.remove('active')
});

