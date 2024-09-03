import ReactContext from '../../context/ReactContext'

import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeadText,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ReactContext.Consumer>
    {value => {
      const {isDark} = value
      console.log(isDark)

      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <MainContainer>
            <SideBar />
            <NotFoundContainer isDark={isDark}>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundHeadText isDark={isDark}>
                Page Not Found
              </NotFoundHeadText>
              <NotFoundDescription isDark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </MainContainer>
        </>
      )
    }}
  </ReactContext.Consumer>
)

export default NotFound
