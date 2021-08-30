
const init = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "9af9728b71mshea72a27894254dbp1caa13jsn7da211497896",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
    }
}

const fetcher = (url) => {
   return fetch(`https://the-cocktail-db.p.rapidapi.com/${url}`, init)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                return "Something went wrong!"
            }

        }).then((myJson) => {
        const { drinks } = myJson
           const result = []
        for (let key in drinks) {
            let item = drinks[key]
            result.push({
                id: item.idDrink,
                name: item.strDrink,
                category: item.strCategory,
                instruction: item.strInstructions,
                image: item.strDrinkThumb
            })}
        return result
    })

        .catch(err => {
            console.error(err);
        });
}

export const getRandomCocktails = () => {
    return fetcher("randomselection.php")

}

export const searchCocktails = (searchFor) => {
    return fetcher(`search.php?s=${searchFor}`)
}
