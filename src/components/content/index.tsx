import React from 'react';
import { Container } from './styles';
import { Route } from 'react-router-dom';
import Products from '../../pages/products';
import Suppliers from '../../pages/suppliers';
import Movements from '../../pages/movements';
import { DataProvider } from '../../contexts/data';

const Content: React.FC = () => {
  return (
    <Container>
      <DataProvider>
        <Route component={Products} path='/' exact />
        <Route component={Suppliers} path='/suppliers' exact />
        <Route component={Movements} path='/movements' exact />
      </DataProvider>
    </Container>
  );
};

export default Content;