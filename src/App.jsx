import React from 'react'
import UseStateHook from './component/hook/UseStateHook'
import UseReducerHok from './component/useReducer/UseReducerHok'

const App = () => {
  return (
    <div>
      <h1>UseState Hook</h1>
      <UseStateHook/>
      <br />
      <h1>UseReducer</h1>
      <UseReducerHok/>
    </div>
  )
}

export default App