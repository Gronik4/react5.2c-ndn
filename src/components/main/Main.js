import React from 'react';
import { Sitebare } from './Sitebare';
import { Search } from './Search';
import { Image } from './Image';
/**
 * Этот комопонент выводит все что обозначено как 'main' - см. описание
 */

export const Main = () => {
  return (
    <main className='main'>
     <Sitebare/>
     <Search/>
     <Image/>
    </main>
  )
}
