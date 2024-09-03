import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#ebebeb')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginCardContainer = styled.div`
    background-color : ${props => (props.isDark ? '#000000' : '#ffffff')}
    border-radius: 16px;
    min-height: 30vh;
    max-width: 40vw;
    padding: 25px;
    box-shadow : 0px 5px 10px 0px #616e7c;
    display : flex;
    flex-direction : column;
    align-items : center;
`

export const Logo = styled.img`
  min-height: 40px;
  width: 100%;
  max-width: 200px;

  @media screen and (max-width: 576px) {
    min-height: 25px;
    max-width: 120px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const LabelEl = styled.label`
  color: ${props => (props.isDarkMode ? '#f8fafc' : '#7e858e')};
  font-family: 'Roboto';
  font-size: smaller;
  font-weight: 500;
  align-self: flex-start;
`
export const InputElContainer = styled.div`
  border: #7e858e 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px;
  height: 35px;
  width: 30vw;
  border-radius: 6px;
  margin-top: 6px;
`

export const InputEl = styled.input`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: small;
  background-color: transparent;
  outline: none;
  align-self: flex-start;
  border: none;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`
export const CustomButton = styled.button`
  color: #ffffff;
  font-weight: 600;
  font-size: smaller;
  background-color: #4f46e5;
  border: none;
  border-radius: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  margin-top: 10px;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: small;
  align-self: flex-start;
`
