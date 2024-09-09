const containerEl = document.getElementById("container");
const cardsEl = Array.from(document.getElementsByClassName("card"));
const startScreenEl = document.getElementById('start-screen');
const restartScreenEl = document.getElementById('restart-screen');
const startGameBtn = document.getElementById('start-game');
const restartGameBtn = document.getElementById('restart-game');

let newCards = [];
let selection = [];

function startGame() {

  startScreenEl.style.display = 'none';
  restartScreenEl.style.display = 'none';
  hideCards(newCards)
  newCards.forEach(card => {
    card.removeAttribute('style')
    card.removeEventListener('click', handleCardClick)
  })

  let cards = cardsEl.length ? cardsEl : newCards;
  newCards = [];

  for(let i = 0; i < 12; i++) {
    let randomIndex = Math.floor(Math.random() * cards.length);
    let removedEl = cards.splice(randomIndex, 1)[0];
    newCards.push(removedEl)
  }
  
  newCards.forEach(card => {
    containerEl.appendChild(card);  
    card.addEventListener('click', handleCardClick);
  })
  
   
  setTimeout(() => {
    showCards(newCards)}, 1000);
  setTimeout(() => {
    newCards.forEach(card => {
      card.disabled = false;
    })
    hideCards(newCards)}, 5000);
}


function handleCardClick(event) {
  
  switch (event.target.id) {
    case "1":
    case "2":
      event.target.classList.toggle("blue");
      event.target.setAttribute("disabled", true)
      check("blue");
      break;
    case "3":
    case "4":
      event.target.classList.toggle("red");        
      event.target.setAttribute("disabled", true)
      check("red");
      break;
    case "5":
    case "6":
      event.target.classList.toggle("yellow");
      event.target.setAttribute("disabled", true)
      check("yellow");
      break;
    case "7":
    case "8":
      event.target.classList.toggle("green");
      event.target.setAttribute("disabled", true)
      check("green");
      break;
    case "9":
    case "10":
      event.target.classList.toggle("pink");
      event.target.setAttribute("disabled", true)
      check("pink");
      break;
    case "11":
    case "12":
      event.target.classList.toggle("orangered");
      event.target.setAttribute("disabled", true)
      check("orangered");
      break;
  }            
}


function check(code) {
  selection.push(code)
  if(selection.length === 2){
    newCards.forEach(card => {
      card.setAttribute("disabled", true)
    })
    if(selection[0] === selection[1]) {
      newCards.forEach(card => {
        if(Array.from(card.classList).includes(code)) {
          setTimeout(() => {
            card.style.opacity = "0";
            card.style.cursor = 'auto';
            card.setAttribute("disabled", true);
            checkWin();
          }, 1000)          
          newCards.forEach(card => {
            if(card.style.opacity !== "0") card.disabled = false
          })
        }        
      });
      selection = [];
    } else {
      setTimeout(() => {                
        newCards.forEach(card => {
          if(card.style.opacity !== "0") card.disabled = false
        })
        hideCards(newCards)
      }, 1000);
      selection = [];
    }
  }
}

function showCards(arr){
  arr.forEach(card => {
    switch (card.id) {
      case "1":
      case "2":
        card.classList.add("blue");
        break;
      case "3":
      case "4":
        card.classList.add("red");
        break;
      case "5":
      case "6":
        card.classList.add("yellow");
        break;
      case "7":
      case "8":
        card.classList.add("green");
        break;
      case "9":
      case "10":
        card.classList.add("pink");
        break;
      case "11":
      case "12":
        card.classList.add("orangered");
        break;
    }
  })
}

function hideCards(arr){
  arr.forEach(card => {
    card.classList.remove("blue", "red", "yellow", "green", "pink", "orangered");
  })
}

function checkWin() {
  if(newCards.every(card => card.style.opacity === "0")) {
    restartScreenEl.style.display = 'flex';
  } 
}

startGameBtn.addEventListener('click', startGame)
restartGameBtn.addEventListener('click', startGame)