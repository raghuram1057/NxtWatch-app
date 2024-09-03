import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'

import ReactContext from '../../context/ReactContext'
import {MenuItemsContainer, MenuItem, MenuText} from './styledComponents'
import './index.css'

const menuConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuList = () => {
  console.log('')
  return (
    <ReactContext.Consumer>
      {value => {
        const {isDark, changeActiveMenu, activeMenu} = value

        const inActiveColor = isDark ? '#f4f4f4' : '#424242'
        const activeColor = '#ff0000'

        return (
          <MenuItemsContainer>
            <Link to="/" className="linkEl">
              <MenuItem
                onClick={() => changeActiveMenu(menuConstants.home)}
                isActive={activeMenu === menuConstants.home}
                isDark={isDark}
              >
                <AiFillHome
                  size={16}
                  color={
                    activeMenu === menuConstants.home
                      ? activeColor
                      : inActiveColor
                  }
                />
                <MenuText
                  isDark={isDark}
                  isActive={activeMenu === menuConstants.home}
                >
                  Home
                </MenuText>
              </MenuItem>
            </Link>

            <Link to="/trending" className="linkEl">
              <MenuItem
                onClick={() => changeActiveMenu(menuConstants.trending)}
                isActive={activeMenu === menuConstants.trending}
                isDark={isDark}
              >
                <HiFire
                  size={16}
                  color={
                    activeMenu === menuConstants.trending
                      ? activeColor
                      : inActiveColor
                  }
                />
                <MenuText
                  isDark={isDark}
                  isActive={activeMenu === menuConstants.trending}
                >
                  Trending
                </MenuText>
              </MenuItem>
            </Link>

            <Link to="/gaming" className="linkEl">
              <MenuItem
                onClick={() => changeActiveMenu(menuConstants.gaming)}
                isActive={activeMenu === menuConstants.gaming}
                isDark={isDark}
              >
                <SiYoutubegaming
                  size={16}
                  color={
                    activeMenu === menuConstants.gaming
                      ? activeColor
                      : inActiveColor
                  }
                />
                <MenuText
                  isDark={isDark}
                  isActive={activeMenu === menuConstants.gaming}
                >
                  Gaming
                </MenuText>
              </MenuItem>
            </Link>

            <Link to="/saved-videos" className="linkEl">
              <MenuItem
                onClick={() => changeActiveMenu(menuConstants.savedVideos)}
                isActive={activeMenu === menuConstants.savedVideos}
                isDark={isDark}
              >
                <MdPlaylistAdd
                  size={16}
                  color={
                    activeMenu === menuConstants.savedVideos
                      ? activeColor
                      : inActiveColor
                  }
                />
                <MenuText
                  isDark={isDark}
                  isActive={activeMenu === menuConstants.savedVideos}
                >
                  Saved videos
                </MenuText>
              </MenuItem>
            </Link>
          </MenuItemsContainer>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default MenuList
