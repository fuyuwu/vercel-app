import * as React from "react";
import "./css.scss";
import { ITab } from "../../core/type";

export interface ITabsProps {
  data: ITab[];
  currentTab: string;
  onClick: (id: string) => void;
  tabRender: (data: ITab) => JSX.Element;
}

const Tabs: React.FC<ITabsProps> = (props) => {
  if (!props.data || props.data.length === 0) {
    return null;
  }
  const tabLiRenderer = () => {
    return props.data.map((data) => {
      return props.tabRender(data);
    });
  };

  return (
    <>
      <div className="tab_container">
        <ul className="tabs">{tabLiRenderer()}</ul>
      </div>
    </>
  );
};

export default Tabs;
