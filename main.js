window.onload = init;
var context;
var bufferLoader;
var volumeGainNode;

function init() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
      'https://ia800703.us.archive.org/3/items/mythium/BSFM_ATKM.mp3',
      'https://ia800703.us.archive.org/3/items/mythium/PNY04-05_OTW.mp3',
      'https://ia800703.us.archive.org/3/items/mythium/PNY04-05_TSOWA.mp3'
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
    var source1 = context.createBufferSource();
    source1.buffer = bufferList[0];

    volumeGainNode = context.createGain();
    source1.connect(volumeGainNode);
    volumeGainNode.connect(context.destination);

    //source1.start(0);
}


changeVolume = function(element) {
    var volume = element.value;
    var fraction = parseInt(element.value) / parseInt(element.max);
    volumeGainNode.gain.value = fraction * fraction;
};

nextSong = function() {

}; 
