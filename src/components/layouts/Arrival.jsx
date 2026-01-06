
import Container from "../Container"
import Products from "../Products"
import proOne from "/src/assets/proOne.jpg"
import proTwo from "/src/assets/proTwo.png"
import proThr from "/src/assets/proThr.png"
import proFour from "/src/assets/proFour.png"
import Flex from "../Flex"
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 import Slider from "react-slick";
import PrevArrow from "../PrevArrow"
import NextArrow from "../NextArrow"
import { useEffect, useState } from "react"
import axios from "axios"

const Arrival = () => {
  // Api Data start
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      // console.log(data.data.data.products);
      setAllData(data.data.products);
    }
    alldatas();
  });
  // Api Data end
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,

  };
  return (
    <>
    <Container>
      <div className="">
        <h2 className="text-black text-[39px] font-dm font-bold py-5">New Arrivals</h2>
      </div>
    <Slider {...settings}>
        {allData.map((item) => (
         <Products 
         className="mr-5"
         productImg={item.thumbnail} 
         badgeText={"New"} 
         proTitle={"item.title"} 
         proPrice={"item.price"}
         />
        )) }
    </Slider>
      </Container>

       {/* <div className="w-1/4">
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
         <div className="w-1/4">
        <Products productImg={proOne} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proTwo} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div> */}

    </>
  );
}

export default Arrival
