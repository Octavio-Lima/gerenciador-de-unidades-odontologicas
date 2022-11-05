const allRows = document.querySelectorAll(".table-row");

// 
function selectRow(selectedRow) {
    allRows.forEach((row, index) => {
        row.classList.remove("selected");
    });

    selectedRow.classList.toggle("selected");
}

document.addEventListener("click", (e) => {
    e.preventDefault();

    const targetEl = e.target;
    const parentEl = targetEl.closest("tr");

    if (parentEl.classList.contains("table-row")){
        selectRow(parentEl);
    }
})