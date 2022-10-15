import React from 'react';
/**
 * Это универсальный комопонент, предназначенный для вывода в данном случае двух блоков: 'visit' (Посещаемое) и 
 * 'tvProgram' (Телепрограмма) - см. описание. Думаю, его можно было бы использовать для вывода новых блоков...
 */

export const VisitAndTv = (props) => {
  const {head, classn, src, date} = props;
  return (
    <div className={`var ${classn}`}>
      <h3 className={`${classn}_h3`}>{head} <img className={`${classn}_img`} src={src} alt=''/></h3>
      {date.map((el, index) => {
        let explan = src? ` ${el.explan}`: ` - ${el.explan}`;
        return(
          <p className={`${classn}_p`} key={index}>
            {el.time?
              <span className={`${classn}_date`}>{`${el.time} `}</span>: <span></span>
            }
            <span className={`${classn}_name`}>{el.name}</span>
            <span className={`${classn}_explan`}>{explan}</span>
          </p>
        )
      })}
    </div>
  )
}
