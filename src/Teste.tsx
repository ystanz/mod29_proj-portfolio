import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  principal: boolean
  fontSize?: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${props => props.principal ? 'green' : 'blue'};
  font-size: ${(props) => props.fontSize || '16px'};
`
const ButtonDanger = styled(Button)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Button fontSize="18px" principal>Enviar</Button>
      <Button fontSize="14px" principal={false}>Cancelar</Button>
      <ButtonDanger as="a" principal>
        <span>Não clique aqui</span>
      </ButtonDanger>
    </>
  )
}

export default Teste
