//FUNDAMENTALS PART 1

//CODING CHALLENGGE 1

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

function calcBMI(mass, height) {
  return mass / height ** 2;
}

const markBMI = calcBMI(markWeight, markHeight);
const johnBMI = calcBMI(johnWeight, johnHeight);
const higherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, higherBMI);

//CODING CHALLENGE 2

if (higherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`);
}

//CODING CHALLENGE 3

const scoreDolphins = [96, 108, 89];
const scoreKoalas = [88, 91, 110];

function calcAverage(score) {
  return (
    score.reduce((acc, curr) => {
      return acc + curr;
    }) / score.length
  );
}

const dolphinsAverage = calcAverage(scoreDolphins);
const koalasAverage = calcAverage(scoreKoalas);

console.log(dolphinsAverage, koalasAverage);

const minScore = 100;

if (dolphinsAverage >= minScore) {
  console.log("Dolphins are the winners.");
} else if (koalasAverage >= minScore) {
  console.log("Koalas are the winners.");
} else {
  console.log("There's no winner.");
}

//CODING CHALLENGE 4

const bills = [275, 40, 430];

const calcTip = bills.map((bill) => {
  if (bill >= 50 && bill <= 300) {
    const tipFifteen = bill * 0.15;
    return `The bill was ${bill}, the tip was ${tipFifteen} and the total was ${
      bill + tipFifteen
    }.`;
  } else if (bill > 300) {
    const tipTwenty = bill * 0.2;
    return `The bill was ${bill}, the tip was ${tipTwenty} and the total was ${
      bill + tipTwenty
    }.`;
  } else {
    return `You don't have to pay tips. The total is ${bill}.`;
  }
});

console.log(calcTip);

//FUNDAMENTALS PART 2

//CODING CHALLENGE 1

const dolphinScore = [44, 23, 71];
const koalasScore = [65, 54, 49];

function average(score) {
  return (
    score.reduce((acc, curr) => {
      return acc + curr;
    }) / score.length
  );
}

const averageDolphins = average(dolphinScore);
console.log(averageDolphins);

const averageKoalas = average(koalasScore);
console.log(averageKoalas);

function checkWinner(avrDolphins, avrKoalas) {
  return avrDolphins > avrKoalas * 2
    ? `Dolphins win ${avrDolphins} vs. ${avrKoalas}.`
    : `Koalas win ${avrKoalas} vs. ${avrDolphins}.`;
}

console.log(checkWinner(averageDolphins, averageKoalas));

//CODING CHALLENGE 3

const markObj = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnObj = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(
  markObj.calcBMI() > johnObj.calcBMI()
    ? `${markObj.fullName}'s BMI (${markObj.calcBMI()}) is higher than ${
        johnObj.fullName
      }'s (${johnObj.calcBMI()})`
    : ""
);

//CODING CHALLENGE 4

const billsArr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];

const calcTips = billsArr.map((bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill + bill * 0.15;
  } else if (bill > 300) {
    return bill + bill * 0.2;
  } else {
    return bill;
  }
});

totals.push(calcTips);
console.log(totals);
console.log(average(billsArr));

//DEVELOPER SKILLS AND EDITOR SET UP

//CODING CHALLENGE 1

const temp = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

for (let i = 0; i < temp2.length; i++) {
  console.log(`${temp2[i]} C in ${i + 1} days`);
}

//DATA STRUCTURES, MODERN OPERATORS AND STRINGS

//CODING CHALLENGE 1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
console.log(players1);

const players2 = game.players[1];
console.log(players2);

const gk = players1[0];
console.log(gk);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const team1 = game.odds.team1;
console.log(team1);

const draw = game.odds.x;
console.log(draw);

const team2 = game.odds.team2;
console.log(team2);

function printGoals(...players) {
  return `${players}. Goals: ${players.length}.`;
}

console.log(printGoals("Davies", "Muller", "Lewandowski", "Kimmich"));
console.log(printGoals(...game.scored));

if (game.odds.team1 < game.odds.team2) {
  console.log(`${game.team1} is more likely to win.`);
} else {
  console.log(`${game.team2} is more likely to win.`);
}

//CODING CHALLENGE 2

for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

console.log((game.odds.team1 + game.odds.x + game.odds.team2) / 3);

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}.
Odd of draw: ${game.odds.x}.
Odd of victory ${game.team2}: ${game.odds.team2}.`);

//WORKING WITH ARRAYS

//CODING CHALLENGE 1

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  const copyJulia = [...dogsJulia];
  copyJulia.shift();
  copyJulia.pop();
  copyJulia.pop();
  const allDogs = [...copyJulia, ...dogsKate];

  console.log(allDogs);
}

checkDogs(julia, kate);

//AJAX CALL

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

/*function getFlag() {
  const country = document.querySelector(".country").value;

  if (country === "") {
    alert("You must type a country name.");
  } else {
    container.innerHTML = "";

    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      const html = `<h1 class = "name">${data.name}</h1>
    <img src = "${data.flag}" class = "img"/>`;

      container.insertAdjacentHTML("beforeend", html);
      country.value = "";
    });
  }
}

btn.addEventListener("click", getFlag);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getFlag();
  }
});*/

//THE FETCH API

async function getFlag() {
  const country = document.querySelector(".country").value;

  if (country === "") {
    alert("You must type a country name.");
  } else {
    container.innerHTML = "";

    const response = await fetch(
      `https://restcountries.com/v2/name/${country}`
    );

    const data = await response.json();

    const html = `<h1 class = "name">${data[0].name}</h1>
    <img src = "${data[0].flag}" class = "img"/>`;

    container.insertAdjacentHTML("beforeend", html);
    country.value = "";
  }
}

btn.addEventListener("click", getFlag);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getFlag();
  }
});
