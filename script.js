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



check.addEventListener('click', () => {
    navbar.classList.toggle('active')
    list.classList.remove('active')
    list1.classList.remove('active')
    list2.classList.remove('active')
    list3.classList.remove('active')
});


hover.addEventListener('mouseenter', () => {
    list.classList.add('active')
    list1.classList.remove('active')
    list2.classList.remove('active')
    list3.classList.remove('active')
});

hover1.addEventListener('mouseenter', () => {
    list1.classList.add('active')
    list.classList.remove('active')
    list2.classList.remove('active')
    list3.classList.remove('active')
});

hover2.addEventListener('mouseenter', () => {
    list2.classList.add('active')
    list.classList.remove('active')
    list1.classList.remove('active')
    list3.classList.remove('active')
});

hover3.addEventListener('mouseenter', () => {
    list3.classList.add('active')
    list.classList.remove('active')
    list1.classList.remove('active')
    list2.classList.remove('active')
});

