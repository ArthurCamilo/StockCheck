import React from 'react';
import styled from 'styled-components';
import image from '../../assets/login.jpg';

export const Grid = styled.div`
    display: grid;
    align-items: middle;
    grid-template-columns: minmax(500px, 40%) auto;
    grid-template-rows: auto;
    grid-template-areas: 'LA LI';
    @media screen and (max-width: 900px) {
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas: 'LA';
    }
    height: 100vh;
`

export const LoginContainer = styled.div`
    grid-area: LA;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImageContainer = styled.div`
    grid-area: LI;
    background: black;
    @media screen and (max-width: 900px) {
        display: none;
    }
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    filter: grayscale(100%);
`

export const LoginArea = styled.form`
    align-self: center;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LoginButton = styled.button`
    width: 100%;
    padding: 14px 20px;
    background-color: var(--primary);
    color: white;
    font-size: 16px;
    border-radius: 3px;
    margin-top: 5px;
    text-align: center;
`;

export const Logo = styled.img`
    margin: 0px auto;
    height: 200px;
`;


export const override = `
  display: block;
  margin: 0 auto;
`;