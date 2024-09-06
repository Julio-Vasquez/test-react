import { Dispatch, ReactElement } from 'react'

export enum ContextActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export type Action = {
  type: ContextActionType
  payload: number
}

export type State = {
  count: number // value or state
  dispatch: Dispatch<Action>
}

export type ContextProviderProps = {
  children: ReactElement
  value?: State
}
