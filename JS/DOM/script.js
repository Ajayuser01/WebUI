// for(i=0;i<=100;i++){
//     document.write(i+' ')

// }

// let a = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     a += "*"+' ';
//   }
//   a += "<br/>";
// }
// document.write(a);



// let k=''
// for(i=1;i<=100;i++){
//     if(i%2==0){
//         k+=i+' '
//     }
// }
// document.write(k);

// document.write("<br/>")
// document.write("Ajay")



// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }

// z=num
// num=123
// console.log(Number(reverse_a_number(num)));

// function test(){
//    var a=document.getElementById("name").value;
//     document.write(a)
    
// }

// document.getElementById('submit').onclick = compare;

// function comp(){


// var a=document.getElementById("no1").Value;
// a = parseInt(a);

// var b=document.getElementById("no2").Value;

// b = parseInt(b);

// if (a>b){
// 	// document.write("A is bigger")
// 	console.log("A is bigger"+a)
	
// }
// else{
// 	// document.write("B is bigger")
// 	console.log("B is bigger"+b)
// }
// }



// function comp()
// {
//   var numOne, numTwo
//   numOne = parseInt(document.getElementById("first").value);
//   numTwo = parseInt(document.getElementById("second").value);
// if (numOne>numTwo){
// 	document.getElementById("answer").value="Bigger Number is"+numOne;
// }
// else if(numOne<numTwo){
// 	document.getElementById("answer").value="Bigger Number is"+numTwo;

// }
// else{
// 	document.getElementById("answer").value="Both  are equal "+numOne+"="+numTwo;
// }

// }
  

today=new Date();
var cmas=new Date(today.getFullYear(), 03, 03);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");
