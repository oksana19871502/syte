//----------1-----------//

/*
let test = prompt('введіть число від 0 до 10','');

let message = (test<0)?'помилка!':
  (test>0,test<10)?'добре!':
  (test>10)?'помилка!':
  (test! = Number)?'тільки цифри!':
  'попробуйте ще раз!';

alert(message);
*/

//-------------4-------------//


/*
let a,b;

a = +prompt('Ведіть число більше 13:');
b = +prompt('Введіть число 13:');

if(a > b){
    alert(a - b);

    alert((a - b)*2);
}else{
alert('невірно');
}
*/

//-----------7-------------//


/*  
 let str = 'Анна';


let letter = str.charAt(0);
let strNew = letter.concat(str + letter);


console.log('' + strNew);
*/



/*
  let str = 'сніжинки'.split('');
    str.unshift('c');
      console.log(str);
    str.push('c');
      console.log(str);
  let str2 = str.join('');
      console.log(str2);
*/


//-----------8------------//

/*
let str = 'home';
let arr = str.split('');

console.log(arr);

    arr.splice(0, 1, 'e');

      console.log(arr);

    arr.splice(3, 1, 'h');

      console.log(arr.join(''));

      console.log(arr.length >= 1);
*/
      
//---------9----------//

/*
let sample = 'world';

let sample1 = sample.split('');
let sample2 = sample1.splice(3,1);
let sample3 = sample1.join('');

console.log(sample3);
*/
