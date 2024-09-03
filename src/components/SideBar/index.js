import {Component} from 'react'

import ReactContext from '../../context/ReactContext'
import {
  SideBarContainer,
  ContactUsHeading,
  ContactUsSection,
  PagesLogoContainer,
  PagesLogo,
  ContactUsDescription,
} from './styledComponents'
import MenuList from '../MenuList'

class SideBar extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SideBarContainer isDark={isDark}>
              <MenuList />
              <ContactUsSection>
                <ContactUsHeading isDark={isDark}>CONTACT US</ContactUsHeading>
                <PagesLogoContainer>
                  <PagesLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook"
                  />
                  <PagesLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter"
                  />
                  <PagesLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked-in"
                  />
                </PagesLogoContainer>
                <ContactUsDescription isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsDescription>
              </ContactUsSection>
            </SideBarContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default SideBar
