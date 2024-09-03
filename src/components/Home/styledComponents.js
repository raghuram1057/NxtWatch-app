import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const BodyContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
  flex-grow: 1;
`
export const PremiumBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => (props.bannerShow ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30vh;
  margin: 20px;
  padding: 20px;
  align-self: center;
`
export const PremiumContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Logo = styled.img`
  min-height: 20px;
  width: 100%;
  max-width: 150px;

  @media screen and (max-width: 576px) {
    min-height: 25px;
    max-width: 120px;
  }
`
export const PremiumBannerDescription = styled.p`
  color: #313131;
  font-family: 'Roboto';
  font-size: medium;
  font-weight: 400;
`
export const CustomButton = styled.button`
  padding: 8px 13px;
  border-radius: 1px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: medium;
  cursor: pointer;
  border: #313131 1px solid;
  color: #313131;
  background-color: transparent;
`

export const CancelButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  align-self: flex-start;
  cursor: pointer;
`
