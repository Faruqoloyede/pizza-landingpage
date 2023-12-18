import React from 'react'
import styles from '../style'
import { footer } from '../assets'
import { socialmedia } from '../constant'
import { footerlink } from '../constant'
const Footer = () => {
  return (
    <section id='footer' className={`${styles.paddingX} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row  flex-col mb-8 w-full`}>
        <div className='flex flex-col flex-1 mr-10 justify-start'>
          <img src={footer} className='w-[200px] h-[72px] object-contain' />
          <div className='flex flex-row md:mt-3 mt-6'>
          {socialmedia.map((social)=>(
            <img 
              key={social.id}
              src={social.icon} 
              className='w-[40px] h-[22px] object-fit cursor-pointer px-[10px]'
            />
          ))}
          </div>
        </div>
        <div className='flex flex-[1.5] md:flex-row flex-col w-full justify-between md:mt-0 mt-10'>
            {footerlink.map((footerlink)=>(
              <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins text-white text-[18px] font-bold leading-[27px]'>{footerlink.title}</h4>
                <ul className='list-none mt-4'>
                  {footerlink.links.map((link, index)=>(
                    <li key={link.name} className={`font-popins font-normal text-[16px] leading-[24px] text-white navbar cursor-pointer ${index !== footerlink.links.length -1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <p className='font-poppin font-normal text-center text[16px] text-white mt-4'>COPYRIGHT BY GULLUPIZZA ALL RIGHT RESERVED 2023!</p>
    </section>
  )
}

export default Footer
