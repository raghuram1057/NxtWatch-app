import {Link} from 'react-router-dom'
import ReactContext from '../../context/ReactContext'
import './index.css'

import {
  ListItemContainer,
  ThumbnailImage,
  ItemDetailsContainer,
  Title,
  PEl,
} from './styledComponents'

const GamingItemsList = props => {
  const {details} = props
  console.log(details)
  const {thumbnailUrl, id, title, viewCount} = details

  return (
    <ReactContext.Consumer>
      {value => {
        const {isDark} = value
        console.log(isDark)

        return (
          <Link to={`videos/${id}`} className="linkEl">
            <ListItemContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ItemDetailsContainer>
                <Title isDark={isDark}>{title}</Title>
                <PEl isDark={isDark}>{viewCount} Watching Worldwide</PEl>
              </ItemDetailsContainer>
            </ListItemContainer>
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default GamingItemsList
