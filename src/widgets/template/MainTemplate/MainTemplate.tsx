import { FC, ReactNode } from 'react';
import Styles from './MainTemplate.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface MainTemplateProps {
  children?: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={Styles.body}>
      <div className={Styles.mainTemplate}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainTemplate;
