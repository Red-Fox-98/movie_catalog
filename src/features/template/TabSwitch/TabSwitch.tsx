import { FC, useState } from "react";
import Styles from "./TabSwitch.module.scss";
import TabButton from "../TabButton/TabButton";

/*icons*/
import Main from "../../../shared/uikit/icons/Main";
import Movies from "../../../shared/uikit/icons/Movies";
import Serials from "../../../shared/uikit/icons/Serials";
import TV from "../../../shared/uikit/icons/TV";
import Mine from "../../../shared/uikit/icons/Mine";

const TabSwitch: FC = () => {
  const [currentSection, setSection] = useState("http://localhost:3000");

  const changingActivityStatus = (link: string) => {
    if (link === currentSection) {
      setSection(link);
    }
  };

  const checkStatus = (link: string) => {
    return link === currentSection;
  };

  return (
    <div className={Styles.tabBarTabletForm}>
      <div className={Styles.tabBarTablet}>
        <TabButton
          link={"http://localhost:3000"}
          name={"Главная"}
          icon={<Main />}
          onClick={() => changingActivityStatus("http://localhost:3000")}
          isActive={checkStatus("http://localhost:3000")}
        />
        <TabButton
          link={currentSection}
          name={"Фильмы"}
          icon={<Movies />}
          onClick={changingActivityStatus}
          isActive={checkStatus("http://localhost:3000/movies")}
        />
        <TabButton
          link={currentSection}
          name={"Сериалы"}
          icon={<Serials />}
          onClick={changingActivityStatus}
          isActive={checkStatus("http://localhost:3000/serials")}
        />
        <TabButton
          link={currentSection}
          name={"ТВ каналы"}
          icon={<TV />}
          onClick={changingActivityStatus}
          isActive={checkStatus("http://localhost:3000/tv")}
        />
        <TabButton
          link={currentSection}
          name={"Моё"}
          icon={<Mine />}
          onClick={changingActivityStatus}
          isActive={checkStatus("http://localhost:3000/mine")}
        />
      </div>
    </div>
  );
};

export default TabSwitch;
