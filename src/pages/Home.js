import React, { useRef } from "react";
import Cocktails from "../components/Cocktails";
import { useGlobalContext } from "../context";

const Home = () => {
  const { setSearchField } = useGlobalContext();
  const searchRef = useRef("");

  const newSearch = searchRef.current.value;
  const searchCocktails = () => {
    setSearchField(newSearch);
  };

  React.useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <>
      <section className="text-center mt-10 max-w-screen-2xl md:mt-10  p-3">
        <h4 className="text-2xl text-headline font-bold p-5">
          Search for Cocktail
        </h4>
        <input
          type="text"
          ref={searchRef}
          className=" border-2 w-70 border-highlight rounded-lg p-1"
          onChange={searchCocktails}
        />
      </section>
      <Cocktails />
    </>
  );
};

export default Home;
