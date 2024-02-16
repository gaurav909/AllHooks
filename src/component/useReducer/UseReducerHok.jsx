import React from 'react'
import { useReducer } from 'react'

const UseReducerHok = () => {
    const  counterReducer = (state,action)=>{
        switch (action.type){
            case 'INCREMENT':
                return {count:state.count +1};
            case 'DECREMENT':
                return {count:state.count-1};
                default:
                    return state;
        }

    }
    const [state, dispatch] = useReducer(counterReducer,{count:10})
  return (
    <div>UseReducerHok

        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Up</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Down</button>
    </div>
  )
}

export default UseReducerHok