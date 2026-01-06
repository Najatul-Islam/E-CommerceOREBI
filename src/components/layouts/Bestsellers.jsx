
import Container from "../Container"
import Products from "../Products"
import proFive from "/src/assets/proFive.png"
import proSix from "/src/assets/proSix.png"
import proSeven from "/src/assets/proSeven.png"
import proEight from "/src/assets/proEight.png"
import Flex from "../Flex"
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 import Slider from "react-slick";
import PrevArrow from "../PrevArrow"
import NextArrow from "../NextArrow"
import { useEffect, useState } from "react"
import axios from "axios"

const Bestsellers = () => {
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
        <h2 className="text-black text-[39px] font-dm font-bold py-5">Our Bestsellers</h2>
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
       <div className="w-1/4">
        <Products productImg={proFive} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div>
      <div className="w-1/4">
        <Products productImg={proSix} badgeText={"New"} proTitle={"Basic Crew Neck Tee"} proPrice={"$44.00"}/>
      </div> */}
    </>
  )
}

export default Bestsellers
