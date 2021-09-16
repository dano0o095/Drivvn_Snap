import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Results from './Results';

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement('div')
  ReactDOM.render(<Results />, div)
})

it("renders the results", () => {
  const { getByTestId } = render(<Results totalValuesMatched={2} totalSuitesMatched={7} />)
  expect(getByTestId("valuesMatched")).toHaveTextContent("VALUE MATCHES 2")
  expect(getByTestId("suitsMatched")).toHaveTextContent("SUIT MATCHES 7")
})

it("matches snapshot", () => {
  const tree = renderer.create(<Results totalValuesMatched={2} totalSuitesMatched={7} />).toJSON()
  expect(tree).toMatchSnapshot()
})