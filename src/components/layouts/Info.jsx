import Container from "../Container"
import Flex from "../Flex"
import { RiNumber2 } from "react-icons/ri";
import { BiSolidTruck } from "react-icons/bi";
import { FaUndoAlt } from "react-icons/fa";

const Info = () => {
  return (
    <div className="border-2 border-[#F0F0F0] py-2">
      <Container>
        <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-2" >
              <RiNumber2 className="font-extrabold text-[28px] stroke-2"/><p className="text-[16px] font-dm text-[#6D6D6D]">Two years warranty</p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <BiSolidTruck className="text-[30px]"/><p className="text-[16px] font-dm text-[#6D6D6D]">Free shipping</p>
            </div>
            <div className="flex items-center gap-x-2.5">
               <FaUndoAlt className="text-[25px]"/> <p className="text-[16px] font-dm text-[#6D6D6D]">Return policy in 30 days</p>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Info
