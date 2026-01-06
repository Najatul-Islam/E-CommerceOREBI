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
import { useState } from "react"


const Header = () => {
   const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

   const [logclick, logsetClick] = useState(false);
  const handleClick = () => {
    logsetClick(!logclick);
  };

   const [cartShow, cartsetShow] = useState(false);
  const handleCart = () => {
    cartsetShow(!cartShow);
  };
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
     <div className="bg-[#F5F5F3] border-t-2 border-b-2 border-t-[#F0F0F0] border-b-[#F0F0F0]">
      <Container>
        <Flex className={"justify-between"}>
          <div className="relative cursor-pointer" onClick={handleShow}>
            <h1 className="flex items-center gap-x-2.5 font-dm text-[14px] text-[#262626]"><HiMenuAlt1 className="text-[25px] stroke-1"/>Shop by Category</h1>
            {show && ( 
                <ul className="bg-[#262626] w-[265px] absolute left-0 top-8 z-4">
                  <li className="text-[#979797] text-sm font-dm border-b-2 border-[#2D2D2D] py-4 px-5 hover:text-white hover:font-bold hover:pl-6 duration-500">
                    Accesories
                  </li>
                  <li className="text-[#979797] text-sm font-dm border-b-2 border-[#2D2D2D] py-4 px-5 hover:text-white hover:font-bold hover:pl-6 duration-500">
                    Furniture
                  </li>
                  <li className="text-[#979797] text-sm font-dm border-b-2 border-[#2D2D2D] py-4 px-5 hover:text-white hover:font-bold hover:pl-6 duration-500">
                    Electronics
                  </li>
                  <li className="text-[#979797] text-sm font-dm border-b-2 border-[#2D2D2D] py-4 px-5 hover:text-white hover:font-bold hover:pl-6 duration-500">
                    Clothes
                  </li>
                  <li className="text-[#979797] text-sm font-dm border-b-2 border-[#2D2D2D] py-4 px-5 hover:text-white hover:font-bold hover:pl-6 duration-500">
                    Bags
                  </li>
                  <li className="text-[#979797] text-sm font-dm border-b-2 border-[#2D2D2D] py-4 px-5 hover:text-white hover:font-bold hover:pl-6 duration-500">
                    Home appliances
                  </li>
                </ul>
               )}
          </div>
          <div className="w-[50%] relative ">
            <input type="text" placeholder="Search Products" className="bg-white text-[#C4C4C4] text-[14px] font-dm p-5 w-full text-start outline-0 "/><FaSearch className={" absolute right-5 top-1/2 -translate-y-1/2"}/>
          </div>
          <div className="flex items-center">
           <div className="flex items-center gap-x-1 relative cursor-pointer" onClick={handleClick}>
             <FaUser /> <FaCaretDown />
             {logclick && (
            <ul className="bg-black w-[200px] absolute right-0 top-8 z-4">
                <li className="text-sm font-bold font-dm text-white text-center hover:bg-white hover:text-[#262626] hover:font-normal px-10 py-4 duration-500">My Account</li>
                <li className="text-sm font-bold font-dm text-white hover:bg-white hover:text-[#262626] hover:font-normal text-center px-10 py-4 duration-500">Log Out</li>
              </ul>
             )}
           </div>
            <div className="flex items-center ml-10 relative cursor-pointer" onClick={handleCart}>
              <FaShoppingCart />
              {cartShow && (
                <div className="w-[360px] absolute right-0 top-8 z-4">
                  <div className="w-1/2 bg-[#F5F5F3] p-10 flex items-center">
                      <div className="bg-[#D8D8D8] w-[21px] h-[21px]"></div><h1 className="hover:text-[#979797] text-sm font-dm  py-4 px-5 text-black hover:font-bold hover:pl-6 duration-500">Black Smart Watch</h1>
                      <p>$44.00</p>
                  </div>
                  <div className="w-1/2">holaa</div>
                </div>
              )}
              </div>
             </div>
        </Flex>
      </Container>
     </div>
    </>
  )
}

export default Header
