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

function createPlayer() {
  var videoParentEl = document.querySelector('.youtube')
  if (videoParentEl.children.length > 0) {
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
var search;

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

  // getting local storage variables
  search = getHistory(search);
  // adding new search to storage variable
  search.push(movie)
  // saving variable to local storage
  saveSearchToStorage()

  movieEl.value = "";
  SEARCH_QUERY = movie + ' movie trailer';

  video = searchMovieId(video) //getting back video id
  // console.log(video)
  makeHistoryElement()
})

function makeHistoryElement() {
  //Deleting all history elements before creating all new ones so they do not stack and repeat
  var historyExists = document.querySelector(".list_history")
  if (historyExists !== null) {
    var historyElements = document.querySelectorAll(".list_history");
    for (i = 0; i < historyElements.length; i++) {
      historyElements[i].remove()
    }
  }

  //Creating elements that are in the local storage variable (searchHistory)
  for (i = 0; i < search.length; i++) {
    var historyEl = document.querySelector(".dropdown-content");
    var historyNew = document.createElement('div');
    historyNew.innerHTML = search[i] // + "<hr class='dropdown-divider'>"
    historyNew.classList = "list_history dropdown-item"


    var divider = document.createElement('div');
    divider.innerHTML = "<hr class='dropdown-divider'>"
    historyEl.appendChild(historyNew)
    
  }
}

function getHistory(search) {
  search = localStorage.getItem('searchHistory');
  if (search) {
    search = JSON.parse(search);
  } else {
    search = [];
  }
  return search;
}

function saveSearchToStorage() {
  localStorage.setItem("searchHistory", JSON.stringify(search));
}

// ReSearching for movie when history movie list item is selected
var parentElements = document.querySelector('.dropdown-content')
parentElements.addEventListener("click", function (event) {
  console.log(event.target.innerHTML);
})


// omdbapi.com
var $Form = $('form'), $Container = $('#container');
$Container.hide();
$Form.on('submit', function(p_oEvent){
    var sUrl, sMovie;
    p_oEvent.preventDefault();
sMovie = $Form.find('input').val();
    sUrl = 'https://www.omdbapi.com/?t=' + 'cars' + '&apikey=205fe796'
    fetch(sUrl)
    .then(response => response.json())
    .then(data => {
      

      console.log(data)
    });
   
});

// Bulma history dropdown toggle
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});



