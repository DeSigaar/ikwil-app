import * as React from 'react'
import { Header, SearchBar, Main } from '../components'

const App: React.FC = () => {
  return (
    <>
      <Header title={'Activiteiten'} />
      <SearchBar />
      <Main />
    </>
  )
}

export default App
