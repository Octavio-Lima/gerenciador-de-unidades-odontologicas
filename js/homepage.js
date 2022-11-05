const sidebarButtons = document.querySelectorAll(".sidebar-button");
const workContainerPage = document.querySelectorAll(".work-container-page");
const pageWindow = document.querySelectorAll(".iframe-page");
const blockBgElement = document.querySelector(".block-bg-elements");

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

    blockBgElement.classList.add("hidden");
}

function openWindow(windowID) {
    pageWindow.forEach((window) => {
        window.classList.remove("hidden");
    });

    blockBgElement.classList.remove("hidden");
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
    if (targetEl.classList.contains("block-bg-elements")){
        closeAllWindows();
    }
    if (targetEl.classList.contains("page-buttons")){
        let targetId = targetEl.id;
        if (targetId == "employees"){
            openWindow(targetId);
        }
    }

    if (targetEl.classList.contains("emp-pause-btn")){
        parentEl.classList.toggle("suspended-emp");
    }
    
    if (targetEl.classList.contains("emp-remove-btn")){
        parentEl.remove();
    }
})