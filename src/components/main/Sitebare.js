import React from 'react';
import { sitebare } from '../DATA/sitebare';
/**
 * Этот комопонент выводит 'сайдбар' в 'main' - см. описание
 */

export const Sitebare = () => {
  let content = sitebare.slice(0, 7);
  return (
    <aside className='sitebare'>
      {content.map((el, index) => <a key={index} href={el.src} className='sitebare_a'>{el.name}</a>)}
      <button className='sitebare_btn'>ЕЩЕ</button>
    </aside>
  )
}

