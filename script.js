const APIKey = "3ca587d037a792c4188095088d583950"
let btn = document.querySelector(`button`)
let div = document.getElementsByClassName(`div`)
let wheather = document.getElementsByClassName(`wheather`)[0]
////////////////////////////////
let img = document.getElementsByClassName(`img`)[0]
let h1 = document.getElementsByClassName(`h1`)[0]
let h2 = document.getElementsByClassName(`h2`)[0]
let h3 = document.getElementsByClassName(`h3`)[0]
let h4 = document.getElementsByClassName(`h4`)[0]
let inp = document.getElementById(`cit`);






//////////////////////////////
function cp(city) {



    if (city.length > 0) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
            .then(c => c.json())
            .then((pc) => {
                if (pc.cod == 404) {
                    console.log(`ERROR****`)
                    wheather.style = `
                    display: block;
                    height: 80%;
                    `
                    img.setAttribute('src', './images/404.png');
                    console.log(img);
                } else {
                    console.log(pc)
                     /////////////////////////////////
                    if (pc.weather[0].main == 'Clouds') {
                        img.setAttribute('src', './images/cloud.png');
                      } else if (pc.weather[0].main == 'Clear') {
                        img.setAttribute('src', './images/clear.png');
                      } else if (pc.weather[0].main == 'Rain') {
                        img.setAttribute('src', './images/rain.png');
                      } else if (pc.weather[0].main == 'Haze') {
                        img.setAttribute('src', './images/mist.png');
                      } else if (pc.weather[0].main == 'Snow') {
                        img.setAttribute('src', './images/snow.png');
                      }
                    /////////////////////////////
                
                    //////////////////////////
               
                    wheather.style = `
                    display: block;
                    height: 80%;
                    `

                    h1.innerHTML = `
                    ${pc.main.temp}C
                    `

                    h2.innerHTML = `
                    ${pc.weather[0].description}
                    `

                    h3.innerHTML = `
                    humidity:${pc.main.humidity}
                    `

                    h4.innerHTML = `
                    wind speed:${pc.wind.speed}
                    `

                }
            })
    }


}


btn.addEventListener(`click`, () => {

  let inp2 = inp.value;

  div[0].style = `
  height: 400px;
  width: 30%;
  border: 5px gray solid ;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  `


    cp(inp2)
})

inp.addEventListener("click", ()=>{
  div[0].style = `
  height: 200px;
  width: 30%;
  border: 5px gray solid ;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  `
})