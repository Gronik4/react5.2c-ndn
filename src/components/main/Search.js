import React from 'react';
import yandex from '../../img/yandex.png';
/**
 * Этот комопонент выводит сторку поиска в 'main' - см. описание
 */

export const Search = () => {
  return (
    <div className='search'>
      <form className='search_form'>
        <img className='search_form_img' src={yandex} alt='yandex'/>
        <input className='search_form_input'/>
        <button className='search_form_btn'>Найти</button>
      </form>
      <h4 className='search_h4'>Найдееся все. Например, 
        <span className='search_span'>Фаза луны сегодня</span>
      </h4>
    </div>
  )
}

