const allRows = document.querySelectorAll(".table-row");
const allRowsSingularValue = document.querySelectorAll(".value");
const allRowsSummedValues = document.querySelectorAll(".value-sum");

calculateSumByRow();

// Seleção de Linhas
function selectRow(selectedRow) {
    allRows.forEach((row, index) => {
        row.classList.remove("selected");
    });

    selectedRow.classList.toggle("selected");
}

document.addEventListener("click", (e) => {
    e.preventDefault();
    const parentEl = e.target.closest("tr");

    if (parentEl.classList.contains("table-row")){
        selectRow(parentEl);
    }
})

// Calcular Valor Total
function calculateSumByRow() {
    let convertedRowValue = [];
    let totalSum = [];

    // Remover Cifrão e trocar virgulas por pontos
    allRowsSingularValue.forEach((rowValue, index) => {
        let replaceComma = rowValue.textContent.replace(',','.');
        let removeSign = replaceComma.slice(3);
        convertedRowValue[index] = parseFloat(removeSign)
        totalSum[index] = 0; // inicializar array
    });

    // Calcular valor total por linha
    allRowsSummedValues.forEach((rowSumValue, index) => {
        if (index > 0) {
            totalSum[index] += (totalSum[index-1] + convertedRowValue[index]);
        }else{
            totalSum[index] += (convertedRowValue[index]);
        }
        
        rowSumValue.textContent = ("R$ " + totalSum[index].toFixed(2));
        rowSumValue.textContent = rowSumValue.textContent.replace('.',',');
    });

    // Alterar valores para o valor correto
}