window.onload = init;

let context,
    sourceNode,
    bufferLoader,
    bufferArray,
    volumeGainNode,
    audioIndex = 0,
    startedAt = 0,
    pausedAt = 0;

var playBtn = document.querySelector('.play');
var pauseBtn = document.querySelector('.pause');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

function init() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
       'https://ia800703.us.archive.org/3/items/mythium/PNY04-05_TSOWA.mp3',
       'https://ia800703.us.archive.org/3/items/mythium/PNY04-05_OTW.mp3',
       'https://ia800703.us.archive.org/3/items/mythium/BSFM_ATKM.mp3'
    ],
    function(bufferList) { console.log('Loaded'); html5Player =  new AudioPlayer(bufferList); }
    );

  bufferLoader.load();
}







function AudioPlayer(songsData) {
    this.allSongsData = songsData;

    this.sourceNode = context.createBufferSource();
    this.sourceNode.buffer = this.allSongsData[0];

    this.volumeGainNode = context.createGain();
    this.sourceNode.connect(this.volumeGainNode);
    this.volumeGainNode.connect(context.destination);


    this.changeVolume = function(element) {
        var volume = element.value;
        var fraction = parseInt(element.value) / parseInt(element.max);
        this.volumeGainNode.gain.value = fraction * fraction;
    };


} 



AudioPlayer.prototype.play = function() {
    this.sourceNode.start();
};

AudioPlayer.prototype.pause = function() {
    this.sourceNode.stop();
};




function play(songData) {
    console.log(sourceNode);
    if (sourceNode) {
        sourceNode.disconnect();
        sourceNode.stop(0);
        sourceNode = null;
    };

    // sourceNode = context.createBufferSource();
    // sourceNode.buffer = songData;

    // volumeGainNode = context.createGain();
    // sourceNode.connect(volumeGainNode);

    // volumeGainNode.connect(context.destination);

    // sourceNode.start();
};















 