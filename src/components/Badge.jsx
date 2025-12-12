
const Badge = ({badgeTxT,className}) => {
  return (
    <div className={`bg-black text-white text-sm py-2.5 px-7.5 w-[92px] font-bold font-dm  ${className}`}>{badgeTxT}</div>
  )
}

export default Badge
