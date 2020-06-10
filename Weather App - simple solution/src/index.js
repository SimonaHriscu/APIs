const axios = require('axios');
const myKey = require("../config");
const util = require('util');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=%s&appid=%s';


const city = process.argv[2];
const reqUrl = util.format(url, city, myKey.apiKey);

axios.get(reqUrl)
    .then(res => res.data) 
    //handles response

   .then(data => console.log(`There are ${(data.main.temp - 273.15).toFixed(1)}\u00B0C now in ${data.name}, ${data.sys.country}. 
Today's weather: ${data.weather
    .map((condition) => condition.description)
    .join(", ")}.`))
    //handles exact data
    
    .catch(err => console.log(err));
    //handles error