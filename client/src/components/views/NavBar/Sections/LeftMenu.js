import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Acceuil</a>
    </Menu.Item>
    <SubMenu title={<span>Contact</span>}>
      <MenuItemGroup title="Fondateurs">
        <Menu.Item key="setting:1">Mahdi</Menu.Item>
        <Menu.Item key="setting:2">Mohamed</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu