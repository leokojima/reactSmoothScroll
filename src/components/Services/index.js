import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-2.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Services = () => {
  return (
   <ServicesContainer id="servicos">
     <ServicesH1>Nossos Serviços</ServicesH1>
     <ServicesWrapper>
       <ServicesCard>
         <ServicesIcon src={Icon1}/>
         <ServicesH2>Fazendo deploy na nuvem</ServicesH2>
         <ServicesP>O deploy pode ser feito na Microsoft Azure</ServicesP>
       </ServicesCard>
       <ServicesCard>
         <ServicesIcon src={Icon2}/>
         <ServicesH2>Fazendo deploy na nuvem</ServicesH2>
         <ServicesP>O deploy pode ser feito na AWS</ServicesP>
       </ServicesCard>
       <ServicesCard>
         <ServicesIcon src={Icon3}/>
         <ServicesH2>Fazendo deploy na nuvem</ServicesH2>
         <ServicesP>O deploy pode ser feito na Google Cloud</ServicesP>
       </ServicesCard>
     </ServicesWrapper>
   </ServicesContainer>
  )
}

export default Services
