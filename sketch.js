const button = document.getElementById('submit');
button.addEventListener('click', async event =>{
  console.log("button pushed");
  const post = document.getElementById('post').value;
  const college = document.getElementById('college').value;
  const title = document.getElementById('title').value;

  const data = {college,title,post};
  
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('http://localhost:3000/api', options);
  const json = await response.json();
  console.log(json);
})





// if('geolocation' in navigator){
//   console.log('geolocation available');
//   navigator.geolocation.getCurrentPosition(async (position) => {
//       lat = position.coords.latitude;
//       lon = position.coords.longitude;
//       console.log(lat, lon);
//       document.getElementById('latitude').textContent = lat;
//       document.getElementById('longitude').textContent = lon;


//     });
// }else {
//   console.log('geolocation is not available');

// }
