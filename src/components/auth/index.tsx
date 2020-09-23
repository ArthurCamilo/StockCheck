import React, { FormEvent, useState } from 'react';
import { useAuth } from '../../contexts/auth';
import { Grid, ImageContainer, LoginContainer, LoginArea, LoginButton, Logo, override } from './styles';
import logo from '../../assets/logo.png';
import { FormControl, Label, Input } from '../../globalStyles';
import { BounceLoader } from 'react-spinners';


const Auth: React.FC = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  function handleLogin(e: FormEvent) {
    setLoading(true);
    e.preventDefault();
    login();
  }
  return (
    <Grid>
      <LoginContainer>
        <LoginArea onSubmit={handleLogin}>
          <Logo src={logo} />
          <FormControl size={undefined}>
            <Label>Usuário</Label>
            <Input />
          </FormControl>
          <FormControl size={undefined}>
            <Label>Senha</Label>
            <Input type="password" />
          </FormControl>
          <LoginButton>
            {loading ? (
              <BounceLoader color="#fff" css={override} size="19"/>
            ) : (
              <>Login</>
            )}
          </LoginButton>
        </LoginArea>
      </LoginContainer>
      <ImageContainer>
      </ImageContainer>
    </Grid>
  )
};

export default Auth;