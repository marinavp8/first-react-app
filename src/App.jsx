import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
// import { ThemeContext } from './contexts/theme.context'

function App() {

  // const { themeSelected } = useContext(ThemeContext)

  return (
    <>
      {/* // <div className={themeSelected.theme === 'light' ? 'App-light' : 'App-dark'}> */}
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
