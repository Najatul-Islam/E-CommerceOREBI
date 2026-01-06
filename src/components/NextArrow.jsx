import { FaArrowAltCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
     const { onClick } = props;
  return (
    <div className={"absolute right-5 top-1/2 -translate-y-1/2"} onClick={onClick}>
      <FaArrowAltCircleRight className="text-3xl"/>
    </div>
  )
}

export default NextArrow
