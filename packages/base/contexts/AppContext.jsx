import { createContext, useContext, useEffect, useMemo } from "react";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const { children, sectionId } = props;

  useEffect(() => {
    if ([1, 3, 4, 5, 6, 7].includes(sectionId)) {
      document.querySelector("#root").classList.add("minHeight");
    }
    document.title = `Timeless - Demo ${sectionId}`;
  }, [sectionId]);

  const value = useMemo(
    () => ({
      sectionId,
      useCache: [4, 5, 6, 7].includes(sectionId),
      fetchFirst: [3, 4].includes(sectionId),
      preFetch: [5, 6, 7].includes(sectionId),
      browserCache: [6, 7].includes(sectionId),
      optimisticUi: [7].includes(sectionId),
      foldFooter: ![0, 1].includes(sectionId),
    }),
    [sectionId]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
export default AppContextProvider;
