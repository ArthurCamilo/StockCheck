import React from 'react';
import { Content, Button, SearchBar, SearchIcon, TopSection, SearchBarWrapper } from '../../globalStyles';
import { Column } from '../../components/table';
import { EditColumn, Option } from '../../components/edit';
import Edit from '../../components/edit';
import Table from '../../components/table';
import { FaPlus } from 'react-icons/fa'
import { useData } from '../../contexts/data';

const Products: React.FC = () => {

  const { products, product, handleProductDelete, handleProductEdit, editProduct, returnToList } = useData();

  const columns: Column[] = [
    { key: 'ID', display: 'Código', type: 'string' },
    { key: 'Name', display: 'Nome', type: 'string' },
    { key: 'Quantity', display: 'Quantidade', type: 'number' },
    { key: 'Value', display: 'Valor', type: 'number' }
  ];
  
  const editColumns: EditColumn[] = [
    { key: 'ID', display: 'Código', type: 'string', size: undefined, inputType: 'input', options: null},
    { key: 'Name', display: 'Nome', type: 'string', size: 400, inputType: 'input', options: null},
    { key: 'MinQuantity', display: 'Quantidade mínima', type: 'number', size: undefined, inputType: 'input', options: null },
    { key: 'MaxQuantity', display: 'Quantidade máxima', type: 'number', size: undefined, inputType: 'input', options: null },
    { key: 'Quantity', display: 'Quantidade atual', type: 'number', size: undefined, inputType: 'input', options: null },
    { key: 'Value', display: 'Valor', type: 'number', size: undefined, inputType: 'input', options: null }
  ];

  return (
    <Content>
      {product == null ? (
        <>
          <TopSection>
            <SearchBarWrapper>
              <SearchIcon />
              <SearchBar placeholder="Código, nome, quantidade" />
            </SearchBarWrapper>
            <Button display='action' onClick={() => editProduct(null)}><FaPlus size={10} />&nbsp;Novo Produto</Button> 
          </TopSection>
          <Table columns={columns} items={products} select={editProduct} />
        </>
      ) : (
        <Edit item={product} columns={editColumns} saveItem={handleProductEdit} deleteItem={handleProductDelete} returnToList={() => returnToList()} />
      )}
    </Content>
  );
};

export default Products;