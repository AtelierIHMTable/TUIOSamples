/**
 * @author Kevin Duglué
 * @author Rémy Kaloustian
 */

// Import JQuery
import $ from 'jquery/dist/jquery.min';
// Import ImageWidget
import ImageElementWidget from 'tuiomanager/widgets/ElementWidget/ImageElementWidget/ImageElementWidget';
import VideoElementWidget from 'tuiomanager/widgets/ElementWidget/VideoElementWidget/VideoElementWidget';


function buildDevelopment() {
  $('#app').empty();

  const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
  const videoWidget = new VideoElementWidget(100, 100, 250, 333, 'http://techslides.com/demos/sample-videos/small.mp4');
  $('#app').append(imageWidget.domElem);
  $('#app').append(videoWidget.domElem);
}// buildDevelopment()

function buildHealth() {
  $('#app').empty();

  $('#app').append('<div id="healthy-container">  <h1>Healthy</h1>  </div>');
  $('#app').append('<div id="unhealthy-container">  <h1>Unhealthy</h1>  </div>');

  const candiesImage = new ImageElementWidget(50, 400, 110, 110, 'assets/example-health/candies.png');
  $('#app').append(candiesImage.domElem);
  const appleImage = new ImageElementWidget(250, 400, 500, 500, 'assets/example-health/apple.png');
  $('#app').append(appleImage.domElem);
  const bananaImage = new ImageElementWidget(450, 400, 110, 110, 'assets/example-health/banana.png');
  $('#app').append(bananaImage.domElem);
  const chipsImage = new ImageElementWidget(650, 400, 110, 110, 'assets/example-health/chips.png');
  $('#app').append(chipsImage.domElem);
  const broccoliImage = new ImageElementWidget(850, 400, 110, 110, 'assets/example-health/broccoli.png');
  $('#app').append(broccoliImage.domElem);
  const tomatoImage = new ImageElementWidget(1050, 400, 110, 110, 'assets/example-health/tomato.png');
  $('#app').append(tomatoImage.domElem);
}// buildHealth()

function buildPuzzle() {
  $('#app').empty();
  const puz1 = new ImageElementWidget(10, 100, 505, 414, 'assets/example-puzzle/1.png');
  $('#app').append(puz1.domElem);
  const puz2 = new ImageElementWidget(600, 40, 539, 305, 'assets/example-puzzle/2.png');
  $('#app').append(puz2.domElem);
  const puz3 = new ImageElementWidget(200, 10, 574, 655, 'assets/example-puzzle/3.png');
  $('#app').append(puz3.domElem);
  const puz4 = new ImageElementWidget(500, 250, 524, 482, 'assets/example-puzzle/4.png');
  $('#app').append(puz4.domElem);
  const puz5 = new ImageElementWidget(800, 500, 558, 420, 'assets/example-puzzle/5.png');
  $('#app').append(puz5.domElem);
  const puz6 = new ImageElementWidget(850, 150, 429, 475, 'assets/example-puzzle/6.png');
  $('#app').append(puz6.domElem);
  const puz7 = new ImageElementWidget(200, 500, 340, 338, 'assets/example-puzzle/7.png');
  $('#app').append(puz7.domElem);
  const puz8 = new ImageElementWidget(50, 400, 340, 558, 'assets/example-puzzle/8.png');
  $('#app').append(puz8.domElem);



}// buildPuzzle()

export function buildMenu() {
  $('#app').append('<button id="development"> Development </button> </br>');
  $('#app').append('<button id="health"> Health (using ImageElementWidget) </button></br>');
  $('#app').append('<button id="puzzle"> Puzzle (using ImageElementWidget) </button></br>');

  $('#development').on('click', () => {
    buildDevelopment();
  });
  $('#health').on('click', () => {
    buildHealth();
  });
  $('#puzzle').on('click', () => {
    buildPuzzle();
  });
}// buildMenu()
