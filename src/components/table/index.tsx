import React from 'react';
import { TableContainer, Grid, Td, Th, EmptyTd } from './styles';
import { FcAddDatabase } from 'react-icons/fc'
import { format, addMinutes } from 'date-fns'

export interface Column {
  key: string;
  display: string;
  type: string;
}

export interface Props {
  items: any[];
  columns: Column[];
  select: Function;
}

const Table: React.FC<Props> = ({
  items,
  columns,
  select
}) => {
  return (
    <TableContainer>
      <Grid>
        <thead>
          <tr>
            {columns.map(col => (
              <Th type={col.type} key={col.key}>
                {col.display}
              </Th>
            ))}
          </tr>
        </thead>
        {items.length > 0 ? (
          <tbody>
            {items.map(item => (
              <tr key={item['key']} onClick={() => select(item)}>
                {columns.map(col => (
                  <Td type={col.type} key={col.key}>
                    {col.type === 'date' ? (
                      <>
                        {format(
                          addMinutes(new Date(item[col.key]), 
                          new Date(item[col.key]).getTimezoneOffset())
                          , 'dd/MM/yyyy')
                        }
                      </>
                    ) : (
                      <> 
                        {item[col.key]}
                      </>
                    )}
                  </Td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <EmptyTd colSpan={columns.length}>
                <FcAddDatabase size={60} />
                <br />
                <br />
                <label>A tabela não tem dados, tente adicionar um novo!</label>
              </EmptyTd>
            </tr>
          </tbody>
        )}
      </Grid>
    </TableContainer>
  );
};

export default Table;