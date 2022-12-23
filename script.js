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


