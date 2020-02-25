import React,{useEffect,useState} from 'react';
import './App.css';
import Recipes from './Recipes';

function App() {

  const ID="a0d2d7a3"
  const KEY="93da4f2bc21291268fc69da86b704ea0"

  const [recipe,setRecipe]=useState([])
  const [search,setSearch]=useState("")
  const [querry,setQuerry]=useState("chicken")

  useEffect(()=>{
    getrecipe()
  },[querry])

  const getrecipe= async ()=>{
      const getdata= await fetch(`https://api.edamam.com/search?q=${querry}&app_id=${ID}&app_key=${KEY}`)
      const data=await getdata.json()
      setRecipe(data.hits)
      //console.log(data)
      console.log(data.hits)
  }
  
  const update=(e)=>{
    setSearch(e.target.value)
  }

  const getSearch=(e)=>{
    setQuerry(search)
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" name="search" placeholder="search recipe" className="search-bar"
          onChange={update}
          value={search}
        />
        <input type="submit" value="SUBMIT" name="search" className="search-button" />
      </form>
      <div className="recipes">
      {recipe.map(recipe=>(
        <Recipes 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredient={recipe.recipe.ingredients}  />
      ))}
      </div>

    </div>
  );
}

export default App;
