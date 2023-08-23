var sideMenuOpen = document.querySelector("[data-side-menu-open]");
var sideMenu = document.querySelector("[data-side-menu]");
var sideMenuExit = document.querySelector("[data-side-menu-exit]");

if (sideMenuOpen && sideMenu && sideMenuExit) {
    sideMenuOpen.addEventListener("click", function (e) {
        sideMenu.style.display = "block";
    });
    sideMenuExit.addEventListener("click", function (e) {
        sideMenu.style.display = "none";
    });
}
