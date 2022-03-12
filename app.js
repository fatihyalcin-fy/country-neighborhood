// const data = fetch('https://restcountries.com/v3.1/name/turkey').then((response) => {

// console.log(response);
// return response.json();
// })

// .then((data)=>{
//     console.log(data);
//     console.log(data[0].capital, data[0].name.common);

// });

let globalData;
const getCountry = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`) 
    const data = await response.json();
    
    console.log(data);
    console.log(data[0].capital, data[0].name.common);
}

getCountry('Canada');