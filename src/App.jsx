import React from 'react'
import UseStateHook from './component/hook/UseStateHook'
import UseReducerHok from './component/useReducer/UseReducerHok'
import UseEffectHook from './component/useeffect/UseEffectHook'
const App = () => {
  return (
    <div>
      <h1>UseState Hook</h1>
      <UseStateHook/>
      <br />
      <h1>UseReducer</h1>
      <UseReducerHok/>
      <br />
      <h1>UseEffect</h1>
      <UseEffectHook/>
    </div>
  )
}

export default App