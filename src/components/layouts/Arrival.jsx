
import Container from "../Container"
import Products from "../Products"
import proOne from "/src/assets/proOne.jpg"
import proTwo from "/src/assets/proTwo.png"
import proThr from "/src/assets/proThr.png"
import proFour from "/src/assets/proFour.png"
import Flex from "../Flex"


const Arrival = () => {
  return (
    <>
    <Container>
      <div className="">
        <h2 className="text-black text-[39px] font-dm font-bold py-5">New Arrivals</h2>
      </div>
      <Flex className={"justify-between gap-x-7.5"}>
      <div className="w-1/4">
        <Products productImg={proOne} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proTwo} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proThr} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proFour} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      </Flex>
      </Container>
    </>
  )
}

export default Arrival
