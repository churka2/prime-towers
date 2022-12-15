const area = document.querySelectorAll('.area'),
    input = document.querySelectorAll('.input'),
    arrowLeft = document.querySelectorAll('.slider-arrow_left'),
    arrowRight = document.querySelectorAll('.slider-arrow_right'),
    bar = document.querySelectorAll('.bar')

area[0].style = `display:block`
area[3].style = `display:block`
area[6].style = `display:block`
bar[0].classList.add('bar-checked')
bar[3].classList.add('bar-checked')
bar[6].classList.add('bar-checked')





input[0].addEventListener('click', function () {
    if (input[0].hasAttribute('checked') == false) {
        area[0].style = `display:block`
        area[1].style = `display:none`
        area[2].style = `display:none`

    } else {
        area[0].style = `display:block`
        area[1].style = `display:none`
        area[2].style = `display:none`
    }
    bar[0].classList.add('bar-checked')
    bar[1].classList.remove('bar-checked')
    bar[2].classList.remove('bar-checked')
})
input[1].addEventListener('click', function () {
    if (input[1].hasAttribute('checked') == false) {
        area[1].style = `display:block`
        area[0].style = `display:none`
        area[2].style = `display:none`
    } else {
        ''
    }
    bar[1].classList.add('bar-checked')
    bar[0].classList.remove('bar-checked')
    bar[2].classList.remove('bar-checked')
})
input[2].addEventListener('click', function () {
    if (input[2].hasAttribute('checked') == false) {
        area[2].style = `display:block`
        area[1].style = `display:none`
        area[0].style = `display:none`
    } else {
        ''
    }
    bar[2].classList.add('bar-checked')
    bar[1].classList.remove('bar-checked')
    bar[0].classList.remove('bar-checked')
})
input[3].addEventListener('click', function () {
    if (input[3].hasAttribute('checked') == false) {
        area[3].style = `display:block`
        area[4].style = `display:none`
        area[5].style = `display:none`
    } else {
        area[3].style = `display:block`
        area[4].style = `display:none`
        area[5].style = `display:none`
    }
    bar[3].classList.add('bar-checked')
    bar[4].classList.remove('bar-checked')
    bar[5].classList.remove('bar-checked')
})
input[4].addEventListener('click', function () {
    if (input[4].hasAttribute('checked') == false) {
        area[4].style = `display:block`
        area[3].style = `display:none`
        area[5].style = `display:none`
    } else {
        ''
    }
    bar[4].classList.add('bar-checked')
    bar[3].classList.remove('bar-checked')
    bar[5].classList.remove('bar-checked')
})
input[5].addEventListener('click', function () {
    if (input[5].hasAttribute('checked') == false) {
        area[5].style = `display:block`
        area[3].style = `display:none`
        area[4].style = `display:none`
    } else {
        ''
    }
    bar[5].classList.add('bar-checked')
    bar[4].classList.remove('bar-checked')
    bar[3].classList.remove('bar-checked')
})
input[6].addEventListener('click', function () {
    if (input[6].hasAttribute('checked') == false) {
        area[6].style = `display:block`
        area[7].style = `display:none`
        area[8].style = `display:none`
    } else {
        area[6].style = `display:block`
        area[7].style = `display:none`
        area[8].style = `display:none`
    }
    bar[6].classList.add('bar-checked')
    bar[7].classList.remove('bar-checked')
    bar[8].classList.remove('bar-checked')
})
input[7].addEventListener('click', function () {
    if (input[7].hasAttribute('checked') == false) {
        area[7].style = `display:block`
        area[6].style = `display:none`
        area[8].style = `display:none`
    } else {
        ''
    }
    bar[7].classList.add('bar-checked')
    bar[6].classList.remove('bar-checked')
    bar[8].classList.remove('bar-checked')
})
input[8].addEventListener('click', function () {
    if (input[8].hasAttribute('checked') == false) {
        area[8].style = `display:block`
        area[6].style = `display:none`
        area[7].style = `display:none`
    } else {
        ''
    }
    bar[8].classList.add('bar-checked')
    bar[7].classList.remove('bar-checked')
    bar[6].classList.remove('bar-checked')
})


arrowLeft[0].addEventListener('click', function () {
    if (input[0].hasAttribute('checked')) {
        input[0].removeAttribute('checked')
        input[2].setAttribute('checked', 'checked')
        bar[2].classList.add('bar-checked')
        bar[0].classList.remove('bar-checked')
        bar[1].classList.remove('bar-checked')
        area[2].style = `display:block`
        area[1].style = `display:none`
        area[0].style = `display:none`
    } else if (input[1].hasAttribute('checked')) {
        input[1].removeAttribute('checked')
        input[0].setAttribute('checked', 'checked')
        bar[0].classList.add('bar-checked')
        bar[1].classList.remove('bar-checked')
        bar[2].classList.remove('bar-checked')
        area[0].style = `display:block`
        area[1].style = `display:none`
        area[2].style = `display:none`
    } else if (input[2].hasAttribute('checked')) {
        input[2].removeAttribute('checked')
        input[1].setAttribute('checked', 'checked')
        bar[1].classList.add('bar-checked')
        bar[0].classList.remove('bar-checked')
        bar[2].classList.remove('bar-checked')
        area[1].style = `display:block`
        area[0].style = `display:none`
        area[2].style = `display:none`
    }
})

arrowRight[0].addEventListener('click', function () {
    if (input[0].hasAttribute('checked')) {
        input[0].removeAttribute('checked')
        input[1].setAttribute('checked', 'checked')
        bar[1].classList.add('bar-checked')
        bar[0].classList.remove('bar-checked')
        bar[2].classList.remove('bar-checked')
        area[1].style = `display:block`
        area[0].style = `display:none`
        area[2].style = `display:none`
    } else if (input[1].hasAttribute('checked')) {
        input[1].removeAttribute('checked')
        input[2].setAttribute('checked', 'checked')
        bar[2].classList.add('bar-checked')
        bar[0].classList.remove('bar-checked')
        bar[1].classList.remove('bar-checked')
        area[2].style = `display:block`
        area[1].style = `display:none`
        area[0].style = `display:none`
    } else if (input[2].hasAttribute('checked')) {
        input[2].removeAttribute('checked')
        input[0].setAttribute('checked', 'checked')
        bar[0].classList.add('bar-checked')
        bar[2].classList.remove('bar-checked')
        bar[1].classList.remove('bar-checked')
        area[0].style = `display:block`
        area[1].style = `display:none`
        area[2].style = `display:none`
    }
})

arrowLeft[1].addEventListener('click', function () {
    if (input[3].hasAttribute('checked')) {
        input[3].removeAttribute('checked')
        input[5].setAttribute('checked', 'checked')
        bar[5].classList.add('bar-checked')
        bar[4].classList.remove('bar-checked')
        bar[3].classList.remove('bar-checked')
        area[5].style = `display:block`
        area[4].style = `display:none`
        area[3].style = `display:none`
        
    } else if (input[4].hasAttribute('checked')) {
        input[4].removeAttribute('checked')
        input[3].setAttribute('checked', 'checked')
        bar[3].classList.add('bar-checked')
        bar[4].classList.remove('bar-checked')
        bar[5].classList.remove('bar-checked')
        area[3].style = `display:block`
        area[4].style = `display:none`
        area[5].style = `display:none`
    } else if (input[5].hasAttribute('checked')) {
        input[5].removeAttribute('checked')
        input[4].setAttribute('checked', 'checked')
        bar[4].classList.add('bar-checked')
        bar[5].classList.remove('bar-checked')
        bar[3].classList.remove('bar-checked')
        area[4].style = `display:block`
        area[5].style = `display:none`
        area[3].style = `display:none`
    }
})

arrowRight[1].addEventListener('click', function () {
    if (input[3].hasAttribute('checked')) {
        input[3].removeAttribute('checked')
        input[4].setAttribute('checked', 'checked')
        bar[4].classList.add('bar-checked')
        bar[5].classList.remove('bar-checked')
        bar[3].classList.remove('bar-checked')
        area[4].style = `display:block`
        area[5].style = `display:none`
        area[3].style = `display:none`
    } else if (input[4].hasAttribute('checked')) {
        input[4].removeAttribute('checked')
        input[5].setAttribute('checked', 'checked')
        bar[5].classList.add('bar-checked')
        bar[4].classList.remove('bar-checked')
        bar[3].classList.remove('bar-checked')
        area[5].style = `display:block`
        area[4].style = `display:none`
        area[3].style = `display:none`
    } else if (input[5].hasAttribute('checked')) {
        input[5].removeAttribute('checked')
        input[3].setAttribute('checked', 'checked')
        bar[3].classList.add('bar-checked')
        bar[4].classList.remove('bar-checked')
        bar[5].classList.remove('bar-checked')
        area[3].style = `display:block`
        area[4].style = `display:none`
        area[5].style = `display:none`
    }
})

arrowLeft[2].addEventListener('click', function () {
    if (input[6].hasAttribute('checked')) {
        input[6].removeAttribute('checked')
        input[8].setAttribute('checked', 'checked')
        bar[8].classList.add('bar-checked')
        bar[7].classList.remove('bar-checked')
        bar[6].classList.remove('bar-checked')
        area[8].style = `display:block`
        area[7].style = `display:none`
        area[6].style = `display:none`
    } else if (input[7].hasAttribute('checked')) {
        input[7].removeAttribute('checked')
        input[6].setAttribute('checked', 'checked')
        bar[6].classList.add('bar-checked')
        bar[7].classList.remove('bar-checked')
        bar[8].classList.remove('bar-checked')
        area[6].style = `display:block`
        area[7].style = `display:none`
        area[8].style = `display:none`
    } else if (input[8].hasAttribute('checked')) {
        input[8].removeAttribute('checked')
        input[7].setAttribute('checked', 'checked')
        bar[7].classList.add('bar-checked')
        bar[8].classList.remove('bar-checked')
        bar[6].classList.remove('bar-checked')
        area[7].style = `display:block`
        area[8].style = `display:none`
        area[6].style = `display:none`
    }
})

arrowRight[2].addEventListener('click', function () {
    if (input[6].hasAttribute('checked')) {
        input[6].removeAttribute('checked')
        input[7].setAttribute('checked', 'checked')
        bar[7].classList.add('bar-checked')
        bar[8].classList.remove('bar-checked')
        bar[6].classList.remove('bar-checked')
        area[7].style = `display:block`
        area[8].style = `display:none`
        area[6].style = `display:none`
    } else if (input[7].hasAttribute('checked')) {
        input[7].removeAttribute('checked')
        input[8].setAttribute('checked', 'checked')
        bar[8].classList.add('bar-checked')
        bar[7].classList.remove('bar-checked')
        bar[6].classList.remove('bar-checked')
        area[8].style = `display:block`
        area[7].style = `display:none`
        area[6].style = `display:none`
    } else if (input[8].hasAttribute('checked')) {
        input[8].removeAttribute('checked')
        input[6].setAttribute('checked', 'checked')
        bar[6].classList.add('bar-checked')
        bar[7].classList.remove('bar-checked')
        bar[8].classList.remove('bar-checked')
        area[6].style = `display:block`
        area[7].style = `display:none`
        area[8].style = `display:none`
    }
})





