import Router from './routes/Router'
import { ThemeProvider } from "@mui/material";
import './App.css'
import  Theme from './assets/Theme'
function App() {

  return (
    <div className="App">
          <ThemeProvider theme={Theme}>
            <Router />
          </ThemeProvider>
    </div>
  )
}

export default App
