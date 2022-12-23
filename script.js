// function createVideoPlayer() {
//   // 2. This code loads the IFrame Player API code asynchronously.
//   var tag = document.createElement('script');

//   tag.src = "https://www.youtube.com/iframe_api";

//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   // 3. This function creates an <iframe> (and YouTube player)
//   //    after the API code downloads.
//   var player;
//   function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//       height: '390',
//       width: '640',
//       videoId: 'video',  //'iszwuX1AK6A',
//       playerVars: {
//         'playsinline': 1
//       },
//       events: {
//         'onReady': onPlayerReady,
//         //   'onStateChange': onPlayerStateChange
//       }
//     });
//   }

//   // 4. The API will call this function when the video player is ready.
//   function onPlayerReady(event) {
//     event.target.playVideo();
//   }
// };

function createPlayer() {
  var videoParentEl = document.querySelector('.youtube')
  if (videoParentEl.children.length >0) {
    console.log("exists")
    videoParentEl.children[0].remove()
  }
  
  var videoEl = document.createElement('div');
  videoEl.id = "player"
  videoParentEl.appendChild(videoEl);

  var player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: video
  });
}

function onYouTubePlayerAPIReady() {
console.log('Ready')
  
}


var apiKey = "AIzaSyDZ76_4xh5c5tRRPhgt1pQyPC5dxAdj3T4"
// YouTube API key
// var API_KEY = 'AIzaSyDZ76_4xh5c5tRRPhgt1pQyPC5dxAdj3T4'; //amwiederman15
var API_KEY = 'AIzaSyBWiJO8Tjg4qX7p5wfAh4ih4nq6XeKqIAk'; //cemti

// Replace <SEARCH_QUERY> with the keywords or phrases that you want to search for
var SEARCH_QUERY;
var video;

function searchMovieId() {
  // Make a search request to the YouTube API
  fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=${SEARCH_QUERY}&type=video&maxResults=10&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      // Extract the list of videos from the response
      
      video = data.items[0].id.videoId;
      console.log(data)
      console.log(video)
      createPlayer()
    });
}

var searchEl = document.querySelector(".search");
var movieEl = document.querySelector(".input");
var movie;

searchEl.addEventListener("click", () => {

  movie = movieEl.value;
  if (movie == "") {
    return
  }
  movieEl.value = "";
  SEARCH_QUERY = movie + ' movie trailer';

  video = searchMovieId(video) //getting back video id
console.log( video)
  
  
})


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


function makeHistoryElement() {
  //Deleting all history elements before creating all new ones so they do not stack and repeat
  var historyExists = document.querySelector(".list-group-item")
  if (historyExists !== null) {
      var historyElements = document.querySelectorAll(".list-group-item");
      for (i = 0; i < historyElements.length; i++) {
          historyElements[i].remove()
      }
  }

  //Creating elements that are in the local storage variable (city)
  for (i = 0; i < city.length; i++) {
    var historyEl = document.querySelector(".history");
    var historyNew = document.createElement('li');
    historyNew.innerHTML = city[i]
    historyNew.classList = "list-group-item"
    historyEl.appendChild(historyNew)
}

}

function getHistory(city) {
var city = localStorage.getItem('searchHistory');
if (city) {
    city = JSON.parse(city);
} else {
    city = [];
}
return city;
}