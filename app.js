function searchFoods() {
    const input = document.getElementById("input-field").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((res) => res.json())
      .then((data) => displayFoods(data.meals))
      .catch((error) => {
        errorCheck();
      });
  }
  
  //checking error
  const errorCheck = () => {
    const foods = document.getElementById("errorShow");
    foods.innerHTML = `
        <h1 class="text-center">Sorry, incorrect food name!</h1>
    `;
  };
  
  //handling search button
  const displayFoods = (meals) => {
    const showFoods = document.getElementById("foodsDisplay");
    document.getElementById("singleFoodIngredientShow").innerHTML = "";
    showFoods.innerHTML = "";
    document.getElementById("errorShow").innerHTML = "";
    meals.forEach((meal) => {
      const singleFood = document.createElement("div");
      const content = `
          <div class="singleFoodStyle" onclick="ingredientDetails('${meal.idMeal}')">
            <div>
              <img class="fixImage" src = "${meal.strMealThumb}">
            </div>
            <div class="text-center">
              <h5>${meal.strMeal}</h5>
            </div>
          </div>
      `;
      singleFood.innerHTML = content;
      showFoods.appendChild(singleFood);
    });
  };
  
  const ingredientDetails = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => singleFoodIngredients(data.meals[0]));
  };
  
  const singleFoodIngredients = (food) => {
    const singleFood = document.getElementById("singleFoodIngredientShow");
    singleFood.innerHTML = "";
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <div class="ingredientDetailsDiv">
        <div>
          <img class="m-auto px-3 w-75" src="${food.strMealThumb}">
        </div>
        <div class="ms-3">
          <h3>${food.strMeal}</h3>
          <h5>Ingredients</h5>
        </div>
        <div class="ms-3">
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure1} ${food.strIngredient1}</p>
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure2} ${food.strIngredient2}</p>
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure3} ${food.strIngredient3}</p>
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure4} ${food.strIngredient4}</p>
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure5} ${food.strIngredient5}</p>
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure6} ${food.strIngredient6}</p>
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure7} ${food.strIngredient7}</p>
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure8} ${food.strIngredient8}</p>
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure9} ${food.strIngredient9}</p>
          <p><i class="fas fa-check-square" style="color:#F06C4E;"></i> ${food.strMeasure10} ${food.strIngredient10}</p>
        </div>
      </div>
    `;
    singleFood.appendChild(newDiv);
  };