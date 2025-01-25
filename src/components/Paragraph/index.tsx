import { P } from './styles'

export type Props = {
  children: string
  pattern?: 'primary' | 'secondary'
}

const Paragraph = ({ children, pattern = 'primary' }: Props) => (
  <P pattern={pattern}>{children}</P>
)

export default Paragraph
