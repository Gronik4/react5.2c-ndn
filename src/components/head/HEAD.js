import React from 'react';
import { HeadRight } from './HeadRight';
import { headVright } from '../DATA/headVright';
import { HeadLeft } from './HeadLeft/HeadLeft';

/**
 * Этот комопонент выводит все что обозначено как "Заголовок" - см. описание
 */
export const HEAD = () => {
  return (
    <div className='head'>
      <HeadLeft/>
      { headVright.map((el, index) => {
        return(<HeadRight key={index} data={el}/>)
      })}
    </div>
  )
}

