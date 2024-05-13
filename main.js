// Function to fetch data from the Star Wars API
async function fetchData(endpoint) {
    try {
        const response = await axios.get(`https://swapi.dev/api/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to display fetched data in Bootstrap cards
function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; // Clear previous data

    data.results.forEach(item => {
        const card = `
            <div class="col-md-4">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${item.name || item.title}</h5>
                        <p class="card-text">${item.birth_year || item.climate}</p>
                    </div>
                </div>
            </div>
        `;
        dataContainer.innerHTML += card;
    });
}

// Event listeners for each button to fetch respective data
document.getElementById('peopleBtn').addEventListener('click', async () => {
    const peopleData = await fetchData('people');
    displayData(peopleData);
});

document.getElementById('planetsBtn').addEventListener('click', async () => {
    const planetsData = await fetchData('planets');
    displayData(planetsData);
});

document.getElementById('filmsBtn').addEventListener('click', async () => {
    const filmsData = await fetchData('films');
    displayData(filmsData);
});
