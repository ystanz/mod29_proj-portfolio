import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, ButtonLink } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph pattern="secondary">Lista de tarefas feita com VueJS</Paragraph>
    <ButtonLink>Visualizar</ButtonLink>
  </Card>
)

export default Project
