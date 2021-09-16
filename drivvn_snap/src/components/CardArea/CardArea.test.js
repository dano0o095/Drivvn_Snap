import React from 'react'
import * as reactRedux from 'react-redux'
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import CardArea from './CardArea';

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardArea />, div)
})

it("matches snapshot of finished game", () => {
  React.useState = jest.fn()
    .mockReturnValueOnce(['', {}])
    .mockReturnValueOnce(['0 in 0', {}])
    .mockReturnValueOnce(['0 in 0', {}])

  const tree = renderer.create(
    <CardArea
      newCard={{ image: "https://deckofcardsapi.com/static/img/8C.png" }}
      prevCard={{ image: "https://deckofcardsapi.com/static/img/KH.png" }}
      remaningCardsCount={0}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})