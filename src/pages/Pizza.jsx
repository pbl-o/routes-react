import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza.jsx";
import apiFetcher from "../utils/apiFetcher.js";

const Pizza = () => {
  const [apiInfoPizza, setApiInfoPizza] = useState([]);

  useEffect(() => {
    apiFetcher(
      "http://localhost:5000/api/pizzas/p001",
      "Single pizza",
      setApiInfoPizza
    );
  }, []);

  return (
    <>
      <div className="container-fluid col-sm-6 col-lg-3 mx-auto m-3">
        <CardPizza
          name={apiInfoPizza.name}
          img={apiInfoPizza.img}
          price={apiInfoPizza.price}
          ingredients={apiInfoPizza.ingredients?.map((item, index) => (
            <li className="list-group-item" key={index}>
              🍕{item}
            </li>
          ))}
          description={apiInfoPizza.desc}
        />
      </div>
    </>
  );
};

export default Pizza;
