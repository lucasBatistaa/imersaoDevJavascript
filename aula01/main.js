var actualChoice = "Moeda"  // padrão ao iniciar a página

// {(DE: Moeda / values.name) * (PARA: Moeda)}

var options = [
    {
        name: "Moeda",
        values: [
            { name: "real", value: 1 },
            { name: "dolar", value: 0.19407655 },
            { name: "euro", value: 0.179534 },
            { name: "libras", value: 0.16 },
            { name: "bitcoin", value: 0.0000083 }
        ]
    },
    {
        name: "Temperatura",
        values:
            [
                { name: "fahrenheit", value: [-32, 18] },
                { name: "celsius", value: 1 },
                { name: "kelvin", value: -273.15 },
            ]
    },
    {
        name: "Espaço",
        values: [
            { name: "km", value: 9460528405000.02 },
            { name: "anos-luz", value: 1 },
        ]
    }
]

var buttonChoices = [
    { name: "Moeda", function: "Moeda()" },
    { name: "Temperatura", function: "Temperatura()" },
    { name: "Espaço", function: "Espaco()" }]

var choiceOptions = document.getElementById('choice-options')
var conversorDiv = document.getElementById('conversor')

function Moeda() {
    showButtons("Moeda")
    conversor("Moeda", actualOption("Moeda"))
    showResult("")
}

function Temperatura() {
    showButtons("Temperatura")
    conversor("Temperatura", actualOption("Temperatura"))
    showResult("")
}

function Espaco() {
    showButtons("Espaço")
    conversor("Espaço", actualOption("Espaço")) // h1, options, options
    showResult("")
}

function actualOption(actualChoice) {
    var allValuesThisOptions
    var allValuesNames = []

    options.map((option) => {
        if (option.name === actualChoice) {

            allValuesThisOptions = option.values
        }
    })


    allValuesThisOptions.map((value, i) => {
        allValuesNames[i] = value.name
    })

    return allValuesNames
}

function valuesSelectForm(formSelections, actualChoice) {
    var allValuesThisOptions
    var allValues = []

    options.map((option) => {
        if (option.name === actualChoice) {

            allValuesThisOptions = option.values
        }
    })

    formSelections.map((select, i) => {
        allValuesThisOptions.map((option) => {
            if (option.name === select) {

                allValues[i] = option.value
            }
        })
    })

    console.log(allValues)

    return allValues
}

function showButtons(actualChoice) {
    choiceOptions.innerHTML = ''

    buttonChoices.map((choice) => {

        if (actualChoice != choice.name) {
            var button = `<button class="button-choice" onClick=${choice.function}>${choice.name}</button>`
            choiceOptions.innerHTML += button
        }
    })
}

function conversor(actualChoice, options) {
    var titleConversor = document.getElementById('title-conversor')
    var firstCurrency = document.getElementById('currency')
    var opt = ""

    options.map((option) => {
        opt += `<option value="${option}">${option}</option>`
    })

    titleConversor.innerHTML = `<h1>${actualChoice}</h1>`

    firstCurrency.innerHTML = `
        <input placeholder="Valor" title="input" type="number">
        DE: <select title="currency" name="currency" id="currency">
            <option value="none">Select</option>
            ${opt}
        </select>

        PARA: <select title="currency2" name="currency2" id="currency2">
            <option value="none">Select</option>
            ${opt}
        </select>
    `
}

function showResult(valueConverter) {
    var result = document.getElementById('result')

    result.innerHTML = `<h1>${valueConverter}</h1>`
}

function formConversor(event) {
    event.preventDefault()
    console.log(event)

    var formSelections = [event.target[1].value, event.target[2].value]

    var valueInserted = event.target[0].value

    var allValuesSelections = valuesSelectForm(formSelections, "Temperatura")

    if (allValuesSelections.length == 2 && valueInserted != 0) {
        var valueConverter = (valueInserted / allValuesSelections[0]) * allValuesSelections[1]

        if (valueConverter >= 1) {
            valueConverter = valueConverter.toFixed(2)
        } else {
            valueConverter = valueConverter
        }

        showResult(valueConverter)
    }

    else {
        alert("Selecione todas as opções!")
    }
}



showButtons(actualChoice)
conversor(actualChoice, actualOption(actualChoice))