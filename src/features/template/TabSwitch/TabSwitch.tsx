import { FC, useState } from "react";
import Styles from "./TabSwitch.module.scss";
import TabButton from "../TabButton/TabButton";
import { domain } from "@styles/values";
import { useRouter } from "next/router";

/*icons*/
import Main from "../../../shared/uikit/icons/Main";
import Movies from "../../../shared/uikit/icons/Movies";
import Serials from "../../../shared/uikit/icons/Serials";
import TV from "../../../shared/uikit/icons/TV";
import Mine from "../../../shared/uikit/icons/Mine";

const TabSwitch: FC = () => {
  const [currentSection, setSection] = useState(new URL(domain));
  const router = useRouter();

  const changingActivityStatus = (link: URL) => {
    if (link.pathname === router.pathname) {
      setSection(new URL(link));
    }
  };

  const checkStatus = (link: URL) => {
    return link.pathname === router.pathname;
  };

  return (
    <div className={Styles.tabBarTabletForm}>
      <div className={Styles.tabBarTablet}>
        <TabButton
          link={new URL("/", domain)}
          name={"Главная"}
          icon={<Main />}
          onClick={() => changingActivityStatus}
          isActive={checkStatus(new URL("/", domain))}
        />
        <TabButton
          link={currentSection}
          name={"Фильмы"}
          icon={<Movies />}
          onClick={() => changingActivityStatus}
          isActive={checkStatus(new URL("/movies", domain))}
        />
        <TabButton
          link={currentSection}
          name={"Сериалы"}
          icon={<Serials />}
          onClick={() => changingActivityStatus}
          isActive={checkStatus(new URL("/serials", domain))}
        />
        <TabButton
          link={currentSection}
          name={"ТВ каналы"}
          icon={<TV />}
          onClick={() => changingActivityStatus}
          isActive={checkStatus(new URL("/tv", domain))}
        />
        <TabButton
          link={currentSection}
          name={"Моё"}
          icon={<Mine />}
          onClick={() => changingActivityStatus}
          isActive={checkStatus(new URL("/mine", domain))}
        />
      </div>
    </div>
  );
};

export default TabSwitch;
