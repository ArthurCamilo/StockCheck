import React, { useState } from 'react';
import { Content, Button, SearchBar, SearchIcon, TopSection, SearchBarWrapper } from '../../globalStyles';
import { Column } from '../../components/table';
import { EditColumn, Option } from '../../components/edit';
import Edit from '../../components/edit';
import Table from '../../components/table';
import Movement from '../../models/movement';
import { FaPlus, FaExchangeAlt } from 'react-icons/fa'
import { useData } from '../../contexts/data';

const Movements: React.FC = () => {

  const { movements, products, suppliers, movement, handleMovementDelete, handleMovementEdit, editMovement, returnToList } = useData();

  const columns: Column[] = [
    { key: 'Type', display: 'Tipo', type: 'string' },
    { key: 'Product', display: 'Produto', type: 'string' },
    { key: 'Supplier', display: 'Fornecedor', type: 'string' },
    { key: 'Quantity', display: 'Quantidade', type: 'number' },
    { key: 'Date', display: 'Data', type: 'date' }
  ];
  
  const editColumns: EditColumn[] = [
    { key: 'Type', display: 'Tipo', type: 'string', size: 300, inputType: 'select', options: [{ key: 'Entrada', value: 'Entrada' }, { key: 'Saída', value: 'Saída' }]},
    { key: 'Product', display: 'Produto', type: 'string', size: 300, inputType: 'select', options: products.map(prod => { return { key: prod.Name, value: prod.Name }})},
    { key: 'Supplier', display: 'Fornecedor', type: 'string', size: 300, inputType: 'select', options: suppliers.map(supp => { return { key: supp.Name, value: supp.Name }})},
    { key: 'Quantity', display: 'Quantidade', type: 'number', size: 300, inputType: 'input', options: null },
    { key: 'Date', display: 'Data', type: 'date', size: 300, inputType: 'input', options: null }
  ];

  return (
    <Content>
      {movement == null ? (
        <>
          <TopSection>
            <SearchBarWrapper>
              <SearchIcon />
              <SearchBar placeholder="Nome, email" />
            </SearchBarWrapper>
            <Button display='action' onClick={() => editMovement(null)}><FaPlus size={10} />&nbsp;Nova Movimentação</Button>
          </TopSection>
          <Table columns={columns} items={movements} select={editMovement} />
        </>
      ) : (
        <Edit item={movement} columns={editColumns} saveItem={handleMovementEdit} deleteItem={handleMovementDelete} returnToList={() => returnToList()} />
      )}
    </Content>
  );
};

export default Movements;