import styled from 'styled-components'

export const ListItemContainer = styled.li`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45vh;
  margin-bottom: 20px;
`
export const ThumbnailImage = styled.img`
  width: 25vh;
  max-height: 180px;
`
export const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  align-items: flex-start;
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
