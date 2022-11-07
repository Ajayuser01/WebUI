fetch('http://localhost:2022/arithms/movies')
  .then(response => response.json())
  .then(json => console.log(json))

  let result;
async function api(){
  let val=await fetch('http://localhost:2022/arithms/students')
  result=await val.json()
    console.log(val);
  console.log(result);
}
api()