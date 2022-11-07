//Get data from input store in local storage
function getDataUI() {
  let id = document.getElementById("id").value;
  let pname = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let gender = document.getElementById("gender").value;

  // console.log(id)
  // console.log(pname)
  // console.log(age)
  // console.log(email)
  // console.log(date)
  // console.log(gender)

  var person = [
    {
      id: id,
      name: pname,
      age: age,
      email: email,
      date: date,
      gender: gender,
    },
  ];
  if (id != 0 ) {
    localStorage.setItem(id, JSON.stringify(person));
    loadTable();
  }
}

//To load the data on local storage as table
function loadTable() {
  const tableBody = document.getElementById("table-body");
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let objvalue = JSON.parse(localStorage.getItem(key));
    console.log(objvalue);
    for (const key of objvalue) {
      const tr = document.createElement("tr");
      // console.log(user.name)
      const content = `
    <td><input type='checkbox'  class="checks" id="${key.id}" name='checkbox' value=${key.id}></td>
    <td class='id',>${key.id}</td>
    <td class='name'>${key.name}</td>
    <td class='age'>${key.age}</td>
    <td class='email'>${key.email}</td>
    <td class='dob'>${key.date}</td>
    <td class='gender'>${key.gender}</td>`;

      tr.innerHTML = content;
      tableBody.appendChild(tr);
    }
  }
}

//Delete all
function clean() {C
  localStorage.clear();
}

// function checkDelete(){
// let checks=document.getElementsByClassName("checks")
// var str;
// for (let i = 0; i < localStorage.length; i++) {
//   if(checks[i]==i){
//     console.log("hell"+checks[i])
//     localStorage.removeItem(checks[i])
//   }
  
// }
// }

// function checkDelete(){
// let check=document.getElementsById('1').value;
// if(check.checked==true){
// localStorage.removeItem(check)
// }
// }

function checkDelete(){ 
  for (var i = 0; i < checkbox.length; i++) {
    console.log(checkbox);
    if (checkbox[i].checked) {
      location.reload();
      const LOCAL_STORAGE_KEY = id[i].innerHTML;
          console.log(LOCAL_STORAGE_KEY);
          localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }
}

loadTable();
