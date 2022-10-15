import React from 'react';
import { Weather } from './Weather';
import { СardG } from './СardG';
import { Ether } from './Ether';
import { visit } from '../DATA/visit';
import { tvProgram } from '../DATA/tvProgram';
import { VisitAndTv } from './VisitAndTv';
import ethr from '../../img/ether.png';
/**
 * Этот комопонент выводит все что обозначено как 'various' - см. описание. Наверное его правильнее было бы сделать футером..
 * Но что сделано - сделано.....
 */

export const Various = () => {
  return (
    <div className='various'>
      <Weather/>
      <СardG/>
      <Ether/>
      <VisitAndTv head='Посещаемое' classn='visited' date={visit}/>
      <VisitAndTv head='Телепрограмма' classn='tvprogram' src={ethr} date={tvProgram}/>
    </div>
  )
}

