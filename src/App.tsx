import { RecoilRoot } from "recoil";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./Components/Navbar";
import {ListProduct} from "./Components/ListProduct";

function App() {
  return (
    <div className="App">
        <RecoilRoot>
            <GlobalStyle />
            <Navbar />
            <ListProduct />
        </RecoilRoot>
    </div>
  );
}

export default App;
