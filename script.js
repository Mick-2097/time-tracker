const current = document.querySelectorAll('h4')
const previous = document.querySelectorAll('p')
const buttonArea = document.querySelector('.buttons')
const buttons = document.querySelectorAll('button')

function getTimes() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        buttonArea.addEventListener('click', event => {
            if (event.target.classList.value === 'daily') {
                buttons.forEach(x => {x.style.color = 'var(--Desaturated-blue)'})
                event.target.style.color = 'white'
                for (let i = 0; i < current.length; i++) {
                    current[i].innerText = `${data[i].timeframes.daily.current}hrs`
                    previous[i].innerText = `Yesterday - ${data[i].timeframes.daily.previous}hrs`
                }
            }
            if (event.target.classList.value === 'weekly') {
                buttons.forEach(x => {x.style.color = 'var(--Desaturated-blue)'})
                event.target.style.color = 'white'
                for (let i = 0; i < current.length; i++) {
                    current[i].innerText = `${data[i].timeframes.weekly.current}hrs`
                    previous[i].innerText = `Last week - ${data[i].timeframes.weekly.previous}hrs`
                }
            }
            if (event.target.classList.value === 'monthly') {
                buttons.forEach(x => {x.style.color = 'var(--Desaturated-blue)'})
                console.log(data[6].message)
                event.target.style.color = 'white'
                for (let i = 0; i < current.length; i++) {
                    current[i].innerText = `${data[i].timeframes.monthly.current}hrs`
                    previous[i].innerText = `Last month - ${data[i].timeframes.monthly.previous}hrs`
                }
            }
        })

    })
}
getTimes()
window.onload = function() {
    document.querySelector('.weekly').style.color = 'white'
}