import React from 'react';
import { HeadHeader } from './HeadHeader';
import { HeadNews } from './HeadNews';
import { HeadCurrencies } from './HeadCurrencies';
/**
 * Этот комопонент выводит все что обозначено как что обозначено как "Левая часть заголовка"(Сейчас в СМИ) - см. описание
 */

export const HeadLeft = () => {
  return (
    <div className='header_left'>
      <HeadHeader/>
      <HeadNews/>
      <HeadCurrencies/> 
    </div>
  )
}

