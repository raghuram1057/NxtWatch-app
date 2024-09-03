import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const BodyContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
  flex-grow: 1;
  padding: 20px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const TitleViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeadText = styled.h1`
  color: ${props => (props.isDark ? '#ebebeb' : '#212121')};
  font-family: 'Roboto';
  font-size: medium;
  font-weight: 500;
`
export const ViewsLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const ElContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const PEl = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: medium;
  margin-left: 10px;
`
export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-left: 10px;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-size: small;
`
export const HrLine = styled.hr`
  border: #64748b 1px solid;
  width: 100%;
`
export const ChannelsDetailsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`
export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  align-self: flex-start;
`

export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
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
