import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavBarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Dinheirinho</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to="sobre"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-40}
                activeClass="active"
              >
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="conheca"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-20}
                activeClass="active"
              >
                Conheça
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="servicos"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-20}
                activeClass="active"
              >
                Serviços
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="cadastro"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-20}
                activeClass="active"
              >
                Cadastro
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Acessar</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar

