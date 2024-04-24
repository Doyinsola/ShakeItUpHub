const drinksAPI = new DrinksAPI();
let drink = [];

async function getDrinks(){
    try {
        const response = await drinksAPI.getDrinks(this.baseURL);
    drink = response.data.drinks[0];
    console.log(drink);
    } catch (error) {
        console.log(error)
    }
}
getDrinks();

const drinksSection = document.querySelector('.drinks');
function displayDrink(){
    drinksSection.innerHTML="";

    const drinkName = document.createElement('h2');
    drinkName.classList.add('drinks__name');
    drinkName.innerText=drink.strDrink;
    drinksSection.append(drinkName);

    const drinkImg = document.createElement('img');
    drinkImg.classList.add('drinks__img');
    drinkImg.setAttribute('src',drink.strDrinkThumb);
    drinksSection.append(drinkImg);

    drinkImg.addEventListener('click',()=>{
        displayRecipe();
    });
}

const buttonEL = document.querySelector('.generator__button');
buttonEL.addEventListener("click",()=>{
    displayDrink();
    getDrinks();
});

function displayRecipe(){

    const drinkStatus = document.createElement('p');
    drinkStatus.classList.add('drinks__status');
    drinkStatus.innerText=`This drink is ${drink.
    strAlcoholic}`;
    drinksSection.append(drinkStatus);

    const drinkInstructions = document.createElement('p');
    drinkInstructions.classList.add('drinks__instr');
    drinkInstructions.innerText=`Serving Instructions: ${drink.strInstructions}`;
    drinksSection.append(drinkInstructions);

   const ingredients = _.pick(drink, "strIngredient1","strIngredient2","strIngredient3","strIngredient4","strIngredient5","strIngredient6","strIngredient7","strIngredient8","strIngredient9","strIngredient10","strIngredient11","strIngredient12","strIngredient13","strIngredient14","strIngredient15");
  
    const ingredientList=Object.values(ingredients)
    const newIngredients=ingredientList.filter((ingredient)=>(ingredient!==null));
   console.log(newIngredients);

   const measures = _.pick(drink, "strMeasure1","strMeasure2","strMeasure3","strMeasure4","strMeasure5","strMeasure6","strMeasure7","strMeasure8","strMeasure9","strMeasure10","strMeasure11","strMeasure12","strMeasure13","strMeasure14","strMeasure15");
  
   const measureList=Object.values(measures)
   const newMeasures=measureList.filter((measure)=>(measure!==null));
  console.log(newMeasures);


}
