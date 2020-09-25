import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'
import { NullLiteral } from 'typescript';
import { Popover } from '@material-ui/core';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #008942;
    --secondary: #32373B;
    --tertiary: #C83E4D;
    --quaternary: #FFF385;
    --quinary: #41454A;
    --senary: #8A8C9042;
    --white: #FFFFFF;
    --gray: #ECECEC;
    --error: #C83E4D;
    --link: #5d80d6;
  }
`;

export const Input = styled.input`
    padding: 8px 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const Select = styled.select`
    padding: 8px 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

interface FormControlProps {
  size: number | undefined;
}

export const FormControl = styled.div<FormControlProps>`
    display: grid;
    margin-bottom: 8px;
    width: ${props => props.size === undefined ? 'auto' : props.size }px;
`;

export const Label = styled.label`
    width: 100%;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 200;
`;

export const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
`;

export const Content = styled.div`
  /* height: 100%; */
  width: 100%;
  padding: 25px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 6px;
  background-color: var(--white);
`;

interface ButtonProps {
  display: string
}

export const Button = styled.button<ButtonProps>`
  min-width: 100px;
  padding: 8px 16px;
  background-color: ${props => props.display == 'action' ? 'var(--primary)' : (props.display == 'warning' ? 'var(--error)' : 'var(--gray)')};
  color: ${props => props.display == 'standard' ? 'black' : 'white'};
  border-radius: 3px;
  text-align: center;
`;

export const SearchBarWrapper = styled.div`
  border-radius: 3px;
  border: 1px solid #ccc;
  min-width: 250px;
  padding: 0 16px;
  position: relative;

  svg {
    position: absolute;
    top: 8px;
    left: 8px;
    transition: 180ms ease-in-out;
  }
`

export const SearchBar = styled.input`

  width: 100%;
  height: 32px;
  padding-left: 16px;

  &::placeholder {
    opacity: 0.5;    
  }

`;

export const SearchIcon = styled(FaSearch)`
  width: 16px;
  height: 16px;
`;

export const TopSection = styled.section`
  button, div {
    margin-right: 5px;
  }

  width: 100%;

  position: relative;

  display: flex;
  margin-bottom: 15px;
`;

export const Alert = styled.button`
  align-self: flex-end;

  background-color: white;


  position: absolute;
  right: 40px;
  top: 40px;

  svg {
    height: 35px;
    font-size: 25px;
  }
`;

export const StyledPopover = styled(Popover)`
  div {
    padding: 10px;
    opacity: 0.6;
    cursor: pointer;
  }

  div:hover {
    opacity: 1;
  }
`;