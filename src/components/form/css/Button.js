import styled from 'styled-components'

const Button = styled.button`
  color: black;
  font-weight: bold;
  font-size: 26 px;
  box-shadow: none;
  border: none;
  width: 100%;
  height: 2rem;
  display: block;
  white-space: none;
  background-color: blueviolet;
  &:disabled {
    background: #fff;
  }
`

export { Button }
