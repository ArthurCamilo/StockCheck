import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdNotifications, MdExitToApp } from "react-icons/md";

// SM - Side Menu
export const Container = styled.div`
    grid-area: SM;
    background-color: var(--secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    /* justify-content: space-between; */
`;

export const Nav = styled(NavLink)`
    &.selected-item button{
      background-color: var(--primary);
      opacity: 1;
    }
`;

export const MenuItemButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-align: left;
  width: 175px;
  height: 48px;
  padding: 8px 16px;
  background-color: var(--quinary);
  color: var(--white);
  border-radius: 6px;
  margin-bottom: 5px;
  opacity: 0.6;

  
  :hover {
    opacity: 1;
  }

  span {
    margin-left: 16px !important;
  }
`

export const Logo = styled.img`
  margin: 16px auto;
  height: 125px;
`;

export const UserContainer = styled.div`
  grid-area: UC;
  color: var(--white);
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    font-size: 13px;
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 9px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const LogoutIcon = styled(MdExitToApp)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const NotificationIcon = styled(MdNotifications)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;