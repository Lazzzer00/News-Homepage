const sideMenuOpen: HTMLImageElement | null = document.querySelector("[data-side-menu-open]")
const sideMenu: HTMLDivElement | null = document.querySelector("[data-side-menu]")
const sideMenuExit: HTMLImageElement | null = document.querySelector("[data-side-menu-exit]")

if(sideMenuOpen && sideMenu && sideMenuExit){
    sideMenuOpen.addEventListener("click", e => {
        sideMenu.style.display = "block"
    })
    sideMenuExit.addEventListener("click", e => {
        sideMenuExit.style.display = "none"
    })
}

export{}