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
    <SidebarContainer 
      isOpen = { isOpen } 
      onClick={toggle}
    >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink 
            to="sobre" 
            onClick={toggle}
          >
            SOBRE
          </SidebarLink>
          <SidebarLink 
            to="conheca" 
            onClick={toggle}
          >
            CONHEÇA
          </SidebarLink>
          <SidebarLink 
            to="servicos" 
            onClick={toggle}
          >
            SERVIÇOS
          </SidebarLink>
          <SidebarLink 
            to="cadastro" 
            onClick={toggle}
          >
            CADASTRO
          </SidebarLink>
        </SidebarMenu>
        <SideBTNWrap>
          <SidebarRouter to="/signin">ACESSAR</SidebarRouter>
        </SideBTNWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
