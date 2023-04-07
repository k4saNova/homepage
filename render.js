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

const init = async () => {
    initFirebase();

    // fetch image urls
    const imageURIs = [];
    imageURIs.push(...(await fetchImageURIs(firebase.storage())));

    //render image
    const url = imageURIs[Math.floor(Math.random() * imageURIs.length)];
    document.getElementById("top-image").src = url;
    console.log(url);
};

init();

