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