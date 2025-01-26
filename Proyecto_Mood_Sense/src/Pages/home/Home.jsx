
import React from 'react';
import MoodSense from '../../Components/navbar/navbarC';
import { UserAuth } from '../../context/Context';

const Home = () => {

  const { user } = UserAuth();
  
  return (
    <div>
          <div className="menu-left">
            <MoodSense />
          </div>
    </div>
  );
};

export default Home;
