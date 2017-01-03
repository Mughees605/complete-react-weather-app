var axios= require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=d187534c1efa363441ac1e9e4548e800&units=metric";
// replacing q=karachi,uk& because we have to change this continously

module.exports = {
    getTemp:function(loc){
    var encodedLocation = encodeURIComponent(loc);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestURL).then(function(res){

        if(res.data.message && res.data.cod){
            throw new Error(res.data.message);
        }
        else{
            return res.data.main.temp;
        }

    },function(res){

        throw new Error(res.data.message);
    

    })

    }
}