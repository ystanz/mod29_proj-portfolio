import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.pattern === 'primary'
      ? props.theme.primaryColor
      : props.theme.secondaryColor};
  line-height: 22px;
  transition: all 0.3s ease-in-out;
`
