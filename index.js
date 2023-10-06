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

        // Create a new table row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${rowId}</td>
            <td>${name}</td>
            <td>${email}</td>
        `;

        // Append the new row to the table body
        tbody.appendChild(newRow);

        // Clear the form inputs
        nameInput.value = "";
        emailInput.value = "";

        // Increment the row ID for the next row
        rowId++;
    });
});