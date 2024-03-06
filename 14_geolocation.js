// let success = (data) => {
//   console.log(data);
// };
let success = ({ coords: { latitude, longitude } }) => {
  // coords: {latitude, longitude} = destructuring
  // data.coords.latutude
  setLink(latitude, longitude);
};
let error = (err) => {
  alert(err.message);
};

navigator.geolocation.getCurrentPosition(success, error);

let link = document.getElementById("link");

function setLink(lat, long) {
  let url = new URL("https://www.google.com/maps");
  url.searchParams.set("q", `${lat},${long}`);
  let outputUrl = url.toString();

  link.href = outputUrl;
  link.innerText = outputUrl;
}
