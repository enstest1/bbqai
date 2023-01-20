// Get the search input element and the recipe list element
var searchInput = document.getElementById("search-input");
var recipeList = document.getElementsByClassName("recipe-list");

// Add an event listener to the search input element
searchInput.addEventListener("keyup", function() {
  // Get the search term entered by the user
  var searchTerm = searchInput.value.toLowerCase();

  // Loop through each recipe list
  for (var i = 0; i < recipeList.length; i++) {
    // Get all the recipe items in the current recipe list
    var recipes = recipeList[i].getElementsByTagName("li");

    // Loop through each recipe item
    for (var j = 0; j < recipes.length; j++) {
      var recipe = recipes[j];
      var recipeName = recipe.getElementsByTagName("h2")[0].textContent.toLowerCase();
      var recipeIngredients = recipe.getElementsByClassName("ingredients")[0].textContent.toLowerCase();
      var recipeInstructions = recipe.getElementsByClassName("instructions")[0].textContent.toLowerCase();
  
      // Check if the search term is found in the recipe name, ingredients or instructions
      if (recipeName.indexOf(searchTerm) !== -1 || recipeIngredients.indexOf(searchTerm)

