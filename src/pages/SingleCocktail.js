import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        console.log(data);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="p-5 max-w-7xl ">
        <Link
          to="/"
          className="bg-button text-buttonText hover:bg-transparent  p-1 md:p-2 m-2"
        >
          Back Home
        </Link>

        <article
          key={id}
          className="w-60 md:mx-auto md:w-80 md:text-lg pb-3 my-10 bg-main shadow-2xl text-xs"
        >
          <div className="img-container ">
            <img src={image} alt={name} />
          </div>
          <div className="info p-3">
            <h4 className="p-1  w-fit rounded-lg font-bold mb-1">
              Name : {name}
            </h4>

            <p className="p-1  w-fit rounded-lg font-bold mb-3">
              Glass : {glass}
            </p>
            <p className="p-1  w-fit rounded-lg font-bold mb-3">
              info : {info}
            </p>
            <p className="p-1  w-fit rounded-lg font-bold mb-3">
              category : {category}
            </p>
            <p className="p-1  w-fit rounded-lg font-bold mb-3">
              instructions : {instructions}
            </p>
            <span className="p-1  w-fit rounded-lg font-bold mb-3">
              ingredients :
            </span>
            {ingredients.map((item, index) => {
              return item ? (
                <span
                  className="p-1  w-fit rounded-lg font-bold mb-3"
                  key={index}
                >
                  {" "}
                  {item},
                </span>
              ) : null;
            })}
          </div>
        </article>
      </section>
    );
  }
};

export default SingleCocktail;
