import React from 'react';
import { headVсurrencies } from '../../DATA/headVсurrencies';
/**
 * Этот комопонент выводит блок с курсами валют - см. описание
 */

export const HeadCurrencies = () => {
  let flag = '';
  let current = '';
  if(headVсurrencies.length > 3) {
    current = headVсurrencies.slice(0, 3);
    flag = '...';
  } else {
    current = headVсurrencies;
  }
  return (
    <div className='head_сurrencies'>
      {current.map((el, index) => {
        return(
          <p className='head_сurrencies_p' key={index}>{el.name} {el.quotes}
            <span className='head_сurrencies_span'>{el.change}</span>
          </p>
        )
      })}
      <a  href='./anysing' className='head_сurrencies_p_fl'>{flag}</a>
    </div>
  )
}

