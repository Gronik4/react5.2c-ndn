# "Continuous Deployment"  
Блок React ДЗ №5.2 "Decomposition". Декомпозиция. 

## 'Описание':  
Вы работаете в стартапе, который решил тягаться с самим Яндексом в части предоставления контента. Это, конечно же шутка, но задача нешуточная.  
1. Разбейте весь интерфейс на компоненты и в файле каждого компонента напишите буквально одну строку комментария, за что данный компонент отвечает.  
2. Постарайтесь повторящиеся компоненты сделать настраемыми за счёт props. Допустим, у каждой новости в списке новостей: иконка, текст и ссылка.  
### ПОЯСНЕНИЯ:
Проект реализован со следующими предположениями:
   1. Блок 'head'. Включает в себя всю вернюю часть до курса валют включительно.
      1.1. В блок 'header_right'(Работа над ошибками). Данные приходят с сервера. Реализовано через получение даных из файла "DATA/headVright.js".
         Имена свойств и их количество не меняются, но объектов может быть больше одного.
      1.2. Блок 'HeadLeft'(Сейчас в СМИ).  
            1.2.1. Блок 'head_header'(Сейчас в СМИ). Дата в режиме онлайн данные из файла "utils/getDate.js". Данные в СМИ приходят с сервера.
               Реализовано через получение даных из файла "DATA/headVheader.js". Объектов может быть больше двух.  
            1.2.2. Блок 'head_news'. Данные приходят с сервера. Состав одинаков - иконка и текст ссылки. Реализовано через
               получение даных из файла 'DATA/headVnews.js'.  
            1.2.3 Блок 'head_сurrencies'. Данные приходят с сервера. Состав одинаков - название, котировка и изменение. Если
               валют более трех - ставлю '...'. Реализовано через получение даных из файла 'DATA/headVсurrencies.js'.  
   2. Блок 'main'. Включает в себя от сайдбара до картинки включительно.  
      2.1. Блок 'sitebare'. Реализовано через получение даных из файла 'DATA/sitebare.js'. Мне показалось, что так легче будет
         управлять. Кнопка "ЕЩЕ" как раз для этого....  
      2.2. Блок 'search' - не стилизовал.... А в задании  и не требуется.....  
      2.3. Блок 'image'- не стилизовал.... А в задании  и не требуется.....  
   3. Блок 'various'. Включает в себя все, что ниже картинки.  
      3.1. Блок 'weather'(Погода). Данные приходят с сервера. Реализовано через получение даных из файла 'DATA/weather.js'.
         Состав одинаков - состояние, температура, температура утром, температура днем. Иконка выбирается по состоянию из
         файла 'DATA/weatherVicon.js.   
      3.2 Блок 'cardG'(Карта Германии). Толком не понял, что и как там, вывел так....  
      3.3 Блок 'ether'(Эфир).  Данные приходят с сервера. Реализовано через получение даных из файла 'DATA/ether.js'. Состав 
         строки одинаков - иконка (не приходит с сервера, беру из img), имя, пояснение. Реализовано через получение
         даных из файла 'DATA/ether.js'. Если длина строки 'имя' + длина строки 'пояснение' больше 30 символов уменьшаю
          длину строки имени, так чтобы в сумме было не больше 30.  
      3.4 Блок 'visit' (Посещаемое) и 'tvProgram' (Телепрограмма) выводтся посредством одного универсального компонента 
         'VisitAndTv'. Что выводить определяется пропсами. Данные приходят с сервера. Реализовано через получение даных
         из файлов 'DATA/visit.js' и 'DATA/tvProgram.js'.

**Project Sample** 

[Посмотреть результат]( )