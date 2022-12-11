import '../bit.css';
import React, { useState, useEffect } from 'react';

function Bit() {

  
  const [bit,setBit]=useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    async function fetchMyAPI() {
      let response = await fetch('https://api2.binance.com/api/v3/ticker/24hr')
      response = await response.json()
      setBit(response)
      setLoading(true)
     
    }

    fetchMyAPI()

},[loading]);

return(

  <div className='bit-text'> 
{loading ?<> {bit[0].symbol}:<span className='bit-number'>{bit[0].bidPrice} </span></>  : ''}
{loading ?<> {bit[1].symbol}:<span className='bit-number'>{bit[1].bidPrice} </span></>  : ''}
{loading ?<> {bit[2].symbol}:<span className='bit-number'>{bit[2].bidPrice} </span></>  : ''}
{loading ?<> {bit[3].symbol}:<span className='bit-number'>{bit[3].bidPrice} </span></>  : ''}


  </div>
)
}
export default Bit;