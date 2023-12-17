import styles from "./style";
import { About, Contact, Events, Main, Menu, Navbar, Footer,} from "./components"
function App() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* Hero section */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
