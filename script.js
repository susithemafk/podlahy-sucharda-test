import FooterContact from "./components/footer-contact.js"
import NavBar from "./components/nav-bar.js"

window.customElements.define("nav-bar", NavBar)
window.customElements.define("footer-contact", FooterContact)


const header = document.querySelector("nav-bar").shadowRoot.querySelector("header")
const hamburger = document.querySelector("nav-bar").shadowRoot.getElementById("nav-burger")
const kitchenimg = document.getElementById("kitchenimg")
hamburger.addEventListener("click", () => {
    header.classList.toggle("active")
    kitchenimg.classList.toggle("active")
})
