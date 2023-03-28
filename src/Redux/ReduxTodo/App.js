import React from 'react'
import Todo from './Todo'
import Store from './App/Store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div>
        <Provider store={Store}>
        <Todo />
        </Provider>
       
    </div>
  )
}

export default App