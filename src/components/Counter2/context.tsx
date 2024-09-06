import { createContext, useMemo, useReducer } from 'react'

import { initialState, reducer } from './reducer'
import type { ContextProviderProps, State } from './types'

const context = createContext<State>(initialState)

const ContextProvider = ({ children, value }: ContextProviderProps) => {
  console.log('render')
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...value })

  const data = useMemo(() => ({ ...state, dispatch }), [state, dispatch])
  return <context.Provider value={data}>{children}</context.Provider>
}

export { context, ContextProvider }
