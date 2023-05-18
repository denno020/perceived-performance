import {useEffect} from "react";
import Cart from "../Cart";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useScrollToTopOnNav } from "../../../base/hooks/useScrollToTopOnNav";

const App = () => {
  useScrollToTopOnNav();

  useEffect(() => {
    document.querySelector('#root').classList.add('minHeight');
    document.title = 'Timeless 1'
  }, [])

  return(
  <>
    <Cart />
    <div className="wrapper">
      <Header />
      <Main />
    </div>
    <Footer />
  </>
)};

export default App;
