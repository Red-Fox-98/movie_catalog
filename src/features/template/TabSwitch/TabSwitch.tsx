import { FC, useState } from "react";
import Styles from "./TabSwitch.module.scss";
import TabButton from "../TabButton/TabButton";

/*icons*/
import Main from "../../../shared/uikit/icons/Main";
import Movies from "../../../shared/uikit/icons/Movies";
import Serials from "../../../shared/uikit/icons/Serials";
import TVChannels from "../../../shared/uikit/icons/TVChannels";
import Mine from "../../../shared/uikit/icons/Mine";

const TabSwitch: FC = () => {
  const [currentSection, setSection] = useState("Главная");

  const changingActivityStatus = (name: string) => {
    setSection(name);
  };

  const checkStatus = (name: string) => {
    return name === currentSection;
  };

  return (
    <div className={Styles.tabBarTabletForm}>
      <div className={Styles.tabBarTablet}>
        <TabButton
          name={"Главная"}
          icon={<Main />}
          onClick={changingActivityStatus}
          isActive={checkStatus("Главная")}
        />
        <TabButton
          name={"Фильмы"}
          icon={<Movies />}
          onClick={changingActivityStatus}
          isActive={checkStatus("Фильмы")}
        />
        <TabButton
          name={"Сериалы"}
          icon={<Serials />}
          onClick={changingActivityStatus}
          isActive={checkStatus("Сериалы")}
        />
        <TabButton
          name={"ТВ-каналы"}
          icon={<TVChannels />}
          onClick={changingActivityStatus}
          isActive={checkStatus("ТВ-каналы")}
        />
        <TabButton
          name={"Моё"}
          icon={<Mine />}
          onClick={changingActivityStatus}
          isActive={checkStatus("Моё")}
        />
      </div>
    </div>
  );
};

export default TabSwitch;
