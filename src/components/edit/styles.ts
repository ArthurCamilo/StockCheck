import styled from 'styled-components';

export const EditContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  overflow: auto;
`;

export const Grid = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div { 
    margin: 5px 5px;
    flex: flex-grow;
  }

`;

export const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    margin: 5px 5px;
  }
`;

export const ReturnButton = styled.button`
  background-color: unset;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;

  :hover {
    background-color: var(--gray)
  }
`

