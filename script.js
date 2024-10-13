// OpenWeatherMap API configuration
const API_KEY = 'a1d3818b8fe4ac136019b60d90658dfb';  // Your OpenWeatherMap API key
const COUNTRY_CODE = 'us';  // Country code for the US
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';  // Base URL for the API

// DOM elements for displaying and interacting with the weather data
const weatherElement = document.getElementById('weather');  // Element to display weather description
const getWeatherElement = document.getElementById('get-weather');  // Button to trigger weather fetch
const iconElement = document.getElementById('icon');  // Element to display weather icon
const temperatureElement = document.getElementById('temperature');  // Element to display temperature
const zipcodeInput = document.getElementById('zipcode');  // Input field for ZIP code
const locationElement = document.getElementById('location');  // Element to display city/location name

// Mapping OpenWeatherMap icon codes to corresponding Weather Icons class names
const weatherIcons = {
    '01d': 'wi-day-sunny',          // Clear day
    '01n': 'wi-night-clear',        // Clear night
    '02d': 'wi-day-cloudy',         // Partly cloudy day
    '02n': 'wi-night-alt-cloudy',   // Partly cloudy night
    '03d': 'wi-cloud',              // Scattered clouds (day)
    '03n': 'wi-cloud',              // Scattered clouds (night)
    '04d': 'wi-cloudy',             // Broken clouds (day)
    '04n': 'wi-cloudy',             // Broken clouds (night)
    '09d': 'wi-showers',            // Shower rain (day)
    '09n': 'wi-showers',            // Shower rain (night)
    '10d': 'wi-day-rain',           // Rain (day)
    '10n': 'wi-night-alt-rain',     // Rain (night)
    '11d': 'wi-thunderstorm',       // Thunderstorm (day)
    '11n': 'wi-thunderstorm',       // Thunderstorm (night)
    '13d': 'wi-snow',               // Snow (day)
    '13n': 'wi-snow',               // Snow (night)
    '50d': 'wi-fog',                // Fog (day)
    '50n': 'wi-fog'                 // Fog (night)
};

// Mapping weather conditions to background colors
const weatherColors = {
    'Clear': '#FDB813',             // Sunny background color
    'Clouds': '#B4C4D4',            // Cloudy background color
    'Rain': '#4681C1',              // Rainy background color
    'Drizzle': '#82ADCB',           // Drizzle background color
    'Thunderstorm': '#616669',      // Thunderstorm background color
    'Snow': '#FFFFFF',              // Snowy background color
    'Mist': '#C4C4C4',              // Misty background color
    'Smoke': '#A0A0A0',             // Smoky background color
    'Haze': '#D4D4D4',              // Hazy background color
    'Dust': '#E0C088',              // Dusty background color
    'Fog': '#B8B8B8',               // Foggy background color
    'Sand': '#E6C388',              // Sandy background color
    'Ash': '#A0A0A0',               // Ashy background color
    'Squall': '#4681C1',            // Squall background color
    'Tornado': '#616669'            // Tornado background color
};

// Function to fetch weather data based on the entered ZIP code
function getWeather() {
    const zipCode = zipcodeInput.value.trim();  // Get the ZIP code input and remove extra spaces

    // Validate that the ZIP code is a 5-digit number
    if (!zipCode || !/^\d{5}$/.test(zipCode)) {
        alert('Please enter a valid 5-digit ZIP code');
        return;  // Stop function if validation fails
    }

    // Build the API URL using the entered ZIP code and predefined constants
    const url = `${API_BASE_URL}?zip=${zipCode},${COUNTRY_CODE}&appid=${API_KEY}&units=imperial`;

    // Fetch weather data from the API
    fetch(url)
        .then(response => {
            if (!response.ok) {  // Check if the response is successful
                throw new Error('Weather data not available');
            }
            return response.json();  // Parse the response as JSON
        })
        .then(data => {
            updateWeatherDisplay(data);  // Call function to update UI with fetched data
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);  // Log errors if the fetch fails
            alert('Unable to fetch weather data. Please try again later.');
        });
}

// Function to update the UI based on the fetched weather data
function updateWeatherDisplay(data) {
    const description = data.weather[0].description;  // Weather description (e.g., "clear sky")
    const temperature = Math.round(data.main.temp);  // Temperature in Fahrenheit (rounded)
    const iconCode = data.weather[0].icon;  // Weather icon code (used for icon mapping)
    const mainWeather = data.weather[0].main;  // Main weather condition (e.g., "Clear")
    const cityName = data.name;  // City name from the API response

    // Update DOM elements with the fetched data
    weatherElement.textContent = capitalizeFirstLetter(description);  // Update weather description
    temperatureElement.textContent = `${temperature}°F`;  // Update temperature
    locationElement.textContent = cityName;  // Update city name

    // Update weather icon class based on the icon code
    iconElement.className = `wi ${weatherIcons[iconCode]}`;

    // Change background color based on the main weather condition
    const backgroundColor = weatherColors[mainWeather] || '#FDB813';  // Default color is sunny if not found
    document.body.style.backgroundColor = backgroundColor;  // Update background color
}

// Helper function to capitalize the first letter of a string (e.g., "clear sky" -> "Clear sky")
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Event listener for the "Get Weather" button to trigger the weather fetch
getWeatherElement.addEventListener('click', getWeather);

// Event listener to allow pressing "Enter" to trigger the weather fetch
zipcodeInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeather();  // Call getWeather function when Enter key is pressed
    }
});
