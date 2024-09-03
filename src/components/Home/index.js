import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import SideBar from '../SideBar'
import HomeBody from '../HomeBody'

import {
  MainContainer,
  BodyContainer,
  PremiumBannerContainer,
  PremiumContentContainer,
  Logo,
  PremiumBannerDescription,
  CustomButton,
  CancelButton,
} from './styledComponents'

class Home extends Component {
  state = {bannerShow: true}

  onClickCloseButton = () => {
    this.setState({bannerShow: false})
  }

  renderBanner = () => (
    <ReactContext.Consumer>
      {() => {
        const {bannerShow} = this.state
        return (
          <PremiumBannerContainer bannerShow={bannerShow}>
            <PremiumContentContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <PremiumBannerDescription>
                Buy Nxt Watch Premium prepaid plans with UPI
              </PremiumBannerDescription>
              <CustomButton type="button">GET IT NOW</CustomButton>
            </PremiumContentContainer>
            <CancelButton
              type="button"
              onClick={this.onClickCloseButton}
              data-tesid="close"
            >
              <IoMdClose size={25} />
            </CancelButton>
          </PremiumBannerContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)
          return (
            <BodyContainer isDark={isDark} data-testid="home">
              <Header />
              <MainContainer>
                <SideBar />
                <BodyContainer isDark={isDark}>
                  {this.renderBanner()}
                  <HomeBody />
                </BodyContainer>
              </MainContainer>
            </BodyContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Home
