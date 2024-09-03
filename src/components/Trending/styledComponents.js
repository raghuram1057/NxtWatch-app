import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const BodyContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  min-height: 100vh;
  width: 100%;
  flex-grow: 1;
`

export const ItemsListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
`
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`
export const ErrorImage = styled.img`
  height: 45vh;
  max-width: 55vh;
`
export const ErrorHeadText = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: xx-large;
  font-family: 'Roboto';
  font-weight: 700;
  text-align: center;
`
export const ErrorDescription = styled.p`
  color: ${props => (props.isDark ? ' #475569' : '#7e858e')};
  font-family: 'Roboto';
  font-size: large;
  text-align: center;
`
export const RetryButton = styled.button`
  background-color: #00306e;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: medium;
  cursor: pointer;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const BodyHeader = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f4f4f4')};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`
export const BodyHead = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000d00')};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: xx-large;
  margin-left: 10px;
`
export const IconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#cbd5e1')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  height: 50px;
  width: 50px;
  margin-left: 20px;
`
