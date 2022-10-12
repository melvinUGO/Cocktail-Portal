import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const Cocktails = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="p-5 md:grid grid-cols-4">
      {cocktails.map((item) => {
        const { id, type, image, name, glass } = item;
        return (
          <article
            key={id}
            className="w-80 my-10 bg-main shadow-2xl font-extralight "
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
              <p className="p-1  w-fit rounded-lg font-bold mb-1">
                Glass : {glass}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Cocktails;
