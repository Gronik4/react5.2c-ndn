/**
 * Этот функция для предоставления нужного формата даты и времени
 */
export const getDate = () => {
  const date = new Date();
  const stringVmanthe = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  const dayVweek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота',];
  const numb = date.getDate() > 9? `${date.getDate()}`: `0${date.getDate()}`;
  const manth = stringVmanthe[date.getMonth()];
  const day = dayVweek[date.getDay()];
  const hours = date.getHours() > 9? `${date.getHours()}`: `0${date.getHours()}`;
  const min = date.getMinutes() > 9? `${date.getMinutes()}`: `0${date.getMinutes()}`;
  const sec = date.getSeconds() > 9? `${date.getSeconds()}`: `0${date.getSeconds()}`;
  return(`${numb} ${manth} ${day} ${hours}:${min}:${sec}`);
}
