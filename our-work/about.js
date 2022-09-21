const tRow = document.querySelector(".active-row")

const tdOne = document.querySelector("#tdOne")
const tdTwo = document.querySelector("#tdTwo")
const tdThree = document.querySelector("#tdThree")
const tdFour = document.querySelector("#tdFour")
const tdFive = document.querySelector("#tdFive")

// const tDatas = [tdOne, tdTwo, tdThree, tdFour, tdFive];

const apiKey = "6f575d2559a3adcc09315aa73de39e77";
const cityName = 'Sibiu';
// const lonSibiu = 26.10253839;
// const latSibiu = 44.4267674;

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latSibiu}&lon=${lonSibiu}&appid=${apiKey}&units=imperial`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayData(data);
    })
    .catch((err) => {
        console.log('Error fetching data', err);
        displayErr(err);
    })

function displayData(data) {
    const {main, clouds} = data;
    console.log( main.temp, main.feels_like, main.temp_min, main.humidity);
        
    const celsiusTemp = Math.round(((main.temp - 32) * 5/9) * 10) / 10;
    console.log(celsiusTemp);
    tdOne.textContent = `${celsiusTemp} grade celsius`;

    const celsiusFeelsLike = Math.round(((main.feels_like - 32) * 5/9) * 10) / 10;
    console.log(celsiusFeelsLike);
    tdTwo.textContent = `${celsiusFeelsLike} grade celsius`;

    const celsiusMinTemp = Math.round(((main.temp_min - 32) * 5/9) * 10) / 10;
    console.log(celsiusMinTemp);
    tdThree.textContent = `${celsiusMinTemp} grade celsius`;

    console.log(main.humidity);
    tdFour.textContent = `${main.humidity}%`;

    console.log(clouds.all)
    tdFive.textContent = `${clouds.all}%`
}

function displayErr(err) {
    tdOne.textContent = `Nu putem ajunge la starea vremii din server.`;
}


// °C = (°F - 32) × 5/9;
// const tempCelsius = (data.main.temp - 32) * 5/9;
// tdOne.textContent = data.main.temp;