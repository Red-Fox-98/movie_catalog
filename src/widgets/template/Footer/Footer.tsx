import { FC } from 'react';
import Styles from './Footer.module.scss';

/*icons*/
import YT from '../../../shared/uikit/icons/YT';
import VK from '../../../shared/uikit/icons/VK';
import TG from '../../../shared/uikit/icons/TG';
import Logo from '../../../shared/uikit/icons/Logo';
import Name from '../../../shared/uikit/icons/Name';
import TabSwitch from '../../../features/template/TabSwitch/TabSwitch';

const Footer: FC = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.socialMediaForm}>
        <button className={Styles.supportButton}>Написать в поддержку</button>
        <div className={Styles.socialNetworks}>
          <a href='#'>
            Youtube
            <div className={Styles.socialIcon}>
              <YT />
            </div>
          </a>
          <a href='#'>
            ВКонтакте
            <div className={Styles.socialIcon}>
              <VK />
            </div>
          </a>
          <a href='#'>
            Telegram
            <div className={Styles.socialIcon}>
              <TG />
            </div>
          </a>
        </div>
      </div>

      <div className={Styles.linkForm}>
        <div className={Styles.buttonLinks}>
          <button className={Styles.buttonLink}>Контакты</button>
          <button className={Styles.buttonLink}>Реферальная программа</button>
          <button className={Styles.buttonLink}>Скачать приложение</button>
          <button className={Styles.buttonLink}>Вопросы и ответы</button>
          <button className={Styles.buttonLink}>Условия использования</button>
        </div>
      </div>

      <div className={Styles.aboutForm}>
        <div className={Styles.about}>2023, ООО «ТВОЁ ЛАЙВ» 18+ ИНН 7720904034</div>
        <div className={Styles.logo}>
          <Logo />
          <Name />
        </div>
        <div className={Styles.btn}></div>
      </div>

      <TabSwitch />
    </div>
  );
};

export default Footer;
