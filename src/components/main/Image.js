import React from 'react';
import pic from '../../img/main.png';
import watch from '../../img/buttWatch.png'
/**
 * Этот комопонент выводит все что обозначено как 'image' в 'main' - см. описание
 */

export const Image = () => {
  return (
    <div className='image'>
      <img className='image_img' src={pic} alt='main'/>
      <a href='./anything for watch' className='image_a'>
        <img src={watch} alt='watch'/>
      </a>
    </div>
  )
}

