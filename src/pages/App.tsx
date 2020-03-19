import * as React from 'react'

type Props = {}

type State = {
  name: string
}

export default class App extends React.Component<Props, State> {
  state: State = {
    name: 'Ik Wil App',
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ name: e.target.value })
  }

  render = (): React.ReactNode => {
    return <div className="App">App - learn react</div>
  }
}
