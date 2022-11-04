function add(c,b,...a){  //spread ex
    let val=0;
    for (let i = 0; i< a.length; i++) {
      val += a[i];
       
    }
console.log(c+val+b)
}

 add(10,5,2,2,1)

//--------------------------------------------------------

function sp(){  //spread ex
arr=[1,2,3,4]
b=10;

//arr=[arr,b];      //without spread operator
//console.log(arr)

arr=[...arr,b];     //with spread operator
console.log(arr)

}
sp()


//-----------------------------------------------------------

//Template literals
function template(){
persons=["Anbu","bala","guru","jeeva","anand"]
var print=' '
for (let i= 0; i < persons.length; i++) {
  print += `his name is ${persons[i]} `+'right'+'\n'
}

console.log(print)
}
template()

//------------------------------------------------
//for in

names=["Anbu","bala","guru","jeeva","anand"]
for (let a in names) {
 console.log(names[a])
}

names=["Anbu","bala","guru","jeeva","anand"]
for (let a in names) {
 console.log(names[a])
}
//----------------------------------------------------------
let result;
async function api(){
  let val=await fetch('https://jsonplaceholder.typicode.com/users')
  result=await val.json()
    console.log(val);
  console.log(result);
}
api()

//--------------------------------------------------------------

a=2;
a == 1? console.log('true') : console.log('false')
//-------------------------------------------------------------

function add(a,b){
  function addition(a,b){
    return a+b;
  }
  return addition
}
res=add()
console.log(res(5,6))

//-----------------------------------------------------------

