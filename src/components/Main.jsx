import styles from "../style"
import { her } from "../assets"
import Button from "./Button"
const Main = () => {
  return (
    <section id="home" className={`sm:py-0 ${styles.paddingY}`}>
      <div className={`flex md:flex-row flex-col items-center`}>
        <div className={`${styles.paddingX} max-w-[470px]`}>
          <h4 className="font-poppins text-white font-bold text-[20px] sm:text-right text-center">GULLU PIZZA</h4>
          <h1 className={`${styles.heading1}`}>FREE HOME <br/><span className="text-red">DELIVERY</span></h1>
          <p className={`${styles.paragraph}`}>PIZZA ITALIAN:, NEAPOLITAN IS A DISH OF ITALIAN H TOPPED WITH TOMATOES, CHEESE</p>
          <Button />
        </div>
        <img src={her} className="sm:w-[750px] w-[100%] sm:h-[750px] h-[100%]"/>
      </div>
    </section>
  )
}

export default Main
