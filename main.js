const shape1Btn = document.querySelector('#shape1-btn')
const shape2Btn = document.querySelector('#shape2-btn')
const shape3Btn = document.querySelector('#shape3-btn')

const shape1 = document.querySelector('.shape1')
const shape2 = document.querySelector('.shape2')
const shape3 = document.querySelector('.shape3')

shape1Btn.addEventListener("click", function(e) {
    if (shape1Btn.textContent === "Make Square") {
        shape1.classList.remove("triangle")
        shape1.classList.add("square")
        shape1Btn.textContent = "Make Circle"
    } else if (shape1Btn.textContent === "Make Circle") {
        shape1.classList.remove("square")
        shape1.classList.add("circle")
        shape1Btn.textContent = "Make Triangle"
    } else {
        shape1.classList.remove("circle")
        shape1.classList.add("triangle")
        shape1Btn.textContent = "Make Square"
    }
})

shape2Btn.addEventListener("click", function(e) {
    if (shape2Btn.textContent === "Make Square") {
        shape2.classList.remove("triangle")
        shape2.classList.add("square")
        shape2Btn.textContent = "Make Circle"
    } else if (shape2Btn.textContent === "Make Circle") {
        shape2.classList.remove("square")
        shape2.classList.add("circle")
        shape2Btn.textContent = "Make Triangle"
    } else {
        shape2.classList.remove("circle")
        shape2.classList.add("triangle")
        shape2Btn.textContent = "Make Square"
    }
})

shape3Btn.addEventListener("click", function(e) {
    if (shape3Btn.textContent === "Make Square") {
        shape3.classList.remove("triangle")
        shape3.classList.add("square")
        shape3Btn.textContent = "Make Circle"
    } else if (shape3Btn.textContent === "Make Circle") {
        shape3.classList.remove("square")
        shape3.classList.add("circle")
        shape3Btn.textContent = "Make Triangle"
    } else {
        shape3.classList.remove("circle")
        shape3.classList.add("triangle")
        shape3Btn.textContent = "Make Square"
    }
})
