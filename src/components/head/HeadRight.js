import React from 'react';
/**
 * Этот комопонент выводит все что обозначено как "Правая часть заголовка"(Работа над ошибками) - см. описание
 */

export const HeadRight = (props) => {
  const {img, head, src, text} = props.data;
  return (
    <div className='header_right'>
      <img className='header_img' src={img} alt={head}/>
      <h4 className='header_h4'>{head}</h4>
      <p className='header_right_p'>
        <a className='header_right_a' href={src}>{text}</a>
      </p> 
    </div>
  )
}
