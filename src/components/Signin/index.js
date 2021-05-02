import React from 'react'
import {
  Container,
  FormWrap,
  Icon, 
  Form, 
  FormButton, 
  FormContent, 
  FormH1, 
  FormInput, 
  FormLabel,
  Text 
} from './SigninElements'

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dinheirinho</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Acesse sua conta</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Senha</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Entrar</FormButton>
              <Text>Esqueceu sua senha ?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signin
