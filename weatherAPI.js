class WeatherAPI {
    constructor() {
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "35f8994914082768b32a648ff6034607"; 
    }

    async getWeatherInfo(cityName) {
        try {
            const response = await fetch(`${this.baseUrl}?q=${cityName}&units=metric&lang=en&appid=${this.apiKey}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            } else {
                return data;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default WeatherAPI;
