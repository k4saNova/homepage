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

const imageURIs= [
    "assets/kaeru.png",
    "assets/red_fruit.png",
    "assets/snow-piled-tree.png",
    "assets/kamome.png",
    "assets/sentouki.png",
    "assets/okinawa_dog.png",
    "assets/teishoku.png",
    "assets/almond_tofu.png",
    "assets/rural.png",
    "assets/burg_plesse_tower.png",
    "assets/cliff.png",
    "assets/michigan_theater.png",
    "assets/kawa-kiken.png",
    "assets/frankfurt_station.png",
    "assets/fox.png",
    "assets/goettingen_signature.png",
    "assets/matsushima2.png",
    "assets/innoshima.png",
    "assets/halo.png",
    "assets/kubinashi.png",
    "assets/The_goose_girl.png",
    "assets/munich.png",
    "assets/from_plane.png",
    "assets/hello_world.png",
    "assets/nikka.png",
    "assets/mental_face.png",
    "assets/billiards.png",
    "assets/matsushima.png",
    "assets/pazzle.png",
    "assets/usagi-san.png",
    "assets/sakura.png",
    "assets/detroit_road.png",
    "assets/dark_shrine.png",
    "assets/neko.png",
    "assets/detroit_signature.png",
    "assets/hidari-ashi.png",
    "assets/arashiyama.png",
    "assets/kyuusei-seishinbyou.png",
];

const init = () => {
    initFirebase();

    //render image
    const name = imageURIs[Math.floor(Math.random() * imageURIs.length)];
    document.getElementById("top-image").src = name;
};

init();
