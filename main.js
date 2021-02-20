const contentNames = ["home", "profile", "research", "link"];
const headerTitleTemplate = document.querySelector("#header-title-template").content;
const headerContentTemplate = document.querySelector("#header-content-template").content;
const bodyContents = Object.fromEntries(
    contentNames.map(
	name => [name,
		 document.querySelector(`#${name}-template`).content]
    )
);
const burger = document.querySelector(".burger");
const menu = document.querySelector('#'+burger.dataset.target);
const imageURIs = [];


const initFirebase = () => {
    // Initialize Firebase
    firebase.initializeApp({
	apiKey: "AIzaSyDjjir5NszhWVynWtbqDCYncabqgNT4jvk",
	authDomain: "portfolio-6d417.firebaseapp.com",
	projectId: "portfolio-6d417",
	storageBucket: "portfolio-6d417.appspot.com",
	messagingSenderId: "549770185846",
	appId: "1:549770185846:web:65adbbb0ab6de0418d6357",
	measurementId: "G-WET8KQ9GVQ"
    });
    firebase.analytics();    
}

const fetchImageURIs = async (storage) => {
    const pathList =
	  await storage
	  .ref()
	  .child("top-image")
	  .listAll();
    
    return (
	await Promise.all(pathList
			  .items
			  .map(path => path.getDownloadURL()))
    )
};

const renderHeader = (name) => {
    const div = document.querySelector("div.hero-body");
    div.innerHTML = "";
    
    //close navigation bar
    burger.classList.remove("is-active");
    menu.classList.remove("is-active");
    
    // button
    contentNames.map(n =>
		     document
		     .querySelector(`a[name=${n}]`)
		     .classList
		     .add("is-outlined"));
    document
	.querySelector(`a[name=${name}]`)
	.classList
	.remove("is-outlined");
    
    if (name === "home") {
	const clone = document.importNode(headerContentTemplate, true);
	// pick url from imageURIs
	const url = imageURIs[Math.floor(Math.random() * imageURIs.length)];
	console.log(url);
	clone.querySelector("img").src = url;
	div.appendChild(clone);
    } else {
	const clone = document.importNode(headerTitleTemplate, true);
	clone.querySelector("h1.title").textContent = name.toUpperCase();
	div.appendChild(clone);
    }
};

const renderContent = (name) => {
    const contentField = document.querySelector("#main-content");
    const clone = document.importNode(bodyContents[name], true);
    contentField.innerHTML = "";
    contentField.appendChild(clone);
};

const render = (name) => {    
    renderHeader(name);
    renderContent(name);
};

const main = async () => {
    initFirebase();

    // fetch image urls
    imageURIs.push(...(await fetchImageURIs(firebase.storage())))

    // initial rendering
    render("home");

    // add event listener
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
    contentNames.map(
	name => document
	    .querySelector(`a[name=${name}]`)
	    .addEventListener("click", () => render(name))
    );
};

main();

