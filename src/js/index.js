window.onload = function () {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => fetchData(data));
};

function fetchData(data) {
  var result = data.results[0];
  var realname = result.name.title + " " + result.name.first + " " + result.name.last;
  document.getElementById("realname").innerHTML = realname;

  var image = result.picture.large;
  document.getElementById("avatar").src = image;

  var username = "@" + result.login.username;
  document.getElementById("username").innerHTML = username;

  var email = result.email;
  document.getElementById("email").innerHTML = email;

  var country = result.location.country;
  document.getElementById("country").innerHTML = country;
}
