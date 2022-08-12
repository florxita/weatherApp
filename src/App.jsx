import { useContext } from "react";
import { DataContext } from "./context/DataProvider";
import "./App.css";
import Search from "./component/Search";
import Card from "./component/Card";
import Header from "./component/Header";
import ModeColor from "./component/ModeColor";
import Footer from "./component/Footer";

function App() {
  const { theme, styles } = useContext(DataContext);

  return (
    <div className="App " id={theme} style={{ theme }}>
      <div className="styles flex col" id={styles} style={{ styles }}>
        <Header />
        <Search />
        <Card />
        <ModeColor />
        <Footer />
      </div>
    </div>
  );
}

export default App;
