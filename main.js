let name = prompt("Please enter a name:");
let up = name.charAt(0).toUpperCase() + name.slice(1);
let arrays = [
  ["Antonio", true, 5],
  ["Marija", false],
  ["Darko", true, 3],
  ["Filip", false],
  ["Kristijan", true, 1],
  ["Martina", false],
];

let table = document.createElement("table");
let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");

document.body.appendChild(table);
table.appendChild(tr);
table.style.width = "100%";
table.setAttribute("cellspacing", "0");
td1.style.border = "2px solid black";
td2.style.border = "2px solid black";
td3.style.border = "2px solid black";
td1.style.padding = "5px";
td2.style.padding = "5px";
td3.style.padding = "5px";

function vote(arrName) {
  for (i = 0; i < arrName.length; i++) {
    let bod = arrName[i][2];
    if (arrays[i][0] === up && arrays[i][1] === true) {
      td1.innerHTML = up;
      td2.innerHTML = "Voted!";
      td3.innerHTML = bod;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
    } else if (arrays[i][0] === up && arrays[i][1] === false) {
      td1.innerHTML = up;
      td2.innerHTML = "Didn't vote";

      tr.appendChild(td1);
      tr.appendChild(td2);
    }
  }
}

vote(arrays);
