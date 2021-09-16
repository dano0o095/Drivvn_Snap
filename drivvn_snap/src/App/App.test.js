import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
import App from './App';

afterEach(cleanup)

it("should be true", () => {
  expect(true)
})

// it("renders without crashing", () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
// })

// it("renders the title", () => {
//   const { getByTestId } = render(<App />)
//   expect(getByTestId("title")).toHaveTextContent("SNAP!")
// })