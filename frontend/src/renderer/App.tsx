import React, { useEffect } from "react"
import { Provider } from "react-redux"

import styles from "./styles.module.scss"
import MainAppBar from "../general_components/AppBar/MainAppBar"
import MainDrawer from "../general_components/Drawer/MainDrawer"
import store from "_/redux/store"
import PageContent from "_/general_components/PageContent/PageContent"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "rgb(110, 110, 110)",
    },
  },
})

function App(): JSX.Element {
  useEffect(() => {
    window.ipcAPI?.rendererReady()
  }, [])

  const [isDrawerOpen, setDrawerOpen] = React.useState(false)
  const toggleDrawer = () => {
    //!реализовать логику закрытия Drawer по табу
    setDrawerOpen(!isDrawerOpen)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <MainAppBar toggleDrawer={toggleDrawer} />
          <MainDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <PageContent />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
