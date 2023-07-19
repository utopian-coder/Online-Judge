import Header from "./components/Header";
import Problem from "./components/Problem";
import Ide from "./components/Ide";

import classes from "./App.module.css";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

function App() {
  return (
    <>
      <Header />
      <main className={classes["grid-container"]}>
        <Problem />
        <Ide />
      </main>
    </>
  );
}

export default App;
