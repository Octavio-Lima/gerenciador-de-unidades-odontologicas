const sidebarButtons = document.querySelectorAll(".sidebar-button");
const workContainerPage = document.querySelectorAll(".work-container-page");
const pageWindow = document.querySelectorAll(".page-window");
const blockMainPage = document.querySelector(".block-main-page");


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
    const parentEl = targetEl.closest("div");

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

})