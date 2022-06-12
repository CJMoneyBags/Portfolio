let url = 'https://swapi.dev/api/starships';
let prevUrl = '';
let nextUrl = '';

rendData(url);

function rendData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderCards(data);
    });
}

function renderCards(data) {
  console.log(data);
  const cards = document.getElementById('starWarsStuff');
  data.results.forEach((ship) => {
    let card = `<div>Name: ${ship.name}<br> Model: ${ship.model}<br> Manufacturer: ${ship.manufacturer}<br> Cost in Credits: ${ship.cost_in_credits}<br> Length: ${ship.length}<br> Max Atmosphering Speed: ${ship.max_atmosphering_speed}<br></div>`;
    cards.innerHTML += card;
  });

  prevUrl = data.previous;
  nextUrl = data.next;
}

let prevBtn = document.getElementById('prevBtn');
prevBtn.addEventListener('click', () => (url = prevUrl));

let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', () => (url = nextUrl));

// "name": "Death Star",
//     "model": "DS-1 Orbital Battle Station",
//     "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
//     "cost_in_credits": "1000000000000",
//     "length": "120000",
//     "max_atmosphering_speed": "n/a",
//     "crew": "342,953",
//     "passengers": "843,342",
//     "cargo_capacity": "1000000000000",
//     "consumables": "3 years",
//     "hyperdrive_rating": "4.0",
//     "MGLT": "10",
//     "starship_class": "Deep Space Mobile Battlestation",
//     "pilots": [],
//     "films": [
//         "https://swapi.dev/api/films/1/"
//     ],
//     "created": "2014-12-10T16:36:50.509000Z",
//     "edited": "2014-12-20T21:26:24.783000Z",
//     "url": "https://swapi.dev/api/starships/9/"
