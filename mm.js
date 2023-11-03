const data = document.getElementById("data");
const buttonAdd = document.getElementById("buttonAdd");
const inputDataAll = document.querySelectorAll(".inputData");
const headerTable = document.getElementById("headerTable");

const insert = () => {
    let tableRow = document.createElement('tr');
    inputDataAll.forEach(element => {
        if(element.value === "") {
            return;
        }
        let tableBody = document.createElement('td');
        tableBody.innerText = element.value;
        tableRow.appendChild(tableBody);
    });
    /*console.log({tableRow,children,length} ; {headerTable,children,length});
    console.log();
    if(tableRow.children.length === headerTable.children.length){
        data.appendChild(tableRow);
    }else {
        alert("ใส่ข้อมูลไม่ครบ")
    }*/
    return;
}
buttonAdd.addEventListener("click", insert)