import React, { useState } from "react";
import styled from "styled-components";
import { StyledFlex, StyledTag } from "../../core/styles";
import { theme } from "../../core";
import "./css.scss";

import Card from "../Card";
import Switch from "../Switch";
import Collect from "../Collect";
// import Weather from "../Weather";
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

export const ControlBtnWithText = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Switch
        text={["關", "開"]}
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      />
    </div>
  );
};

export const Disabled = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Switch
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
        <StyledFlex justContent={"flex-start"}>
          <div style={{ flex: 1, marginRight: 15 }}>
            <StyledTag>Weather</StyledTag>
            {/* <Weather /> */}
          </div>
          <div style={{ flex: 1 }}>
            <StyledTag>Switch</StyledTag>
            <StyledBlock>
              <Card cardTitle={"Switch Default"}>
                <ControlBtnWithText />
              </Card>
              <Card cardTitle={"Switch Control"}>
                <Disabled />
              </Card>
              <Card cardTitle={"Switch Call Api"}>
                <AsyncAction />
              </Card>
            </StyledBlock>
          </div>
        </StyledFlex>
      </StyledBox>
    </div>
  );
};
const StyledBox = styled.div`
  margin-top: 10px;
`;
const StyledBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-top: 20px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
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

export default Profile;
