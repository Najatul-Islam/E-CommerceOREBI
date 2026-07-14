import { Link } from "react-router-dom"
import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import logo from "/src/assets/logo.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn , FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="mt-20 bg-[#F5F5F3] py-13">
      <Container>
     <Flex className={"justify-between"}>
      <div><ul>
        <li className="text-[#262626] text-[16px] font-bold font-dm py-5">MENU</li>
        <li className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/"}>Home</Link></li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/shop"}>Shop</Link></li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/about"}>About</Link></li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/contacts"}>Contacts</Link></li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/journal"}>Journal</Link></li>
      </ul></div>

      <div><ul>
        <li className="text-[#262626] text-[16px] font-bold font-dm py-5">SHOP</li>
        <li className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/"}>Category 1</Link></li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/shop"}>Category 2</Link></li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/about"}>Category 3</Link></li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/contacts"}>Category 4</Link></li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          <Link to={"/journal"}>Category 5</Link></li>
      </ul></div>

      <div><ul>
        <li className="text-[#262626] text-[16px] font-bold font-dm py-5">HELP</li>
        <li className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          Privacy Policy</li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          Terms & Conditions</li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          Special E-shop</li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          Shipping</li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm mb-3">
          Secure Payments</li>
      </ul></div>
      
      <div><ul>
        <li className="text-[#262626] text-[16px] font-bold font-dm">(052) 611-5711</li>
        <li className="text-[#262626] text-[16px] font-bold font-dm">
          company@domain.com</li>
        <li  className="text-[#6D6D6D] text-[14px] font-dm py-15">
          575 Crescent Ave. Quakertown, PA 18951</li>
      </ul>
      </div>
       <div>
      <ul>
        <li className=" text-[#262626] font-bold mb-40"><Link to={"/"}><Image src={logo}/></Link></li>
      </ul></div>
     </Flex>
     <Flex className={"justify-between"}>
      <div className="flex gap-x-5 text-[#262626] mt-12">
        <FaFacebookF className="text-[18px] stroke-1" />
        <FaLinkedinIn className="text-[20px] stroke-1" />
        <FaInstagram className="text-[20px] stroke-1" />
      </div>
      <div className="font-dm text-[14px] text-[#6D6D6D] mt-12">
        2020 Orebi Minimal eCommerce Figma Template by Najat
      </div>
     </Flex>
      </Container>
      </div>
    </>
  )
}

export default Footer
