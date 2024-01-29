//  while&for
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }


// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }


// let i = 0;
// while (i <= 100) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }


// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);


//  Работа с for для массивов
// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }


// const array = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//   result += array[i];
// }
// console.log(result);

//  Работа с for-in
// var obj = { green: 'зеленый', red: 'красный', blue: 'голубой' };

// for (var key in obj) {
//   console.log('Ключ: ' + key + ', Значение: ' + obj[key]);
// }


// var obj = { Коля: '200', Вася: '300', Петя: '400' };

// for (var key in obj) {
//   console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
// }

//  Задачи
// 1.
// var arr = [2, 5, 9, 15, 0, 4];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// //2.
// var arr = [-2, 5, -9, 15, 0, 4];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// //3.

// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log('Есть!');
//     break;
//   }
// }

// //4.
// var arr = [10, 20, 30, 50, 235, 3000];
// for (var i = 0; i < arr.length; i++) {
//   var firstDigit = Math.floor(arr[i] / 100);
//   if (firstDigit === 1 || firstDigit === 2 || firstDigit === 5) {
//     console.log(arr[i]);
//   }
// }

// //5.
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var str = '-';
// for (var i = 0; i < arr.length; i++) {
//   str += arr[i] + '-';
// }
// console.log(str);

// //6.
// var daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// for (var i = 0; i < daysOfWeek.length; i++) {
//   if (i === 5 || i === 6) {
//     document.write('<b>' + daysOfWeek[i] + '</b><br>');
//   } else {
//     document.write(daysOfWeek[i] + '<br>');
//   }
// }

// //7.
// var daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// var currentDay = 'Четверг'; // Здесь нужно указать текущий день
// for (var i = 0; i < daysOfWeek.length; i++) {
//   if (daysOfWeek[i] === currentDay) {
//     document.write('<i>' + daysOfWeek[i] + '</i><br>');
//   } else {
//     document.write(daysOfWeek[i] + '<br>');
//   }
// }

// //8.
// var n = 1000;
// var num = 0;
// while (n >= 50) {
//   n /= 2;
//   num++;
// }
// console.log(n); // Выведет 31.25
// console.log(num); // Выведет 5