import React, { useState } from 'react'
import WeatherCardMain from './WeatherCardMain';

function Container() {
    const [error,seterror] = useState("");
    const [isVisible,setisVisible] = useState(false);
    const [multiDayData, setMultiDayData] = useState(null);
    const [multiDayLoading, setMultiDayLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [viewMore, setViewMore] = useState(false);
 function toggleViewMore(){
    setViewMore(!viewMore);

 }
 function hidePopOver() {
    setIsVisible(false);
    setError("");
  }
  return (
    <div className={styles.containerMain}>
        <div className={styles.containerApp}>
            <WeatherCardMain setIsVisible={setIsVisible}
            setMultiDayData={setMultiDayData}
            setError={seterror}
            viewMore={viewMore}
            weather={weather}
            setWeather={setWeather}
            setMultiDayLoading={setMultiDayLoading}

            
            />
        </div>
    </div>
  )
}

export default Container