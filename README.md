# Weather App
This is a TypeScript React project that leverages the www.weatherapi.com API to provide weather and wind direction information for searched countries.

### Getting Started
Prerequisites
Node.js: Make sure you have Node.js installed on your machine.

### Installation
1- Clone the repository:
```js
git clone https://github.com/your-username/weather-app.git
```

2- Navigate to the project directory:
```js
cd weather-app
```

3- Install dependencies:
```js
npm install
```

### Configuration
1- Obtain API Key:

Visit www.weatherapi.com and sign up to get your API key.
Configure API Key:
add your key in the API file

### Running the Application
```js
npm run dev
```
This will start the development server, and you can view the application in your web browser at http://localhost:5173.

### Features
Search: Enter the name of a country to get the current weather and wind direction.
API Integration: Utilizes www.weatherapi.com API for fetching weather data.

### Tech Stack
React
TypeScript
www.weatherapi.com API

### Project Structure
```js
weather-app/
|-- src/
|   |-- components/
|   |   |-- SearchForm.tsx
|   |   |-- WeatherDisplay.tsx
|   |-- App.tsx
|   |-- index.tsx
|-- .env.example
|-- package.json
|-- README.md
|-- tsconfig.json
```
### Acknowledgments
www.weatherapi.com for providing the weather API.

### License
This project is licensed under the MIT License - see the LICENSE file for details.