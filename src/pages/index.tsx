import type { NextPage } from "next";
import MainTemplate from "../widgets/template/MainTemplate/MainTemplate";
import HomePage from "../pagesFsd/homePage/HomePage";

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <HomePage />
    </MainTemplate>
  );
};

export default Home;
