document.getElementById('search-btn').addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '1b80c4f8ef05acbb74b2ad924e3b1acd'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}