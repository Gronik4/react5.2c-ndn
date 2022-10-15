import React from 'react';
import { weather } from '../DATA/weather';
import { weatherVicon } from '../DATA/weatherVicon';
/**
 * Этот комопонент выводит все что обозначено как 'weather'(Погода) - см. описание.
 */

export const Weather = () => {
  return (
    <div className='var weather'>
      <h3 className='weather_h4'>Погода</h3>
      <div className='weather_cont'>
        <img className='weather_img' src={weatherVicon[weather.condition]} alt={weather.condition}/>
        <h2 className='weather_h2'>{weather.tempr}</h2>
        <div className='weather_cont_div'>
          <p className='weather_cont_div_p'>Утром {weather.moning}</p>
          <p className='weather_cont_div_p'>Днем {weather.day}</p>
        </div>
      </div>
    </div>
  )
}

