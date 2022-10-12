let openNav = () => {
    let nav = document.querySelector("nav")
    nav.classList.toggle("open")

    let button = document.getElementById("tapBox")
    button.classList.toggle("tapBoxOpen")
}