import styled from 'styled-components';

// SM - Side Menu
// UC - User Container
// CO - Content

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 200px auto;
  grid-template-rows: auto 50px; 

  grid-template-areas:
    'SM CO'
    'UC CO';

  height: 100vh;
`;
