var searchInput = document.getElementById("search-input");
var recipeList = document.getElementById("recipe-list");

searchInput.addEventListener("keyup", function() {
  var searchTerm = searchInput.value.toLowerCase();
  var recipes = recipeList.getElementsByTagName("li");

  for (var i = 0; i < recipes.length; i++) {
    var recipe = recipes[i];
    var recipeName = recipe.getElementsByTagName("h2")[0].textContent.toLowerCase();

    if (recipeName.indexOf(searchTerm) !== -1) {
      recipe.style.display = "block";
    } else {
      recipe.style.display = "none";
    }
  }
});
