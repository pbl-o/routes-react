import { Card } from "react-bootstrap"
import MyButton from "./Button"
import { useNavigate } from "react-router-dom"


 const Profile = () => {
    const navigate = useNavigate()
  return (
   <>
   <Card className="m-5 p-5 text-center">
    <Card.Text className="fw-bolder">Usuario@Reactmail.com</Card.Text>
    <Card.Body>
        <MyButton btnColor="dark" btnText="Cerra Sesión" clickAction={()=>{navigate('/')}}/>
    </Card.Body>
   </Card>
   </>
  )
}

export default Profile