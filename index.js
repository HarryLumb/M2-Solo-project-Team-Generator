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

const addMemberEnter = () => {
  document.querySelector("input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let li = document.createElement("li");
      let inputValue = input.value;
      li.innerHTML = inputValue;
      let list = document.querySelector(".waiting-list");
      list.append(li);
      input.value = "";
    }
  });
};

addMemberEnter();

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
    let teamNames = "Team " + total;

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
  const assignButton = document.querySelector(".assign-member");
  assignButton.addEventListener("click", () => {
    const ul = document.querySelector(".waiting-list");
    const newName = ul.lastElementChild
    newName.classList.add('new-names')
    const cards = document.querySelectorAll(".team-cards");
    // for(let i=0; i<cards.length;i++){
    //     cards[i].appendChild(newName)
    for (let i = 0; i < Math.ceil(Math.random() * cards.length); i++) {
      console.log(cards[i]);
      cards[i].appendChild(newName);
    }
    console.log(Math.random() * cards.length);
  });
};
assignMember();

const reset = () => {
  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
};

reset();
