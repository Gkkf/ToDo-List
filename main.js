const addButton = document.querySelector("#addButton");
const delButton = document.querySelector("#delButton");
const input = document.querySelector("#element");
const list = document.getElementById("table");

let takslist = [];

function showTasks()
{
    list.innerHTML = null;

    list.innerHTML += "<tr><th>Wykonano?</th><th>Zadanie</th></tr>"
    
    for(let i = 0; i<takslist.length; i++)
    {
        let row = list.insertRow(i+1);
        let c1 = row.insertCell(0);
        c1.innerHTML += "<td><input type='checkbox' id='chk' name='" + i + "' style=''></td>";
        let c2 = row.insertCell(1);
        c2.innerHTML += "<td>" + takslist[i] + "</td>";
    }
}

function del() 
{
    let rows = list.rows.length;

    for(let i=1; i<rows; i++) 
    {
        var row = table.rows[i];
        var chkbox = row.cells[0].getElementsByTagName('input')[0];

        if(chkbox.checked == true) 
        {
            table.deleteRow(i);
            takslist.pop(i);
         }
    }
}

window.addEventListener('DOMContentLoaded', showTasks());

addButton.addEventListener("click", function() 
{
    if(input.value != "")
    {
        takslist.push(input.value);
        input.value = "";
        showTasks();
    }
    else
    {
        alert("Podaj dane, a następnie kliknij przycisk!");
    }
});

delButton.addEventListener("click", function()
{
    del();
});



