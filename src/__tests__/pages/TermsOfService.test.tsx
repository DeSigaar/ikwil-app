import React from 'react'
import renderer from 'react-test-renderer'
import { TermsOfService } from 'src/pages'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'src/redux/store'

test('Should render App', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <TermsOfService />
      </MemoryRouter>
    </Provider>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
