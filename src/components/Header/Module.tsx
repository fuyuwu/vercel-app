import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { device, theme } from "../../core";
import "./scss/styles.scss";

// import SlideMenu from "../SlideMenu";
// import { MenuBtn, CloseBtn, Line, Mail, CellPhone } from "../Icons";
// import { BrowserRouter as Router, Link } from "react-router-dom";

interface IHeaderProps {
  title: string;
  classname?: string;
  isServer?: boolean;
  children?: React.ReactNode;
}
// const linkTo = [
//   { name: "ABOUT", url: "/about" },
//   { name: "SKILL", url: "/skill" },
//   { name: "SIDE PROJECT", url: "/sideProject" },
// ];
interface IMode {
  mode: "pc" | "m";
}
const Header: React.FC<IHeaderProps> = (props) => {
  const [isServer, setIsServer] = useState<boolean>(false);
  const [mode, setMode] = useState<IMode>({ mode: "m" }); // 偵測裝置
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const currentY = useRef<number>(0);
  // const [rightVisible, setRightVisible] = useState<boolean>(false);

  // const openPageRight = () => setRightVisible(!rightVisible);
  // const closePageRight = () => setRightVisible(false);

  const handlerScroll = () => {
    let scrollTop = document.body.scrollTop;
    currentY.current = scrollTop;

    if (window.pageYOffset > currentY.current) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  };
  const handleResize = () => {
    if (window.innerWidth < 980) {
      setMode({ mode: "m" });
      return;
    } else {
      // setRightVisible(false);
      setMode({ mode: "pc" });
    }
  };
  useEffect(() => {
    setIsServer(true);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);
  const ScrollHeader = ({ children }: IHeaderProps) => {
    return (
      <header
        className={`${isScroll ? "show" : ""}`}
        onScroll={handlerScroll}
      >
        {children}
      </header>
    );
  };

  return (
    <ScrollHeader title={props.title}>
      <StyledBlock>
        <StyledTitle>{props.title}</StyledTitle>
        {/* TODO: SlideMenu improvement */}
        {/* <div className={`hamburger_icon`} onClick={openPageRight}>
          <MenuBtn width={30} height={30} />
        </div> */}
        {/* <SlideMenu visible={rightVisible}>
          <StyledClosebtn onClick={closePageRight}>
            <CloseBtn width={24} height={24} fill={"#aaa"} />
          </StyledClosebtn>

          <StyledHeaderMenu>
            <Router>
              {linkTo.map((item, i) => {
                return (
                  <StyledHeaderLi key={i + 1}>
                    <Link to={item.url}>{item.name}</Link>
                  </StyledHeaderLi>
                );
              })}
            </Router>
            <p style={{ textAlign: "center", fontSize: 20, color: "#fa8072" }}>
              持續新增中....
            </p>
          </StyledHeaderMenu>

          <StyledLine borderColor={"#fff"} lineStyle={"solid"} lineWeight={2} />

          <StyledContact>
            <StyledIcon>
              <Line width={24} height={24} />
            </StyledIcon>
            <StyledIcon>
              <Mail width={24} height={24} />
            </StyledIcon>
          </StyledContact>
        </SlideMenu> */}
      </StyledBlock>
    </ScrollHeader>
  );
};

const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  position: relative;
`;

const StyledTitle = styled.h1`
  color: #212f3c;
  font-family: "Mamelon";
  cursor: default;
  margin: 10px 0;
`;
const StyledHeaderMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;
const StyledHeaderLi = styled.li`
  list-style: none;
  link {
    padding: 10px 15px;
    transition: all 0.3s;
    /* color: #212f3c; */
    color: #fff;

    &:hover {
      transition: all 0.3s;
      color: #fa8072;
    }
    @media ${device.tablet} {
      display: inline-block;
    }
  }
`;
const StyledMenu = styled.a`
  display: none;
  padding: 10px 15px;
  transition: all 0.3s;
  /* color: #212f3c; */
  color: #fff;

  &:hover {
    transition: all 0.3s;
    color: #fa8072;
  }
  @media ${device.tablet} {
    display: inline-block;
  }
`;
const StyledContact = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
`;
const StyledIcon = styled.a`
  vertical-align: middle;
  transition: all 0.5s;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    svg {
      transition: all 0.5s;
      fill: #fa8072;
    }
  }
`;

const StyledClosebtn = styled.a`
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 15;
  cursor: pointer;
`;
const StyledLine = styled.div<{
  lineStyle?: string;
  lineWeight?: number;
  borderColor?: string;
}>`
  margin: 15px 0;
  height: 1px;
  border-bottom: ${(props) => (props.lineStyle ? props.lineStyle : "dashed")};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : theme.darkFont};
  border-width: ${(props) => (props.lineWeight ? props.lineWeight : 5)}px;
`;
export default Header;
