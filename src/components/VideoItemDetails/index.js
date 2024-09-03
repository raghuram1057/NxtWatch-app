import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  MainContainer,
  BodyContainer,
  LoaderContainer,
  TitleViewsContainer,
  HeadText,
  ViewsLikesContainer,
  PEl,
  CustomButton,
  ElContainer,
  HrLine,
  ChannelsDetailsContainer,
  ChannelLogo,
  ProfileDetailsContainer,
  ErrorContainer,
  ErrorDescription,
  ErrorHeadText,
  RetryButton,
  ErrorImage,
} from './styledComponents'

const apiConstants = {
  success: 'SUCCESS',
  progress: 'IN_PROGRESS',
  failed: 'FAILED',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    videoItemData: {},
    apiStatus: apiConstants.initial,
    likeActive: false,
    disLikeActive: false,
  }

  componentDidMount() {
    this.getApiDetails()
  }

  onClickLike = () => {
    this.setState(prevState => ({
      likeActive: !prevState.likeActive,
      disLikeActive: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      disLikeActive: !prevState.disLikeActive,
      likeActive: false,
    }))
  }

  getFormatData = data => {
    const changeData = {
      id: data.id,
      title: data.title,
      thumbnailUrl: data.thumbnail_url,
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      },
      viewCount: data.view_count,
      publishedAt: data.published_at,
      videoUrl: data.video_url,
      description: data.description,
    }
    return changeData
  }

  onClickRetry = () => {
    this.getApiDetails()
  }

  getApiDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiConstants.progress})

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
      const formatedData = this.getFormatData(data.video_details)
      this.setState({
        apiStatus: apiConstants.success,

        videoItemData: formatedData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failed})
    }
  }

  renderSuccessView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDark, savedItems, updateSave} = value
        const {videoItemData, likeActive, disLikeActive} = this.state
        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          channel,
          description,
          id,
        } = videoItemData

        const isPresent = savedItems.find(each => each.id === id)

        const saveButtonText = isPresent !== undefined ? 'Saved' : 'Save'
        const isActive = isPresent !== undefined

        const formatDistanceNow = formatDistanceToNow(new Date(publishedAt))
        const postedAt = formatDistanceNow.split(' ')[1]
        return (
          <>
            <ReactPlayer url={videoUrl} width="100%" controls />
            <TitleViewsContainer>
              <HeadText isDark={isDark}>{title}</HeadText>
              <ViewsLikesContainer>
                <ElContainer>
                  <PEl isDark={isDark}>{viewCount} views</PEl>
                  <PEl isDark={isDark}>{postedAt} years ago</PEl>
                </ElContainer>
                <ElContainer>
                  <CustomButton
                    type="button"
                    isActive={likeActive}
                    onClick={this.onClickLike}
                  >
                    <BiLike size={20} />
                    Like
                  </CustomButton>
                  <CustomButton
                    type="button"
                    isActive={disLikeActive}
                    onClick={this.onClickDisLike}
                  >
                    <BiDislike size={20} /> Dislike
                  </CustomButton>
                  <CustomButton
                    type="button"
                    isActive={isActive}
                    onClick={() => updateSave(videoItemData)}
                  >
                    <MdPlaylistAdd size={20} />
                    {saveButtonText}
                  </CustomButton>
                </ElContainer>
              </ViewsLikesContainer>
              <HrLine />
              <ChannelsDetailsContainer>
                <ChannelLogo src={channel.profileImageUrl} alt={channel.name} />
                <ProfileDetailsContainer>
                  <HeadText isDark={isDark}>{channel.name}</HeadText>
                  <PEl>{channel.subscriberCount} subscribers</PEl>
                  <PEl>{description}</PEl>
                </ProfileDetailsContainer>
              </ChannelsDetailsContainer>
            </TitleViewsContainer>
          </>
        )
      }}
    </ReactContext.Consumer>
  )

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
          return (
            <BodyContainer isDark={isDark} data-testid="videoItemDetails">
              <Header />
              <MainContainer>
                <SideBar />
                <BodyContainer isDark={isDark}>
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
export default VideoItemDetails
