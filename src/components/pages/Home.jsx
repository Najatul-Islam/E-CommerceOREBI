import Ads from "../layouts/Ads"
import AdsTwo from "../layouts/AdsTwo"
import Arrival from "../layouts/Arrival"
import Banner from "../layouts/Banner"
import Bestsellers from "../layouts/Bestsellers"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import Info from "../layouts/Info"
import SpecialOffers from "../layouts/SpecialOffers"
import Products from "../Products"


const Home = () => {
  return (
    <>
     <Header/>
     <Banner/>
     <Info/>
     <Ads/>
     <Arrival/>
     <Bestsellers/>
     <AdsTwo/>
     <SpecialOffers/>
     <Footer/>
    </>
  )
}

export default Home
