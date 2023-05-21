import { useEffect } from "react";
import Cart from "../Cart";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { useScrollToTopOnNav } from "../../hooks/useScrollToTopOnNav.js";
import { useClickRipple } from "../../hooks/useClickRipple.js";

const App = (props) => {
  const { sectionId } = props;
  useScrollToTopOnNav();
  useClickRipple();

  useEffect(() => {
    if ([1, 3, 4, 5, 6, 7].includes(sectionId)) {
      document.querySelector("#root").classList.add("minHeight");
    }
    document.title = `Timeless ${sectionId}`;
  }, [sectionId]);

  const useCache = [4, 5, 6, 7].includes(sectionId);
  const fetchFirst = [3].includes(sectionId);
  const preFetch = [5, 6, 7].includes(sectionId);
  const browserCache = [6, 7].includes(sectionId);
  const optimisticUi = [7].includes(sectionId);
  const foldFooter = ![0, 1].includes(sectionId);

  return (
    <>
      <Cart />
      <div className={`wrapper ${foldFooter ? " foldFooter" : ""}`}>
        <Header sectionId={sectionId} />
        <Main
          useCache={useCache}
          fetchFirst={fetchFirst}
          preFetch={preFetch}
          browserCache={browserCache}
          optimisticUi={optimisticUi}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
