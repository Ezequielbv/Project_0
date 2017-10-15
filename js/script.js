
document.addEventListener("DOMContentLoaded",
  function (event) {

// FUNCIONES AL HACER CLICK:
// ** BREAKFAST **
function breakfastRecipe() {
  // this.textContent="Eat it!"; //Cambia el nombre del botón al pulsarlo
  let food = new Array(
    'Sandwitch', 
    'Scrambled eggs with tomatoes',
    'Yogurt with muesli',
    'Smoothie',
    'Porridge with milk');

  let randomArray = Math.floor(Math.random() * food.length);  
    //Código HTML a introducir
    let addBreak = 
      "<p>Breakfast:</p>" + food[randomArray];
    // ** fin código HTML introducido **
  document.getElementById("breakfast").innerHTML = addBreak;
  $("#breakfast").removeClass("hidden");
  $("#lunch").addClass("hidden");
  $("#dinner").addClass("hidden");
};
//Unobstrusive event binding
document.querySelector("#btnBreak").onclick = breakfastRecipe;

// ** LUNCH **
function lunchRecipe() {
  let food = new Array(
    'Rice with tunfish',
    'Salad',
    'Pasta bolognesa',
    'Risoto',
    'Chicken with broccoli');

  let randomArray = Math.floor(Math.random() * food.length);
    //Código HTML a introducir
    let addLunch = 
      "<p>Lunch:</p>" + food[randomArray];
    // ** fin código HTML introducido **
  document.getElementById("lunch").innerHTML = addLunch;
  $("#lunch").removeClass("hidden");
  $("#breakfast").addClass("hidden");
  $("#dinner").addClass("hidden");
};
//Unobstrusive event binding
document.querySelector("#btnLunch").onclick = lunchRecipe;

// ** DINNER **
function dinnerRecipe() {
  let food = new Array(
    'Potatoes Puree',
    'Salad',
    'Soft-boiled egg',
    'Risoto',
    'Pizza');

  let randomArray = Math.floor(Math.random() * food.length);
    //Código HTML a introducir  
    let addDinner = 
      "<p>Dinner:</p>" + food[randomArray]
    // ** fin código HTML introducido **
  document.getElementById("dinner").innerHTML = addDinner;
  $("#dinner").removeClass("hidden");
  $("#lunch").addClass("hidden");
  $("#breakfast").addClass("hidden");
};
//Unobstrusive event binding
document.querySelector("#btnDinner").onclick = dinnerRecipe;
  
}
);
