import React, { useState } from 'react';
import { Content, Button, SearchBar, SearchIcon, TopSection, SearchBarWrapper } from '../../globalStyles';
import { Column } from '../../components/table';
import { EditColumn, Option } from '../../components/edit';
import Edit from '../../components/edit';
import Table from '../../components/table';
import Product from '../../models/product';
import { FaPlus, FaExchangeAlt } from 'react-icons/fa'
import { useData } from '../../contexts/data';

const Products: React.FC = () => {

  const { products, product, handleProductDelete, handleProductEdit, editProduct, returnToList } = useData();

  // const [products, setProducts] = useState<Product[]>([
  //   { ID: 1234512, Name: 'Produto 1', Quantity: 10, Value: 200.12 },
  //   { ID: 1234513, Name: 'Produto 2', Quantity: 10, Value: 2200.75 },
  //   { ID: 1234514, Name: 'Produto 3', Quantity: 100, Value: 124.64 },
  //   { ID: 1234515, Name: 'Produto 4', Quantity: 30, Value: 245.53 },
  //   { ID: 1234516, Name: 'Produto 5', Quantity: 50, Value: 512.24 }
  // ]);


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
            {/* <Button display='standard' ><FaExchangeAlt size={10} />&nbsp;Nova Movimentação</Button> */}
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