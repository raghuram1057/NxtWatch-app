import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 1;
  width: 20vw;
  min-height: 100vh;
  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
`

export const ContactUsHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: medium;
`

export const PagesLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`
export const PagesLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const ContactUsDescription = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: medium;
  text-align: left;
  margin-top: 16px;
`
