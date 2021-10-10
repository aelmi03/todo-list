export const header = (() => {
    const menuButton = document.querySelector(".menu-span");
    const sidebar = document.querySelector(".sidebar");
    const toggleSidebar = () => {
        sidebar.classList.toggle("slide-to-left");
    }
    menuButton.addEventListener("click", toggleSidebar);
})();