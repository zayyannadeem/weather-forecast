function checkTemperature() {
    const temperature = document.getElementById('temperatureInput').value;
    let result = '';

    if (temperature === '') {
        result = 'Please enter a temperature.';
    } else if (temperature < 10) {
        result = 'It\'s cold.';
    } else if (temperature >= 10 && temperature <= 25) {
        result = 'It\'s moderate.';
    } else {
        result = 'It\'s hot.';
    }

    document.getElementById('result').innerText = result;
}