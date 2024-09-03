import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ReactContext from './context/ReactContext'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeMenu: 'HOME', savedItems: [], isSave: false}

  onChangeTheme = val => {
    this.setState({isDark: val})
  }

  onChangeMenu = menu => {
    this.setState({activeMenu: menu})
  }

  addSavedItems = savedItemData => {
    this.setState(prevState => ({
      savedItems: [...prevState.savedItems, savedItemData],
    }))
  }

  onDeleteFromSavedItems = data => {
    const {savedItems} = this.state
    const updatedData = savedItems.filter(each => each.id !== data.id)
    this.setState({savedItems: updatedData})
  }

  addVideoItems = data => {
    const {isSave} = this.state
    if (isSave) {
      this.onDeleteFromSavedItems(data)
    } else {
      this.addSavedItems(data)
    }
  }

  onUpdateSave = data => {
    this.setState(prev => ({isSave: !prev.isSave}), this.addVideoItems(data))
  }

  render() {
    const {isDark, activeMenu, savedItems, isSave} = this.state
    console.log(savedItems)
    return (
      <ReactContext.Provider
        value={{
          isDark,
          activeMenu,
          savedItems,
          isSave,
          changeTheme: this.onChangeTheme,
          changeActiveMenu: this.onChangeMenu,
          addSavedItems: this.addSavedItems,
          deleteSavedItems: this.onDeleteFromSavedItems,
          updateSave: this.onUpdateSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
