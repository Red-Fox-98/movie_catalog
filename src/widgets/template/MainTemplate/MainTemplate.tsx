import { FC, ReactNode } from 'react';
import Styles from './MainTemplate.module.scss'
import Header from '../Header/Header';

interface MainTemplateProps {
  children?: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={Styles.mainTemplate}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainTemplate;
