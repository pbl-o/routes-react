import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import { useEffect, useState } from "react";
import apiFetcher from "../utils/apiFetcher.js";

const Home = () => {
  const [apiAllPizzasInfo, setApiAllPizzasInfo] = useState([]);

  useEffect(() => {
    apiFetcher(
      "http://localhost:5000/api/pizzas",
      "All pizzas",
      setApiAllPizzasInfo
    );
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-3 my-4">
        {apiAllPizzasInfo.map((item, index) => {
          return (
            <CardPizza
              key={index}
              name={item.name}
              description={item.desc}
              price={item.price}
              img={item.img}
              ingredients={item.ingredients.map((ing) => {
                return (
                  <li className="list-group-item" key={ing}>
                    🍕{ing}
                  </li>
                );
              })}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
