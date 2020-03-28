import React from 'react'
import renderer from 'react-test-renderer'
import { App } from 'src/pages'
// import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'src/redux/store'

// test('app renders somehow', () => {
//   const component = renderer.create(<App></App>)
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// import React from 'react'
// import { TermsOfService } from 'src/pages'
// import { MemoryRouter } from 'react-router'

test('Should render App', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  // const { queryByLabelTest } = render(
  //   ,
  // )

  // expect(queryByLabelTest(/terms/i)).toBeTruthy()
})

// // test('renders TermsOfService', () => {
// //   expect()
// //   // const { getByText } = render(<TermsOfService />)
// //   // const title = getByText(/Terms of Service/i)
// //   // expect(title).toBeInTheDocument()
// // })
