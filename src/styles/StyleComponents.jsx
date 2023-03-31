import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.background};
  border: none;
  border-radius: 9px;
  padding: 0.75rem 1rem;
  margin-top: 5px;
  color: ${(props) => props.theme.input};
  &::placeholder {
    font-weight: 200;
    color: ${(props) => props.theme.input};
    font-size: 0.875rem;
  }
`
export const Label = styled.label`
  color: ${(props) => props.theme.text};
  font-weight: 400;
`
export const Line = styled.hr`
  border: none;
  margin: 1rem 0;
  border-top: 2px solid ${(props) => props.theme.white};
  width: 100%;
`
