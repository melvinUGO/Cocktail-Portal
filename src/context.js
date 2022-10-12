import React, { useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchField, setSearchField] = useState("a");

  const fetchCocktails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchField}`);
      const data = await response.json();
      setLoading(false);
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
            item;
          return {
            id: idDrink,
            type: strAlcoholic,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
          };
        });
        console.log(newCocktails);
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCocktails();
  }, []);
  return (
    <AppContext.Provider value={{ loading, setSearchField, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
