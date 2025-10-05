import Card from "react-bootstrap/Card";
import MyButton from "../components/Button.jsx";
import conversor from "../utils/conversor.js";
import { pizzaCart } from "../utils/pizzas.js";
import { useState } from "react";

const Cart = () => {
  // set Array
  const [pizzasInCart, setPizzasInCart] = useState(pizzaCart);
  //set Total as a sum of prices time pizza counts
  const [total, setTotal] = useState(
    pizzaCart.reduce((sum, item) => sum + item.price * item.count, 0)
  );

  //Re-render of pizzas to calculate its total
  const calcularPizzas = (cart) => {
    return cart.reduce((sum, item) => sum + item.price * item.count, 0);
  };

  //if button + is clicked...
  const handlePlus = (idPizzas) => {
    //if pizza instance id match with the map within handle instance (add 1)
    const updatedPizzaAdd = pizzasInCart.map((pizza) =>
      pizza.id === idPizzas ? { ...pizza, count: pizza.count + 1 } : pizza
    );

    //set filtered list as the current one
    setPizzasInCart(updatedPizzaAdd);
    //recalculate with the new list
    setTotal(calcularPizzas(updatedPizzaAdd));
  };

  //if button - is clicked...
  const handleLess = (idPizzas) => {
    const updatedPizzaSus = pizzasInCart
      .map((pizza) =>
        pizza.id === idPizzas ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((item) => item.count > 0);
    //filter to exclude instances with count 0 from rendering

    setPizzasInCart(updatedPizzaSus);
    setTotal(calcularPizzas(updatedPizzaSus));
  };

  return (
    <>
      <div className="container-fluid p-2">
        <Card className="row g-5 m-5 p-5 ">
          {pizzasInCart.map((pizza) => {
            return (
              <div
                className="col d-flex justify-content-center align-items-center gap-5 px-5"
                key={pizza.id}
              >
                <img
                  style={{ width: "10%", borderRadius: "5px" }}
                  src={pizza.img}
                  alt=""
                />
                <p className="fw-bolder text-capitalize w-50 text-start mt-4 fs-5">
                  {pizza.name}
                </p>

                <div className="d-flex gap-5 justify-content-around align-items-center">
                  <p className="fw-bolder w-50 text-start mt-4">
                    {conversor(pizza.price)}
                  </p>

                  <button
                    className="btn btn-danger fw-bolder"
                    onClick={() => {
                      handleLess(pizza.id);
                    }}
                  >
                    -
                  </button>
                  <p className="fw-bolder mt-4">{pizza.count}</p>

                  <button
                    className="btn btn-primary fw-bolder"
                    onClick={() => {
                      handlePlus(pizza.id);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}

          <div className="text-center">
            <h3 className="">Total</h3>
            <p className=" fw-bolder fs-3">{conversor(total)}</p>
            <div className="col-7 mx-auto">
              <MyButton btnText="Pagar" btnColor="dark" />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Cart;
