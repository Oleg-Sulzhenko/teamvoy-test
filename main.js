window.onload = init;
var context;
var source;
var bufferLoader;
var bufferArray;
var volumeGainNode;


function init() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
      'https://ia800703.us.archive.org/3/items/mythium/BSFM_ATKM.mp3',
    //   'https://ia800703.us.archive.org/3/items/mythium/PNY04-05_OTW.mp3',
    //   'https://ia800703.us.archive.org/3/items/mythium/PNY04-05_TSOWA.mp3'
    ],
    function(bufferList) { bufferArray = bufferList; }
    );

  bufferLoader.load();
}

function play(songData) {
    
    source = context.createBufferSource();
    source.buffer = songData;

    volumeGainNode = context.createGain();
    source.connect(volumeGainNode);

    volumeGainNode.connect(context.destination);

    source.start();
};






var nextBtn = document.querySelector('.next');
nextBtn.onclick = function() {
    play(bufferArray[0]);
}; 

var pauseBtn = document.querySelector('.pause');
pauseBtn.onclick = function() {
    source.stop();
}; 









changeVolume = function(element) {
    var volume = element.value;
    var fraction = parseInt(element.value) / parseInt(element.max);
    volumeGainNode.gain.value = fraction * fraction;
};