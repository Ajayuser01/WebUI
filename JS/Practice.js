function op(){
  prompt("javascript linked");
}

// 1.

function ex1(){
let a=''
for(i=1;i<=100;i++){
    a+=i+' '
}
return console.log(a);
}

// 2.
function ex2(){
let a=''
for(i=100;i>=1;i--){
    a+=i+' '
}
return console.log(a)
}

// 3.

function ex3(){
let a=''
for(i=1;i<=100;i++){
    if(i%2==0){
        a+=i+' '
    }
}
return console.log(a)
}


// 4.

function ex4(){
let a=''
for(i=1;i<=100;i++){
    if(i%2==1){
        a+=i+' '
    }
}
return console.log(a)
}

// 5.

function ex5(){
let a=''
for(i=10;i<=60;i++){
    if(i%2==1){
        a+=i+' '
    }
}
return console.log(a)
}

// 6.

function ex6(){
let a=''
for(i=1;i<=100;i++){
    if(i%2==0){
        a+=i+' '
    }
}
return console.log(a)
}

// 7.


function ex7(){
let a = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    a += "*"+' ';
  }
  a += "\n";
}
return console.log(a);
}


// 8.
function ex8(){
let a = "";
for ( i = 1; i <= 5; i++) {
  for ( j = 0; j < i; j++) {
    a += i+' ';
  }
  a += "\n";
}
return console.log(a);
}

// 9.

// let a = "";
// for (i = 5; i >= 1; i++) {
//   for (j = 5; j > i; j++) {
//     a += i + ' ';
//   }
//   a += "\n";
// }
// console.log(a);


function ajay(){
  return 'Hi Ajay...'
}

function rev_num(){
  var num=2345
  var rev=0
  var rem=0
while(num<0){
  rem=num%10
  rev=(rev*10)+rem
  num=parseInt(num/10)
}
return console.log(rev)
}


function alp_rev(str)
  {
return str.split('').sort().join('');
  }
console.log(alp_rev("webmaster"));


function table(){
const number = 10;
		for( i = 1; i <= 10; i++) {
		const result = i * number;
		return (console.log(`${number} * ${i} = ${result}`));
		}
  }