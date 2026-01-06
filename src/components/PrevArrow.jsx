 import { FaArrowAltCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
     const { onClick } = props;
  return (
    <div className={"absolute left-5 top-1/2 -translate-y-1/2 z-50"} onClick={onClick}>
      <FaArrowAltCircleLeft className="text-3xl"/>
    </div>
  );
};

export default PrevArrow
