// Youtube api key: AIzaSyDZ76_4xh5c5tRRPhgt1pQyPC5dxAdj3T4
// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBaW7C70KBRCLgWbBojggYmd9Ec1wbIa_k&part=snippet,contentDetails,statistics,status

var apiKey = "AIzaSyDZ76_4xh5c5tRRPhgt1pQyPC5dxAdj3T4"
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'iszwuX1AK6A',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    }
  });
}

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
//   var done = false;
//   function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//       setTimeout(stopVideo, 6000);
//       done = true;
//     }
//   }
//   function stopVideo() {
//     player.stopVideo();
//   }


  var url = "https://www.googleapis.com/youtube/v3/search?q=type=video&maxResults=2&"
//   Calling youtube api to get the video id of movie that key word is searched
  var apiCall = url + "key=" + apiKey
 // https://www.googleapis.com/youtube/v3/search?q=$formatted_keyword&order=". $_GET['order'] ."&part=snippet&type=video&maxResults=". $_GET['max_result'] ."&key=". $api_key;

 //https://www.googleapis.com/youtube/v3/search?q=type=video&maxResults=2&key=AIzaSyDZ76_4xh5c5tRRPhgt1pQyPC5dxAdj3T4

 fetch(apiCall)
.then(function(data) {
    console.log(data)
})
var searchHistory = (localStorage.searchHistory) ? JSON.parse(localStorage.searchHistory) : [];
document.querySelector("").addEventListener("click", () => {
  searchHistory.push(document.querySelector("").value);
  localStorage.searchHistory = JSON.stringify(searchHistory);
});
document.querySelector("").addEventListener("", () => {
  var data = document.querySelector("");
  data.innerHTML = "";
  searchHistory.forEach((search) => {
    data.innerHTML = "" + data.innerHTML;
    data.querySelector("").innerText = search;
  });
});
//Will look at class tags from html to add in order to work
