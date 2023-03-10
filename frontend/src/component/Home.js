import React from 'react'

const Home = () => {
  return (
    <>
      <div class="main_content">
        <div class="content">
          <div class="content_1">
            <p>Hello, welcome to My weather website</p>
            <h2>
              Get the current <span>weather</span>  of any city by just writting city name
            </h2>
            <a class="btn" href="/weather">
              Get Information
            </a>
          </div>
        </div>
        <div class="image">
          <img src="https://img.freepik.com/premium-vector/weather-forecast-online-tiny-people-watching-weather-forecast-use-laptop-sun-clouds-wind_501813-457.jpg?w=360" alt="Sorry! photo can't be loaded, try again to come website" class="photo"/>
        </div>
      </div>
    </>
  );
}

export default Home;