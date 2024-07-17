import React from 'react'
import ReactDOM from 'react-dom/client'
import ClientList from './components/ClientList.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import clientReducer from './reducers/clientReducer.jsx'

const store = createStore(clientReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ClientList />
    </Provider>
  </React.StrictMode>,
)
