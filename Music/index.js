const COHORT = '2310-FSA-ET-WEB-PT-SF-B';
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;
console.log('API URL::',API_URL);
const state = {
  artists : []
};

const artistList = document.querySelector("#artists");
const addArtistForm = document.querySelector("#addArtist");
addArtistForm.addEventListener("submit", addArtist);

async function render() {
  await getArtists();
  renderArtists();
}
render();

async function getArtists() {
 try{
  const response = await fetch(API_URL);
  const json = await response.json();
  state.artists = json.data;
  console.log(state.artists);

 }catch(error) {
  console.log(error);
 }
}


function renderArtists() {
  if(state.artists.length === 0) {
    artistList.innerHTML = '<h5>No Artists To SHow</h5>';
    return;
  } 
}

/**
 * Ask the API to create a new artist based on form data
 * @param {Event} event
 */
function addArtist(event) {
  event.preventDefault();

  // TODO
}