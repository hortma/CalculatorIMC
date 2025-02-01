function calculateImc(weight, height) {
    return weight / height ** 2
}

function checkImc(imcValue) {
    
    const conditionArray = [
        ['Underweight', 18.5],
        ['Normal Weight', 25],
        ['Overweight (above the desired weight).', 30]
    ]

    let condition = 'Obesity'

    for (const index in conditionArray) {
        const conditionProperties = conditionArray[index]
        if (imcValue < conditionProperties[1]) {
            condition = conditionProperties[0]
            break
        }
     }

    return condition
}

function validate(weightInput, heightInput) {
    if (weightInput && heightInput && typeof(weightInput) === "number" && typeof(weightInput) === "number") {
        return true
    }
    return false
}

function buttonPress() {
    const nameInputValue = document.getElementById('name').value
    const heightInputValue = Number(document.getElementById('height').value)
    const weightInputValue = Number(document.getElementById('weight').value)
    const resultOutput = document.getElementById('output')

    if (validate(weightInputValue, heightInputValue)) {
        const imc = calculateImc(weightInputValue, heightInputValue)
        const response = checkImc(imc)
            resultOutput.innerHTML = `The individual ${nameInputValue} is currently ${response}`
        return;
    }
        
    resultOutput.innerHTML = `Please write the correct values for weight and height.`
    return;
}