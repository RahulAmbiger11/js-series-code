/* const form = document.querySelector('form')

//this use case will give an empty value inside the field
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please provide a valid height: ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please provide a valid weight: ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        

        if (bmi < 18.6) {
            results.innerHTML = `Your bmi index is: <span>${bmi}</span>, And you are Under Weight`
           
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `Your bmi index is: <span>${bmi}</span>, And you are in Normal Range`
        } else if (bmi > 24.9) {
            results.innerHTML = `Your bmi index is: <span>${bmi}</span>, And you are Over Weight`
            
        }
    }

}) */


const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height, ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight, ${weight}`
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        if (bmi < 18.6) {
            results.innerHTML = `Your bmi index is: <span>${bmi}</span>, And you are Under Weight`

        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `Your bmi index is: <span>${bmi}</span>, And you are in Normal Range`
        } else if (bmi > 24.9) {
            results.innerHTML = `Your bmi index is: <span>${bmi}</span>, And you are Over Weight`

        }
    }
})