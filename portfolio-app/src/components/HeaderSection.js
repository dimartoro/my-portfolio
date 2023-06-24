import React, { useState } from 'react';
import NavigationSection from './NavigationSection'
import profileImg from '../assets/images/myphoto.jpg'

function HeaderSection() {
  return (
    <div>
      <header className="header" > 
          <img className="profile-image" src={profileImg}/>
          <h1>Diana Castro Portafolio</h1> 
          <nav> 
            <NavigationSection/>
          </nav>
      </header>
    </div>
  );
}
export default HeaderSection;