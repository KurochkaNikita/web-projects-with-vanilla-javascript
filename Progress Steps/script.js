const progress = document.getElementById('progress')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const active = document.querySelectorAll('.active')

let currentActive = 1;
let lengthStep = circles.length

btnNext.addEventListener('click', () => {
    if(currentActive < lengthStep){
        currentActive++
        rerender()
    }
})

btnPrev.addEventListener('click', () => {
    if(currentActive > 1){
        currentActive--
        rerender()
    }
})

function rerender(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })

    btnNext.disabled = currentActive === lengthStep
    btnPrev.disabled = currentActive === 1

    progress.style.width = (
        (currentActive - 1 ) / ( lengthStep -1)
    ) * 100 + "%";
}