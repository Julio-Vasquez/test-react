import { ContextActionType } from './types'
import type { Action, State } from './types'

export const initialState: State = {
  count: 0,
  dispatch: (action: Action) => action,
}

export const reducer = (state: State, action: Action) => {
  const { payload, type } = action

  switch (type) {
    case ContextActionType.INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      }

    case ContextActionType.DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      }

    default:
      throw new Error('Reducer says: Action type not found')
  }
}
