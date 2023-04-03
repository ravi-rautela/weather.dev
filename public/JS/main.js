const searchBtn = document.getElementById("searchbtn");
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_value = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    // For page don't reloade.
    event.preventDefault();
    let cityValue = cityName.value;
    if (cityValue === "") {
        city_name.innerText = `Enter something to be search`;

        datahide.classList.add('data_hide');


    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=5bf8e8cd8b55be12f1fb333a15f82b6c`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            datahide.classList.remove('data_hide');

        }
        catch (error) {
            city_name.innerText = `Search for good keywords...`;
            datahide.classList.add('data_hide');
            console.log(error);
        }

    }
}

searchBtn.addEventListener('click', getInfo);

