import React from 'react'
import styles from '../style'
import MenuItems from './MenuItems'
import { menu } from '../constant'

const Menu = () => {
  return (
    <section id='menu'>
      <h1 className={`${styles.heading2} text-center`}>OUR MENU</h1>
      <div className='flex flex-wrap sm:flex-row flex-col w-full gap-[10px] mt-3'>
        {menu.map((item, index)=> (
          <MenuItems key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Menu
