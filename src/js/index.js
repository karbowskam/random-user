window.onload = function () {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => fetchData(data));
};

console.log("Hello world");