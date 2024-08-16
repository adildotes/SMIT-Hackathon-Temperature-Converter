document.getElementById('convertButton').addEventListener('click', function () {
    const temperatureInput = document.getElementById('temperatureInput');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    const resultDisplay = document.getElementById('result');

    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    if (isNaN(temperature)) {
        alert('Please enter a valid temperature.');
        return;
    }

    let convertedTemperature;

    if (fromUnit === toUnit) {
        convertedTemperature = temperature;
    } else {
        convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);
    }

    resultDisplay.textContent = `Result: ${convertedTemperature.toFixed(2)} °${toUnit[0]}`;
});

function convertTemperature(temperature, fromUnit, toUnit) {
    switch (fromUnit) {
        case 'Celsius':
            return toUnit === 'Fahrenheit' ? (temperature * 9 / 5) + 32
                : toUnit === 'Kelvin' ? temperature + 273.15
                    : temperature;

        case 'Fahrenheit':
            return toUnit === 'Celsius' ? (temperature - 32) * 5 / 9
                : toUnit === 'Kelvin' ? ((temperature - 32) * 5 / 9) + 273.15
                    : temperature;

        case 'Kelvin':
            return toUnit === 'Celsius' ? temperature - 273.15
                : toUnit === 'Fahrenheit' ? ((temperature - 273.15) * 9 / 5) + 32
                    : temperature;

        default:
            return temperature;
    }
}
