
# Weather App

## Overview

The Weather App is a simple, user-friendly web application that allows users to check the current weather conditions based on their ZIP code. It leverages the OpenWeatherMap API to fetch and display real-time weather data, including temperature, weather descriptions, and icons. The application also dynamically changes the background color based on the current weather conditions for an enhanced user experience.

## Features

- **Current Weather Data**: Displays temperature, weather description, and city name based on user-provided ZIP code.
- **Dynamic Background**: Background color changes according to the weather conditions (e.g., sunny, cloudy, rainy).
- **Weather Icons**: Uses weather icons to visually represent the current weather.
- **Input Validation**: Validates user input to ensure a valid 5-digit ZIP code is entered.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling of the web page for an attractive user interface.
- **JavaScript**: Logic to fetch weather data from the API and manipulate the DOM.
- **OpenWeatherMap API**: Service for obtaining real-time weather data.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KGoksal/weather-api.git
   ```

2. **Open the `index.html` file** in your web browser.

3. **Enter a valid 5-digit ZIP code** and click the "Get Weather" button to retrieve current weather data.

## API Key

To run this application, you will need to replace the placeholder API key in the JavaScript file (`script.js`) with your own OpenWeatherMap API key. Sign up at [OpenWeatherMap](https://openweathermap.org/) to obtain your API key.
