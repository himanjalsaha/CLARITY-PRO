import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import { HomeScreen } from '../components/HomeScreen';
import Taskscomponent from '../components/Taskscomponent';
import Analytics from '../components/Analytics'
import Settings from '../components/Settings';
const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('HomeScreen');

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  // Define components to be rendered based on selection
  const componentsMap = {
    HomeScreen: <HomeScreen  />,
    TasksComponent: <Taskscomponent />,
    Analytics:<Analytics/>,
    Settings:<Settings/>
  };

  return (
    <div className="flex flex-row">
      <SideNav onComponentChange={handleComponentChange} />
      {componentsMap[selectedComponent]}
    </div>
  );
};

export default Home;
