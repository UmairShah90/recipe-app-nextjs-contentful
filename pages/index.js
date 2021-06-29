import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  })

                    // get items from contentful
  const res = await client.getEntries({
    //content type id
    content_type: 'nextJsRecipeApp'
  })

  return {
    props: {recipes: res.items},
    revalidate: 1
    
  }
}



export default function Recipes({recipes}) {
  console.log(recipes)
  return (
    
    <div className="recipe-list">
      {
      recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
  ))
      }
 
      {/* styled Component css */}
      <style jsx>{`
      .recipe-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
       grid-gap: 20px 60px
      }
      `}

      </style>
    </div>
  )
}