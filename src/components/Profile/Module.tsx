import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledFlex,
  StyledLine,
  StyledSkillCard,
  StyledAboutTitle,
} from "../../core/styles";
import { theme } from "../../core";
import "./css.scss";
import { ReactIcon, Coding } from "../Icons";
import Card from "../Card";
import Switch from "../Switch";
import Weather from "../Weather";
// import Progress from "../Progress";
// import Pagination from "../Pagination";

interface IProps {
  id: string;
  visible: string;
  classname?: string;
}
export const ControlBtn = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div>
      <Switch onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </div>
  );
};

export const Disabled = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Switch
        text={["關", "開"]}
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        isDisabled={isDisabled}
      />
      <StyledControlBtn
        onClick={() => {
          setIsDisabled(!isDisabled);
        }}
      >
        {isDisabled ? "enable" : "disable"}
      </StyledControlBtn>
    </div>
  );
};

export const AsyncAction = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/evolution-chain/1/")
      .then((res) => res.json())
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
          setIsOpen(!isOpen);
        }, 3000);
      })
      .then(() => setIsDisabled(false))
      .catch(() => {
        setIsLoading(true);
        setTimeout(() => {
          alert("fetch時間過長");
          setIsLoading(false);
        }, 5000);
      });
  };
  return (
    <>
      <Switch
        onClick={() => {
          setIsLoading(true);
          fetchData();
        }}
        isLoading={isLoading}
        isOpen={isOpen}
        isDisabled={isDisabled}
      />
      <div style={{ color: "#fff" }}>{isOpen ? "fetch成功" : ""}</div>
    </>
  );
};

// /** @summary 作品集tab */
const Profile: React.FC<IProps> = (props) => {
  return (
    <div
      id={props.id}
      className={`${props.visible === props.id ? "" : "hidden"}`}
    >
      <StyledBox>
        <StyledFlex justContent={"space-between"}>
          <Weather />
          <StyledSkillCard
            style={{
              paddingLeft: 60,
              paddingRight: 60,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledContent>
              <StyledAboutTitle fontAlign={"center"}>
                Weather Forecast
              </StyledAboutTitle>
              <StyledAboutTitle
                fontAlign={"center"}
                fontSize={"18"}
                fontWeight={"500"}
              >
                <ReactIcon width={30} height={30} fill={`${theme.darkFont}`} />
                React, hooks, Typescript, Web Api, styled-components
              </StyledAboutTitle>
              <StyledAboutTitle
                fontAlign={"center"}
                fontSize={"18"}
                fontWeight={"500"}
              >
                <Coding width={30} height={30} fill={`${theme.darkFont}`} />
                Data: CWB Api
              </StyledAboutTitle>
            </StyledContent>
          </StyledSkillCard>
        </StyledFlex>
        <StyledLine
          marginTop={"10px"}
          marginBottom={"10px"}
          lineStyle={"solid"}
          lineWeight={2}
          borderColor={theme.darkFont}
        />
        <StyledFlex justContent={"space-around"}>
          <StyledSkillCard
            style={{
              paddingLeft: 60,
              paddingRight: 60,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledContent>
              <StyledAboutTitle fontAlign={"center"}>Switch</StyledAboutTitle>
              <StyledAboutTitle
                fontAlign={"center"}
                fontSize={"18"}
                fontWeight={"500"}
              >
                <ReactIcon width={30} height={30} fill={`${theme.darkFont}`} />
                React, hooks, Typescript, Web Api, styled-components
              </StyledAboutTitle>
              <StyledAboutTitle
                fontAlign={"center"}
                fontSize={"18"}
                fontWeight={"500"}
              >
                <Coding width={30} height={30} fill={`${theme.darkFont}`} />
                Data: PokeApi
              </StyledAboutTitle>
            </StyledContent>
          </StyledSkillCard>
          <StyledBlock>
            <Card>
              <Disabled />
            </Card>
            <Card cardTitle={"Fetch Api"}>
              <AsyncAction />
            </Card>
          </StyledBlock>
        </StyledFlex>
        <StyledLine
          marginTop={"10px"}
          marginBottom={"10px"}
          lineStyle={"solid"}
          lineWeight={2}
          borderColor={theme.darkFont}
        />
        <StyledSkillCard padding={"10px 0"}>
          <h3>React-Native App 新增中....</h3>
        </StyledSkillCard>
        {/* <StyledFlex justContent={"space-between"}>
          <Weather />
          <StyledSkillCard style={{ padding: 5 }}>
            <StyledContent>
              <h3>ReactNative App</h3>
              <p>ReactNative, hooks, Typescript</p>
            </StyledContent>
          </StyledSkillCard>
        </StyledFlex> */}
      </StyledBox>
    </div>
  );
};
const StyledBox = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 680px;
  padding: 0;
  text-align: center;
`;
const StyledBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-left: 0px;
  margin-top: 20px;

  @media screen and (min-width: 980px) {
    margin-top: 0px;
  }
  h1 {
    letter-spacing: 0.8px;
    color: ${theme.darkFont};
  }
`;
const StyledControlBtn = styled.div`
  /* width: 100px; */
  text-align: center;
  width: 80px;
  margin: 5px auto 0;
  background-color: #1890ff;
  border-color: #1890ff;
  color: #fff;
  cursor: pointer;
`;
const StyledContent = styled.div`
  p {
    letter-spacing: 1.5px;
    color: ${theme.darkFont};
  }
`;

export default Profile;
