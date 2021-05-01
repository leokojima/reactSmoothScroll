import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBTNWrap,
  SidebarRouter
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = { isOpen } onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="sobre">Sobre</SidebarLink>
          <SidebarLink to="conheca">Conheça</SidebarLink>
          <SidebarLink to="servicos">Serviços</SidebarLink>
          <SidebarLink to="cadastro">Cadastro</SidebarLink>
        </SidebarMenu>
        <SideBTNWrap>
          <SidebarRouter to="/signin">Acessar</SidebarRouter>
        </SideBTNWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
