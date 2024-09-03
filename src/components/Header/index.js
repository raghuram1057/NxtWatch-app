import {Link, withRouter} from 'react-router-dom'
import {FiSun, FiMenu, FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import ReactContext from '../../context/ReactContext'
import MenuList from '../MenuList'

import './index.css'

import {
  NavContainer,
  Logo,
  NavItemsContainer,
  ThemeButton,
  DesktopProfile,
  DesktopLogoutButton,
  DeskTopItemsContainer,
  MobileItemsContainer,
  HamburgerMenu,
  MobileLogoutIcon,
  PopupContainer,
  PopupButtonContainer,
  PopupText,
  CancelButton,
  ConfirmButton,
  PopupMenuContainer,
} from './styledComponents'

const Header = props => {
  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ReactContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value

        const logoUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeIcon = isDark ? (
          <FiSun className="icon icon-color" />
        ) : (
          <FaMoon className="icon" />
        )

        const iconColor = isDark ? 'icon-color' : ''

        const onClickThemeButton = () => {
          changeTheme(!isDark)
        }

        return (
          <NavContainer isDark={isDark}>
            <Link to="/">
              <Logo src={logoUrl} alt="website logo" />
            </Link>
            <NavItemsContainer>
              <ThemeButton
                type="button"
                onClick={onClickThemeButton}
                data-testid="theme"
              >
                {themeIcon}
              </ThemeButton>
              <DeskTopItemsContainer>
                <DesktopProfile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <DesktopLogoutButton isDark={isDark} type="button">
                      Logout
                    </DesktopLogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer isDark={isDark}>
                      <PopupText isDark={isDark}>
                        Are you sure you want to logout?
                      </PopupText>
                      <PopupButtonContainer>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          onClick={onClickLogoutButton}
                        >
                          Confirm
                        </ConfirmButton>
                      </PopupButtonContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </DeskTopItemsContainer>
              <MobileItemsContainer>
                <Popup
                  modal
                  trigger={
                    <HamburgerMenu>
                      <FiMenu className={`icon ${iconColor}`} />
                    </HamburgerMenu>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupMenuContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        <IoMdClose size={25} />
                      </CancelButton>
                      <MenuList />
                    </PopupMenuContainer>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <MobileLogoutIcon type="button">
                      <FiLogOut className={`icon ${iconColor}`} />
                    </MobileLogoutIcon>
                  }
                >
                  {close => (
                    <PopupContainer isDark={isDark}>
                      <PopupText isDark={isDark}>
                        Are you sure you want to logout?
                      </PopupText>
                      <PopupButtonContainer>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          onClick={onClickLogoutButton}
                        >
                          Confirm
                        </ConfirmButton>
                      </PopupButtonContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </MobileItemsContainer>
            </NavItemsContainer>
          </NavContainer>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default withRouter(Header)
