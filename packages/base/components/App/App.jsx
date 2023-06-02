import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider, {
  useAppContext,
} from "../../contexts/AppContext.jsx";
import Cart from "../Cart";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { useScrollToTopOnNav } from "../../hooks/useScrollToTopOnNav.js";
import { useClickRipple } from "../../hooks/useClickRipple.js";
import { useStore } from '../../store'

const App = () => {
  const { foldFooter, sectionId } = useAppContext();
  const { presentationStep } = useStore();
  useScrollToTopOnNav();
  useClickRipple();

  useEffect(() => {
    const currentDemo = Number(window.location.pathname.replace('/', ''));
    if (currentDemo >= presentationStep) return;

    toast(`🎤 Demo ${presentationStep} available, click to update`, {
      onClick: () => {
        window.location.href = `/${presentationStep}`;
      }
    })
  }, [presentationStep])

  return (
    <>
      <Cart />
      <div className={`wrapper ${foldFooter ? " foldFooter" : ""}`}>
        <Header />
        <Main />
      </div>
      <Footer />
      <ToastContainer />
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
