import { useState } from "react";
import styled from "styled-components";
import Globals from "./abstracts/Globals";
import Header from "./components/Header";
import CtaCard from "./components/CtaCard";
import StatsCard from "./components/StatsCard";
import ProjectCard from "./components/ProjectCard";
import Tag from "./components/Tag";
import MainModal from "./components/MainModal";
import Responsive from "./abstracts/Responsive";

const Main = styled.main`
  transform: translateY(-10%);
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${Responsive.md`
  transform: translateY(-5%);
  `}
`;

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Globals />
      {openModal && <MainModal setOpenModal={setOpenModal} />}
      <Header />
      <Main>
        <CtaCard setOpenModal={setOpenModal} />
        <StatsCard />
        <ProjectCard />
      </Main>
      <Tag />
    </>
  );
};

export default App;
