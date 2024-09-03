import React from 'react'

const ReactContext = React.createContext({
  isDark: false,
  activeMenu: 'HOME',
  savedItems: [],
  isSave: false,
  changeActiveMenu: () => {},
  changeTheme: () => {},
  addSavedItems: () => {},
  deleteSavedItems: () => {},
  updateSave: () => {},
})

export default ReactContext
