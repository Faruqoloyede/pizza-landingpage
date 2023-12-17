import styles from "../style"
import { her } from "../assets"
const Main = () => {
  return (
    <section id="home">
      <div className={`flex md:flex-row flex-col items-center ${styles.paddingY}`}>
        <h4>GULLU PIZZA</h4>
        <img src={her} className="w-[300px] h-[300px] relative z-[5]"/>
      </div>
    </section>
  )
}

export default Main
