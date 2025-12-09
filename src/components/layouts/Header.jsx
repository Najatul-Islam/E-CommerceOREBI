import { Link } from "react-router-dom"
import Button from "../Button"
import Container from "../Container"
import Flex from "../Flex"
import Heading from "../Heading"
import Image from "../Image"
import logo from "/src/assets/logo.png"
import { HiMenuAlt1 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <>
     <div className="">
      <Container>
        <Flex>
          <div className="w-[40%]">
            <Link to={"/"}><Image src={logo}/></Link>
            </div>
         <div className="">
            <ul className="flex w-[60%] gap-x-5">
              <li className="text-[#767676] text-[14px] font-dm hover:text-black hover:font-bold">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-[#767676] text-[14px] font-dm hover:text-black hover:font-bold">
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className="text-[#767676] text-[14px] font-dm hover:text-black hover:font-bold">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="text-[#767676] text-[14px] font-dm hover:text-black hover:font-bold">
                <Link to={"/contacts"}>Contacts</Link>
              </li>
            </ul>
         </div>
        </Flex>
      </Container>
     </div>
     <div className="bg-[#F5F5F3]">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <h1 className="flex items-center gap-x-2.5 font-dm text-[14px] text-[#262626]"><HiMenuAlt1 className="text-[25px] stroke-1"/>Shop by Category</h1>
          </div>
          <div className="">
            <input type="text" placeholder="Search Products" className="bg-white text-[#C4C4C4] text-[14px] font-dm py-4 px-[220px] text-start outline-0 relative"/><FaSearch className={" absolute left-[970px] top-[100px]"}/>
          </div>
          <div className="flex items-center gap-x-1">
            <FaUser /> <FaCaretDown />
            <div className="flex items-center ml-10"><FaShoppingCart /></div>
             </div>
        </Flex>
      </Container>
     </div>
    </>
  )
}

export default Header
