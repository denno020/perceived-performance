import {useEffect} from "react";
import Cart from "../Cart";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useCommonHooks } from "../../../base/hooks/useCommonHooks";

const App = () => {
  useCommonHooks();

  useEffect(() => {
    document.querySelector('#root').classList.add('minHeight');
    document.title = 'Timeless 2'
  }, [])
  return(
  <>
    <Cart />
    <div className="wrapper foldFooter">
      <Header />
      <Main />
    </div>
    <Footer />
  </>
)};

export default App;
