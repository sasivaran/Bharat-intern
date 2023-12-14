function convertToCelsius() {
    const fahrenheitInput = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(fahrenheitInput)) {
        const celsius = (fahrenheitInput - 32) * 5/9;
        document.getElementById('resultFahrenheit').textContent = celsius;
    } else {
        alert('Please enter a valid number for Celsius.');
    }
}

function convertToFahrenheit() {
    const celsiusInput = parseFloat(document.getElementById('fahrenheitInput').value);
    if (!isNaN(celsiusInput)) {
        const fahrenheit = (celsiusInput * 9/5) + 32;
        document.getElementById('resultCelsius').textContent = fahrenheit;
    } else {
        alert('Please enter a valid number for Fahrenheit.');
    }
}