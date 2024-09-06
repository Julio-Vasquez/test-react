import { Button } from 'antd'
import { useState } from 'react'

import { Row, Statics } from './style'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount(prev => prev + 1)

  const decrement = () => setCount(prev => prev - 1)

  return (
    <Row>
      <Button onClick={increment}>+</Button>
      <Statics title="Contador" value={count} />
      <Button onClick={decrement}>-</Button>
    </Row>
  )
}
