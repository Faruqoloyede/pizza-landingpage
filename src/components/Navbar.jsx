import { useState } from 'react'
import { logo, close, menu } from "../assets"
import { navlinks } from "../constant";
import Button from './Button';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex w-full py-6 justify-between items-center'>
      <img src={logo} alt='logo' className='w-[124px] h-[44px]' />

      <ul className='list-none sm:flex hidden flex gap-[30px]'>
        {navlinks.map((item, index)=> (
          <li key={item.id} className= "font-poppins font-normal text-[16px] text-white cursor pointer">
            <a href={`#${item.id}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <Button text="LOG IN" styles= "ml-10 sm:block hidden" />
      <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src= {toggle ? close : menu} className='w-[28px] h-[28px] object-contain' onClick={()=> setToggle((prev)=> !prev)}/>

        <div className={`${toggle ? 'top-[90px]' : 'hidden'} flex flex-col  items-center absolute -top-[100%] right-0 bg-black p-6 sidebar min-w-[100%] sidebar`}>
        <ul className='list-none flex flex-col justify-center items-center flex-1'>
        {navlinks.map((item, index)=> (
          <li key={item.id} className= "font-poppins font-normal text-[18px] text-white cursor pointer mb-4">
            <a href={`#${item.id}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <Button text="LOG IN" styles= "ml-0" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
