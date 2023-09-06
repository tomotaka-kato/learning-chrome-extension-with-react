import { render } from '@testing-library/react'
import App from '../../src/App'

it('sample', () => {
  const { getByText } = render(App())
  expect(getByText('Vite + React')).toBeTruthy()
})
