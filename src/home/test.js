import React, { useState, useEffect } from 'react';


function Layer2() {

  const [weather,setWeather]=useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function fetchMyAPI() {
      let key = '84c3dadadafc44bb83583527222911'
      let placeName = 'London'
      let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${placeName}&aqi=no`)
      response = await response.json()
      setWeather(response)     
      console.log(response)
      setLoading(true)         
    }

    fetchMyAPI()

},[]);

  return(
<div className="layer2">
  <div className="l2-row1">
{weather.current.cloud}
<img src ={weather.current.condition.icon}/>   
  </div>
  <div className="l2-row1">
2    
  </div>
  <div className="l2-row1">
2    
  </div>
  
</div>
  )
}

export default Layer2;