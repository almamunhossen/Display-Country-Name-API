fetch("https://restcountries.com/v2/all")
  .then((res) => res.json())
  .then((data) => displayCountryes(data));

const displayCountryes = (countryes) => {
  const countriesDiv = document.getElementById("countries");

  countryes.forEach((country) => {
    const countryDiv = document.createElement("div");
    const countryInfo = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <img src="${country.flag}">
        <p>Languag: ${country.languages[0].nativeName}</p><br>
        <button class="btn" onClick="displayCountryesDetails('${country.name}')">Country Descripton</button>
        
      `;

    countryDiv.innerHTML = countryInfo;
    countriesDiv.appendChild(countryDiv);
  });
};

const displayCountryesDetails = (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderCountryInfo(data[0]));
};

const renderCountryInfo = (country) => {
  console.log(country);
  const countryInfo = document.getElementById("county-infomaton");
  countryInfo.innerHTML = `
   <h3>${country.name}</h3>
   <img src="${country.flag}">
   <p>Population: ${country.population}</p>
   <p>Area: ${country.area}</p>
   <p>Region: ${country.region}</p>
   <p>Calling Codes: ${country.callingCodes}</p>
   <p>Borders: ${country.borders}</p>
   <p>Subregion: ${country.subregion}</p>
   <p>Timezones: ${country.timezones[0]}</p>
   <p>Trans Lations: ${country.translations.br}</p>
  `;
  countryInfo.style.display = "block";
};

//footer Year Auto update
let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;
