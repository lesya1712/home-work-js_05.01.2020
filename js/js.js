

        



         /*  В первом подъезде квартиры с 1 по 20.
          Во втором подъезде с 21 по 48.
          В третьем подъезде с 49 по 90.
          Пользователь вводит номер квартиры.
          Программа должна указать в каком подъезде
          находится данная квартира.
        
         P.S
          Программа должна учитывать вариант
         ввода чисел за пределами диапазона 1 - 90. */



         var Name = '';

for (var i = 0; i < Infinity; i++) {
    var name = prompt('Привет. Напиши свое имя!');
    var brakeOrContinion = true;
    if (name.length < 3) {
        brakeOrContinion = false
    } else {
        for (var i = 0; i < name.length; i++) {
            if (!isNaN(name[i])) {
                brakeOrContinion = false
            }
            if (i == 0) {
                Name += name[0].toUpperCase();
            } else {
                Name += name[i].toLowerCase();
            }
        }
    }
    if (brakeOrContinion) {
        break
    }
    Name = '';
}
alert('Привет, ' + Name + '! Вот первое домашнее задание! Оно было легким =)');


         var num = + prompt('Введи номер квартиры!')
          var answer;
          
          if( num > 0 && num < 21){
              answer = 'Квартира находится в первом подъезде!'

          }else if(num > 20 && num < 49){
              answer = 'Квартира находится во втором подъезде!'
          }else if(num > 48 && num < 91){
              answer = 'Квартира находится в третьем подъезде!'
          }else if(num <= 0){
answer = 'Это подвал!'
          }
          else{
              answer = 'В этом доме нет такой квартиры!' 
                   }
          alert(answer);
           alert('Следующее задание тоже Easy! 😀');

         /*  Зачача:
          При помощи команы alert
         вывести все года с 1983 до 2020. */


         var num1 = +prompt('Введите год...(например 1983)');
         var num2 = +prompt('Введите нынешний год!');
         for(num1; num1 < num2; num1++)
         alert(num1)

