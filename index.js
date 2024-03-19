const COHORT = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
  events: [],
};

const eventsList = document.querySelector("#eventsList");

const getEvents = async() => {
  try{
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json)
    state.events = json.data
    console.log(json.data)
  } catch(error) {
    console.log(error);
  };
};

const renderEvents = () => {
  const eventsLiElements = state.events.map((event) => {
    const li = document.createElement('li');
    li.innerHTML = `${event.name} - ${event.description} \nDate: ${event.date}\nLocation: ${event.location};`;
      return li;
  });
  eventsList.replaceChildren(...eventsLiElements);
}

const render = async() => {
  await getEvents();
  renderEvents();
}
render();