import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Yuri Stanzani</Title>
      <Paragraph pattern="secondary" fontSize={16}>
        ystanz
      </Paragraph>
      <Description pattern="primary" fontSize={12}>
        Desenvolvedor Front-end em Formação
      </Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
