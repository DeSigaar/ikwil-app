import * as React from 'react'
import { Header, SearchBar, BackgroundLogo, Main } from 'src/components'

const App: React.FC = () => {
  return (
    <>
      <Header title="Activiteiten" />

      <SearchBar />
      <BackgroundLogo />
      <Main />
    </>
  )
}

export default App
