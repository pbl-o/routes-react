import Button from "react-bootstrap/Button";

const MyButton = (props) => {
  return <Button className="fw-bolder" variant={props.btnColor} onClick={props.clickAction}>{props.btnText}</Button>;
};

export default MyButton;
