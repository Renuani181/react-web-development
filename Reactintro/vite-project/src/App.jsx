import React from 'react';
import "./App.css";
// import RestaurantList from './components/Axios.jsx/RestaurantList';
import PostList from './components/Axios.jsx/PostList';
// import DashboardLayoutBasic from './components/MUI/DashboardLayoutBasic.jsx';
// import AvatarComponent from './components/MUI/AvatarComponent.jsx';
// import AnimationComponent from './components/MUI/AnimationComponent.jsx';

function App() {
  return (
    <div className="App">
      {/* <DashboardLayoutBasic />
      <AvatarComponent/>
      <AnimationComponent/> */}
      <PostList/>
    </div>
  );
}

export default App;




