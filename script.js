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