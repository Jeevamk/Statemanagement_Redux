import reactLogo from './assets/react.svg'
import './App.css'
import Count from './components/Count'
import { Provider } from 'react-redux'
import appStore from './utils/store'
import ButtonCount from './components/ButtonCount'

function App() {

  return (
   
    <>
    <Provider store={appStore}>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Count />
      <ButtonCount />
      </Provider>
    </>

  )
}

export default App
