function countCompletedTasks() {
    const tableBody = document.getElementById("days-table");
    
    const rows = tableBody.getElementsByTagName("tr");
    
    let count = 0;

    // Parcourir les lignes du tableau
    for (let row of rows) {
        // Récupérer la dernière cellule (statut) de chaque ligne
        const statusCell = row.cells[row.cells.length - 1];
        if (statusCell && statusCell.textContent.trim() === "✅") {
            count++;
        }
    }

    percentage = Math.round(((count*2)/50)*100);

    return percentage + "%";
}

window.onload = function() {
    let count = countCompletedTasks();
    let progressValue = document.querySelector("#progressBar > p");
    let progressBar = document.querySelector("#progressBar");

    progressValue.innerText = count;
    progressBar.style.width = count;
};