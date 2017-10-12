// FUNCIONES AL HACER CLICK:
function breakfastRecipe() {
  let food = new Array(
    'Sandwitch', 
    'Scrambled eggs with tomatoes',
    'Yogurt with muesli',
    'Smoothie',
    'Porridge with milk');

  let randomArray = Math.floor(Math.random() * food.length);  
    //Código HTML a introducir
    let htmlBreak = 
      "<em>Breakfast: </em><br>" + food[randomArray];
    // ** fin código HTML introducido **
  document.getElementById("breakfast").innerHTML = htmlBreak;
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
    //Código HTML a introducir
    let htmlLunch = 
      "<em>Lunch: </em><br>" + food[randomArray];
    // ** fin código HTML introducido **
  document.getElementById("lunch").innerHTML = htmlLunch;
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
    //Código HTML a introducir  
    let htmlDinner = 
      "<em>Dinner: </em><br>" + food[randomArray]
    // ** fin código HTML introducido **
  document.getElementById("dinner").innerHTML = htmlDinner;
  $("#dinner").removeClass("hidden");
  $("#lunch").addClass("hidden");
  $("#breakfast").addClass("hidden");
};
