async function getlength() {
  let str = document.getElementById("strin").value;

  let out = await fetch(
    "http://localhost:2022/arithms/lenString?intring=" + str
  );
  let strout = await out.text();
  location.reload;
  document.getElementById("result").innerHTML = strout;
}

async function getrev() {
  let str = document.getElementById("strin").value;

  let out = await fetch(
    "http://localhost:2022/arithms/revString?revstring=" + str
  );
  let strout = await out.text();
  location.reload;
  document.getElementById("result").innerHTML = strout;
}

var countbtn = document.getElementById("cou");
countbtn.addEventListener('click', async function getcount() {
  countbtn.removeEventListener('click', getcount);
  let str = document.getElementById("strin").value;
  let val = await fetch(
    "http://localhost:2022/arithms/CountString?intring=" + str
  );
  result = await val.json();
  const tableBody = document.getElementById("t-body");
  // for (let i = 0; i < result.length; i++) {
  for (const index in result) {
    arrObj = result[index];

    const tr = document.createElement("tr");
    const content = `
            <td class='Char' >${arrObj.character}</td>
            <td class='count' >${arrObj.count}</td>`;
    tr.innerHTML = content;
    tableBody.appendChild(tr);
    // console.log(arrObj.address.district);
  }
});

function tablereload() {
  var tbl = document.getElementById("tbl");
  tbl.removeChild(tbl.getElementsByTagName("tbody")[0]);
}

function tablecheck() {
  var x = document.getElementsByTagName("tbody"[0]);
  if (x.length == 0) {
    tablereload();
  } else {
    getcount();
  }
}


