const template = document.createElement("template")

template.innerHTML = `
<link rel = "stylesheet" href = "components/nav-bar.css">
<link rel = "stylesheet" href = "style.css">
<header id = "header-wide"> 
    <p id = "logo" class = "logo b">PODLAHY<br>SUCHARDA</p>
    <div id = "nav-mobile">
        <img id = "nav-burger" src = "/images/icons/nav-burger.svg">
        <h2 id = "page-name" class = "b">ÚVOD</h2>
    </div>
    <nav id = "nav">
        <ul> 
            <li class = "navitem m"><a href = "#" >ÚVOD</a></li>
            <li class = "navitem m"><a href = "#" >NAŠE PRÁCE</a></li>
            <li class = "navitem m"><a href = "#" >POSTUP</a></li>
            <li class = "navitem m"><a href = "#" >O PODLAHÁCH</a></li>
            <li class = "navitem m"><a href = "#" >CENÍK</a></li>
        </ul>
    </nav>
</header>

`

class NavBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export default NavBar