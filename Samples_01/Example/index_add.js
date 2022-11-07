let result = '' 
let a;
let b;
function add(a,b){
    a=Number(document.getElementById('val1').value);
    b=Number(document.getElementById('val2').value);
    result=a+b;
    let ele = document.getElementById('root')
    let h1 = document.createElement('h1')
    let ans =document.createTextNode(result)
    h1.setAttribute('id','newh1')
    h1.appendChild(ans)
    ele.appendChild(h1)
    document.getElementById('newh1').style.color='red'
    
}
function reset(){
    document.getElementById('newh1').remove()
}

// function ms() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//     document.getElementById('text').innerHTML=json
// }


async function ms(){
  let val=await fetch('http://localhost:2022/arithms/students')
  result=await val.json()
 
  const tableBody = document.getElementById("table-body");
// for (let i = 0; i < result.length; i++) {
    for (const key in result) {
        arrObj=result[key]
    console.log(arrObj.id);
    console.log(arrObj.name);
    console.log(arrObj.age);
    const tr = document.createElement('tr');
        const content = `
        <td class='id'>${arrObj.id}</td>`
        tr.innerHTML = content;
    tableBody.appendChild(tr)
}
    // console.log('val'=val);
//   console.log('result'=result);
//   toString(result)
// const tableBody=document.getElementById('tb')
// for (const keys of result) {
//     if (Object.hasOwnProperty.call(result, keys)) {
//         const element = result[keys];
//         console.log(element.id)
//         console.log(keys.name)
//         console.log(keys.director)
//         console.log(keys.genre)
//         console.log(keys.releasedYear)
        
//     }
// }
// result.forEach(function(key,i){
//     document.getElementById('text').innerHTML=key.name
//     document.getElementById('text').innerHTML=key.id
//     const tr = document.createElement('tr');
//     const content = `
//     <td class='id'>${key.id}</td>
//     <td class='name'>${key.name}</td>
//     <td class='age'>${key.director}</td>
//     <td class='email'>${key.genre}</td>
//     <td class='dob'>${key.releasedYear}</td> `
//     console.log(key.id)
//     console.log(key.name)
//     console.log(key.director)
//     console.log(key.genre)
//     console.log(key.releasedYear)
//     tr.innerHTML = content;
//     tableBody.appendChild(tr)
// });

  
}