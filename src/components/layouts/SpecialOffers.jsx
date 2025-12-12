import Container from "../Container"
import Products from "../Products"
import proNine from "/src/assets/proNine.png"
import proTen from "/src/assets/proTen.png"
import proEleven from "/src/assets/proEleven.png"
import proTwelve from "/src/assets/proTwelve.png"
import Flex from "../Flex"

const SpecialOffers = () => {
  return (
      <>
    <Container>
      <div className="">
        <h2 className="text-black text-[39px] font-dm font-bold py-5">Special Offers</h2>
      </div>
      <Flex className={"justify-between gap-x-7.5"}>
      <div className="w-1/4">
        <Products productImg={proNine} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proTen} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proEleven} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proTwelve} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      </Flex>
      </Container>
    </>
  )
}

export default SpecialOffers
