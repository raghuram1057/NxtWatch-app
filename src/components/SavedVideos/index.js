import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

import ReactContext from '../../context/ReactContext'

import Header from '../Header'

import SideBar from '../SideBar'
import TrendingSavedItemList from '../TrendingSavedItemList'

import {
  MainContainer,
  BodyContainer,
  ErrorContainer,
  ItemsListContainer,
  ErrorDescription,
  ErrorHeadText,
  ErrorImage,
  BodyHeader,
  BodyHead,
  IconContainer,
} from './styledComponents'

class Trending extends Component {
  renderDataView = () => (
    <ReactContext.Consumer>
      {value => {
        const {savedItems} = value
        return (
          <ItemsListContainer>
            {savedItems.map(each => (
              <TrendingSavedItemList key={each.id} details={each} />
            ))}
          </ItemsListContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderNoDataView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDark} = value
        const noVideosImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
        return (
          <ErrorContainer isDark={isDark}>
            <ErrorImage src={noVideosImage} alt="no saved videos" />
            <ErrorHeadText isDark={isDark}>No saved videos found</ErrorHeadText>
            <ErrorDescription isDark={isDark}>
              You can save your videos while watching them
            </ErrorDescription>
          </ErrorContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderDifferentViews = () => (
    <ReactContext.Consumer>
      {value => {
        const {savedItems} = value
        return savedItems.length > 0
          ? this.renderDataView()
          : this.renderNoDataView()
      }}
    </ReactContext.Consumer>
  )

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark} = value

          const theme = isDark ? 'dark' : 'light'

          return (
            <BodyContainer theme={theme} data-testid="savedVideos">
              <Header />
              <MainContainer>
                <SideBar />
                <BodyContainer theme={theme}>
                  <BodyHeader isDark={isDark}>
                    <IconContainer isDark={isDark}>
                      <HiFire color="#ff0000" size={35} />
                    </IconContainer>
                    <BodyHead isDark={isDark}>Saved Videos</BodyHead>
                  </BodyHeader>
                  {this.renderDifferentViews()}
                </BodyContainer>
              </MainContainer>
            </BodyContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Trending
