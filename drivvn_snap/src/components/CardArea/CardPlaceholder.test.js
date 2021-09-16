import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
import CardPlaceholder from './CardPlaceholder';

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardPlaceholder />, div)
})

it("renders svg", () => {
  const { queryByTestId } = render(<CardPlaceholder />)
  expect(queryByTestId("placeholder-svg")).toBeInTheDocument()
})