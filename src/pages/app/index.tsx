import * as React from 'react'
import { Header, BackgroundLogo, SearchBar, Main } from 'src/components'

const App: React.FC = () => {
  return (
    <>
      <Header title="Activiteiten" />
      <BackgroundLogo />

      <SearchBar />

      <Main />
    </>
  )
}

export default App
