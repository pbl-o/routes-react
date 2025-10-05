import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MyButton from "./Button.jsx";
import conversor from "../utils/conversor.js";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

//decidí colocar la descripción dentro de un acordeón temporalmente para mantener una dimensión recatada.
//Queda redundante en la medida que comparte espacio con el botón saber más, pero eso se resolverá en la medida que la página adquiera más funcionalidades.

//De momento todas los botones "ver más" llevan a la ruta /pizza/001, esto será resuelto en una versión avanzada en la cual la card será renderizada de forma dinámica y en consonancia con los elementos del backend.

const CardPizza = ({ name, img, price, ingredients, description }) => {
   let navigateToPizza = useNavigate()
  return (
    <>
      <div className="col">
        <Card className="text-center">
          <Card.Img variant="top" src={img}/>
          <Card.Body>
            <Card.Title className="text-capitalize">{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Detalle</Accordion.Header>
                  <Accordion.Body>{description}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="fw-bolder text-start px-4">
                Ingredientes
              </Card.Text>
              <Card.Body>
                <ul className="fw-bolder text-start text-capitalize list-group list-group-flush">
                  {ingredients}
                </ul>
              </Card.Body>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="fw-bolder">{conversor(price)}</Card.Text>
              <Card.Body>
                <div className=" d-flex justify-content-around">
                  <MyButton btnText="Ver Más" btnColor="light"/>
                  <MyButton btnText="Añadir" btnColor="dark" clickAction={()=>navigateToPizza("/pizza/001")} />
                </div>
              </Card.Body>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default CardPizza;
