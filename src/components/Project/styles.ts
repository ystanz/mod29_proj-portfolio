import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`

export const ButtonLink = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.buttonColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  transition: all 0.3s ease-in-out;
`
