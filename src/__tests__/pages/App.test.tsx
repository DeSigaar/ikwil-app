import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import { App } from 'src/pages'

it('renders App page', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
