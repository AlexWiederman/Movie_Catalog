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

<<<<<<< HEAD
var baseUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCbizn6P1C9VjIOVXW4M_uvFGQ9Urc4rBA&libraries=places"
var url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=$40.7128,$40.0060&radius=$20&key=AIzaSyCbizn6P1C9VjIOVXW4M_uvFGQ9Urc4rBAY&libraries=places";




// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: 74.0060 },
    zoom: 15,
    mapTypeId: "roadmap",
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

window.initAutocomplete = initAutocomplete;

var getData = () => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};
getData();


=======

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
>>>>>>> 23aba69f8be451d462ae8ca0087580f215c29d2b
