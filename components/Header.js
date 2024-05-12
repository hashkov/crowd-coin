import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = ({ children }) => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Item>CrownChain</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>
      </Menu.Menu>
      <Menu.Item>+</Menu.Item>
    </Menu>
  );
};
export default Header;
