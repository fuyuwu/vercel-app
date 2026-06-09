'use client';

import React, { Suspense } from 'react';
import { useAppSelector } from '../../store/hooks';
import Loading from '../Loading';
import { theme } from '../../core';

const WorkCard  = React.lazy(() => import('../WorkCard'));
const Experience = React.lazy(() => import('../Experience'));
const Skills    = React.lazy(() => import('../Skills'));
const Profile   = React.lazy(() => import('../Profile'));

const componentMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  WorkCard,
  Experience,
  Skills,
  Profile,
};

const TabContentRenderer: React.FC = () => {
  const { tabs, currentTabId } = useAppSelector(state => state.tab);

  return (
    <>
      {tabs.map(tab => {
        const Comp = componentMap[tab.component];
        if (!Comp) return null;
        const isActive = tab.id === currentTabId;

        return (
          <div
            key={tab.id}
            style={{ display: isActive ? 'block' : 'none' }}
          >
            <Suspense fallback={<Loading visible bgColor={theme.darkFont} />}>
              <Comp />
            </Suspense>
          </div>
        );
      })}
    </>
  );
};

export default TabContentRenderer;
