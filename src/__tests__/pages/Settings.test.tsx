import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import { Settings } from 'src/pages'

it('renders Settings page', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Settings />
      </MemoryRouter>
    </Provider>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
