import {Component} from 'react'
import {IoMdSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ReactContext from '../../context/ReactContext'
import HomeItemsList from '../HomeItemsList'

import {
  HomeBodyContainer,
  SearchInputContainer,
  SearchEl,
  SearchButton,
  ItemsListContainer,
  ErrorImage,
  ErrorHeadText,
  ErrorContainer,
  ErrorDescription,
  RetryButton,
} from './styledComponents'

const apiConstants = {
  success: 'SUCCESS',
  progress: 'IN_PROGRESS',
  failed: 'FAILED',
  initail: 'INITAIL',
}

class HomeBody extends Component {
  state = {homeData: [], apiStatus: apiConstants.initail, searchInput: ''}

  componentDidMount() {
    this.getApiDetails()
  }

  getFormatData = data => {
    const changeData = data.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      viewCount: each.view_count,
      publishedAt: each.published_at,
    }))
    return changeData
  }

  onClickRetry = () => {
    this.getApiDetails()
  }

  getApiDetails = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiConstants.progress})
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({apiStatus: apiConstants.success, homeData: formatedData})
    } else {
      this.setState({apiStatus: apiConstants.failed})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getApiDetails()
  }

  renderLoadingView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <ItemsListContainer isDark={isDark}>
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDark ? '#ffffff' : '#000000'}
                height="50"
                width="50"
              />
            </div>
          </ItemsListContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderDataView = () => {
    const {homeData} = this.state
    return (
      <ItemsListContainer>
        {homeData.map(each => (
          <HomeItemsList key={each.id} details={each} />
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
    const {homeData} = this.state

    return homeData.length > 0 ? this.renderDataView() : this.renderNoDataView()
  }

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
          return (
            <HomeBodyContainer>
              <SearchInputContainer>
                <SearchEl
                  placeholder="Search"
                  type="search"
                  isDark={isDark}
                  onChange={this.onChangeSearchInput}
                />
                <SearchButton
                  type="button"
                  isDark={isDark}
                  onClick={this.onClickSearchButton}
                  data-testid="searchButton"
                >
                  <IoMdSearch color={isDark ? '#ebebeb' : '#383838'} />
                </SearchButton>
              </SearchInputContainer>
              {this.renderDifferentViews()}
            </HomeBodyContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default HomeBody
