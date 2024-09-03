import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const NotFoundContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
  flex-grow: 1;
`
export const NotFoundImage = styled.img`
  height: 45vh;
  max-width: 55vh;
`
export const NotFoundHeadText = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: xx-large;
  font-family: 'Roboto';
  font-weight: 700;
  text-align: center;
`
export const NotFoundDescription = styled.p`
  color: ${props => (props.isDark ? ' #475569' : '#7e858e')};
  font-family: 'Roboto';
  font-size: large;
  text-align: center;
`
