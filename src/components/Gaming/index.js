import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingItemsList from '../GamingItemsList'
import {
  MainContainer,
  BodyContainer,
  BodyHeader,
  BodyHead,
  IconContainer,
  ErrorContainer,
  ItemsListContainer,
  ErrorDescription,
  ErrorHeadText,
  RetryButton,
  ErrorImage,
  LoaderContainer,
} from './styledComponents'

const apiConstants = {
  success: 'SUCCESS',
  progress: 'IN_PROGRESS',
  failed: 'FAILED',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gamingData: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getApiDetails()
  }

  onClickRetry = () => {
    this.getApiDetails()
  }

  getFormatData = data => {
    const changeData = data.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
    }))
    return changeData
  }

  getApiDetails = async () => {
    this.setState({apiStatus: apiConstants.progress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formatedData = this.getFormatData(data.videos)
      this.setState({
        apiStatus: apiConstants.success,
        gamingData: formatedData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failed})
    }
  }

  renderDataView = () => {
    const {gamingData} = this.state
    return (
      <ItemsListContainer>
        {gamingData.map(each => (
          <GamingItemsList key={each.id} details={each} />
        ))}
      </ItemsListContainer>
    )
  }

  renderNoDataView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
        return (
          <ErrorContainer isDark={isDark}>
            <ErrorImage src={failureImage} alt="no videos" />
            <ErrorHeadText isDark={isDark}>
              No Search results found
            </ErrorHeadText>
            <ErrorDescription isDark={isDark}>
              Try different key words or remove search filter
            </ErrorDescription>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </ErrorContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderSuccessView = () => {
    const {gamingData} = this.state

    return gamingData.length > 0
      ? this.renderDataView()
      : this.renderNoDataView()
  }

  renderLoadingView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderContainer isDark={isDark}>
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDark ? '#ffffff' : '#000000'}
                height="50"
                width="50"
              />
            </div>
          </LoaderContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderFailedView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <ErrorContainer isDark={isDark}>
            <ErrorImage src={failureImage} alt="failure view" />
            <ErrorHeadText isDark={isDark}>
              Oops! Something Went Wrong
            </ErrorHeadText>
            <ErrorDescription isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </ErrorDescription>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </ErrorContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderDifferentViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.progress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failed:
        return this.renderFailedView()
      default:
        return null
    }
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark} = value

          const theme = isDark ? 'dark' : 'light'

          return (
            <BodyContainer theme={theme} data-testid="gaming">
              <Header />
              <MainContainer>
                <SideBar />
                <BodyContainer theme={theme}>
                  <BodyHeader isDark={isDark}>
                    <IconContainer isDark={isDark}>
                      <SiYoutubegaming color="#ff0000" size={35} />
                    </IconContainer>
                    <BodyHead isDark={isDark}>Gaming</BodyHead>
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

export default Gaming
