import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.isDark ? '#212121' : '#f1f5f9')};
  align-items: center;
  padding: 16px;
  width: 100%;
`
export const Logo = styled.img`
  min-height: 20px;
  width: 100%;
  max-width: 150px;

  @media screen and (max-width: 576px) {
    min-height: 25px;
    max-width: 120px;
  }
`
export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const ThemeButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const DesktopProfile = styled.img`
  height: 35px;
  width: 35px;
  margin-left: 10px;
`
export const DesktopLogoutButton = styled.button`
  color: ${props => (props.isDark ? '#ffffff' : '#4f46e5')};
  border: 1px solid ${props => (props.isDark ? '#ffffff' : '#4f46e5')};
  font-family: 'Roboto';
  font-size: medium;
  padding: 8px 13px;
  border-radius: 4px;
  background-color: transparent;
  margin-left: 10px;
  font-weight: 500;
  cursor: pointer;
`

export const DeskTopItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const MobileItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const HamburgerMenu = styled(ThemeButton)`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const MobileLogoutIcon = styled(ThemeButton)`
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  padding-bottom: 20px;
  box-shadow: 0px 5px 13px 0px #7e858e;
`
export const PopupText = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: medium;
`
export const PopupButtonContainer = styled.div`
  display: flex;
`

export const CustomButton = styled.button`
  padding: 8px 13px;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: medium;
  margin-left: 10px;
  cursor: pointer;
`
export const CancelButton = styled(CustomButton)`
  color: ${props => (props.isDark ? '#1e293b' : '#7e858e')};
  border: solid 1px ${props => (props.isDark ? '#1e293b' : '#7e858e')};
  background-color: transparent;
`
export const ConfirmButton = styled(CustomButton)`
  color: #f9f9f9;
  border: none;
  background-color: #3b82f6;
`
export const PopupMenuContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
