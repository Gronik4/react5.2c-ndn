import React from 'react';
import icon from '../../img/butt.png';
import { ether } from '../DATA/ether';
/**
 * Этот комопонент выводит все что обозначено как 'ether'(Эфир) - см. описание.
 */

export const Ether = () => {
  ether.forEach((item) => {
    let nam = '';
    if((item.name.length + item.linkName.length) < 31) {nam = item.name } else {
      const delta = Math.abs(30 - item.linkName.length);
      nam = `${item.name.slice(0, delta)} ...`;
      item.name = nam;
    }
  })
  return (
    <div className='var ether'>
      <h3 className='ether_h3'>Эфир</h3>
      {ether.map((el, index) => {
        return(
          <p className='ether_p' key={index}>
        <a className='ether_btn' href={el.src}><img className='ether_img' src={icon} alt='link to ...'/></a> 
        <span className='ether_name'>{el.name} </span>
        <span className='ether_linkName'>{el.linkName}</span>
      </p>
        )
      })}
    </div>
  )
}
