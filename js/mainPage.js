const sidebarButtons = document.querySelectorAll(".sidebar-button");
const workContainerPage = document.querySelectorAll(".work-container-page");
const pageWindow = document.querySelectorAll(".page-window");
const blockMainPage = document.querySelector(".block-main-page");

const employeeTable = document.querySelector(".employee-table");
const addEmployeeButton = document.querySelector(".add-employee-button");

// Funções
function clickOnSidebarButton(clicked, buttonID) {
    sidebarButtons.forEach((button, index) => {
        button.classList.remove("selected");
        workContainerPage.item(index).classList.add("hidden");
    });

    clicked.classList.add("selected");
    workContainerPage.item(buttonID).classList.remove("hidden");
}   

function closeAllWindows() {
    pageWindow.forEach((window) => {
        window.classList.add("hidden");
    });

    blockMainPage.classList.add("hidden");
}

function openWindow(windowID) {
    pageWindow.forEach((window) => {
        window.classList.remove("hidden");
    });

    blockMainPage.classList.remove("hidden");
}

document.addEventListener("click", (e) => {
    e.preventDefault();

    const targetEl = e.target;
    const parentEl = targetEl.closest("tr");

    if (targetEl.classList.contains("sidebar-button")){
        let targetId = targetEl.id;
        clickOnSidebarButton(targetEl, targetId);
    }

    if (targetEl.classList.contains("close-window-button")){
        closeAllWindows();
    }
    if (targetEl.classList.contains("block-main-page")){
        closeAllWindows();
    }
    if (targetEl.classList.contains("page-buttons")){
        let targetId = targetEl.id;
        openWindow(targetId);
    }

    if (targetEl.classList.contains("emp-pause-btn")){
        parentEl.classList.toggle("suspended-emp");
    }
    
    if (targetEl.classList.contains("emp-remove-btn")){
        parentEl.remove();
    }
})

/* Adicionar Prestador */

function addEmployee(name, acessType, loginCred) {
    const newEmployee = document.createElement("tr");
    newEmployee.classList.add("em-table-row");

    const employeeName = document.createElement("td");
    employeeName.innerText = name;
    newEmployee.appendChild(employeeName);
    
    const employeeAcessType = document.createElement("td");
    employeeAcessType.innerText = acessType;
    newEmployee.appendChild(employeeAcessType);

    const employeeLoginCred = document.createElement("td");
    employeeLoginCred.innerText = loginCred;
    newEmployee.appendChild(employeeLoginCred);

    const tableDataBtnEdit = document.createElement("td")
    const empEditBtn = document.createElement("button");
    empEditBtn.classList.add("taskbar-buttons");
    empEditBtn.classList.add("emp-edit-btn");
    empEditBtn.innerHTML = ' <i class="fa fa-pencil"></i>';
    tableDataBtnEdit.appendChild(empEditBtn)
    newEmployee.appendChild(tableDataBtnEdit);

    const tableDataBtnPause = document.createElement("td")
    const empPauseBtn = document.createElement("button");
    empPauseBtn.classList.add("taskbar-buttons");
    empPauseBtn.classList.add("emp-pause-btn");
    empPauseBtn.innerHTML = ' <i class="fa fa-pause"></i>';
    tableDataBtnPause.appendChild(empPauseBtn)
    newEmployee.appendChild(tableDataBtnPause);

    const tableDataBtnRemove = document.createElement("td")
    const empRemoveBtn = document.createElement("button");
    empRemoveBtn.classList.add("taskbar-buttons");
    empRemoveBtn.classList.add("emp-remove-btn");
    empRemoveBtn.innerHTML = ' <i class="fa fa-xmark"></i>';
    tableDataBtnRemove.appendChild(empRemoveBtn)
    newEmployee.appendChild(tableDataBtnRemove);

    employeeTable.appendChild(newEmployee);
}

addEmployeeButton.addEventListener("click", (e) => {
    e.preventDefault();

    addEmployee("abc", "nope", "123");
})