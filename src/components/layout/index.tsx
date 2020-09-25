import React from 'react';
import { Grid } from './styles';
import SideMenu from '../sideMenu';
import Content from '../content';
import { DataProvider } from '../../contexts/data';

const Layout: React.FC = () => {
  return (
    <Grid>
      <SideMenu />
      <DataProvider>
        <Content />
      </DataProvider>
    </Grid>
  )
};

export default Layout;