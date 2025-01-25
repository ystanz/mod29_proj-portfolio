import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.pattern === 'primary' ? '#282a35' : '#949494')};
  line-height: 22px;
`
