import React from 'react';
import { Grid } from './styles';
import SideMenu from '../sideMenu';
import Content from '../content';

const Layout: React.FC = () => {
  return (
    <Grid>
      <SideMenu />
      <Content />
    </Grid>
  )
};

export default Layout;