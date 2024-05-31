import { FC } from "react";
import Image from "next/image";
import popcorn from "src/shared/uikit/images/Promo/Popcorn.png";
import popcornM from "src/shared/uikit/images/Promo/PopcornM.png";
import Styles from "./Promo.module.scss";

const Popcorn: FC = () => {
  return (
    <>
      <Image src={popcorn} alt={"img"} width={293} height={320} className={Styles.image} />
      <Image src={popcornM} alt={"img"} width={223} height={232} className={Styles.imageM} />
    </>
  );
};

export default Popcorn;
