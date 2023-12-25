import styles from "./style";
import { About, Map, Events, Main, Menu, Navbar, Footer,} from "./components"

function App() {
  return (
    <div className="w-full overflow-hidden">
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
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Menu />
        <About />
        <Events />
        <Map />
        </div>
      </div>
      <div className={`bg-footer ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
