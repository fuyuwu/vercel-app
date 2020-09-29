import React, { useState, useEffect } from "react";
import "./css.scss";
import { MenuBtn, CloseBtn, Mail, CellPhone } from "../Icons";

interface ISlideMenuProps {
  visible: boolean;
  ContentComponent?: React.ReactNode;
}

const SlideMenu: React.FC<ISlideMenuProps> = (props) => {
  return (
    <div className={`slideBlock ${props.visible ? "open" : "close"}`}>
      <div className="slideContent">
        {props.ContentComponent ? props.ContentComponent : props.children}
      </div>
    </div>
  );
};

export default SlideMenu;
