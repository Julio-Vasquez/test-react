import { Counter } from '@components/Counter2'
import { ContextProvider } from '@components/Counter2/context'
import { Input, App as ProviderAntd } from 'antd'

const App = () => {
  const handleChange = () => {
    console.log('change')
  }
  return (
    <ProviderAntd style={{ width: '100dvw' }}>
      <ContextProvider>
        <div>
          <Input onChange={handleChange} />
          <Counter />
        </div>
      </ContextProvider>
    </ProviderAntd>
  )
}

export default App
