import React, { useState } from 'react';
import NavItem from './NavItem';

function NavigationSection() {

  const [items,setItems] = useState([
    {id:1,name:'About me', active:true}
    ,{id:2,name:'Portfolio', active:false}
    ,{id:3,name:'Contact me', active:false}
    ,{id:4,name:'Resume', active:false}
  ]);
  return( 
    <div>
      <ul>
        <NavItem items={items}/>
    </ul>
  </div>
  );
}

export default NavigationSection;
