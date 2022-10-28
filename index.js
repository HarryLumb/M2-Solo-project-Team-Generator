const input = document.querySelector("input");
const nameButton = document.getElementById("add-member");
const teamAmount = document.querySelector(".team-amount");
let teamMinus = document.querySelector(".team-minus");
let teamPlus = document.querySelector(".team-plus");
let total = 0;

const addMember = () => {
  nameButton.addEventListener("click", () => {
    let li = document.createElement("li");
    let inputValue = input.value;
    li.innerHTML = inputValue;
    let list = document.querySelector(".waiting-list");
    list.append(li);
    input.value = "";
  });
};
addMember();
console.log(teamAmount);

const addTeam = () => {
  teamMinus.addEventListener("click", () => {
    total--;
    teamAmount.innerHTML = total;
  });
  teamPlus.addEventListener("click", () => {
    total++;
    teamAmount.innerHTML = total;
  });
};

addTeam();

const createTeams = () => {
  teamPlus.addEventListener("click", () => {
    let newDiv = document.createElement("div");
    let cardContainer = document.querySelector(".card-container");
    let hr = document.createElement("hr");

    newDiv.classList.add("team-cards");
    let teamNames = "Team" + total;

    newDiv.innerHTML = teamNames;
    newDiv.appendChild(hr);
    cardContainer.appendChild(newDiv);
  });
};

createTeams();

const removeTeams = () => {
  teamMinus.addEventListener("click", () => {
    if (total == 0) {
      teamMinus.disabled = true;
    } else {
      teamMinus.disabled = false;
    }

    let cardContainer = document.querySelector(".card-container");

    cardContainer.removeChild(cardContainer.lastElementChild);
  });
};

removeTeams();

const removeName = () => {
  const remove = document.querySelector(".remove");
  const ul = document.querySelector(".waiting-list");
  remove.addEventListener("click", () => {
    ul.removeChild(ul.lastElementChild);
  });
};
removeName();

const assignMember = () => {
    const assignButton = document.querySelector('.assign-member')
    assignButton.addEventListener('click', () => {
  const ul = document.querySelector(".waiting-list");
  const newName = ul.lastElementChild;
  const newNameInfo = newName.innerHTML
 const cards = document.querySelector('.team-cards')
 cards.appendChild(newNameInfo)

  
 
})
};
assignMember();
