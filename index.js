// Den tidigare utvecklaren trodde att företaget heter Fruits & Bananas Corp, men det heter egentligen Fruits & Vegetables Corp
// Texten i `header h1` är fel, det ska vara Fruits & Vegetables Corp (see första punkten)
// Hämta ut h1 som ligger i första arrayen [0]

document.getElementsByTagName("h1")[0].textContent = "Fruits & Vegetables Corp";


//Den sista `a`-taggen i `header ul` har fel text och href-attribut (det ska vara Vegetables och inte Bananas)

const linkEl = document.querySelector("a[href='#bananas']");
linkEl.textContent = "Vegetables";
linkEl.href= '#Vegetables';

//Sektionerna `#contact` och `#about` är i fel ordning. Byt plats på dem.

const aboutEl = document.getElementById("about");
const contactEl = document.getElementById("contact");
const mainEl = document.getElementById("main");

mainEl.insertBefore(aboutEl, contactEl);

//Lättare sätt att skriva detta 
//document.getElementById("main").insertBefore(document.getElementById("about"), document.getElementById("contact"));
//eller som css!!!
//document.getElementById("main").style.cssText = "display: flex; flex-direction: column-reverse";


//Varje `section` ska ha en `h2`-tagg längst upp med text som motsvarar dess `id`.

const aboutH2 = document.createElement("h2");
aboutH2.textContent = "About";
aboutEl.prepend(aboutH2);


const contactH2 = document.createElement("h2");
contactH2.textContent = "Contact";
contactEl.prepend(contactH2);


//Texten "We're the best in fruits & vegetables" under `#about` ska omslutas med en `p`-tagg

let newAboutText = document.createElement("p");
newAboutText.textContent = "We're the best in fruits & vegetables";
aboutEl.appendChild(newAboutText);

// Ta bort texten utan för <p></p>

aboutEl.childNodes[1].remove();

//Utvecklaren använde `td`-element i `thead` istället för `th`. Fixa det.

let createNewTheadName = document.createElement("th");
createNewTheadName.textContent = "Name";
document.querySelector("thead > tr").replaceChild(createNewTheadName, document.querySelector("thead > tr > td") );

// Gör samma sak som ovan men vi använder replaceWith
// parentNode.replaceChild(newChild, oldChild);

let creatNewTheadEmail = document.createElement("th");
creatNewTheadEmail.textContent = "E-mail";
document.querySelector("thead > tr > td").replaceWith(creatNewTheadEmail);

//Utvecklaren glömde att inkludera `main.css`-filen. Lägg till den i `head`.

let style = document.createElement("link");
style.href = "main.css";
style.type = "text/css";
style.rel = "stylesheet";
document.head.append(style);


//Titeln i `head` är inkorrekt [MDN info](https://developer.mozilla.org/en-US/docs/Web/API/Document/title). Den ska vara "Fruits & Vegetables Corp"


document.title = "Fruits & Vegetables Corp";