let table = document.createElement("table");
for (let i = 1; i < 9; i++) {
    let tablerow = document.createElement('tr');
    for (let j = 1; j < 9; j++) {
        let tabledata = document.createElement('td');
        if (i%2 == j%2) {
            tabledata.className = "white";
        } else {
            tabledata.className = "black";
        }
        tablerow.appendChild(tabledata);
    }
    table.appendChild(tablerow);
}
document.body.appendChild(table);
