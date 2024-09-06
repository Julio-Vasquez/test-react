import { Button } from 'antd'
import { memo, useContext } from 'react'

import { context } from './context'
import { Row, Statics } from './style'
import { ContextActionType } from './types'

export const Counter = memo(() => {
  console.log('renderisacion')
  const { count, dispatch } = useContext(context)

  const increment = () =>
    dispatch({ type: ContextActionType.INCREMENT, payload: 1 })

  const decrement = () =>
    dispatch({ type: ContextActionType.DECREMENT, payload: 1 })

  return (
    <Row>
      <Button onClick={increment}>+</Button>
      <Statics title="Contador" value={count} />
      <Button onClick={decrement}>-</Button>
    </Row>
  )
})
