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


var searchQuery = 'Wolf of Wall Street';
// YouTube API key
var API_KEY = 'AIzaSyDZ76_4xh5c5tRRPhgt1pQyPC5dxAdj3T4';

// Replace <SEARCH_QUERY> with the keywords or phrases that you want to search for
var SEARCH_QUERY = 'Wolf of Wall Street' + ' movie trailer';

// Make a search request to the YouTube API
fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=${SEARCH_QUERY}&type=video&maxResults=10&key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    // Extract the list of videos from the response
    const videos = data.items[0].id.videoId;
console.log(videos)
  });


// Keeping the history saved for previous searches
// var searchHistory = (localStorage.searchHistory) ? JSON.parse(localStorage.searchHistory) : [];
// document.querySelector("").addEventListener("click", () => {
//   searchHistory.push(document.querySelector("").value);
//   localStorage.searchHistory = JSON.stringify(searchHistory);

// });
// document.querySelector("").addEventListener("", () => {
//   var data = document.querySelector("");
//   data.innerHTML = "";
//   searchHistory.forEach((search) => {
//     data.innerHTML = "" + data.innerHTML;
//     data.querySelector("").innerText = search;
//   });
// });
//Will look at class tags from html to add in order to work
