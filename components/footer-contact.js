const template = document.createElement("template")

template.innerHTML = `
<link rel = "stylesheet" href = "components/footer-contact.css">
<link rel = "stylesheet" href = "style.css">
<section id = "section-kontakt">
            <h3 id = "seckontakt-kontakt" class = "b">KONTAKT</h3>
            <p id = "seckontakt-paragraph" class = "p">Podívejte se na naše další sítě nebo nás kontaktujte s jakýmkoli dotazem!</p>
            <div id = "seckontakt-odkazy-a-legalinfo-div">
                <ul id = "seckontakt-odkazy" class = "p">
                  <li id = "phone"><img src = "/images/icons/env3.svg"><p>@podlahy-sucharda</p></li>  
                  <li id = "fb"><img src = "/images/icons/fbfooter.svg"><p>fb.com/podlahy-sucharda</p></li>  
                  <li id = "email"><img src = "/images/icons/ig2.svg"><p>info@podlahy-sucharda.cz</p></li>  
                  <li id = "ig"><img src = "/images/icons/tel.svg"><p>+420 728 428 188</p></li>  
                </ul>
                <ul id = "seckontakt-legalinfo" class = "p">
                    <li><p>Lukáš Sucharda</p></li>
                    <li><p>Hvozdnice 000</p></li>
                    <li><p>252 05</p></li>
                    <li><p>IČ: 123456789</p></li>
                    <li><p>DIČ: CZ123456789</p></li>
                </ul>
                <ul id = "seckontakt-legalinfo2" class = "p">
                    <li><p>Sídlo firmy: </p></li>
                    <li><p>Hvozdnice 000</p></li>
                    <li><p>252 05<p/></li>
                </ul>
            </div>
            <h3 id = "seckontakt-podlahy-sucharda" class = "b">Podlahy Sucharda</h3>
            <h4 id = "seckontakt-lukas-sucharda" class = "b">Lukáš Sucharda</h4>
        </section>
`

class FooterContact extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export default FooterContact