const imageURIs = [
  "assets/fox.png",
  "assets/munich.png",
  "assets/yoshinoyama.jpg",
  "assets/red_fruit.png",
  "assets/kubinashi.png",
  "assets/cliff.png",
  "assets/matsushima.png",
  "assets/detroit_signature.png",
  "assets/chicago.jpg",
  "assets/rural.png",
  "assets/snow-piled-tree.png",
  "assets/tanuki.jpg",
  "assets/shimokita.jpg",
  "assets/michigan_theater.png",
  "assets/hidari-ashi.png",
  "assets/billiards.png",
  "assets/sakura.png",
  "assets/sentouki.png",
  "assets/mental_face.png",
  "assets/kaeru.png",
  "assets/neko.png",
  "assets/nikka.png",
  "assets/innoshima.png",
  "assets/dark_shrine.png",
  "assets/detroit_road.png",
  "assets/frankfurt_station.png",
  "assets/chicago_lake.jpg",
  "assets/hello_world.png",
  "assets/almond_tofu.png",
  "assets/chicago_gun.jpg",
  "assets/teishoku.png",
  "assets/goettingen_signature.png",
  "assets/pazzle.png",
  "assets/kurobe.jpg",
  "assets/kamome.png",
  "assets/kawa-kiken.png",
  "assets/from_plane.png",
  "assets/The_goose_girl.png",
  "assets/halo.png",
  "assets/usagi-san.png",
  "assets/matsushima2.png",
  "assets/arashiyama.png",
  "assets/okinawa_dog.png",
  "assets/kyuusei-seishinbyou.png",
  "assets/pure_road.jpg",
  "assets/burg_plesse_tower.png"
];

const init = () => {
    //render image
    const name = imageURIs[Math.floor(Math.random() * imageURIs.length)];
    document.getElementById("top-image").src = name;
};

init();
