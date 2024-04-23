async function testAPI(){
    try {
        const getAPI = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        console.log(getAPI.data)
    } catch (error) {
        console.log(error)
    }
}
testAPI()