import { FC, ReactNode } from "react";
import Styles from "./MainTemplate.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { clsx } from "clsx";
import { tTNormsPro } from "@styles/fonts";

interface MainTemplateProps {
  children?: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={clsx(tTNormsPro.variable, Styles.mainTemplate)}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
