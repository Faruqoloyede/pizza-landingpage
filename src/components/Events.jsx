import styles from "../style";
import { events } from "../constant";

const EventsItems = ({img, name, title, content, linkname})=>(
  <div className="flex items-center flex-col">
    <img src={img} className="object-contain rounded-[15px]" />
    <div className="mt-5">
      <h4 className="font-poppins font-semibold text-red text-[18px]">{name}</h4>
      <h2 className="font-poppins font-semibold text-white text-[18px]">{title}</h2>
      <p className={`${styles.paragraph} py-4`}>{content}</p>
    </div>
  </div>
)

const Events = () => {
  return (
    <section  id='blog'>
      <h1 className={`${styles.heading2} text-center`}>LATEST EVENTS</h1>
      <div className='flex sm:flex-row flex-col w-full gap-[20px] mt-3'>
        {events.map((event, index)=> (
          <EventsItems key={event.id} {...event} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Events
