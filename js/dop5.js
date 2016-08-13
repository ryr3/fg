   mic = new p5.AudioIn();
   mic.start();

function loga() {
   micLevel = mic.getLevel();
console.log(micLevel);
}
