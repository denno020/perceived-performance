import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider, { useAppContext } from '../../contexts/AppContext.jsx';
import Cart from '../Cart';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import { useScrollToTopOnNav } from '../../hooks/useScrollToTopOnNav.js';
import { useClickRipple } from '../../hooks/useClickRipple.js';
import { useStore } from '../../store';
import { getCurrentStep } from '../../util/get-current-step.js';

const App = () => {
  const { foldFooter, sectionId } = useAppContext();
  const { presentationStep } = useStore();
  useScrollToTopOnNav();
  useClickRipple();

  useEffect(() => {
    const currentDemo = getCurrentStep();
    // Will set Firebase to a value higher than 7 in order to prevent any of the toasts or automatic redirects
    if (currentDemo >= presentationStep || presentationStep > 7) return;

    toast(`🎤 Demo ${presentationStep} available, click to update`, {
      onClick: () => {
        window.location.href = `/${presentationStep}`;
      }
    });
  }, [presentationStep]);

  return (
    <>
      <Cart />
      <div className={`wrapper ${foldFooter ? ' foldFooter' : ''}`}>
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
