/**
 * @author Kevin Duglué
 * @author Rémy Kaloustian
 */

// Import JQuery
import $ from 'jquery/dist/jquery.min';
// Import ImageWidget
import ImageElementWidget from 'tuiomanager/widgets/ElementWidget/ImageElementWidget/ImageElementWidget';
import VideoElementWidget from 'tuiomanager/widgets/ElementWidget/VideoElementWidget/VideoElementWidget';
import CircularMenu from 'tuiomanager/widgets/CircularMenu/CircularMenu';


function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildBackButton() {
  $('#app').append('<button id="back-button">Back</button>');
  $('#back-button').on('click', () => {
    $('#app').empty();
    buildMenu();
  });
}//  displayMenu()

function buildDevelopment() {
  $('#app').empty();
  buildBackButton();
  const imageWidget = new ImageElementWidget(0, 0, 250, 333, 0, 'assets/IMG_20150304_201145.jpg', 'B3', 'C9', '38');
  const videoWidget = new VideoElementWidget(100, 100, 250, 140, 0, 'assets/video/video.mp4', 'B3', 'C9', '38',  '3', '');
  $('#app').append(imageWidget.domElem);
  $('#app').append(videoWidget.domElem);

  const menuWidget = new CircularMenu('6D');
  $('#app').append(menuWidget.domElem);
  menuWidget.startMenu();
}// buildDevelopment()

function buildHealth() {
  $('#app').empty();
  buildBackButton();
  $('#app').append('<div id="main-container"> </div>')
  $('#main-container').append('<div id="healthy-container">  <h1>Healthy</h1> <h1 class="title-bottom">Healthy</h1> </div>');
  $('#main-container').append('<div id="unhealthy-container">  <h1>Unhealthy</h1> <h1 class="title-bottom">Unhealthy</h1> </div>');
  console.log('Main container height  = ' + $('#main-container').height());
  console.log('Main container H1 height  = ' + $('#main-container h1').height());
  var height = $('#main-container').height() - ($('#main-container h1').height() * 3);
  console.log('Main container H1 height  = ' + height + 'px');

  $('.title-bottom').css('marginTop', height + 'px');

  const candiesImage = new ImageElementWidget(100, 150, 110, 110, 0, 'assets/example-health/candies.png', 'B3', 'C9', '38');
  candiesImage.disable(true);
  $('#app').append(candiesImage.domElem);
  const appleImage = new ImageElementWidget(850, 20, 110, 110, 0, 'assets/example-health/apple.png', 'B3', 'C9', '38');
  $('#app').append(appleImage.domElem);
  const bananaImage = new ImageElementWidget(1700, 500, 110, 110, 0, 'assets/example-health/banana.png', 'B3', 'C9', '38');
  $('#app').append(bananaImage.domElem);
  const chipsImage = new ImageElementWidget(1500, 20, 110, 110, 0, 'assets/example-health/chips.png', 'B3', 'C9', '38');
  $('#app').append(chipsImage.domElem);
  const broccoliImage = new ImageElementWidget(200, 700, 110, 110, 0, 'assets/example-health/broccoli.png', 'B3', 'C9', '38');
  $('#app').append(broccoliImage.domElem);
  const tomatoImage = new ImageElementWidget(1000, 850, 110, 110, 90, 'assets/example-health/tomato.png', 'B3', 'C9', '38');
  $('#app').append(tomatoImage.domElem);
}// buildHealth()

function SpawnRotation(difficulty) {

  if(difficulty == 'medium') {
    return getRand(0, 360);
  }

  return 0;

}//  SpawnRotation()

function buildPuzzle(difficulty) {
console.log("difficulty = " + difficulty);

  $('#app').empty();
  buildBackButton();
  const puz1 = new ImageElementWidget(10, 100, 505, 414, SpawnRotation(difficulty), 'assets/example-puzzle/1.png', 'B3', 'C9', '38');
  $('#app').append(puz1.domElem);
  puz1.canZoom(false, false);
  puz1.canDelete(false,false);
  puz1.canRotate(false, false);
  const puz2 = new ImageElementWidget(600, 40, 539, 305, SpawnRotation(difficulty), 'assets/example-puzzle/2.png', 'B3', 'C9', '38');
  $('#app').append(puz2.domElem);
  puz2.canZoom(false, false);
  puz2.canDelete(false,false);
  puz2.canRotate(false, false);
  const puz3 = new ImageElementWidget(200, 10, 574, 655, SpawnRotation(difficulty), 'assets/example-puzzle/3.png', 'B3', 'C9', '38');
  $('#app').append(puz3.domElem);
  puz3.canZoom(false, false);
  puz3.canDelete(false,false);
  puz3.canRotate(false, false);
  const puz4 = new ImageElementWidget(500, 250, 524, 482, SpawnRotation(difficulty), 'assets/example-puzzle/4.png', 'B3', 'C9', '38');
  $('#app').append(puz4.domElem);
  puz4.canZoom(false, false);
  puz4.canDelete(false,false);
  puz4.canRotate(false, false);
  const puz5 = new ImageElementWidget(800, 500, 558, 420, SpawnRotation(difficulty), 'assets/example-puzzle/5.png', 'B3', 'C9', '38');
  $('#app').append(puz5.domElem);
  puz5.canZoom(false, false);
  puz5.canDelete(false,false);
  puz5.canRotate(false, false);
  const puz6 = new ImageElementWidget(850, 150, 429, 475, SpawnRotation(difficulty), 'assets/example-puzzle/6.png', 'B3', 'C9', '38');
  $('#app').append(puz6.domElem);
  puz6.canZoom(false, false);
  puz6.canDelete(false,false);
  puz6.canRotate(false, false);
  const puz7 = new ImageElementWidget(200, 500, 340, 338, SpawnRotation(difficulty), 'assets/example-puzzle/7.png', 'B3', 'C9', '38');
  $('#app').append(puz7.domElem);
  puz7.canZoom(false, false);
  puz7.canDelete(false,false);
  puz7.canRotate(false, false);
  const puz8 = new ImageElementWidget(50, 400, 340, 558, SpawnRotation(difficulty), 'assets/example-puzzle/8.png', 'B3', 'C9', '38');
  $('#app').append(puz8.domElem);
  puz8.canZoom(false, false);
  puz8.canDelete(false,false);
  puz8.canRotate(false, false);
}// buildPuzzle()

function buildMusic() {
  $('#app').empty();
  buildBackButton();
  $('#app').append('<h1>Put the right sound below the instrument</h1>')
  $('#app').append('<div id=\"music-container\"> </div>')
  $("#music-container").append('<div class=\"music-subcontainer\"><img src=\"assets/example-music/guitar.png\" > <div class=\"music-target\"></div> </div>');
  $("#music-container").append('<div class=\"music-subcontainer\"><img src=\"assets/example-music/piano.png\" ><div class=\"music-target\"></div> </div>');
  $("#music-container").append('<div class=\"music-subcontainer\"><img src=\"assets/example-music/saxophone.png\" ><div class=\"music-target\"></div> </div>');

  const guitarVid = new VideoElementWidget(50, 800, 150, 84, 0, 'assets/example-music/guitar.mp4', 'B3', 'C9', '38', '3', '');
  $('#app').append(guitarVid.domElem);
  const pianoVid = new VideoElementWidget(250, 800, 150, 84, 0, 'assets/example-music/piano.mp4', 'B3', 'C9', '38', '3', '');
  $('#app').append(pianoVid.domElem);
  const saxophoneVid = new VideoElementWidget(450, 800, 150, 84, 0, 'assets/example-music/saxophone.mp4', 'B3', 'C9', '38', '3', '');
  $('#app').append(saxophoneVid.domElem);
  const fluteVid = new VideoElementWidget(650, 800, 150, 84, 0, 'assets/example-music/flute.mp4', 'B3', 'C9', '38', '3', '');
  $('#app').append(fluteVid.domElem);
  const drumsVid = new VideoElementWidget(850, 800, 150, 84, 0, 'assets/example-music/drums.mp4', 'B3', 'C9', '38', '3', '');
  $('#app').append(drumsVid.domElem);
} // buildMusic()


export function buildMenu() {
  $('#app').append('<h1> TUIO Showcase </h1>');
  $('#app').append('<button id="development" class="menu-button"> Development </button> </br>');
  $('#app').append('<button id="health" class="menu-button"> Health (using ImageElementWidget) </button></br>');
  $('#app').append('<button class="menu-button puzzle" data-difficulty="easy"> Puzzle Easy(using ImageElementWidget) </button></br>');
  $('#app').append('<button class="menu-button puzzle" data-difficulty="medium"> Puzzle Medimum(using ImageElementWidget) </button></br>');

  $('#app').append('<button id="music" class="menu-button"> Music (using VideoElementWidget) </button></br>');


  $('#development').on('click', () => {
    buildDevelopment();
  });
  $('#health').on('click', () => {
    buildHealth();
  });
  $('.puzzle').on('click', (elem) => {
    buildPuzzle($(elem.target).data("difficulty"));
  });
  $('#music').on('click', () => {
    buildMusic();
  });

}// buildMenu()
