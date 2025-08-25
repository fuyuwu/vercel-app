import React from 'react';
import { useAppSelector } from '../../store/hooks';
import WorkCard from '../WorkCard';
import Skills from '../Skills';
import Profile from '../Profile';
import Experience from '../Experience';

const componentMap: Record<string, React.ComponentType<{ tabId: string }>> = {
  'WorkCard': WorkCard,
  'Skills': Skills,
  'Profile': Profile,
  'Experience': Experience,
};

const TabContentRenderer: React.FC = () => {
  const { tabs } = useAppSelector(state => state.tab);
  return (
    <>
      {tabs.map((tab) => {
        const CurrentComponent = componentMap[tab.component];
        
        if (!CurrentComponent) {
          console.warn(`Component ${tab.component} not found`);
          return null;
        }

        return (
          <div key={tab.id} style={{ order: tab.order }}>
            <CurrentComponent tabId={tab.id} />
          </div>
        );
      })}
    </>
  );
};

export default TabContentRenderer;
