class DrinksAPI{
    constructor(){
        this.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    }
    async getDrinks(){
        return await axios.get(this.baseURL);
    }
}
