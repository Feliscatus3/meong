import * as questionsController from './controllers/questions-controller.js';
import * as navBarController from './controllers/navBar-controller.js';

questionsController.init();
navBarController.init();

  // Mengambil elemen audio berdasarkan ID
  var audioElement = document.getElementById("myAudio");
  // Mengatur volume menjadi 50%
  audioElement.volume = 0.2;