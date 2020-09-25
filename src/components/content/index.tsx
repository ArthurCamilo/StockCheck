import React from 'react';
import { Container } from './styles';
import { Route } from 'react-router-dom';
import Products from '../../pages/products';
import Suppliers from '../../pages/suppliers';
import Movements from '../../pages/movements';
import { useData } from '../../contexts/data';
import { Alert, StyledPopover } from '../../globalStyles';
import { Badge, Popover } from '@material-ui/core';
import { FaArrowDown, FaArrowUp, FaBell } from 'react-icons/fa'

const Content: React.FC = () => {

  const { notifications, deleteNotification } = useData();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Container>
      <Route component={Products} path='/' exact />
      <Route component={Suppliers} path='/suppliers' exact />
      <Route component={Movements} path='/movements' exact />
      <Alert aria-describedby={id} color="primary" onClick={handleClick}>
        <Badge badgeContent={notifications.length} color="secondary" >
          <FaBell />
        </Badge>
      </Alert>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {notifications.map(not => (
          <div onClick={() => deleteNotification(not)}>
            {not.Type == 'Min' ? (
              <FaArrowDown style={{ 'color': 'red' }} />
            ) : (
              <FaArrowUp style={{ 'color': 'green' }} />
            )}
            &nbsp;{not.Msg}
          </div>
        ))}
      </StyledPopover>
    </Container>
  );
};

export default Content;