

const MenuItems = ({img, title, content}) => {
  return (
    <div className="flex flex-wrap items-center flex-col max-w-[370px] rounded-[15px] menu">
      <img src={img} />
      <h4 className="text-white font-bold mb-4">{title}</h4>
      <span className="text-white mb-3 font-semi-bold">{content}</span>
    </div>
  )
}

export default MenuItems
