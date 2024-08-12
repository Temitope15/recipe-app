import  {useState, useEffect} from "react"
import Recipe from "./Recipe"
import './App.css'

function App() {
  const APP_ID = "db8e1a82"
  const APP_KEY = "57a1ec3456eebb20c976d59e2e468958"

  const [recipes, setRecipes] = useState([]); // the recipes are stored in an array
  const [search, setSearch] = useState(""); // by default the search query is nothing
  const [query, setQuery] = useState("Rice"); // our default query is rice


  // use effect hook here will fetch food recipes from the api when query state changes, it sets the recived recipes in the recipes array

  useEffect(()=>{
    const getRecipes = async () => {
      try {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        if(!response.ok) {
          throw new Error('failed to fetch recipes')
        }

        const data = await response.json()

      if(data.hits){
        setRecipes(data.hits)
      } else{
        setRecipes([])
      }
      
      console.log(data.hits)
      } catch(error) {
        console.error(error.message)
        setRecipes([])
      }
      
      
    }
    getRecipes()
  }, [query])
// update search updates the search state when the user enters a value
  const updateSearch = (e) =>{
    setSearch(e.target.value)
  }
// getsearch is triggered when the form is submitted, it sets the query stae to the search value and formats the search state to default
  const getSearch = (e) =>{
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }


  return (
    <>
     <section className="">
      <form onSubmit={getSearch} className="flex items-center justify-center gap-2">
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Input food"
          className="p-3 bg-white rounded-lg text-black"
        />
        <button type="submit" className="bg-[#7fff00]">
          Search
        </button>
      </form>

      {/* this section will iterate through the recipes array and display the recipe's data */}
      <div className="bg-white text-black">
      <p className="m-3 h-1/3 p-5">Text goes here</p>
        {recipes.map((recipe) =>(
          <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              cuisine={recipe.recipe.cuisineType}
              dish={recipe.recipe.dishType}
            />
        ))}
      </div>
     </section>
    </>
  )
}

export default App
