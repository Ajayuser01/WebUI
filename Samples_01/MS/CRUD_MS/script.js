// let clk=document.querySelector('get');
// clk.addEventListener('click',getAll())

async function getAll() {
  let val = await fetch("http://localhost:2022/arithms/students");
  result = await val.json();
  const tableBody = document.getElementById("table-body");
  // for (let i = 0; i < result.length; i++) {
  for (const index in result) {
    arrObj = result[index];
    // console.log(
    //   arrObj.id +
    //     " " +
    //     arrObj.name +
    //     " " +
    //     arrObj.standard +
    //     " " +
    //     arrObj.section +
    //     " " +
    //     arrObj.mobile
    // );
    const tr = document.createElement("tr");
    const content = `
        <td><input type='checkbox' name='checkbox' value=${arrObj.id}></td>
          <td class='id'>${arrObj.id}</td>
          <td class='name'>${arrObj.name}</td>
          <td class='standard'>${arrObj.standard}</td>
          <td class='section'>${arrObj.section}</td>
          <td class='mobile'>${arrObj.mobile}</td>
          <td class='district'>${arrObj.address.district}</td>
          <td class='pincode'>${arrObj.address.pincode}</td>`;
    tr.innerHTML = content;
    tableBody.appendChild(tr);
    // console.log(arrObj.address.district);
  }
}

async function getUnique(id){
  if (id == undefined){
   id = document.getElementById('uni').value;
  }
  let val = await fetch("http://localhost:2022/arithms/students/" +id);
  // let val = await fetch("http://localhost:2022/arithms/students/5");
  arrObj = await val.json();
  const tableBody = document.getElementById("table-body");
  const tr = document.createElement("tr");
  const content = `
      <td><input type='checkbox' name='checkbox' value=${arrObj.id}></td>
        <td class='id' >${arrObj.id}</td>
        <td class='name' contenteditable="true">${arrObj.name}</td>
        <td class='standard' contenteditable="true">${arrObj.standard}</td>
        <td class='section' contenteditable="true">${arrObj.section}</td>
        <td class='mobile' contenteditable="true">${arrObj.mobile}</td>
        <td class='district' contenteditable="true">${arrObj.address.district}</td>
        <td class='pincode' contenteditable="true">${arrObj.address.pincode}</td>`;
  tr.innerHTML = content;
  tableBody.appendChild(tr);
}

async function post() {
  let url = "http://localhost:2022/arithms/students";
  let data = {
    address: {
      district: document.getElementById('district').value,
      pincode: document.getElementById('pin').value,
    },
    mobile: document.getElementById('mob').value,
    name: document.getElementById('name').value,
    section: document.getElementById('sec').value,
    standard: document.getElementById('std').value,
  };

  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  resetForm()
  // getAll()
}

async function deleteReq() {
  let val = await fetch("http://localhost:2022/arithms/students");
  result = await val.json();
  var checkbox = document.getElementsByName("checkbox");
  for (let i = 0; i < result.length; i++) {
    if (checkbox[i].checked == true) {
      console.log(result[i].id);
      deleteData(result[i].id);
    }
  }
}

async function deleteData(id) {
  const response = await fetch("http://localhost:2022/arithms/students/" + id, {
    method: "delete",
  });
}


function resetForm() {
  document.getElementById("form-in").reset();
}


async function put(){
  let id = document.getElementById('uni').value;
  let url = "http://localhost:2022/arithms/students/"+id;
  let data = {
    address: {
      district: document.getElementById('district').value,
      pincode: document.getElementById('pin').value,
    },
    mobile: document.getElementById('mob').value,
    name: document.getElementById('name').value,
    section: document.getElementById('sec').value,
    standard: document.getElementById('std').value,
  };

  let res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  getUnique(id)
}


