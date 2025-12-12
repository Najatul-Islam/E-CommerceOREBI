import { Link } from "react-router-dom"
import Image from "../Image"
import AdsBg_2 from "/src/assets/AdsBg_2.png"
import Container from "../Container"

const AdsTwo = () => {
  return (
    <div>
        <Container className={"my-5"}>
      <Link to={"/shop"}><Image src={AdsBg_2} className={"w-full"}/></Link>
      </Container>
    </div>
  )
}

export default AdsTwo
