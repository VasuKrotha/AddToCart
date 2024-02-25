import "./App.css";
import { Header, Fotter } from "./components";
import { Allroute } from "./routers";

function App() {
  return (
    <div>
      <Header />
      <Allroute />
      <Fotter className={"fixed bottom-0 "} />
    </div>
  );
}

export default App;
