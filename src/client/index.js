import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

/* Styles */
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css'

/* Store */
import store from './shared/redux/store'

/* App */
import AppComponent from './app/Root'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <AppComponent />
        </AppContainer>
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
  )
}

render()