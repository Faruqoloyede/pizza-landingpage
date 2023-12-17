import styles from "../style"
import { her } from "../assets"
const Main = () => {
  return (
    <section id="home">
      <div className={`flex md:flex-row flex-col items-center ${styles.paddingY}`}>
        <div className={`${styles.paddingX}`}>
          <h4 className="font-poppins text-right text-white font-bold text-[20px]">GULLU PIZZA</h4>
          <h1 className={`${styles.heading1}`}>FREE HOME <br/><span className="text-red">DELIVERY</span></h1>
        </div>
        <img src={her} className="w-[50%] h-[50%] relative z-[5]"/>
      </div>
    </section>
  )
}

export default Main
