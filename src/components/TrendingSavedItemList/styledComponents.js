import styled from 'styled-components'

export const ListItemContainer = styled.li`
  margin-left: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 50vw;
  min-width: 60vw;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  max-height: 160px;
`
export const ItemDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  align-self: flex-start;
  margin-top: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`
export const Title = styled.h1`
  color: ${props => (props.isDark ? '#f1f1f1' : '#212121')};
  font-size: medium;
  font-family: 'Roboto';
  font-weight: 500;
`
export const PEl = styled.p`
  color: ${props => (props.isDark ? '#00306e' : '#64748b')};
  font-family: 'Roboto';
  font-size: small;
  line-height: 0;
  margin-right: 10px;
  list-style-type: disc;
`
export const ViewsPublishedTimeContainer = styled.div`
  display: flex;
`
