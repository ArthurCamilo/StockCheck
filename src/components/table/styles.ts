import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

export const Grid = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    box-shadow: 1px 1px 1px rgba(0,0,0,0.04), 1px 1px 1px rgba(0,0,0,0.10);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  /* tr:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.10);
  } */

  th, td {
    padding: 16px 8px;
  }

  tbody tr:hover{
    background: var(--gray);
    transform: scale(1,1);
    -webkit-transform: scale(1,1);
    -moz-transform: scale(1,1);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

`;

export interface TableProps {
  type: string;
}

export const Td = styled.td<TableProps>`
  text-align: ${(props) => props.type === 'string' ? 'left' : 'right'};
  font-size: 13px;
  border-top : 1px solid rgba(0, 0, 0, 0);
  border-bottom : 1px solid rgba(0, 0, 0, 0);
`;

export const EmptyTd = styled.td`
  text-align: center;
  box-shadow: none;
  border: none;
  
  label {
    opacity: 0.5;
    font-size: 14px;
  }

  ~tr {
    box-shadow: none;
  }
`;

export const Th = styled.th<TableProps>`
  text-align: ${(props) => props.type === 'string' ? 'left' : 'right'};
`;

