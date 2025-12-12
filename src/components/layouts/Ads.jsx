import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import adone from "/src/assets/adone.png"
import adTwo from "/src/assets/adTwo.png"
import ad_3 from "/src/assets/ad_3.jpg"
import { Link } from "react-router-dom"


const Ads = () => {
  return (
   <>
   <Container>
    <Flex className={"gap-x-8"}>
      <div className="w-1/2">
        <Link to={"/shop"}><Image src={adone} className={"w-full"}/></Link>
      </div>
      <div className="w-1/2">
      <Link to={"/shop"}><Image src={adTwo} className={"py-4 w-full"}/></Link>
      <Link to={"/shop"}><Image src={ad_3} className={"py-4 w-full"}/></Link>
       </div>
    </Flex>
   </Container>
   </>
  )
}

export default Ads
