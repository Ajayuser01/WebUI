function createData() {
 let id = document.getElementById("id").value;
 let pname = document.getElementById("name").value;
 let age = document.getElementById("age").value;
 let email = document.getElementById("email").value;
 let date = document.getElementById("date").value;
 let gender = document.getElementById("gender").value;
  
  console.log(id)                                                           
  console.log(pname)                                                           
  console.log(age)                                                           
  console.log(email)                                                           
  console.log(date)                                                           
  console.log(gender)   

var person={
  id:id,
  name:pname,
  age:age,
  email:email,
  date:date,
  gender:gender
}

let key=++localStorage.length
  localStorage.setItem(key, JSON.stringify(person));

  // index=id
  // localStorage.setItem(index,  `{id:${id},
  // name:${pname},
  // age:${age},
  // email:${email},
  // date:${date},
  // gender:${gender}}`);
}

