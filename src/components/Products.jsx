import Badge from "./Badge"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";




const Products = ({productImg,badgeText,proTitle,proPrice}) => {
  return (
    <>
      <Container>
        <div className="relative group">
            <Image src={productImg} className={"w-full"}/>
            <Badge badgeTxT={badgeText} className={"absolute top-5 left-5"}/>
        <div className="">
            <Flex className={"justify-between mt-2.5"}>
                <h3 className="text-black text-xl font-bold font-dm">{proTitle}</h3>
                <p className="text-[#767676] text-[16px] font-dm">{proPrice}</p>
            </Flex>
        </div>
        <div className="bg-white p-3 absolute bottom-9 left-0 w-full opacity-0 group-hover:opacity-100 duration-500">
            <Flex className={"justify-end gap-x-2.5 py-3"}>
              <h3 className="text-[#767676] text-[16px] font-dm hover:text-black hover:font-bold">Add to Wish List</h3><FaHeart/> 
            </Flex>
             <Flex className={"justify-end gap-x-2.5 py-3"}>
              <h3 className="text-[#767676] text-[16px] font-dm hover:text-black hover:font-bold">Compare</h3><LuRefreshCw className="font-bold"/>
            </Flex>
             <Flex className={"justify-end gap-x-2.5 py-3"}>
              <h3 className="text-[#767676] text-[16px] font-dm hover:text-black hover:font-bold">Add to Cart</h3><FaShoppingCart/> 
            </Flex>
        </div>
        </div>
      </Container>
    </>
  )
}

export default Products
