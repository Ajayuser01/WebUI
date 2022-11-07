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

async function post() {
  let url = "http://localhost:2022/arithms/students";
  let data = {
    address: {
      district: "Thanjai",
      pincode: 6762436,
    },
    mobile: "99947553",
    name: "kala",
    section: "G",
    standard: "11",
  };

  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
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

function ele() {
  let gt = document.getElementById(get);
  let.createElement;
}
