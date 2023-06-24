import React, { useState } from 'react';

function NavItem(props) {
  return props.items.map((item,i)=>(
    <li key = {item.id}>
      <a className={item.active?'activeItem':''} href='' >{item.name}</a>
    </li>
  ));
}

export default NavItem;
