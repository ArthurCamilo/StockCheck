import React, { useState } from 'react';
import { Content, Button, SearchBar, SearchIcon, TopSection, SearchBarWrapper } from '../../globalStyles';
import { Column } from '../../components/table';
import { EditColumn, Option } from '../../components/edit';
import Edit from '../../components/edit';
import Table from '../../components/table';
import Supplier from '../../models/supplier';
import { FaPlus, FaExchangeAlt } from 'react-icons/fa'
import { useData } from '../../contexts/data';

const Suppliers: React.FC = () => {

  const { suppliers, supplier, handleSupplierDelete, handleSupplierEdit, editSupplier, returnToList } = useData();

  const columns: Column[] = [
    { key: 'Name', display: 'Nome', type: 'string' },
    { key: 'Email', display: 'Email', type: 'string' },
    { key: 'Phone', display: 'Telefone', type: 'string' },
  ];
  
  const editColumns: EditColumn[] = [
    { key: 'PersonType', display: 'Tipo de Pessoa', type: 'string', size: 200, inputType: 'input', options: null},
    { key: 'Name', display: 'Nome Fantasia', type: 'string', size: 500, inputType: 'input', options: null},
    { key: 'ID', display: 'Código', type: 'string', size: 100, inputType: 'input', options: null},
    
    { key: 'CompanyID', display: 'CPF/CNPJ', type: 'string', size: 300, inputType: 'input', options: null},
    { key: 'CompanyName', display: 'Razão Social', type: 'string', size: 550, inputType: 'input', options: null},

    { key: 'Email', display: 'E-mail', type: 'string', size: 500, inputType: 'input', options: null},
    { key: 'Phone', display: 'Telefone', type: 'string', size: 200, inputType: 'input', options: null},
    { key: 'Cellphone', display: 'Celular', type: 'string', size: 200, inputType: 'input', options: null},
    
    { key: 'Street', display: 'Rua', type: 'string', size: 300, inputType: 'input', options: null},
    { key: 'Number', display: 'Nº', type: 'string', size: 300, inputType: 'input', options: null},
    { key: 'Neighborhood', display: 'Bairro', type: 'string', size: 300, inputType: 'input', options: null},

    { key: 'CEP', display: 'CEP', type: 'string', size: 300, inputType: 'input', options: null},
    { key: 'City', display: 'Cidade', type: 'string', size: 300, inputType: 'input', options: null},
    { key: 'State', display: 'Estado', type: 'string', size: 300, inputType: 'input', options: null}
    
    // { key: 'Cellphone', display: 'Nome', type: 'string', size: 300, inputType: 'input', options: null},
    // { key: 'Cellphone', display: 'Nome', type: 'string', size: 300, inputType: 'input', options: null},
   
    // { key: 'Name', display: 'Nome', type: 'string', size: 300, inputType: 'input', options: null},
    // { key: 'Email', display: 'Email', type: 'string', size: 300, inputType: 'input', options: null},
    // { key: 'Phone', display: 'Telefone', type: 'number', size: 300, inputType: 'input', options: null },
  ];

  return (
    <Content>
      {supplier == null ? (
        <>
          <TopSection>
            <SearchBarWrapper>
              <SearchIcon />
              <SearchBar placeholder="Nome, email" />
            </SearchBarWrapper>
            <Button display='action' onClick={() => editSupplier(null)}><FaPlus size={10} />&nbsp;Novo Fornecedor</Button>
          </TopSection>
          <Table columns={columns} items={suppliers} select={editSupplier} />
        </>
      ) : (
        <Edit item={supplier} columns={editColumns} saveItem={handleSupplierEdit} deleteItem={handleSupplierDelete} returnToList={() => returnToList()} />
      )}
    </Content>
  );
};

export default Suppliers;