import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import Styles from "./MainTemplate.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { clsx } from "clsx";
import { tTNormsPro } from "@styles/fonts";

interface MainTemplateProps {
  children?: ReactNode;
}

const MaineTemplateContext = createContext({ width: typeof window !== "undefined" ? window.innerWidth : 0 });

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  const [widthWindow, setWidthWindow] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const updateWidth = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [widthWindow]);

  return (
    <div className={clsx(tTNormsPro.variable, Styles.content)}>
      <MaineTemplateContext.Provider value={{ width: widthWindow }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </MaineTemplateContext.Provider>
    </div>
  );
};

export const useMaineTemplateContext = () => {
  return useContext(MaineTemplateContext);
};

export default MainTemplate;
