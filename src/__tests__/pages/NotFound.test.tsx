import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'src/redux/store'
import { NotFound } from 'src/pages'

it('renders Not Found page', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </Provider>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
