import { abo } from "../assets"
import styles from "../style"
import Button from "./Button"

const About = () => {
  return (
    <section id='about' className={`${styles.paddingY}`}>
      <div className='flex md:flex-row flex-col items-center'>
        <img src={abo} />
        <div className="sm:text-start text-center">
          <h4 className="font-poppins xs:text-[30px] text-[20px] font-semibold sm:text-left text-center text-white">ABOUT US</h4>
          <h1 className={`${styles.heading1}`}>DOUBLE THE <br />FUN ON EVERY <br/><span className="text-red">DELIVERY</span></h1>
          <p className={`${styles.paragraph} mt-3 max-w-[470px]`}>IN ITALY, PIZZA SERVED IN A RESTAURANT IS PRESENTED UNSLICED, AND IS EATEN WITH THE USE OF A KNIFE AND FORK.</p>
          <Button />
        </div>
      </div>
    </section>
  )
}

export default About
