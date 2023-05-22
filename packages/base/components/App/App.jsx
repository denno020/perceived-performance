import AppContextProvider, {
  useAppContext,
} from "../../contexts/AppContext.jsx";
import Cart from "../Cart";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { useScrollToTopOnNav } from "../../hooks/useScrollToTopOnNav.js";
import { useClickRipple } from "../../hooks/useClickRipple.js";

const App = () => {
  const { foldFooter } = useAppContext();
  useScrollToTopOnNav();
  useClickRipple();

  return (
    <>
      <Cart />
      <div className={`wrapper ${foldFooter ? " foldFooter" : ""}`}>
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
};

const withContext = (WrappedComponent) => {
  return function WithAppContext(props) {
    const { children, sectionId } = props;

    return (
      <AppContextProvider sectionId={sectionId}>
        <WrappedComponent>{children}</WrappedComponent>
      </AppContextProvider>
    );
  };
};

export default withContext(App);
