import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ReactContext from '../../context/ReactContext'

import './index.css'

import {
  ListItemContainer,
  ThumbnailImage,
  ItemDetailsContainer,
  VideoDetailsContainer,
  Title,
  PEl,
  ViewsPublishedTimeContainer,
  ChannelLogo,
} from './styledComponents'

const ItemsList = props => {
  const {details} = props
  console.log(details)
  const {thumbnailUrl, id, title, viewCount, channel, publishedAt} = details
  const {name, profileImageUrl} = channel

  return (
    <ReactContext.Consumer>
      {value => {
        const {isDark} = value
        console.log(isDark)

        const formatDistanceNow = formatDistanceToNow(new Date(publishedAt))
        const postedAt = formatDistanceNow.split(' ')[1]

        return (
          <Link to={`videos/${id}`} className="linkEl">
            <ListItemContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ItemDetailsContainer>
                <ChannelLogo src={profileImageUrl} alt={name} />
                <VideoDetailsContainer>
                  <Title isDark={isDark}>{title}</Title>
                  <PEl isDark={isDark}>{name}</PEl>
                  <ViewsPublishedTimeContainer>
                    <PEl isDark={isDark}>{viewCount} views</PEl>
                    <PEl isDark={isDark}>{postedAt} years ago</PEl>
                  </ViewsPublishedTimeContainer>
                </VideoDetailsContainer>
              </ItemDetailsContainer>
            </ListItemContainer>
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default ItemsList
