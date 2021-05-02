import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
  WebsiteDev
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre</FooterLinkTitle>
                <FooterLink to="/">Como funciona?</FooterLink>
                <FooterLink to="/">Depoimentos</FooterLink>
                <FooterLink to="/">Carreiras</FooterLink>
                <FooterLink to="/">Investimentos</FooterLink>
                <FooterLink to="/">Termos de Uso</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Vídeos</FooterLinkTitle>
                <FooterLink to="/">Envie seu vídeo</FooterLink>
                <FooterLink to="/">Embaixadores</FooterLink>
                <FooterLink to="/">Agências</FooterLink>
                <FooterLink to="/">Influenciadores</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contato</FooterLinkTitle>
                <FooterLink to="/">Contato</FooterLink>
                <FooterLink to="/">Suporte</FooterLink>
                <FooterLink to="/">Destinos</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/signin">Youtube</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Dinheirinho</SocialLogo>
            <WebsiteRights>dinheirinho© {new Date().getFullYear()} Todos os Direitos Reservados</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/"target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/"target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/"target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/"target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>  
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
      <WebsiteDev>Desenvolvido com muito ☕️  por DougGoncalves </WebsiteDev>
    </FooterContainer>
  )
}

export default Footer
