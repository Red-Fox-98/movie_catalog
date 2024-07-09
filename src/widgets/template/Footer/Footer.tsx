import { FC } from "react";
import Styles from "./Footer.module.scss";
import TabSwitch from "../../../features/template/TabSwitch/TabSwitch";

/*icons*/
import YT from "../../../shared/uikit/icons/YT";
import VK from "../../../shared/uikit/icons/VK";
import TG from "../../../shared/uikit/icons/TG";
import Logo from "../../../shared/uikit/icons/Logo";
import Button from "src/shared/uikit/Button/Button";
import Gift from "src/shared/uikit/icons/Gift";
import { useRouter } from "next/router";
import SocialButton from "src/features/template/SocialButton/SocialButton";

const Footer: FC = () => {
  const currentLink = useRouter();
  return (
    <div className={Styles.content}>
      <div className={Styles.footer}>
        <div className={Styles.upperFooter}>
          <button className={Styles.promocodeBtn}>
            <Gift />
            {"Ввести промокод"}
          </button>
          <div className={Styles.socialMediaForm}>
            <button className={Styles.supportButton}>Написать в поддержку</button>
            <div className={Styles.socialNetworks}>
              <SocialButton name={"Youtube"} href={"#"} icon={<YT />} />
              <SocialButton name={"ВКонтакте"} href={"#"} icon={<VK />} />
              <SocialButton name={"Telegram"} href={"#"} icon={<TG />} />
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
        </div>

        <div className={Styles.bottomFooter}>
          <div className={Styles.aboutForm}>
            <div className={Styles.about}>{"2023, ООО «ТВОЁ ЛАЙВ» 18+\n ИНН  7720904034 "}</div>
            <a href={"/"} className={Styles.logo}>
              <Logo />
            </a>
            <div className={Styles.btn}></div>
          </div>
        </div>
      </div>

      {currentLink.pathname === "/" && (
        <div className={Styles.probeBtn}>
          <Button value={"Попробовать бесплатно"} variant={"primary"} size={"m"} />
        </div>
      )}

      <TabSwitch />
    </div>
  );
};

export default Footer;
