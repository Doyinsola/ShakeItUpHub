const drinksAPI = new DrinksAPI();
let drink = [];

const drinksSection = document.querySelector('.drinks');
function displayDrink(){
    drinksSection.innerHTML="";
    const drinkImg = document.createElement('img');
    drinkImg.classList.add('drinks__img');
    drinkImg.setAttribute('src',drink[0].strDrinkThumb);
    drinksSection.append(drinkImg);
}

async function getDrinks(){
    try {
        const response = await drinksAPI.getDrinks(this.baseURL);
    drink = response.data.drinks;
    console.log(drink);
    } catch (error) {
        console.log(error)
    }
}
getDrinks();

const buttonEL = document.querySelector('.generate__button');

buttonEL.addEventListener("click",async(event)=>{
    displayDrink();
});

