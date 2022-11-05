let allEntries = document.querySelectorAll(".table-row");
let entryValue = document.querySelectorAll(".value");
let entrySumValues = document.querySelectorAll(".value-sum");
const addEntryButton = document.querySelector("#add-entry");
const delEntryButton = document.querySelector("#del-entry");
const filterEntryButton = document.querySelector("#filter-entry");
const financeTable = document.querySelector('table');

calculateSumByRow();

// Seleção de Linhas
function selectRow(selectedRow) {
    allEntries = document.querySelectorAll(".table-row");
    allEntries.forEach((row, index) => {
        row.classList.remove("selected");
    });

    selectedRow.classList.toggle("selected");
}

document.addEventListener("click", (e) => {
    e.preventDefault();
    const parentEl = e.target.closest("tr");

    if (parentEl !== null)
    {
        if (parentEl.classList.contains("table-row")){
            selectRow(parentEl);
        }
    }
})

// Calcular Valor Total
function calculateSumByRow() {
    // atualizar valores presentes na tabela
    entryValue = document.querySelectorAll(".value");
    entrySumValues = document.querySelectorAll(".value-sum");
    let convertedRowValue = [];
    let totalSum = [];

    // Remover Cifrão e trocar virgulas por pontos
    entryValue.forEach((rowValue, index) => {
        let replaceComma = rowValue.textContent.replace(',','.');
        let removeSign = replaceComma.slice(3);
        convertedRowValue[index] = parseFloat(removeSign)
        totalSum[index] = 0; // inicializar array
    });

    // Calcular valor total por linha
    entrySumValues.forEach((rowSumValue, index) => {
        if (index > 0) {
            totalSum[index] += (totalSum[index-1] + convertedRowValue[index]);
        }else{
            totalSum[index] += (convertedRowValue[index]);
        }
        
        rowSumValue.textContent = ("R$ " + totalSum[index].toFixed(2));
        rowSumValue.textContent = rowSumValue.textContent.replace('.',',');
    });
}

// Adicionar novos lançamentos
function addNewEntry(name, createType, dateCreated, datePayed, createBy, value) {
    const newEntry = document.createElement("tr");
    newEntry.classList.add("table-row");

    const entryName = document.createElement("td");
    entryName.innerText = name;
    newEntry.appendChild(entryName);

    const entryType = document.createElement("td");
    entryType.innerText = createType;
    newEntry.appendChild(entryType);
    
    const entryDateCreated = document.createElement("td");
    entryDateCreated.innerText = dateCreated;
    newEntry.appendChild(entryDateCreated);

    const entryDatePayed = document.createElement("td");
    entryDatePayed.innerText = datePayed;
    newEntry.appendChild(entryDatePayed);

    const entryCreatedBy = document.createElement("td");
    entryCreatedBy.innerText = createBy;
    newEntry.appendChild(entryCreatedBy);

    const entryValue = document.createElement("td");
    entryValue.innerText = value;
    entryValue.classList.add("value");
    newEntry.appendChild(entryValue);

    const entryValueSum = document.createElement("td");
    entryValueSum.innerText = "R$ 0,00";
    entryValueSum.classList.add("value-sum");
    newEntry.appendChild(entryValueSum);

    financeTable.appendChild(newEntry);
    calculateSumByRow();
}

addEntryButton.addEventListener("click", (e) => {
    e.preventDefault();

    addNewEntry("Lançamento Manual","Manual","02/02/2022","02/02/2022", "Admin 8","R$ 200,00","");
})

filterEntryButton.addEventListener("click", (e) => {
    e.preventDefault();

    calculateSumByRow();
})

delEntryButton.addEventListener("click", (e) => {
    e.preventDefault();

    let entryToDelete = document.querySelector(".selected");
    entryToDelete.remove();
    calculateSumByRow();
})