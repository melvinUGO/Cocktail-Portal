import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const Cocktails = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h3 className="mt-10 p-5 text-paragraph text-2xl text-center max-w-screen-2xl">
        <em>No Cocktails matched your search</em>
      </h3>
    );
  }
  return (
    <section className="p-5 md:grid grid-cols-3 gap-10 max-w-screen-2xl">
      {cocktails.map((item) => {
        const { id, type, image, name, glass } = item;
        return (
          <article
            key={id}
            className="w-70 pb-3 my-10 bg-main shadow-2xl font-extralight "
          >
            <div className="img-container ">
              <img src={image} alt={name} />
            </div>
            <div className="info p-3">
              <h4 className="p-1  w-fit rounded-lg font-bold mb-1">
                Name : {name}
              </h4>
              <p className="p-1  w-fit rounded-lg font-bold mb-1">
                Type : {type}
              </p>
              <p className="p-1  w-fit rounded-lg font-bold mb-3">
                Glass : {glass}
              </p>
              <Link
                to={`/singleCocktail/${id}`}
                className="bg-button text-buttonText rounded-xl p-1"
              >
                show more?
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Cocktails;
