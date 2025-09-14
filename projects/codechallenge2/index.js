const baseURL =
"https://localhost:3000/characters";


cosnt animalBar =
document.getElementById("animal-bar");
const animalImage =
document.getElementById("animal-image");
const animalName =
document.getElementById("animal-name");
const voteCount =
document.getElementById("vote-coutn");
const votesForm =
document.getElementById("votes-form");
const votesInput =
document.getElementById("votes");
const restBtn =
document.getElementById("rest-btn");

let currentAnimal;

fetch(baseURL)
.then(res => res.json())
.then(data => {
    data.forEach(animal =>
        renderAnimalBar(animal));
        showAnimal(data[0]); // show first by default
    });
    function renderAnimalBar(animal)) {
        const img = document.createElement("img")
img.scr =animal.image;
img.addEventListener("click", () =>
    showAnimal(animal));
animalBar.appendchild(img);
    }
    function showAnimal(animal) {
        currentAnimal = animal;
        animalImage.scr =animal.image;
        animalName.textContent = animal.name;
        voteCount.textContent = animal.votes;
    }
    votesForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newVotes = parseInt(votesInput.value);
        if (!isNaN(newVotes)) {
            voteCount.textContent =
            currentAnimal.votes;
                   updateVotes(curr);
        }
        votesInput.value = "" ;
    });
    restBtn.addEventListener("click",() => {
        currentAnimal.votes = 0;
        voteCount.textContent = 0;
        updateVotes(currentAnimal);
    });
    function updateVotes(animal) {
      fetch(`${baseURL}/${animal.id} `, {
    method:"PATCH",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({ votes:
        animal.votes })
    });
    }