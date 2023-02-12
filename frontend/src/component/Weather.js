import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';


let status_info;
const Weather = () => {

  const navigate = useNavigate();
  const callBack = async() => {
    try {
      const res = await axios.get("/info");
      if (!res.status === 200 || !res.status === 201) {
          // window.alert("This is Authorized Page,You have to login first then visit")
      }
    }
    catch (err) {
      navigate("/signin")
    }
  }

  const [show, setshow] = useState("Get your output here");
  const [city, setcity] = useState("");
  const [hide, sethide] = useState(false);
  const [info, setinfo] = useState({
    temp: "0",
    atmosphere: "sunny",
    date: "",
    day: "",
    month:""
  })
  const Change = (event) => {
    setcity(event.target.value)
  }
  const Search = async(e) => {
    e.preventDefault();
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e08447d5ef3a3fa4064c16ef7e9b681f`
      const dat = await axios.get(url);
      console.log(dat.data);
      sethide(true);
      setshow("Get your output here");
      const temp1 = dat.data.main.temp;
      const status = dat.data.weather[0].main;
      status_info = status;
      setinfo((pre) => {
        return {
          ...pre,
          temp: temp1,
          atmosphere: status
        }
      })
    }
    catch (err) {
      console.log(err);
      setshow("Plz Enter city name properly");
      sethide(false);
    }
    // setcity("");
  }
  const Info = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d1 = new Date();
    let day1 = days[d1.getDay()];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let name1 = month[d.getMonth()];
    const d2 = new Date();
    const d3 = d2.getDate();
    setinfo({
      date: d3,
      day: day1,
      month:name1
    })
  };


  useEffect(() => {
    callBack();
    Info();
  }, []);

  const Statu = () => {
    if (status_info === "Clouds") {
    return (<i className="fa-solid fa-cloud" style={{ color: "#f1f2f6" }} />);
    }
    else if (status_info === "Clear") {
      return (<i class="fa-solid fa-sun" style={{color:"#eccc68"}} />);
    }
    else if (status_info === "Rain") {
      return (<i class="fa-solid fa-cloud-rain" style={{color:"#a4b0be"}} />);
    }
    else {
      return (<i class="fa-solid fa-sun" style={{color:"#eccc68"}} />);
    }
  };

  return (
    <>
      <div className='weather_box'>
        <div className="main_weather">
          <div className="search">
            <form className="search_form">
              <input type="text" placeholder="Enter Your City" autoComplete="off" id="cityname" name="findcity" value={city} onChange={Change} />
              <input type="submit" value="search" className="seach_btn" id="submitbtn" onClick={Search} />
            </form>
          </div>
          <div className="weather">
            <div className="top">
              <p id="today">{info.day}</p>
              <p id="today_date">{info.date}, {info.month} </p>
            </div>
            <div className="middle">
              <p id="city_name">{show}</p>
              {
                hide ?
                  <div className="middle_top">
                    <p id="jh"> <span id="temp">{info.temp}</span><sup>o</sup>c </p>
                    <div className="info">
                      <Statu />
                      <h1 id="info_p">{info.atmosphere}</h1>
                    </div>
                  </div> :
                  <div>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;