import React, { Suspense } from 'react';
import { useAppSelector } from '../../store/hooks';
import Loading from '../Loading';
import { theme } from '../../core';

const componentMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  WorkCard: React.lazy(() => import('../WorkCard')),
  Experience: React.lazy(() => import('../Experience')),
  Skills: React.lazy(() => import('../Skills')),
  Profile: React.lazy(() => import('../Profile')),
};

const TabContentRenderer: React.FC = () => {
  const { tabs, currentTabId } = useAppSelector(state => state.tab);
  const currentTab = tabs.find(t => t.id === currentTabId);

  if (!currentTab) return null;

  const CurrentComponent = componentMap[currentTab.component];

  if (!CurrentComponent) {
    console.warn(`Component ${currentTab.component} not found`);
    return null;
  }

  return (
    <Suspense fallback={<Loading visible bgColor={theme.darkFont} />}>
      <CurrentComponent />
    </Suspense>
  );
};

export default TabContentRenderer;
