import React, { useState } from 'react';
import { EditContainer, Grid, ActionContainer, ReturnButton } from './styles';
import { FormControl, Input, Label, Select, Button } from '../../globalStyles'
import { FaArrowLeft } from 'react-icons/fa'

export interface Option {
  key: string | number;
  value: string;
}

export interface EditColumn {
  key: string;
  display: string;
  type: string;
  size: number | undefined;
  inputType: string;
  options: Option[] | null;
}

export interface Props {
  item: any;
  columns: EditColumn[];
  saveItem: Function;
  deleteItem: Function;
  returnToList: Function;
}

const Edit: React.FC<Props> = ({
  item,
  columns,
  saveItem,
  deleteItem,
  returnToList
}) => {

  const [editItem, setEditItem] = useState<any>(item);

  return (
    <EditContainer>
      <ReturnButton onClick={() => returnToList()} >
        <FaArrowLeft />&nbsp;Voltar
      </ReturnButton>
      <Grid>
        {columns.map(col => (
          <FormControl key={col.key} size={col.size}>
            <Label>{col.display}</Label>
            { col.inputType === 'input' ? (
              <Input 
                type={col.type} 
                name={col.key} 
                value={editItem[col.key]}
                onChange={(e) => setEditItem({...editItem, [e.target.name]: e.target.value})}
              />
            ): (
              <Select 
                typeof={col.type}
                name={col.key} 
                value={editItem[col.key]}
                onChange={(e) => setEditItem({...editItem, [e.target.name]: e.target.value})}
              >
                <option value="">Selecione</option>
                {col.options?.map(op => (
                  <option 
                    key={op.key} 
                    value={op.key}
                  >
                    {op.value}
                  </option>
                ))}
              </Select>
            )}
          </FormControl>
        ))}
        <ActionContainer>
          <Button display='warning' onClick={() => deleteItem()}>Excluir</Button>
          <Button display='action' onClick={() => saveItem(editItem)}>Salvar</Button>
        </ActionContainer>
      </Grid>
    </EditContainer>
  );
};

export default Edit;