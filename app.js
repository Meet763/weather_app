document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '<API_KEY>'; // Replace with your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=celsius`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.weather[0].description}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherData').innerHTML = weatherData;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weatherData').innerHTML = '<p>Could not retrieve weather data. Please try again.</p>';
        });
});

