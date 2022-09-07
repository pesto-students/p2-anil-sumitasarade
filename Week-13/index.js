const express = require("express");
const request = require("request");

const app = express();

// home url
app.get("/",(req,res)=>{
    res.send(`/datewise : get data by date,
    /citywise : get citywise data,
    /multiplecities : get data for all entered cities,
    /forecast : get data for future days`);
});

// get data datewise
app.get("/datewise",(req,res)=>{
    const city = req.query.city;
    const date = req.query.date;
    const url = urlforecast(false,{city:city,date:date});
    request(url,(error,response,body)=>{
        console.log(url);
        if(response.statusCode === 200){
            res.send(JSON.parse(body).forecast.forecastday);
        }else{
            res.send("Error in path");
        }
    })
})

// get data citywise
app.get("/citywise",(req,res)=>{
    city = req.query.city;
    url = urlMaker(false,{city : city});
    request(url,(error,response,body)=>{
        console.log(url);
        let data = JSON.parse(body);
        if(response.statusCode === 200){
            res.send(`The weather report in your city ${city} : 
            {
                Weather : "${data.weather[0].description}" ,
                Temprature(in celsius) : "${data.main.temp}" C
            }`);
        }
        else{
            res.send("Error in request");
        }
    });
})

// get data by using multiplecities
app.get("/multiplecities",(req,res)=>{
    city = req.query.cities;
    const cities = [];
    city.split(",").map((item)=>{
        cities.push(capitalizeFirstLetter(item.toLowerCase()));
    });
    console.log(cities);
    const fs = require('fs');
    fs.readFile('./city_list.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let result  = [];
    JSON.parse(data).map((item)=>{
        cities.includes(item.name) ? result.push(item.id) : false;
    })
    let url = urlMaker(true,{cities : result.join(",")});
    request(url,(error,response,body)=>{
        if(response.statusCode ===200){
            console.log(url);
            let result=[];
            JSON.parse(body).list.map((item)=>{
                result.push(item.name+" : "+item.weather[0].description);
            });
            res.send(result);
        }else{
            res.send("Error in path or city not found");
        }
    })
    });
})

// get data of future days
app.get("/forecast",(req,res)=>{
    city = req.query.city;
    console.log(city);
    const days = req.query.days;
    const url = urlforecast(true,{city:city,days:days})
    request(url,(error,response,body)=>{
        console.log(url);
        let data = JSON.parse(body);
        if(response.statusCode === 200){
            let arr = [];
            data.forecast.forecastday.map((item)=>{
                arr.push(item);
            })
            res.send(arr);
        }
    })
})

// capitalizing the first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// openweathermap api caller url
function urlMaker(toggle,{city,cities}){
    return `http://api.openweathermap.org/data/2.5/${toggle ? `group?id=${cities}` : `weather?q=${city}`}&units=metric&appid=b1c25b20eecbec651c237ce02f9d8099`;
}

// weatherapi caller url
function urlforecast(endpoint,{city,date,days}){
    return `http://api.weatherapi.com/v1/forecast.json?q=${city}&key=af5f075ec8364ce08a813630221108${endpoint?`&days=${days?days:1}` : `&dt=${date}`}`;
    }

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})