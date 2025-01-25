import { P } from './styles'

export type Props = {
  children: string
  pattern?: 'primary' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, pattern = 'primary', fontSize }: Props) => (
  <P fontSize={fontSize} pattern={pattern}>
    {children}
  </P>
)

export default Paragraph
