// FUNCIONES AL HACER CLICK:
function breakfastRecipe() {
  let food = new Array(
    'Sandwitch', 
    'Scrambled eggs with tomatoes',
    'Yogurt with muesli',
    'Smoothie',
    'Porridge with milk');

  let randomArray = Math.floor(Math.random() * food.length);
  document.getElementById("breakfast").textContent = "Breakfast: " + food[randomArray];
  $("#breakfast").removeClass("hidden");
  $("#lunch").addClass("hidden");
  $("#dinner").addClass("hidden");
};

function lunchRecipe() {
  let food = new Array(
    'Rice with tunfish',
    'Salad',
    'Pasta bolognesa',
    'Risoto',
    'Chicken with broccoli');

  let randomArray = Math.floor(Math.random() * food.length);
  document.getElementById("lunch").textContent = "Lunch: " + food[randomArray];
  $("#lunch").removeClass("hidden");
  $("#breakfast").addClass("hidden");
  $("#dinner").addClass("hidden");
};

function dinnerRecipe() {
  let food = new Array(
    'Potatoes Puree',
    'Salad',
    'Soft-boiled egg',
    'Risoto',
    'Pizza');

  let randomArray = Math.floor(Math.random() * food.length);
  document.getElementById("dinner").textContent = "Dinner: " + food[randomArray];
  $("#dinner").removeClass("hidden");
  $("#lunch").addClass("hidden");
  $("#breakfast").addClass("hidden");
};


