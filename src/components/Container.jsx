

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1240px] py-5 m-auto ${className}`}>{children}</div>
  )
}

export default Container
