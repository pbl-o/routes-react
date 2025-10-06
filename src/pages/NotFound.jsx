import { useNavigate } from "react-router-dom";
import MyButton from "../components/Button.jsx";
import { Card } from "react-bootstrap";

const NotFound = () => {
  let navigateHome = useNavigate();
  return (
    <>
      <Card className="w-50 m-5 mx-auto ">
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
          <div className="d-flex flex-column justify-content-center align-items-center p-5">
            <h2 className="text-danger fs-1">404! </h2>
            <p className="fs-3 text-secondary">
              😞 Lo sentimos, pero lo que estás buscando no existe, o debe de
              estar en otro lugar...
            </p>
          </div>

          <div className="">
            <MyButton
              btnColor="dark"
              btnText="Volver al Inicio"
              clickAction={() => {
                navigateHome("/");
              }}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default NotFound;
