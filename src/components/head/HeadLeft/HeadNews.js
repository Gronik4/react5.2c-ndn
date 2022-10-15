import React from 'react';
import { headVnews }from '../../DATA/headVnews';
/**
 * Этот комопонент выводит все что обозначено как "Новости" левой части заголовка - см. описание
 */

export const HeadNews = () => {
  return (
    <div className='head_news'>
      {headVnews.map((el, index) => {
        return(
          <div className='head_news_item' key={index}>
            <img className='head_news_item_img' src={el.icon} alt={el.text}/>
            <a href={el.src}>{el.text}</a>
          </div>
        )
      })}
    </div>
  )
}

