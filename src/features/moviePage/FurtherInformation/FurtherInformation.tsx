import { FC, useState } from "react";
import Styles from "./FurtherInformation.module.scss";
import { AdditionalMovieInformation } from "src/shared/api/home/types";

interface FurtherInformationProps {
  info: AdditionalMovieInformation;
}

const FurtherInformation: FC<FurtherInformationProps> = ({ info }) => {
  const [titleInfo, setTitltInfo] = useState("description");
  const InformationTitle = ["description", "filmCrew", "information"];

  return (
    <div className={Styles.content}>
      <div>
        {InformationTitle.map((title) => (
          <div key={title} className={Styles.titleButton}>
            <button>{title}</button>
          </div>
        ))}
      </div>
      <div>{info[titleInfo]}</div>
    </div>
  );
};

export default FurtherInformation;
