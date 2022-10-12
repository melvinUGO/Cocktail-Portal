import React, { useRef } from "react";
import Cocktails from "../components/Cocktails";

const Home = () => {
  const searchRef = useRef(null);
  return (
    <>
      <section className="text-center  p-3">
        <h4 className="text-2xl text-headline font-bold p-5">
          Search for Cocktail
        </h4>
        <input
          type="text"
          className=" border-2 border-highlight rounded-lg p-1"
          ref={searchRef}
        />
      </section>
      <Cocktails />
    </>
  );
};

export default Home;
