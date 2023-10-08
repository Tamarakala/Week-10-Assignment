
// This JS code is event listener that refers to DOM event and initializes a form sumbission guide for a web page. 
// It allows users to add rows to an HTML table. 



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("add-row-form");
    const tbody = document.getElementById("table-body");
    let rowId = 1;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        const name = nameInput.value;
        const email = emailInput.value;

        if (name.trim() === "" || email.trim() === "") {
            alert("Name and Email are required.");
            return;
        }

     
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${rowId}</td>
            <td>${name}</td>
            <td>${email}</td>
        `;

      
        tbody.appendChild(newRow);

   
        nameInput.value = "";
        emailInput.value = "";


        rowId++;
    });
});