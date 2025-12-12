
import Container from "../Container"
import Products from "../Products"
import proFive from "/src/assets/proFive.png"
import proSix from "/src/assets/proSix.png"
import proSeven from "/src/assets/proSeven.png"
import proEight from "/src/assets/proEight.png"
import Flex from "../Flex"

const Bestsellers = () => {
  return (
     <>
    <Container>
      <div className="">
        <h2 className="text-black text-[39px] font-dm font-bold py-5">Our Bestsellers</h2>
      </div>
      <Flex className={"justify-between gap-x-7.5"}>
      <div className="w-1/4">
        <Products productImg={proFive} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proSix} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proSeven} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proEight} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      </Flex>
      </Container>
    </>
  )
}

export default Bestsellers
