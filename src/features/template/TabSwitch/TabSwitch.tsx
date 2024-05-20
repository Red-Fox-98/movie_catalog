import { FC, useState } from "react";
import Styles from "./TabSwitch.module.scss";
import TabButton from "../TabButton/TabButton";
import { useRouter } from "next/router";

/*icons*/
import Main from "../../../shared/uikit/icons/Main";
import Movies from "../../../shared/uikit/icons/Movies";
import Serials from "../../../shared/uikit/icons/Serials";
import TVChannels from "../../../shared/uikit/icons/TVChannels";
import Mine from "../../../shared/uikit/icons/Mine";

const TabSwitch: FC = () => {
  const [currentSection, setSection] = useState(new URL("http://localhost:3000"));
  const currentLink = useRouter();

  const changingActivityStatus = (link: URL) => {
    if (link.pathname === currentLink.pathname) {
      setSection(link);
    }
    window.location.assign(link.origin);
  };

  const checkStatus = (link: URL) => {
    return link.pathname === currentLink.pathname;
  };

  return (
    <div className={Styles.tabBarTabletForm}>
      <div className={Styles.tabBarTablet}>
        <TabButton
          link={currentSection}
          name={"Главная"}
          icon={<Main />}
          onClick={() => changingActivityStatus(new URL("http://localhost:3000"))}
          isActive={checkStatus(new URL("http://localhost:3000"))}
        />
        <TabButton
          link={currentSection}
          name={"Фильмы"}
          icon={<Movies />}
          onClick={changingActivityStatus}
          // isActive={checkStatus(link)}
        />
        <TabButton
          link={currentSection}
          name={"Сериалы"}
          icon={<Serials />}
          onClick={changingActivityStatus}
          // isActive={checkStatus(link)}
        />
        <TabButton
          link={currentSection}
          name={"ТВ каналы"}
          icon={<TVChannels />}
          onClick={changingActivityStatus}
          // isActive={checkStatus(link)}
        />
        <TabButton
          link={currentSection}
          name={"Моё"}
          icon={<Mine />}
          onClick={changingActivityStatus}
          // isActive={checkStatus(link)}
        />
      </div>
    </div>
  );
};

export default TabSwitch;
