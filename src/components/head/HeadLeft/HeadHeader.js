import React, { useState } from 'react';
import { getDate } from '../../utils/getDate';
import { headVheader } from '../../DATA/headVheader';
/**
 * Этот комопонент выводит все что обозначено как заголовок левой части заголовка - см. описание
 */

export const HeadHeader = () => {
  const [date, setDate] = useState({dat: getDate()});
  setInterval(() => setDate({dat: getDate()}), 1000);
  return (
    <div className='head_header'>
      <h3 className='head_header_h3'>Сейчас в СМИ</h3>
      {headVheader.map((el, index) => {
        return(<a className='head_header_a' key={index} href={el.src}>{el.title}</a>)
      })}
      <p className='head_header_date'>{date.dat}</p>
    </div>
  )
}

