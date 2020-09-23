import React from 'react';
import { 
  Container, 
  MenuItemButton, 
  Nav, 
  Logo, 
  UserContainer, 
  Profile,
  Avatar,
  UserData,
  Icons,
  LogoutIcon,
  NotificationIcon
} from './styles';
import { IconType } from 'react-icons';
import { FaCube, FaTruck, FaExchangeAlt, FaSignOutAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import logo from '../../assets/logo.png';
import { useAuth } from '../../contexts/auth';

export interface Props {
  selected?: boolean;
  icon: IconType;
  name: string;
  path: string;
}


const MenuItem: React.FC<Props> = ({
  selected,
  icon,
  name,
  path
}) => {
  const Icon = icon;
  return (
    <Nav to={path} exact activeClassName="selected-item">
      <MenuItemButton className={selected ? 'active' : ''} >
        <Icon size="16" />      
        <span>{name}</span>
      </MenuItemButton>
    </Nav>
  );
};


const SideMenu: React.FC = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Container>
        <Logo src={logo} />
        <MenuItem name="Produtos" path="" icon={FaCube} />
        <MenuItem name="Fornecedores" path="suppliers" icon={FaTruck} />
        <MenuItem name="Movimentações" path="movements" icon={FaExchangeAlt} />
      </Container>
      <UserContainer>
        <Profile>
          <Avatar />
          <UserData>
            <strong>{user?.name}</strong>
            <span>{user?.email}</span>
          </UserData>
        </Profile>
        <Icons>
          <LogoutIcon onClick={() => logout()} />
          {/* <NotificationIcon /> */}
        </Icons>
      </UserContainer>
    </>
  )
};

export default SideMenu;