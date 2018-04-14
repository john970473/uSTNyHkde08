var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // height: '390',
    width: '100%',
    videoId: 'uSTNyHkde08',
    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // event.target.loadVideoById("oWP9Riq-ZBg", 5,"large");
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {

  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}

function play_context_one(index){
    player.loadVideoById("uSTNyHkde08", transcript.data[index-1].t/1000,"large");
    setTimeout(pauseVideo, transcript.data[index-1].d);
    for (var i=1 ; i<=10 ; i++){
      document.getElementById('ts'+ i).style.backgroundColor = "white";
    }
    document.getElementById('ts'+ index).style.backgroundColor = "lightgray";
}
function pauseVideo() {
  player.pauseVideo();
  for (var i=1 ; i<=10 ; i++){
  document.getElementById('ts'+ i).style.backgroundColor = "white";
}
}
