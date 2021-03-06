class Weather {
  constructor(city, country) {
    this.apiKey = "030be1451c803b10097d32ebdadbec04";
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`
    );

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  //Change the weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
