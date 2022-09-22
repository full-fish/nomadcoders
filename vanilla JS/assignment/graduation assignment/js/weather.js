const API_KEY = "a13243d067b38b625abff0333b4dbd07";
function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temperature = document.querySelector("#weather span:last-child");
      city.textContent = `city : ${data.name} / `;
      weather.textContent = `weather : ${data.weather[0].main} / `;
      temperature.textContent = `Temp : ${data.main.temp}`;
    });
  console.log(url);
}

function onGeoError() {
  alert("너의 위치를 찾을 수 없어서 날씨를 알 수 없다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//!
// const API_KEY = "h4Ob3vUZzSRqJMYUqY35uuI6hnUg3XcnJYib%2F9iO2brl0RP%2ByWC7SBV5NVsKsCUieuADivFDOVbSO2Xc27yKUA%3D%3D";
// function onGeoOk(position) {
//   const city = "전북";
//   const key = "h4Ob3vUZzSRqJMYUqY35uuI6hnUg3XcnJYib%2F9iO2brl0RP%2ByWC7SBV5NVsKsCUieuADivFDOVbSO2Xc27yKUA%3D%3D";
//   const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${key}&returnType=JSON&numOfRows=100&pageNo=1&sidoName=${city}&ver=1.0`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const city = document.querySelector("#weather span:first-child");
//       //   const weather = document.querySelector("#weather span:nth-child(2)");
//       //   const temperature = document.querySelector("#weather span:last-child");
//       city.textContent = `city : ${data.response.body.totalCount} / `;
//       //   weather.textContent = `weather : ${data.weather[0].main} / `;
//       //   temperature.textContent = `Temp : ${data.main.temp}`;
//       console.log(data);
//     });
//   console.log(url);
// }

// function onGeoError() {
//   alert("너의 위치를 찾을 수 없어서 날씨를 알 수 없다");
// }
// onGeoOk();
// // navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
